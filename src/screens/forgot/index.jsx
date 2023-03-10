import { Container, Input, ModalContainer, Otp } from "../../components";

import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = React.useState(0);
  const [password, setPassword] = React.useState("");
  const [passwordTwo, setPasswordTwo] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const [otp, setOtp] = React.useState({ 0: "", 1: "", 2: "", 3: "" });
  const completed = Object.values(otp).every((item) => item.length > 0);

  switch (activeId) {
    case 1:
      return (
        <Container
          noBtn
          header
          progress
          fill={completed}
          onPressOne={() => {
            if (completed) {
              setActiveId(2);
            }
          }}
          title="OTP Verification"
        >
          <p className="small-text">
            Type the verification code we’ve sent you on
          </p>
          <p className="number">+{email}</p>
          <div className="otp-input center">
            <Otp otp={otp} setOtp={setOtp} />
          </div>
        </Container>
      );

    case 2:
      return (
        <Container
          noBtn
          header
          progress
          fill={password && passwordTwo && password === passwordTwo}
          onPressOne={() => {
            if (password !== passwordTwo) return;
            navigate("/dashboard");
          }}
          title="Set new password"
        >
          <p className="small-text text-center">
            Create a new password. Keep it safe.
          </p>
          <div className="my-2">
            <Input
              right
              icon
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              right
              icon
              placeholder="Re-enter password"
              value={passwordTwo}
              onChange={(e) => setPasswordTwo(e.target.value)}
            />
          </div>
        </Container>
      );

    default:
      return (
        <ModalContainer loading={loading}>
          <Container
            header
            title="Forgot Password"
            fill={email}
            onClick={() => {
              navigate("/login", { params: 1 });
            }}
            onPressOne={() => {
              if (!email) return;
              setActiveId(1);
            }}
          >
            <div>
              <p className="small-text">
                Please enter your valid email address. We will send you a
                4-digit code to verify your account.
              </p>
              <Input
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Container>
        </ModalContainer>
      );
  }
};

export default ForgotPassword;
