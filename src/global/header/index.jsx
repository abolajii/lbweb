import {
  DesktopView,
  LaptopView,
  MobileView,
  TabView,
} from "../../utils/styles";
import { DropDown, DropDownContainer, DropDownItem } from "./styles";

import { AiOutlineSetting } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import React from "react";
import { images } from "../../constants";
import { mobileViewMax } from "../../responsive/mobile";
import styled from "styled-components";
import { useAuth } from "../../context/user.context";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  border-bottom: 1px solid #e0e0e0;

  .navbar {
    height: 105px;
    ${mobileViewMax({
      height: "70px",
    })};
  }
  .logo {
    width: 154px;
    height: 41.11px;

    ${mobileViewMax({
      width: "114px",
      height: "30px",
    })}
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .btn {
    background: #ffffff;
    width: 52px;
    height: 52px;
    border-radius: 50%;

    ${mobileViewMax({
      width: "38px",
      height: "38px",
    })}
  }

  ${mobileViewMax({
    margin: "0px 20px",
  })}
`;

const Header = ({ setActiveSidebar }) => {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  return (
    <Container>
      <div className="flex ai-center jc-space-btw navbar">
        <div className="logo">
          <img src={images.headerlogo} alt="lovebird" />
        </div>
        <DropDownContainer>
          <div className="drop-down">
            <button
              className="btn flex ai-center jc-center"
              onClick={() => {
                setShowDropDown(!showDropDown);
              }}
            >
              <FiChevronDown color="#3B3A3C" size={20} />
            </button>
            <DesktopView>
              {showDropDown && (
                <DropDown className="py-1 px-1">
                  <DropDownItem>
                    <button
                      className="flex ai-center"
                      onClick={() => {
                        setShowDropDown(false);
                        setActiveSidebar(6);
                      }}
                    >
                      <AiOutlineSetting size={25} className="dropdown-icon" />
                      <p>Settings</p>
                    </button>
                  </DropDownItem>
                  <DropDownItem none>
                    <button
                      className="flex ai-center"
                      onClick={() => {
                        navigate("/login");
                        setUser(null);
                      }}
                    >
                      <IoIosLogOut size={25} className="dropdown-icon" />
                      <p>Logout</p>
                    </button>
                  </DropDownItem>
                </DropDown>
              )}
            </DesktopView>
          </div>
        </DropDownContainer>
      </div>
    </Container>
  );
};

export default Header;
