import { ISignUpForm } from "./types";

export const isValidEmail = (email: string): boolean => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

export const signUpFormValidator = ({ email, username }: ISignUpForm) => {
  const errors: { username?: string; email?: string } = {};
  if (!username) {
    errors.username = "Username is required";
  }
  if (!isValidEmail(email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
