export interface CollapseItemProps {
  name: string | number;
  title?: string;
  disabled?: boolean;
}

export interface CollapseProps {
  accordion: boolean;
  modelValue: Array<string>;
}
