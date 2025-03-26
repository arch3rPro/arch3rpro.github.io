"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentCssMatchers = exports.globalCssMatchers = exports.fullCssMatchers = exports.componentLessMatchers = exports.globalLessMatchers = exports.fullLessMatchers = exports.lessMatchers = exports.iconComponentMatchers = exports.iconCjsListMatchers = exports.libraryName = void 0;
exports.libraryName = '@arco-design/web-vue';
exports.iconCjsListMatchers = [`${exports.libraryName}/lib/icon/index\\.js[^/]*$`];
exports.iconComponentMatchers = [
    `${exports.libraryName}/(es|lib)/icon/([^/]+)/index\\.js[^/]*$`,
    2,
];
exports.lessMatchers = [`${exports.libraryName}/.+\\.less[^/]*$`];
exports.fullLessMatchers = [`${exports.libraryName}/dist/arco\\.less[^/]*$`];
exports.globalLessMatchers = [`${exports.libraryName}/(es|lib)/style/index\\.less[^/]*$`];
exports.componentLessMatchers = [
    `${exports.libraryName}/(es|lib)/([^/]+)/style/index\\.less[^/]*$`,
    2,
];
exports.fullCssMatchers = [`${exports.libraryName}/dist/arco\\.(min\\.)?css[^/]*$`];
exports.globalCssMatchers = [`${exports.libraryName}/(es|lib)/style/index\\.css[^/]*$`];
exports.componentCssMatchers = [
    `${exports.libraryName}/(es|lib)/([^/]+)/style/index\\.css[^/]*$`,
    2,
];
