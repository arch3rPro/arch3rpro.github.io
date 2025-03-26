import { NodePath } from '@babel/traverse';
declare type Style = boolean | 'css';
export declare function readFileStrSync(path: string): false | string;
export declare function getThemeComponentList(theme: string): string[];
export declare const parse2PosixPath: (path: string) => string;
export declare function pathMatch(path: string, conf: [string | RegExp, number?]): false | string;
export declare function parseInclude2RegExp(include?: (string | RegExp)[], context?: string): false | RegExp;
export declare function isPascalCase(name: string): boolean;
export declare function kebabCaseToPascalCase(name: string): string;
export declare function getComponentConfig(libraryName: string, componentName: string): {
    dir: string;
    styleDir?: string;
};
export declare function importComponent({ path, componentDir, componentName, }: {
    path: NodePath;
    componentDir: string;
    componentName: string;
}): void;
export declare function importStyle({ componentDirs, styleOptimization, path, style, theme, libraryName, }: {
    componentDirs: string[];
    styleOptimization: boolean;
    path: NodePath;
    style: Style;
    theme: string;
    libraryName: string;
}): void;
export {};
