import { FC } from "react";

import IInputProps from "./props";
import { FormInput } from "./styles";

export const Input: FC<IInputProps> = (props) => {
  return <FormInput fieldError={props.error} {...props} />;
};
