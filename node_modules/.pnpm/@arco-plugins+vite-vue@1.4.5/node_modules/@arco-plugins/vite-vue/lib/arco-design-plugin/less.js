"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyCssConfig = void 0;
const fs_1 = require("fs");
const config_1 = require("./config");
const utils_1 = require("./utils");
// eslint-disable-next-line import/prefer-default-export
function modifyCssConfig(pkgName, config, theme, modifyVars, varsInjectScope) {
    let modifyLess = '';
    if (theme) {
        modifyLess = (0, utils_1.readFileStrSync)(`${theme}/tokens.less`);
        if (modifyLess === false) {
            throw new Error(`Theme ${theme} not existed`);
        }
    }
    Object.entries(modifyVars).forEach(([k, v]) => {
        modifyLess += `@${k}:${v};`;
    });
    config.css = config.css || {};
    config.css.preprocessorOptions = config.css.preprocessorOptions || {};
    const { preprocessorOptions } = config.css;
    preprocessorOptions.less = preprocessorOptions.less || {};
    preprocessorOptions.less.javascriptEnabled = true;
    if (modifyLess) {
        (0, fs_1.writeFileSync)(`${__dirname}/../../.tokens.less`, modifyLess, {
            flag: 'w',
        });
        const modifyLessFile = `${pkgName}/.tokens.less`;
        const includeRegExp = (0, utils_1.parseInclude2RegExp)(varsInjectScope);
        preprocessorOptions.less.plugins = preprocessorOptions.less.plugins || [];
        preprocessorOptions.less.plugins.push({
            install(_lessObj, pluginManager) {
                pluginManager.addPreProcessor({
                    process(src, extra) {
                        const { fileInfo: { filename }, } = extra;
                        // arco less vars inject
                        const varsInjectMatch = (0, utils_1.pathMatch)(filename, config_1.lessMatchers) ||
                            (includeRegExp && (0, utils_1.pathMatch)(filename, [includeRegExp]));
                        if (!varsInjectMatch)
                            return src;
                        if (theme) {
                            // arco global style
                            const globalMatch = (0, utils_1.pathMatch)(filename, config_1.globalLessMatchers);
                            if (globalMatch) {
                                src += `; @import '${theme}/theme.less';`;
                            }
                            // arco component style
                            const componentName = (0, utils_1.pathMatch)(filename, config_1.componentLessMatchers);
                            if (componentName) {
                                if ((0, utils_1.getThemeComponentList)(theme).includes(componentName)) {
                                    src += `; @import '${theme}/components/${componentName}/index.less';`;
                                }
                            }
                        }
                        src += `; @import '${modifyLessFile}';`;
                        return src;
                    },
                }, 1000);
            },
        });
    }
}
exports.modifyCssConfig = modifyCssConfig;
