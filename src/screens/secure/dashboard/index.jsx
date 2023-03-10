import Body from "../../../global/body";
import Footer from "../../../global/footer";
import Header from "../../../global/header";
import React from "react";
import { mobileViewMax } from "../../../responsive/mobile";
import styled from "styled-components";

const Inner = styled.div`
  margin: 0px 22px;

  ${mobileViewMax({
    // padding: "0px 20px",
  })}
`;

const Dashboard = () => {
  const [activeSidebar, setActiveSidebar] = React.useState(1);

  return (
    <div className="bg-color">
      <Inner className="max-width">
        <Header setActiveSidebar={setActiveSidebar} />
        <Body
          activeSidebar={activeSidebar}
          setActiveSidebar={setActiveSidebar}
        />
        <Footer />
      </Inner>
    </div>
  );
};

export default Dashboard;
