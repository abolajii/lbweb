import React from "react";
import { images } from "../../constants";
import { mobileViewMax } from "../../responsive/mobile";
import styled from "styled-components";
export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;

  ${mobileViewMax({
    height: "95px",
    width: "121px",
  })}
`;

const Container = styled.div`
  display: grid;
  place-items: center;
  .imgContainer {
    align-items: center;
    justify-content: center;
  }

  ${mobileViewMax({
    // padding: "30px 0",
  })}
`;

const LogoHeader = () => {
  return (
    <Container>
      <div className="imgContainer">
        <Image src={images.darklogo} alt="logo" />
      </div>
    </Container>
  );
};

export default LogoHeader;
