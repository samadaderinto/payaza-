import { createContext } from "react";
import { LoginContextType, loginStateTypes, registerStateTypes } from "./types";

export const registerState: registerStateTypes = {
  email: "",
  phone1: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  gender: "male",
  errors: {
    email: "",
    password: "",
    confirmPassword: "",
    phone1: "",
    firstName: "",
    lastName: "",
  },
};

export const LoginState: loginStateTypes = {
  email: "",
  password: "",
  errors: {
    email: "",
    password: "",
  },
};

export const inputTypes = [
  {
    type: "text",
    placeholder: "First name",
  },
  {
    type: "text",
    placeholder: "Last name",
  },
  {
    type: "email",
    placeholder: "E-mail",
  },
  {
    type: "tel",
    placeholder: "Phone number",
  },
  {
    type: "password",
    placeholder: "Password",
    maxLength: 40,
    minLength: 10,
  },
  {
    type: "password",
    placeholder: "Confirm Password",
  },
];


export const AppContextProvider = createContext<LoginContextType | null>(null);