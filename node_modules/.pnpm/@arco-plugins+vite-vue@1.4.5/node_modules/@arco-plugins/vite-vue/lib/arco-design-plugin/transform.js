"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformJsFiles = exports.transformCssFile = void 0;
const parser = __importStar(require("@babel/parser"));
const types = __importStar(require("@babel/types"));
const traverse_1 = __importDefault(require("@babel/traverse"));
const generator_1 = __importDefault(require("@babel/generator"));
const config_1 = require("./config");
const utils_1 = require("./utils");
function transformCssFile({ id, theme, }) {
    if (theme) {
        const matches = (0, utils_1.pathMatch)(id, config_1.fullCssMatchers);
        if (matches) {
            const themeCode = (0, utils_1.readFileStrSync)(`${theme}/css/arco.css`);
            if (themeCode !== false) {
                return {
                    code: themeCode,
                    map: null,
                };
            }
        }
    }
    return undefined;
}
exports.transformCssFile = transformCssFile;
function transformJsFiles({ code, id, theme, style, styleOptimization, sourceMaps, componentPrefix, iconPrefix, }) {
    if (style === false || !/\.(js|jsx|ts|tsx|vue)$/.test(id)) {
        return undefined;
    }
    const ast = parser.parse(code, {
        sourceType: 'module',
        plugins: ['jsx'],
    });
    (0, traverse_1.default)(ast, {
        enter(path) {
            const { node } = path;
            // <a-input-number></a-input-number>  <a-timeline-item></a-timeline-item> <component is="a-timeline-item"></component>
            if (types.isCallExpression(node)) {
                const { callee, arguments: args } = node;
                const funcName = callee.name;
                const importedName = args?.[0]?.value;
                // a-input-number => InputNumber
                // AInputNumber => InputNumber
                let componentName;
                if (typeof importedName === 'string') {
                    // to PascalCase
                    componentName = (0, utils_1.kebabCaseToPascalCase)(importedName);
                    const componentRegExp = new RegExp(`^${(0, utils_1.kebabCaseToPascalCase)(componentPrefix)}[A-Z]`);
                    const iconComponentRegExp = new RegExp(`^${(0, utils_1.kebabCaseToPascalCase)(iconPrefix)}[A-Z]`);
                    // restore component name
                    if (componentRegExp.test(componentName)) {
                        componentName = componentName.replace(componentRegExp, (match) => match.slice(-1));
                    }
                    // restore icon component name
                    else if (iconComponentRegExp.test(componentName)) {
                        componentName = `Icon${componentName.replace(iconComponentRegExp, (match) => match.slice(-1))}`;
                    }
                    else {
                        return;
                    }
                }
                if (!componentName ||
                    !['_resolveComponent', '_resolveDynamicComponent'].includes(funcName)) {
                    return;
                }
                const componentConfig = (0, utils_1.getComponentConfig)(config_1.libraryName, componentName);
                if (componentConfig) {
                    // the following import logic will be triggered here, so there is no need to import style
                    (0, utils_1.importComponent)({
                        path,
                        componentDir: componentConfig.dir,
                        componentName,
                    });
                }
                return;
            }
            // import { Button, InputNumber, TimeLine } from '@arco-design/web-vue'
            if (types.isImportDeclaration(node)) {
                const { value } = node.source;
                const dirs = [];
                if (value === config_1.libraryName) {
                    node.specifiers.forEach((spec) => {
                        if (types.isImportSpecifier(spec)) {
                            const importedName = spec.imported.name;
                            const componentConfig = (0, utils_1.getComponentConfig)(config_1.libraryName, importedName);
                            if (componentConfig?.styleDir) {
                                dirs.push(componentConfig.styleDir);
                            }
                        }
                    });
                    (0, utils_1.importStyle)({
                        componentDirs: dirs,
                        styleOptimization,
                        path,
                        style,
                        theme,
                        libraryName: config_1.libraryName,
                    });
                }
            }
        },
    });
    return (0, generator_1.default)(ast, { sourceMaps, sourceFileName: id });
}
exports.transformJsFiles = transformJsFiles;
