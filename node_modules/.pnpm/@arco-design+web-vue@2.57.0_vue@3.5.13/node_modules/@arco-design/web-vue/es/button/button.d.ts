import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"dashed" | "text" | "outline" | "primary" | "secondary">;
    };
    shape: {
        type: PropType<"round" | "circle" | "square">;
    };
    status: {
        type: PropType<"normal" | "success" | "warning" | "danger">;
    };
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
    };
    long: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
    };
    htmlType: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: StringConstructor;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    mergedDisabled: import("vue").ComputedRef<boolean>;
    handleClick: (ev: MouseEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (ev: MouseEvent) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"dashed" | "text" | "outline" | "primary" | "secondary">;
    };
    shape: {
        type: PropType<"round" | "circle" | "square">;
    };
    status: {
        type: PropType<"normal" | "success" | "warning" | "danger">;
    };
    size: {
        type: PropType<"mini" | "medium" | "large" | "small">;
    };
    long: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
    };
    htmlType: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: StringConstructor;
}>> & Readonly<{
    onClick?: ((ev: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    autofocus: boolean;
    loading: boolean;
    long: boolean;
    htmlType: string;
}, {}, {
    IconLoading: any;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
