"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyIconConfig = exports.loadIcon = void 0;
const config_1 = require("./config");
const utils_1 = require("./utils");
const filter = new RegExp(`(${config_1.iconCjsListMatchers[0]})|(${config_1.iconComponentMatchers[0]})`);
function loadIcon(id, iconBox, iconBoxLib) {
    if (!iconBox || !iconBoxLib) {
        return;
    }
    // cjs -> es
    if ((0, utils_1.pathMatch)(id, config_1.iconCjsListMatchers)) {
        return `export * from  '../es/index.js'`;
    }
    let componentName = (0, utils_1.pathMatch)(id, config_1.iconComponentMatchers);
    if (componentName) {
        // icon-edit => IconEdit
        componentName = (0, utils_1.kebabCaseToPascalCase)(componentName);
        if (iconBoxLib[componentName]) {
            return `export { default } from  '${iconBox}/esm/${componentName}/index.js'`;
        }
    }
}
exports.loadIcon = loadIcon;
function modifyIconConfig(config, iconBox, iconBoxLib) {
    if (!iconBox || !iconBoxLib) {
        return;
    }
    // Pre-Bundling
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.esbuildOptions = config.optimizeDeps.esbuildOptions || {};
    config.optimizeDeps.esbuildOptions.plugins = config.optimizeDeps.esbuildOptions.plugins || [];
    config.optimizeDeps.esbuildOptions.plugins.push({
        name: 'arcoIconReplace',
        setup(build) {
            build.onLoad({
                namespace: 'file',
                filter,
            }, ({ path: id }) => {
                const contents = loadIcon(id, iconBox, iconBoxLib);
                if (contents) {
                    return {
                        contents,
                        loader: 'js',
                    };
                }
                return null;
            });
        },
    });
}
exports.modifyIconConfig = modifyIconConfig;
