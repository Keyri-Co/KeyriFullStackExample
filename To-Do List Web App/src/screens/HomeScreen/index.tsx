import { FC } from "react";
import { Button } from "../../components";
import { Routes } from "../../utils/constants";

import { ButtonStylePreset } from "../../utils/types";
import IHomeScreenProps from "./props";
import { HomeWrapper } from "./styles";

export const HomeScreen: FC<IHomeScreenProps> = ({ onChoosingScreen }) => (
  <HomeWrapper>
    <Button
      onClick={onChoosingScreen}
      preset={ButtonStylePreset.BigButtonWithBorder}
      to={Routes.SignUp}
      title="Sign up"
    />
    <Button
      onClick={onChoosingScreen}
      preset={ButtonStylePreset.BigButtonWithBorder}
      to={Routes.Login}
      title="Login"
    />
  </HomeWrapper>
);
