export interface registerStateTypes {
  email: string;
  phone1: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  gender: string;
  errors: {
    email: string;
    password: string;
    confirmPassword: string;
    phone1: string;
    firstName: string;
    lastName: string;
  };
}

export interface loginStateTypes {
  email: string;
  password: string;

  errors: {
    email: string;
    password: string;
  };
}

export interface LoginContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
