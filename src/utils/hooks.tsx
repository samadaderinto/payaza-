import CryptoJS from "crypto-js";
import { useContext, useEffect } from "react";
import { AppContextProvider } from "./data";
import { useNavigate } from "react-router-dom";
import { LoginContextType } from "./types";
import React from "react";

export const checkEmail = (email: string) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

export const encryptAndStore = (key: string, data: string) => {
  const ciphertext = CryptoJS.AES.encrypt(
    data,
    `${process.env.SECRET_KEY}`
  ).toString();
  localStorage.setItem(key, ciphertext);
};

export const decryptFromStorage = (key: string) => {
  const ciphertext = localStorage.getItem(key);
  if (!ciphertext) return null;

  const bytes = CryptoJS.AES.decrypt(ciphertext, `${process.env.SECRET_KEY}`);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const handleSubmit = (e: any) => {
  console.log(e);
};


export const ProtectedRoute = (props: any) => {
    const { isLoggedIn, setIsLoggedIn } = useContext(
      AppContextProvider
    ) as LoginContextType;
    const navigate = useNavigate();
  
    useEffect(() => {
   
      if (isLoggedIn == false) {
        setIsLoggedIn(true);
        navigate("/login");
      } else setIsLoggedIn(true);
    }, [isLoggedIn]);
  
    return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
  };