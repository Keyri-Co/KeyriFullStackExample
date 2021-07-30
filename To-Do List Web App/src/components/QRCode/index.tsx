import { FC, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "..";
import { userAPI } from "../../utils/api";
import { Routes } from "../../utils/constants";
import { ButtonStylePreset } from "../../utils/types";
import IRegistrationQRCodeProps from "./props";
import { ButtonWrapper, HiddenIfreme, Iframe, QRCodeWrapper } from "./styles";

export const QRCode: FC<IRegistrationQRCodeProps> = ({
  src,
  isMobileView,
  register,
  setIsLoggedIn,
}) => {
  const history = useHistory();

  const handlePost = async (message: MessageEvent) => {
    if (message.data) {
      try {
        await userAPI.authenticatedUser(JSON.parse(message.data));
        setIsLoggedIn(true);
        history.push(Routes.Todo);
      } catch (e) {
        console.log("----", e.message);
      }
    }
  };

  const postMessageHandler = useCallback((message) => handlePost(message), []);

  const handleIframeLoad = () => {
    window.addEventListener("message", postMessageHandler, false);
  };

  useEffect(() => {
    return () =>
      window.removeEventListener("message", postMessageHandler, false);
  }, []);

  return isMobileView ? (
    <ButtonWrapper>
      <Button
        title={register ? "Register" : "Log in"}
        preset={ButtonStylePreset.BigButtonWithBackground}
      />
      <HiddenIfreme src={src} onLoad={handleIframeLoad} />
    </ButtonWrapper>
  ) : (
    <QRCodeWrapper>
      <Iframe src={src} onLoad={handleIframeLoad} />
    </QRCodeWrapper>
  );
};
