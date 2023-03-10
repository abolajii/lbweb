import {
  Container,
  Input,
  LoginAndRegister,
  ModalContainer,
  Otp,
} from "../../components";
import { Link, useNavigate } from "react-router-dom";

import LogoHeader from "../../components/logoheader";
import PhoneInput from "react-phone-input-2";
import React from "react";
import styled from "styled-components";
import { useAuth } from "../../context/user.context";

const Inner = styled.div`
  .react-tel-input input {
    width: 100%;
  }
`;

const Tab = () => {
  const [loginId, setLoginId] = React.useState(0);
  const [email, setEmail] = React.useState("@lovebirdz.com");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [otp, setOtp] = React.useState({ 0: "", 1: "", 2: "", 3: "" });
  const completed = Object.values(otp).every((item) => item.length > 0);

  switch (loginId) {
    case 1:
      return (
        <ModalContainer loading={loading}>
          <Container
            header
            btntitle="Log in"
            title="Log in with email"
            onClick={() => setLoginId(0)}
            fill={email && password}
            onPressOne={() => {
              if (!email || !password) return;
              setLoading(true);
              setTimeout(() => {
                setUser("Abolaji");
                navigate("/dashboard");
                setLoading(false);
              }, 2500);
            }}
          >
            <div>
              <p className="small-text">Enter login details to continue</p>
              <Input
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Enter password"
                icon
                right
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-end">
                <Link to="/forgot">
                  <p className="forgot">Forgot password?</p>
                </Link>
              </div>
            </div>
          </Container>
        </ModalContainer>
      );

    case 2:
      return (
        <ModalContainer loading={loading}>
          <Container
            header
            onClick={() => setLoginId(0)}
            title="Log in with phone number"
            btntitle="Log in"
            fill={phoneNumber}
            onPressOne={() => {
              if (!phoneNumber) return;
              setLoginId(3);
            }}
          >
            <Inner>
              <p className="small-text">Enter login details to continue</p>
              <div className="mt-2 w-100">
                <PhoneInput
                  disableDropdown
                  value={phoneNumber}
                  country={"ng"}
                  onChange={(e) => setPhoneNumber(e)}
                />
              </div>
            </Inner>
          </Container>
        </ModalContainer>
      );
    case 3:
      return (
        <ModalContainer loading={loading}>
          <Container
            noBtn
            header
            title="OTP Verification"
            btntitle="Log in"
            fill={completed}
            onPressOne={() => {
              if (!completed) return;
              setLoading(true);
              setTimeout(() => {
                setUser("Abolaji");
                navigate("/dashboard");
                setLoading(false);
              }, 2500);
            }}
          >
            <Inner>
              <p className="small-text">
                Type the verification code we’ve sent you on
              </p>
              <p className="number">+{phoneNumber}</p>
              <div className="otp-input center">
                <Otp otp={otp} setOtp={setOtp} />
              </div>
            </Inner>
          </Container>
        </ModalContainer>
      );

    default:
      return (
        <div className="bg-color">
          <div className="py-2">
            <LogoHeader />
          </div>
          <LoginAndRegister
            login
            onPressOne={() => {
              setLoginId(1);
            }}
            onPressTwo={() => {
              setLoginId(2);
            }}
          />
          <div className="py-3 text-center small-title">
            <p>© 2023 Lovebirdz. All Rights Reserved</p>
          </div>
        </div>
      );
  }
};

export default Tab;
