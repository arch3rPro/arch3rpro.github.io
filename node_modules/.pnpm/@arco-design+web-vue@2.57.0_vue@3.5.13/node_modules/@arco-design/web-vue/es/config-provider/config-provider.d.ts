import type { PropType } from 'vue';
import { ArcoLang } from '../locale/interface';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    prefixCls: {
        type: StringConstructor;
        default: string;
    };
    locale: {
        type: PropType<ArcoLang>;
    };
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
    };
    global: {
        type: BooleanConstructor;
        default: boolean;
    };
    updateAtScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    exchangeTime: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: {
        type: StringConstructor;
        default: string;
    };
    locale: {
        type: PropType<ArcoLang>;
    };
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
    };
    global: {
        type: BooleanConstructor;
        default: boolean;
    };
    updateAtScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    exchangeTime: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    updateAtScroll: boolean;
    scrollToClose: boolean;
    prefixCls: string;
    exchangeTime: boolean;
    global: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
