import { FC } from "react";

import IErrorTextProps from "./props";
import { Error } from "./styles";

export const ErrorText: FC<IErrorTextProps> = ({ children }) => {
  return <Error>{children}</Error>;
};
