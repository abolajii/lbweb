import { DesktopView, LaptopView, TabView } from "../../utils/styles";

import Desktop from "./desktop.view";
import Laptop from "./laptop.view";
import React from "react";
import Tab from "./tab.view";

const Login = () => {
  return (
    <div>
      <DesktopView>
        <Desktop />
      </DesktopView>
      <LaptopView>
        <Laptop />
      </LaptopView>
      <TabView>
        <Tab />
      </TabView>
    </div>
  );
};

export default Login;
