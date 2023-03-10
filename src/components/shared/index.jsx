import { Container, Icon } from "./styles";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import Button from "../button";
import { Link } from "react-router-dom";
import React from "react";
import { auth } from "../../utils/firebase";
import { images } from "../../constants";
import { useAuth } from "../../context/user.context";

const LoginAndRegister = ({ login, onPressOne, onPressTwo }) => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const { setUser, user } = useAuth();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      // setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const facebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log(result.user);
      // setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <div className="textContainer">
        <p className="text">
          {login ? "Log in to continue" : "Create account"}
        </p>
      </div>
      <div className="margin">
        <Button
          fill
          onPressOne={onPressOne}
          title={login ? "Log in with email" : "Sign up with email"}
        />
      </div>
      <div className="margin">
        <Button
          onPressOne={onPressTwo}
          title={
            login ? "Log in with phone number" : "Sign up with phone number"
          }
        />
      </div>

      <div className="thirdPartyLogin">
        <div className="thirdPartyLoginLine" />
        <p className="thirdPartyLoginText">
          {login ? "or log in with" : "or sign up with"}
        </p>
        <div className="thirdPartyLoginLine" />
      </div>

      <div className="thirdPartyLoginBtnContainer">
        <Button flex title="Facebook" onPressTwo={facebookLogin}>
          <Icon src={images.facebook} className="applogo" />
        </Button>
        <Button flex title="Google" onPressTwo={googleLogin}>
          <Icon src={images.google} className="applogo" />
        </Button>
        <Button flex title="Apple">
          <Icon src={images.apple} className="applogo" />
        </Button>
      </div>

      <div className="flex m-15">
        <p className="login">
          {login ? "Don't have an account ?" : "Already have an account ?"}
        </p>
        <Link to={login ? "/register" : "/login"}>
          <p className="signUp">{login ? "Sign up" : "Sign in"}</p>
        </Link>
      </div>
    </Container>
  );
};

export default LoginAndRegister;
