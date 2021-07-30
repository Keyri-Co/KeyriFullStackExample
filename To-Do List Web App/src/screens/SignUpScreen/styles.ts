import styled from "styled-components";

import { COLORS } from "../../utils/colors";
import { DIMENSIONS } from "../../utils/constants";
import { SignUpSteps } from "../../utils/types";

interface IStepProps {
  show: boolean;
  visible: boolean;
  stage: SignUpSteps;
}

interface IRegistrationFormProps {
  isMarginBottom: boolean;
}

export const SignUp = styled.div`
  padding: 200px 110px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    padding: 44px 16px 99px;
  }
`;

export const SignUpHeading = styled.h2`
  width: 100%;
  margin: 0 0 83px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  color: ${COLORS.BLACK};

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    margin-bottom: 48px;
  }
`;

export const Steps = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 80px;

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    margin-bottom: 32px;
  }

  @media (max-width: 590px) {
    justify-content: flex-start;
  }
`;

export const Step = styled.div<IStepProps>`
  position: relative;
  width: 220px;
  height: 35px;
  white-space: nowrap;
  margin-right: 50px;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: ${({ show }) => (show ? COLORS.PERSIAN_INDIGO : "transparent")};

  &:last-of-type {
    margin-right: 0;
  }

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background: ${({ show }) =>
      show
        ? `linear-gradient(91.54deg,
        ${COLORS.PURPLE_HEART} 9.71%, 
        ${COLORS.MEDIUM_RED_VIOLET} 61.91%,
        ${COLORS.RADICAL_RED} 103.62%)`
        : `${COLORS.PURPLE_HEART}28`};
    border-radius: 10px;
    left: 0;
    bottom: -2px;
  }

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    display: ${({ visible }) => !visible && "none"};
    &:after {
      background: linear-gradient(
        91.54deg,
        ${COLORS.PURPLE_HEART} 9.71%,
        ${COLORS.MEDIUM_RED_VIOLET} 61.91%,
        ${COLORS.RADICAL_RED} 103.62%
      );
    }
  }
  @media (max-width: ${DIMENSIONS.SIGN_UP_SCREEN}px) {
    width: 100%;
    &:after {
      width: ${({ stage }) => {
        switch (stage) {
          case SignUpSteps.GetTheApp:
            return 33;
          case SignUpSteps.Registration:
            return 66;
          case SignUpSteps.Finished:
            return 100;
          default:
            break;
        }
      }}%;
    }
  }
`;

export const MarketsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
  width: 400px;

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    justify-content: center;
    padding-top: 24px;
  }
`;

export const RegistrationForm = styled.form<IRegistrationFormProps>`
  display: flex;
  flex-direction: column;
  width: 505px;
  margin-bottom: ${({ isMarginBottom }) => (isMarginBottom ? 75 : 120)}px;

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const SignUpFooter = styled.div`
  text-align: center;
  margin-top: 34px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${COLORS.PERSIAN_INDIGO};
  display: none;

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    display: block;
  }
`;

export const FieldWrapper = styled.div``;

export const HiddenIfreme = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;
