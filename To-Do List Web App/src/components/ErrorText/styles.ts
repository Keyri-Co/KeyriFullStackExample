import styled from "styled-components";

import { IMAGES } from "../../assets";
import { COLORS } from "../../utils/colors";
import { DIMENSIONS } from "../../utils/constants";

export const Error = styled.span`
  position: relative;
  display: block;
  color: ${COLORS.CINNABAR};
  padding-left: 34px;
  margin-bottom: 20px;
  margin-top: 4px;

  &:after {
    position: absolute;
    content: "";
    top: -2px;
    left: 0;
    width: 24px;
    height: 24px;
    background: url(${IMAGES.WARNING}) center no-repeat;
  }

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    margin-top: 0;
  }
`;
