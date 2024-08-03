import { InjectionKey, Ref } from "vue";

export type NameType = string | number;

export interface CollapseItemProps {
  name: string | number;
  title?: string;
  disabled?: boolean;
}

export interface CollapseProps {
  accordion?: boolean;
  modelValue: Array<NameType>;
}

export interface CollapseContext {
  activeName: Ref<Array<NameType>>;
  handleItemClick: (name: NameType) => void;
}

export interface CollapseEmits {
  (e: "update:modelValue", values: NameType[]): void;
  (e: "change", values: NameType[]): void;
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol("collapseContextKey");
