export default interface IRegistrationQRCodeProps {
  src: string;
  isMobileView: boolean;
  register?: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}
