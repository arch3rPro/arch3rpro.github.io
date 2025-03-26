import { PropType } from 'vue';
import { RenderFunc } from '../_components/render-function';
interface ActionType {
    key: string;
    name: string;
    content: RenderFunc;
    onClick: () => void;
    disabled?: boolean;
}
declare const _default;
export default _default;
