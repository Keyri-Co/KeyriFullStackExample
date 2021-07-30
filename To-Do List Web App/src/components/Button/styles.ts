import { Link } from "react-router-dom";
import styled from "styled-components";

import { FONTS } from "../../assets";
import { COLORS } from "../../utils/colors";
import { DIMENSIONS } from "../../utils/constants";
import { ButtonStylePreset } from "../../utils/types";

interface IButtonContainerProps {
  preset?: ButtonStylePreset;
  styles?: string;
  width?: number;
}

interface ILinkProps {
  preset?: ButtonStylePreset;
}

const Base = `
  cursor: pointer;
  margin: 3px;
  border-radius: 10px;
  padding: 0px;
  background: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  font-family: ${FONTS.FUTURA_DEMI_C};
  border: none;`;

const Gradient = `
  box-shadow: -1px 0 0 1px  rgba(82, 27, 188, 0.75),
              -1px -1px 0 1px rgba(82, 27, 188, 0.25),
              -1px -1px 0 1px rgba(82, 27, 188, 0.25),
              0 -1px 0 1px rgba(191, 41, 158, 0.75),
              0 1px 0 1px rgba(191, 41, 158, 0.75),
              1px -1px 0 1px rgba(255, 32, 99, 0.75),
              1px -1px 0 1px rgba(255, 32, 99, 0.75),
              1px 0 0 1px rgba(255, 32, 99, 0.75);
  background: -webkit-linear-gradient(left, ${COLORS.PURPLE_HEART},${COLORS.RADICAL_RED});
`;

const DimensionStylesForSmallButton = `
@media (max-width: ${DIMENSIONS.BUTTON_WITH_SMALL_DIMENSION}px) {
  padding: 11px 2px;
}`;

const DimensionStylesForBigButton = (width?: number) => `
@media (max-width: ${DIMENSIONS.BUTTON_WITH_SMALL_DIMENSION}px) {
  width: ${width || 136}px;
  font-size: 16px;
  line-height: 21px;
}`;

const DimensionStylesForButtonInFooter = `
text-align: left;
`;

export const ButtonContainer = styled.div<IButtonContainerProps>(
  ({ preset = ButtonStylePreset.BaseButton, width }) => {
    switch (preset) {
      case ButtonStylePreset.BaseButton:
        return `
          ${Base};
          color: ${COLORS.PERSIAN_INDIGO};
          font-weight: 500;
          padding: 10px 24px;
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          background-color: ${COLORS.WHITE};
          ${DimensionStylesForSmallButton};
          ${DimensionStylesForButtonInFooter};
        `;
      case ButtonStylePreset.BoldButton:
        return `
          ${Base};
          color: ${COLORS.PERSIAN_INDIGO};
          font-weight: 700;
          padding: 10px 24px;
          font-family: ${FONTS.FUTURA_DEMI_C};
          font-size: 18px;
          line-height: 20px;
          text-align: center;
          background-color: ${COLORS.WHITE};
        `;
      case ButtonStylePreset.BaseButtonWithBorder:
        return `
          ${Base};
          ${Gradient};
          font-size: 18px;
          padding: 10px 24px;
          font-weight: 500;
          font-size: 18px;
          height:20px;
          line-height: 20px;
          ${DimensionStylesForSmallButton};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          `;
      case ButtonStylePreset.BaseButtonWithBackground:
        return `
          ${Base};
          font-weight: 500;
          height: auto;
          margin: 2px 20px 4px 2px;
          padding: 12px 24px;
          font-size: 18px;
          line-height: 20px;
          text-align: center;
          background: -webkit-linear-gradient(left, 
            ${COLORS.PURPLE_HEART},
            ${COLORS.RADICAL_RED});
          color: ${COLORS.WHITE};
          ${DimensionStylesForBigButton(width)};
        `;
      case ButtonStylePreset.BigButtonWithBorder:
        return `
            ${Base};
            ${Gradient};
            padding: 13px 0px;
            width: 220px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            ${DimensionStylesForBigButton(width)};
          `;
      case ButtonStylePreset.BigButtonWithBackground:
        return `
            ${Base};
            padding: 13px 0px;
            width: 220px;
            background: -webkit-linear-gradient(left, ${COLORS.PURPLE_HEART},${
          COLORS.RADICAL_RED
        });
            color: ${COLORS.WHITE};
            ${DimensionStylesForBigButton(width)};
          `;
      case ButtonStylePreset.BigBoldButton:
        return `
            ${Base};
            color: ${COLORS.PERSIAN_INDIGO};
            background-color: ${COLORS.WHITE};
            width: 220px;
            padding: 13px 0;
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            line-height: 27px;
            ${DimensionStylesForBigButton(width)};
            `;
      default:
        break;
    }
  },
  ({ styles }) => styles
);

export const ButtonText = styled.span<ILinkProps>`
  font-family: ${FONTS.FUTURA_DEMI_C};
  text-align: center;
  ${({ preset }) => {
    if (
      preset === ButtonStylePreset.BaseButtonWithBackground ||
      preset === ButtonStylePreset.BigButtonWithBackground
    ) {
      return `color: ${COLORS.WHITE};`;
    }
  }};
`;

export const StyledLink = styled(Link)`
  :link {
    text-decoration: none;
    color: ${COLORS.PURPLE_HEART};
  }
  :visited {
    text-decoration: none;
    color: ${COLORS.PURPLE_HEART};
  }
`;
