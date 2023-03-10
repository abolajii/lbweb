import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterDetails,
  RegisterScreen,
} from "../../screens";
import { Link, Route, Routes } from "react-router-dom";

const Error = () => {
  return (
    <p>
      Error page, Go back <Link to="/dashboard">Home</Link>
    </p>
  );
};

const NoAuthStack = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/forgot" element={<ForgotPasswordScreen />} />
      <Route path="/details" element={<RegisterDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default NoAuthStack;
