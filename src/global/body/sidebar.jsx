import React from "react";
import { images } from "../../constants";
import styled from "styled-components";
import { tabViewMax } from "../../responsive/tab";

const links = [
  {
    id: 1,
    name: "Explore",
    img: images.explore,
    fill: images.discoverFilled,
  },
  {
    id: 2,
    name: "Matches",
    img: images.matches,
    fill: images.matchFilled,
  },
  {
    id: 3,
    name: "Chats",
    img: images.chat,
    fill: images.chatFilled,
  },
  {
    id: 4,
    name: "Profile",
    img: images.profile,
    fill: images.profileFilled,
  },
];

const Container = styled.div`
  width: 26%;
  height: 700px;
  position: relative;
  .link-container {
    width: 100%;
    height: 65px;
    background: #f3f3f3;
    border-radius: 15px;
    padding: 0 24px;
  }

  .name {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #adafbb;
  }

  .img {
    height: 30px;
    width: 30px;
    object-fit: contain;
    margin-right: 20px;
  }

  .active {
    color: #b50d0d;
  }

  ${tabViewMax({
    display: "none",
  })}
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
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

const Sidebar = ({ setActiveSidebar, activeSidebar }) => {
  return (
    <Container>
      {links.map((link, index) => {
        return (
          <button
            className="link-container flex ai-center mb-1"
            onClick={() => setActiveSidebar(link.id)}
            key={link.id}
          >
            <img
              src={activeSidebar === index + 1 ? link.fill : link.img}
              alt={link.name}
              className="img"
            />
            <p className={activeSidebar === index + 1 ? "name active" : "name"}>
              {link.name}
            </p>
          </button>
        );
      })}
      <Bottom>
        Download our app on
        <div>
          <div className="my-1 flex gap-2">
            <Image>
              <img src={images.appstore} alt="app" />
            </Image>
            <Image>
              <img src={images.googleplay} alt="app" />
            </Image>
          </div>
        </div>
      </Bottom>
    </Container>
  );
};

export default Sidebar;
