import { mobileViewMax, mobileViewMin } from "../../responsive/mobile";

import React from "react";
import { images } from "../../constants";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;

  .footer-text {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #3b3a3c;

    ${mobileViewMin({
      fontSize: "10px",
    })}
  }

  .link {
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;

    ${mobileViewMin({
      fontSize: "13px",
    })}
  }

  .download {
    ${mobileViewMin({
      display: "none",
    })}
  }
`;

const Image = styled.div`
  cursor: pointer;
  height: 26px;
  width: 90px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const MobileView = styled.div`
  ${mobileViewMin({
    display: "none",
  })}
`;

const DesktopView = styled.div`
  .left {
    width: 310px;
  }

  ${mobileViewMax({
    display: "none",
  })}
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <div className="download mb-2">
          <p className="text-center footer-text">Download our app on</p>
          <div className="my-1 flex gap-1 center">
            <Image>
              <img src={images.appstore} alt="app" />
            </Image>
            <Image>
              <img src={images.googleplay} alt="app" />
            </Image>
          </div>
        </div>

        <DesktopView className="flex ai-center jc-space-btw">
          <div className="flex left ai-center jc-space-btw">
            <p className="link">© 2023 Lovebirdz</p>
            <div className="flex gap-1">
              <p className="link">Help</p>
              <p className="link">Privacy</p>
              <p className="link">Terms</p>
            </div>
          </div>
          <div>
            <p className="link">English (US)</p>
          </div>
          {/* <p>Desktop</p> */}
        </DesktopView>

        <MobileView className="">
          <div className="flex ai-center jc-space-btw px-1 my-1">
            <div className="flex gap-1">
              <p className="footer-text">Help</p>
              <p className="footer-text">Privacy</p>
              <p className="footer-text">Terms</p>
            </div>
            <div>
              <p className="footer-text">English (US)</p>
            </div>
          </div>
          <p className="text-center link py-1">© 2023 Lovebirdz</p>
        </MobileView>
      </div>
    </Container>
  );
};

export default Footer;
