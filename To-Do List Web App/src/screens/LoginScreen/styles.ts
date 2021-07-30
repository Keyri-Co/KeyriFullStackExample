import styled from "styled-components";

import { FONTS } from "../../assets";
import { COLORS } from "../../utils/colors";
import { DIMENSIONS } from "../../utils/constants";

export const LoginWrapper = styled.div`
  padding: 120px 110px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    padding: 80px 16px;
  }
`;

export const LoginHeading = styled.h2`
  font-family: ${FONTS.FUTURA_DEMI_C};
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
  text-align: center;
  color: ${COLORS.BLACK};
  max-width: 490px;
  margin: 0 0 120px;
`;
