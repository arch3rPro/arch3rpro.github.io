import { PropType } from 'vue';
import { ResponsiveValue } from './interface';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    gutter: {
        type: PropType<number | ResponsiveValue | [number | ResponsiveValue, number | ResponsiveValue]>;
        default: number;
    };
    justify: {
        type: PropType<"space-around" | "space-between" | "center" | "end" | "start">;
        default: string;
    };
    align: {
        type: PropType<"stretch" | "center" | "end" | "start">;
        default: string;
    };
    div: {
        type: BooleanConstructor;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    classNames: import("vue").ComputedRef<{
        [x: string]: boolean | "space-around" | "space-between" | "stretch" | "center" | "end" | "start";
    }>;
    styles: import("vue").ComputedRef<{
        marginTop?: string | undefined;
        marginBottom?: string | undefined;
        marginLeft?: string | undefined;
        marginRight?: string | undefined;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    gutter: {
        type: PropType<number | ResponsiveValue | [number | ResponsiveValue, number | ResponsiveValue]>;
        default: number;
    };
    justify: {
        type: PropType<"space-around" | "space-between" | "center" | "end" | "start">;
        default: string;
    };
    align: {
        type: PropType<"stretch" | "center" | "end" | "start">;
        default: string;
    };
    div: {
        type: BooleanConstructor;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    wrap: boolean;
    justify: "space-around" | "space-between" | "center" | "end" | "start";
    div: boolean;
    align: "stretch" | "center" | "end" | "start";
    gutter: number | ResponsiveValue | [number | ResponsiveValue, number | ResponsiveValue];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
