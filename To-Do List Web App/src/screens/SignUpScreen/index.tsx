import { FC, useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Store from "react-store-badges";

import { Button, ErrorText, Input, QRCode } from "../../components";
import {
  DimensionTypes,
  KEYRI_LINKS,
  Routes,
  WIDGET_REGISTER_URL,
} from "../../utils/constants";
import { getQRCodeParams } from "../../utils/helpers";
import { useIsSmallerDimension, useRedirect } from "../../utils/hooks";
import { ButtonStylePreset, ISignUpForm, SignUpSteps } from "../../utils/types";
import { signUpFormValidator } from "../../utils/validators";
import ISingUpScreenprops from "./props";
import {
  RegistrationForm,
  SignUp,
  SignUpHeading,
  Step,
  Steps,
  SignUpFooter,
  MarketsWrapper,
  FieldWrapper,
} from "./styles";

export const SignUpScreen: FC<ISingUpScreenprops> = ({
  setIsLoggedIn,
  shoulRedirect,
}) => {
  const [stage, setStage] = useState<SignUpSteps>(SignUpSteps.GetTheApp);

  const history = useHistory();

  const isSmallScreen = useIsSmallerDimension(DimensionTypes.TabletSignIn);

  const {
    values: { username, email },
    handleChange,
    errors,
    handleSubmit,
    handleBlur,
    touched,
    isValid,
  } = useFormik<ISignUpForm>({
    onSubmit: () => {},
    initialValues: {
      username: "",
      email: "",
    },
    validate: signUpFormValidator,
  });

  useRedirect(shoulRedirect);

  const QRCodeLink = `${WIDGET_REGISTER_URL}?${getQRCodeParams(
    username,
    isSmallScreen
  )}`;

  const onLoginRedirect = () => history.push(Routes.Login);

  const nextStepHandler = () => {
    switch (stage) {
      case SignUpSteps.GetTheApp:
        setStage(SignUpSteps.Registration);
        break;
      case SignUpSteps.Registration:
        handleSubmit();
        if (touched.email && touched.username && isValid) {
          setStage(SignUpSteps.Finished);
        }
        break;
      case SignUpSteps.Finished:
        break;
      default:
        break;
    }
  };

  const SignUpMain = () => {
    switch (stage) {
      case SignUpSteps.GetTheApp:
        return (
          <MarketsWrapper>
            <Store
              width={190}
              platform="ios"
              locale="en-us"
              url={KEYRI_LINKS.IOSApp}
              target="_blank"
            />
            <Store
              width={190}
              platform="android"
              locale="en-us"
              url={KEYRI_LINKS.AndroidApp}
              target="_blank"
            />
          </MarketsWrapper>
        );
      case SignUpSteps.Registration:
        return (
          <RegistrationForm
            onSubmit={handleSubmit}
            isMarginBottom={!!touched.email && !!errors.email}
          >
            <FieldWrapper>
              <Input
                onBlur={handleBlur}
                name="username"
                placeholder="Name"
                value={username}
                onChange={handleChange}
                error={touched.username ? errors.username : ""}
              />

              {touched.username && errors.username && (
                <ErrorText>{errors.username}</ErrorText>
              )}
            </FieldWrapper>
            <FieldWrapper>
              <Input
                onBlur={handleBlur}
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                error={touched.email ? errors.email : ""}
              />

              {touched.email && errors.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
            </FieldWrapper>
          </RegistrationForm>
        );
      case SignUpSteps.Finished:
        return (
          <QRCode
            setIsLoggedIn={setIsLoggedIn}
            src={QRCodeLink}
            isMobileView={isSmallScreen}
          />
        );
      default:
        break;
    }
  };

  return (
    <SignUp>
      <SignUpHeading>Keyri registration</SignUpHeading>
      <Steps>
        <Step
          visible={stage === SignUpSteps.GetTheApp}
          show
          stage={SignUpSteps.GetTheApp}
        >
          1. Get the app
        </Step>
        <Step
          visible={stage === SignUpSteps.Registration}
          show={stage !== SignUpSteps.GetTheApp}
          stage={SignUpSteps.Registration}
        >
          2. Registration
        </Step>
        <Step
          visible={stage === SignUpSteps.Finished}
          show={stage === SignUpSteps.Finished}
          stage={SignUpSteps.Finished}
        >
          {isSmallScreen ? "3. Tap the button below" : "3. Scan the Keyri code"}
        </Step>
      </Steps>
      {SignUpMain()}
      {stage !== SignUpSteps.Finished && (
        <Button
          onClick={nextStepHandler}
          title="Next"
          preset={ButtonStylePreset.BigButtonWithBackground}
        />
      )}
      {stage !== SignUpSteps.Finished && (
        <>
          <SignUpFooter onClick={onLoginRedirect}>Log in</SignUpFooter>
        </>
      )}
    </SignUp>
  );
};
