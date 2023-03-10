import React from "react";
import { images } from "../../constants";
import styled from "styled-components";
import { tabViewMin } from "../../responsive/tab";

const Container = styled.div`
  ${tabViewMin({
    display: "none",
  })}
`;

const Item = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 11px;
  background: #f3f3f3;

  .icon-sidebar {
    height: 17px;
    width: 17px;
    object-fit: contain;
  }
`;

const links = [
  {
    id: 1,
    name: "Discover",
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

const MobileSideBar = ({ setActiveSidebar, activeSidebar, hide }) => {
  if (!hide)
    return (
      <Container className="center gap-3 my-2">
        {links.map((link, index) => {
          return (
            <Item
              onClick={() => setActiveSidebar(link.id)}
              className="center"
              key={index}
            >
              <img
                src={activeSidebar === index + 1 ? link.fill : link.img}
                alt={link.name}
                className="icon-sidebar"
              />
            </Item>
          );
        })}
      </Container>
    );
};

export default MobileSideBar;
