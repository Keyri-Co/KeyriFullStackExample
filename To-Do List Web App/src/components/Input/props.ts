import { ChangeEvent, FocusEvent } from "react";

export default interface IInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  error?: string | boolean;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}
