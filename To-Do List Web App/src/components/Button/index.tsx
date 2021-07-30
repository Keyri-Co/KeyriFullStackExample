import React, { FC } from "react";

import IButtonProps from "./props";
import { ButtonContainer, ButtonText, StyledLink } from "./styles";

export const Button: FC<IButtonProps> = ({
  title,
  to,
  preset,
  ...restProps
}) => {
  return to ? (
    <StyledLink to={to}>
      <ButtonContainer preset={preset} {...restProps}>
        <ButtonText preset={preset}>{title}</ButtonText>
      </ButtonContainer>
    </StyledLink>
  ) : (
    <ButtonContainer preset={preset} {...restProps}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};
