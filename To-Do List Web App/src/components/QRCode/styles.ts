import styled, { keyframes } from "styled-components";
import Loader from "react-loader-spinner";

interface QRCodeWrapperProps {
  show?: boolean;
}

const smooth = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity 1;
  }
`;

export const QRCodeWrapper = styled.div<QRCodeWrapperProps>`
  animation: ${smooth} ${({ show = true }) => (show ? 2 : 0)}s ease-in forwards;
`;

export const Iframe = styled.iframe`
  border: none;
  width: 160px;
  height: 160px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const HiddenIfreme = styled.iframe`
  position: absolute;
  top: 10px;
  left: 40%;
  width: 82px;
  height: 45px;
  opacity: 0;
`;

export const Loading = styled(Loader)``;
