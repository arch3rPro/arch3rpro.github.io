import type { UserConfig } from 'vite';
declare type Vars = Record<string, any>;
export declare function modifyCssConfig(pkgName: string, config: UserConfig, theme: string, modifyVars: Vars, varsInjectScope: (string | RegExp)[]): void;
export {};
