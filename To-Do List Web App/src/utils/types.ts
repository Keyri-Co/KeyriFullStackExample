export enum ButtonStylePreset {
  BaseButton = "BaseButton",
  BoldButton = "BoldButton",
  BaseButtonWithBorder = "BaseButtonWithBorder",
  BaseButtonWithBackground = "BaseButtonWithBackground",
  BigButtonWithBorder = "BigButtonWithBorder",
  BigButtonWithBackground = "BigButtonWithBackground",
  BigBoldButton = "BigBoldButton",
}

export enum SignUpSteps {
  GetTheApp = "GetTheApp",
  Registration = "Registration",
  Finished = "Finished",
}

export interface IRuleItem {
  text: string;
  id: string;
}

export interface IStatisticsData {
  statisticsNumber: string;
  statisticsInfo: string;
}

export interface ISecuredData {
  id: number;
  title: string;
  text: string;
  image: string;
}

export interface IMarketingBlock {
  title: string;
  image: string;
}

export interface ISize {
  width: number | undefined;
  height: number | undefined;
}

export interface ISignUpForm {
  username: string;
  email: string;
}

export interface ITodo {
  _id: string;
  title: string;
}

export interface ILoginResponse {
  refreshToken: string;
  token: string;
  user: {
    createdAt: string;
    name: string;
    updated: string;
    __v: number;
    _id: string;
  };
}

export interface IAuthData {
  action: string;
  sessionId: string;
  sessionKey: string;
}
