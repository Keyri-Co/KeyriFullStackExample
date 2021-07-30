export const getQRCodeParams = (username: string, isSmallScreen: boolean) => {
  return new URLSearchParams({
    username,
    link: isSmallScreen.toString(),
  }).toString();
};
