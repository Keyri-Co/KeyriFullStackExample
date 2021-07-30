export enum DimensionTypes {
  ButtonWithSmallDimension = "BUTTON_WITH_SMALL_DIMENSION",
  WhitepeperForm = "WHITEPAPER_FORM",
  TabletSignIn = "TABLET_SIGN_IN",
  SignUpScreen = "SIGN_UP_SCREEN",
  AdminServices = "ADMIN_SERVICES",
}

export enum KeyriLinksTypes {
  AndroidApp = "AndroidApp",
  IOSApp = "IOSApp",
}

export const DIMENSIONS: Record<DimensionTypes, number> = {
  BUTTON_WITH_SMALL_DIMENSION: 595,
  WHITEPAPER_FORM: 780,
  TABLET_SIGN_IN: 1025,
  SIGN_UP_SCREEN: 590,
  ADMIN_SERVICES: 1100,
};

export const KEYRI_LINKS: Record<KeyriLinksTypes, string> = {
  AndroidApp: "https://play.google.com/store/apps/details?id=com.keyri",
  IOSApp: "https://apps.apple.com/us/app/keyri/id1514738138",
};

export enum Routes {
  Home = "/",
  SignUp = "/sign-up",
  Login = "/login",
  Todo = "/todo",
}

const SERVICE_ID = "5ef32caaaccd766719387f07";
export const API_URL = "https://api.keyri.co";
export const DEMO_API_URL = "http://18.234.201.114:5000";
export const WIDGET_LOGIN_URL = `${API_URL}/widget/${SERVICE_ID}/login`;
export const WIDGET_REGISTER_URL = `${API_URL}/widget/${SERVICE_ID}/register`;
