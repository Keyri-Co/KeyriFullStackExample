import { FC } from "react";

import { QRCode } from "../../components";
import { DimensionTypes, WIDGET_LOGIN_URL } from "../../utils/constants";
import { useIsSmallerDimension, useRedirect } from "../../utils/hooks";
import { LoginHeading, LoginWrapper } from "./styles";
import ILoginProps from "./props";

export const LoginScreen: FC<ILoginProps> = ({
  setIsLoggedIn,
  shoulRedirect,
}) => {
  const isSmallScreen = useIsSmallerDimension(DimensionTypes.TabletSignIn);

  useRedirect(shoulRedirect);

  const params = new URLSearchParams({ link: isSmallScreen.toString() });
  const loginLink = `${WIDGET_LOGIN_URL}?${params.toString()}`;

  return (
    <LoginWrapper>
      <LoginHeading>
        Scan the code below with the Keyri App to log in
      </LoginHeading>
      <QRCode
        setIsLoggedIn={setIsLoggedIn}
        src={loginLink}
        isMobileView={isSmallScreen}
      />
    </LoginWrapper>
  );
};
