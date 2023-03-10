import { mobileViewMax, mobileViewMin } from "../responsive/mobile";
import { tabViewMax, tabViewMin } from "../responsive/tab";

import { desktopViewMin } from "../responsive/desktop";
import { laptopViewMax } from "../responsive/laptop";
import styled from "styled-components";

const MobileView = styled.div`
  ${mobileViewMin({
    display: "none",
  })}
`;

const LaptopView = styled.div`
  ${mobileViewMax({
    display: "none",
  })}

  ${tabViewMax({
    display: "none",
  })}
  
  ${desktopViewMin({
    display: "none",
  })}
`;

const TabView = styled.div`
  ${tabViewMin({
    display: "none",
  })}
`;

const DesktopView = styled.div`
  ${mobileViewMax({
    display: "none",
  })}

  ${tabViewMax({
    display: "none",
  })}

  ${laptopViewMax({
    display: "none",
  })}
`;

export { DesktopView, MobileView, TabView, LaptopView };
