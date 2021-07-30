import { ButtonStylePreset } from "../../utils/types";

export default interface IButtonProps {
  preset?: ButtonStylePreset;
  onClick?: () => void;
  title?: string;
  to?: string;
  styles?: string;
  width?: number;
}
