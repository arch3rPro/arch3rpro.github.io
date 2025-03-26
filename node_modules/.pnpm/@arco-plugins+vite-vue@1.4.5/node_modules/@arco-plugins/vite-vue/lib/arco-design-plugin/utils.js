"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importStyle = exports.importComponent = exports.getComponentConfig = exports.kebabCaseToPascalCase = exports.isPascalCase = exports.parseInclude2RegExp = exports.pathMatch = exports.parse2PosixPath = exports.getThemeComponentList = exports.readFileStrSync = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const helper_module_imports_1 = require("@babel/helper-module-imports");
const traverse_1 = __importDefault(require("@babel/traverse"));
const parser_1 = require("@babel/parser");
const types_1 = require("@babel/types");
// read file content
function readFileStrSync(path) {
    try {
        const resolvedPath = require.resolve(path);
        return (0, fs_1.readFileSync)(resolvedPath).toString();
    }
    catch (error) {
        return false;
    }
}
exports.readFileStrSync = readFileStrSync;
// the theme package's component list
const componentsListObj = {};
function getThemeComponentList(theme) {
    if (!theme)
        return [];
    if (!componentsListObj[theme]) {
        try {
            const packageRootDir = (0, path_1.dirname)(require.resolve(`${theme}/package.json`));
            const dirPath = `${packageRootDir}/components`;
            componentsListObj[theme] = (0, fs_1.readdirSync)(dirPath) || [];
        }
        catch (error) {
            componentsListObj[theme] = [];
        }
    }
    return componentsListObj[theme];
}
exports.getThemeComponentList = getThemeComponentList;
const parse2PosixPath = (path) => path_1.sep === path_1.win32.sep ? path.replaceAll(path_1.win32.sep, path_1.posix.sep) : path;
exports.parse2PosixPath = parse2PosixPath;
// filePath match
function pathMatch(path, conf) {
    const [regStr, order = 0] = conf;
    const reg = new RegExp(regStr);
    const posixPath = (0, exports.parse2PosixPath)(path);
    const matches = posixPath.match(reg);
    if (!matches)
        return false;
    return matches[order];
}
exports.pathMatch = pathMatch;
function parseInclude2RegExp(include = [], context) {
    if (include.length === 0)
        return false;
    context = context || process.cwd();
    const regStrList = [];
    const folders = include
        .map((el) => {
        if (el instanceof RegExp) {
            const regStr = el.toString();
            if (regStr.slice(-1) === '/') {
                regStrList.push(`(${regStr.slice(1, -1)})`);
            }
            return false;
        }
        const absolutePath = (0, exports.parse2PosixPath)((0, path_1.resolve)(context, el));
        const idx = absolutePath.indexOf('/node_modules/');
        const len = '/node_modules/'.length;
        const isFolder = (0, path_1.extname)(absolutePath) === '';
        if (idx > -1) {
            const prexPath = absolutePath.slice(0, idx + len);
            const packagePath = absolutePath.slice(idx + len);
            return `(${prexPath}(\\.pnpm/.+/)?${packagePath}${isFolder ? '/' : ''})`;
        }
        return `(${absolutePath}${isFolder ? '/' : ''})`;
    })
        .filter((el) => el !== false);
    if (folders.length) {
        regStrList.push(`(^${folders.join('|')})`);
    }
    if (regStrList.length > 0) {
        return new RegExp(regStrList.join('|'));
    }
    return false;
}
exports.parseInclude2RegExp = parseInclude2RegExp;
function isPascalCase(name) {
    return /^[A-Z][A-Za-z]*$/.test(name);
}
exports.isPascalCase = isPascalCase;
// kebab-case to PascalCase
function kebabCaseToPascalCase(name) {
    return name.replace(/(^|-)([A-Za-z])/g, (_match, _p1, p2) => p2.toUpperCase());
}
exports.kebabCaseToPascalCase = kebabCaseToPascalCase;
// component config
const componentConfigRecord = {};
function getComponentConfig(libraryName, componentName) {
    if (!componentConfigRecord[libraryName]) {
        componentConfigRecord[libraryName] = {};
        try {
            const packageRootDir = (0, path_1.dirname)(require.resolve(`${libraryName}/package.json`));
            // generate component config
            const indexDeclaration = (0, fs_1.readFileSync)((0, path_1.join)(packageRootDir, 'es/index.d.ts'), 'utf8');
            const indexDeclarationAst = (0, parser_1.parse)(indexDeclaration, {
                sourceType: 'module',
                plugins: ['typescript'],
            });
            (0, traverse_1.default)(indexDeclarationAst, {
                ExportNamedDeclaration: ({ node }) => {
                    // when the exported item is a value (non type)
                    if (node.exportKind === 'value' && (0, types_1.isStringLiteral)(node.source)) {
                        const componentDir = (0, path_1.join)(libraryName, 'es', node.source.value).replace(/\\/g, '/');
                        node.specifiers.forEach((item) => {
                            if ((0, types_1.isExportSpecifier)(item) && (0, types_1.isIdentifier)(item.exported)) {
                                const _componentName = item.exported.name;
                                // check whether it is a component
                                const isComponent = isPascalCase(_componentName);
                                if (isComponent) {
                                    componentConfigRecord[libraryName][_componentName] = {
                                        dir: libraryName,
                                        styleDir: `${componentDir}/style`,
                                    };
                                }
                            }
                        });
                    }
                },
            });
            // generate icon component config
            (0, fs_1.readdirSync)((0, path_1.join)(packageRootDir, 'es/icon'), { withFileTypes: true })
                .filter((file) => file.isDirectory())
                .map((file) => file.name)
                .forEach((fileName) => {
                // icon-github => IconGithub
                const _componentName = kebabCaseToPascalCase(fileName);
                componentConfigRecord[libraryName][_componentName] = {
                    dir: `${libraryName}/es/icon`,
                };
            });
            // eslint-disable-next-line no-empty
        }
        catch (error) { }
    }
    return componentConfigRecord[libraryName][componentName];
}
exports.getComponentConfig = getComponentConfig;
function importComponent({ path, componentDir, componentName, }) {
    const imported = (0, helper_module_imports_1.addNamed)(path, componentName, componentDir);
    path.replaceWith(imported);
}
exports.importComponent = importComponent;
function importStyle({ componentDirs, styleOptimization, path, style, theme, libraryName, }) {
    if (componentDirs.length === 0)
        return;
    // lazy load (css files don't support lazy load with theme)
    if (styleOptimization && (style !== 'css' || !theme)) {
        componentDirs.forEach((dir) => {
            const stylePath = `${dir}/${style === 'css' ? 'css.js' : 'index.js'}`;
            (0, helper_module_imports_1.addSideEffect)(path, stylePath);
        });
    }
    // import css bundle file
    else if (style === 'css') {
        (0, helper_module_imports_1.addSideEffect)(path, `${libraryName}/dist/arco.min.css`);
    }
    // import less bundle file
    else {
        (0, helper_module_imports_1.addSideEffect)(path, `${libraryName}/dist/arco.less`);
    }
}
exports.importStyle = importStyle;
