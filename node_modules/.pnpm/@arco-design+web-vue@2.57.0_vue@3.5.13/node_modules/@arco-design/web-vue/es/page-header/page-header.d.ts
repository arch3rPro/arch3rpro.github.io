declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    subtitle: StringConstructor;
    showBack: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    handleBack: (e: Event) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "back"[], "back", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    subtitle: StringConstructor;
    showBack: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onBack?: ((...args: any[]) => any) | undefined;
}>, {
    showBack: boolean;
}, {}, {
    AIconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: import("vue").PropType<"mini" | "medium" | "large" | "small">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        prefixCls: string;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: import("vue").PropType<"mini" | "medium" | "large" | "small">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        disabled: boolean;
        size: "mini" | "medium" | "large" | "small";
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    IconLeft: any;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
