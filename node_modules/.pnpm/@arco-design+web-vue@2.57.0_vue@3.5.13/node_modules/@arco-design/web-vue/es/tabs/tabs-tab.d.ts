import type { PropType } from 'vue';
import type { TabData } from './interface';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tab: {
        type: PropType<TabData>;
        required: true;
    };
    active: BooleanConstructor;
    editable: BooleanConstructor;
}>, {
    prefixCls: string;
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean | undefined;
    })[]>;
    eventHandlers: import("vue").ComputedRef<({
        onClick: (e: Event) => void;
        onMouseover?: undefined;
    } | {
        onMouseover: (e: Event) => void;
        onClick?: undefined;
    }) & {
        onKeydown: (ev: KeyboardEvent) => void;
    }>;
    handleDelete: (e: Event) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "delete")[], "click" | "delete", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tab: {
        type: PropType<TabData>;
        required: true;
    };
    active: BooleanConstructor;
    editable: BooleanConstructor;
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
}>, {
    active: boolean;
    editable: boolean;
}, {}, {
    IconHover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    IconClose: any;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
