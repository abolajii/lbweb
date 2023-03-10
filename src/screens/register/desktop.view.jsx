import {
  Container,
  Input,
  LoginAndRegister,
  ModalContainer,
  Otp,
} from "../../components";

import PhoneInput from "react-phone-input-2";
import React from "react";
import { checkIfEmailExists } from "../../api/noauth";
import { useAuth } from "../../context/user.context";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [activeRegister, setActiveRegister] = React.useState(0);
  const [email, setEmail] = React.useState("@gmail.com");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { setProgress, progress, handleUserInformation } = useAuth();
  const navigate = useNavigate();

  const [otp, setOtp] = React.useState({ 0: "", 1: "", 2: "", 3: "" });
  const completed = Object.values(otp).every((item) => item.length > 0);

  const makeRequest = async () => {
    try {
      await checkIfEmailExists(email);
      setLoading(false);
      setActiveRegister(2);
      setProgress(progress + 50);
      handleUserInformation("email", email);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  switch (activeRegister) {
    case 1:
      return (
        <ModalContainer loading={loading}>
          <Container
            progress
            two
            header
            onPressOne={() => {
              if (!email) return;
              makeRequest();
              setLoading(true);
            }}
            onClick={() => setActiveRegister(0)}
            title="Email address"
            fill={email}
          >
            <p className="small-text">Please enter your valid email address</p>
            <Input
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Container>
        </ModalContainer>
      );

    case 2:
      return (
        <Container
          two
          header
          progress
          fill={password}
          onPressOne={() => {
            if (!password) return;
            handleUserInformation("password", password);
            navigate("/details");
          }}
          onClick={() => {
            setActiveRegister(1);
            setPassword(progress - 50);
          }}
          title="Set Password"
        >
          <p className="small-text">
            Please enter a password to protect your account.
          </p>
          <Input
            placeholder="Enter password"
            right
            icon
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Container>
      );
    case 4:
      return (
        <Container
          two
          header
          progress
          onPressOne={() => {
            if (!phoneNumber) return;
            setActiveRegister(5);
          }}
          onClick={() => setActiveRegister(0)}
          title="Phone number"
          fill={phoneNumber}
        >
          <p className="small-text">
            Please enter your valid phone number. We will send you a 4-digit
            code to verify your account.
          </p>
          <div className="mt-2 w-100">
            <PhoneInput
              disableDropdown
              value={phoneNumber}
              country={"ng"}
              onChange={(e) => setPhoneNumber(e)}
            />
          </div>
        </Container>
      );
    case 5:
      return (
        <Container
          two
          noBtn
          header
          progress
          fill={completed}
          onPressOne={() => {
            if (!completed) return;
            navigate("/details");
          }}
          title="OTP Verification"
        >
          <p className="small-text">
            Type the verification code we’ve sent you on
          </p>
          <p className="number">+{phoneNumber}</p>
          <div className="otp-input center">
            <Otp otp={otp} setOtp={setOtp} />
          </div>
        </Container>
      );

    default:
      return (
        <Container two>
          <LoginAndRegister
            onPressOne={() => {
              setActiveRegister(1);
            }}
            onPressTwo={() => {
              setActiveRegister(4);
            }}
          />
        </Container>
      );
  }
};

export default Register;
