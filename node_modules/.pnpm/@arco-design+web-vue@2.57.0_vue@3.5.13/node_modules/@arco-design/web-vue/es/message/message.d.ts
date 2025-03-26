import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"normal" | "error" | "loading" | "success" | "warning" | "info">;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    resetOnUpdate: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    prefixCls: string;
    handleClose: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"normal" | "error" | "loading" | "success" | "warning" | "info">;
        default: string;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    resetOnUpdate: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    duration: number;
    type: "normal" | "error" | "loading" | "success" | "warning" | "info";
    closable: boolean;
    showIcon: boolean;
    resetOnHover: boolean;
    resetOnUpdate: boolean;
}, {}, {
    AIconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        prefix: {
            type: StringConstructor;
        };
        size: {
            type: PropType<"mini" | "medium" | "large" | "small">;
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
            type: PropType<"mini" | "medium" | "large" | "small">;
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
    IconInfoCircleFill: any;
    IconCheckCircleFill: any;
    IconExclamationCircleFill: any;
    IconCloseCircleFill: any;
    IconClose: any;
    IconLoading: any;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
