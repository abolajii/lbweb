import { Route, Routes } from "react-router-dom";

import { DashboardScreen } from "../../screens";

const AuthStack = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardScreen />} />
    </Routes>
  );
};

export default AuthStack;
