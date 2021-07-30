import styled from "styled-components";
import Loader from "react-loader-spinner";

import { COLORS } from "../../utils/colors";
import { DIMENSIONS } from "../../utils/constants";

export const AdminWrapper = styled.div`
  padding: 120px 0px 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    padding: 50px 16px 80px;
  }
`;

export const AdminHeading = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  line-height: 130%;
  color: ${COLORS.BLACK};
  margin-bottom: 60px;

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

export const PhotoBlockForm = styled.form`
  position: relative;
  width: 505px;
  margin: 0 0 40px;

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    margin-bottom: 40px;
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const AdminTitle = styled.p`
  margin: 80px 0 60px;
  font-weight: bold;
  font-size: 28px;
  line-height: 130%;
  color: ${COLORS.BLACK};

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    margin-bottom: 32px;
  }
`;

export const RegisteredProductBlock = styled.div`
  width: 100%;
  max-width: 1055px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: ${DIMENSIONS.ADMIN_SERVICES}px) {
    justify-content: center;
  }

  @media (max-width: ${DIMENSIONS.WHITEPAPER_FORM}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BlurBackground = styled.div`
  top: 0;
  z-index: 999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
`;

export const ActivityIndicator = styled(Loader)`
  position: fixed;
  top: 50%;
  left: calc(50% - 75px);
`;

export const TodoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoItem = styled.div`
  min-width: 200px;
  cursor: default;
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${COLORS.PURPLE_HEART};
  font-weight: bold;
  border-bottom: 1px solid;
  margin: 5px 0;

  &:before {
    position: absolute;
    content: "";
    top: 16px;
    left: -20px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${COLORS.PURPLE_HEART};
    transition: all 0.3s ease-in;
  }

  &:hover {
    color: ${COLORS.RADICAL_RED};
    transition: all 0.3s ease-in;

    &:before {
      background-color: ${COLORS.RADICAL_RED};
    }
  }
`;
