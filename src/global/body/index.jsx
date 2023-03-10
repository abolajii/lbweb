import Chats from "../../screens/secure/chats/index";
import Discover from "../../screens/secure/discover";
import Match from "../../screens/secure/match/index";
import MobileSideBar from "./mobile.sidebar";
import NotificationModal from "../../components/modals/notification.modal";
import Profile from "../../screens/secure/profile/index";
import React from "react";
import Settings from "../../screens/secure/settings/index";
import Sidebar from "./sidebar";
import styled from "styled-components";
import { useAuth } from "../../context/user.context";

const Container = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 13px 0;
`;

const Details = styled.div`
  width: 100%;
`;

const Body = ({ activeSidebar, setActiveSidebar }) => {
  const [hide, setHide] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const { setCoords } = useAuth();

  const [permission, setPermission] = React.useState({
    location: "",
    notification: "",
  });

  React.useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 3000);
  }, []);

  React.useEffect(() => {
    if (permission.location === "allow" && !modal) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          setCoords([res.coords.latitude, res.coords.longitude]);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }

    if (permission.notification === "allow" && !modal) {
      console.log("notify");
    }
  }, [permission, modal, setCoords]);

  return (
    <Container>
      <MobileSideBar
        setActiveSidebar={setActiveSidebar}
        activeSidebar={activeSidebar}
        hide={hide}
      />
      <div className="flex inner gap-1">
        <Sidebar
          activeSidebar={activeSidebar}
          setActiveSidebar={setActiveSidebar}
        />

        <Details>
          {activeSidebar === 1 && <Discover setHide={setHide} />}
          {activeSidebar === 2 && <Match />}
          {activeSidebar === 3 && <Chats setHide={setHide} />}
          {activeSidebar === 4 && <Profile setHide={setHide} />}
          {activeSidebar === 6 && (
            <Settings setActiveSidebar={setActiveSidebar} />
          )}
        </Details>
      </div>
      {modal && (
        <NotificationModal
          setModal={setModal}
          permission={permission}
          setPermission={setPermission}
        />
      )}
    </Container>
  );
};

export default Body;
