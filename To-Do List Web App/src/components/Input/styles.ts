import styled from "styled-components";

import { COLORS } from "../../utils/colors";

interface IFormInputProps {
  fieldError?: string | boolean;
}

export const FormInput = styled.input<IFormInputProps>`
  width: calc(100% - 30px);
  height: 56px;
  border: 1px solid
    ${({ fieldError }) =>
      fieldError ? COLORS.RADICAL_RED : `${COLORS.PORT_GORE}10`};
  border-radius: 8px;
  margin-bottom: 20px;
  padding-left: 30px;
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  color: ${COLORS.PERSIAN_INDIGO};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background: transparent;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.PERSIAN_INDIGO}71;
    font-size: 17px;
  }
`;
