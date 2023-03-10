import {
  Container,
  Input,
  LoginAndRegister,
  ModalContainer,
  Otp,
} from "../../components";
import { Link, useNavigate } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import React from "react";
import styled from "styled-components";
import { useAuth } from "../../context/user.context";

const Inner = styled.div`
  .react-tel-input input {
    width: 100%;
  }
`;

const Laptop = () => {
  const [loginId, setLoginId] = React.useState(0);
  const [email, setEmail] = React.useState("adeori@gmail.com");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("ade");
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
            two
            header
            btntitle="Log in"
            title="Log in with email"
            onClick={() => setLoginId(0)}
            fill={email && password}
            onPressOne={() => {
              if (!email || !password) return;
              setLoading(true);
              // makeRequest();
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
            two
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
            two
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
        <Container two>
          <LoginAndRegister
            login
            onPressOne={() => {
              setLoginId(1);
            }}
            onPressTwo={() => {
              setLoginId(2);
            }}
          />
        </Container>
      );
  }
};

export default Laptop;
