import { icons, images } from "../../constants";

import Button from "../button";
import Input from "../input";
import { IoMdClose } from "react-icons/io";
import React from "react";
import { mobileViewMax } from "../../responsive/mobile";
import { people } from "../../screens/secure/discover/data";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${people.length + 1};
`;

const Inner = styled.div`
  height: 527px;
  width: 594px;
  border-radius: 10px;
  background: #f1f1f1;
  position: relative;

  .notify-image {
    height: 118px;
    width: 94px;
    left: 23px;
    top: 11px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    ${mobileViewMax({
      height: "90px",
      width: "50px",
      objectFit: "contain",
    })}
  }
  .py-3 {
    padding: 3rem;
  }
  .notify-title {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
  }

  .notify-text {
    max-width: 50%;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3b3a3c;

    ${mobileViewMax({
      maxWidth: "100%",
    })}
  }

  .video-text {
    max-width: 70%;
    ${mobileViewMax({
      maxWidth: "100%",
    })}
  }

  .text {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3b3a3c;
    margin: 10px 0;
  }
  button {
    background: none;
  }

  .close {
    position: absolute;
    right: 40px;
    top: 30px;
  }

  ${mobileViewMax({
    width: "95%",
    height: "490px",
  })}
`;

const BottomFilter = styled.div`
  height: 420px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  background: #f1f1f1;
  position: absolute;
  bottom: 0;
`;

const Image = styled.div`
  width: 120px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  ${mobileViewMax({
    width: "110px",
  })}
`;

const Width = styled.div`
  width: 500px;
  margin: auto;
  .input-container {
    width: 100% !important;
  }
`;

const ReuseableModal = ({ filter, children, setModal }) => {
  if (filter) {
    return (
      <Container>
        <BottomFilter className="px-2 py-2">{children}</BottomFilter>
      </Container>
    );
  }
  return (
    <Container className="center">
      <Inner>
        <Width>
          <div className="flex ai-center jc-space-btw py-2">
            <div>
              <div>Create a new password.</div>
              <div>Keep it safe.</div>
            </div>
            <div onClick={() => setModal(false)}>x</div>
          </div>
          <div className="my-2">
            <Input right icon placeholder="Old password" />
          </div>
          <div className="my-2">
            <Input right icon placeholder="New password" />
          </div>
          <div className="my-2">
            <Input right icon placeholder="Re-enter password" />
          </div>
          <div className="mt-3">
            <Button width="100%" fill title="Save Changes" />
          </div>
        </Width>
      </Inner>
    </Container>
  );
};

const NotificationModal = ({
  password,
  setModal,
  permission,
  setPermission,
  filter,
  children,
  video,
  index,
  disabled,
}) => {
  const [active, setActive] = React.useState(0);

  if (filter) {
    return <ReuseableModal filter>{children}</ReuseableModal>;
  }

  if (disabled) {
    if (video) {
      return (
        <Container index={index} className="flex ai-center jc-center">
          <Inner>
            <div className="close">
              <button onClick={() => setModal("")}>
                <IoMdClose size={29} />
              </button>
            </div>
            <div className="flex ai-center jc-center py-3 flex-col">
              <div className="notify-image flex ai-center jc-center">
                <img src={icons.video} alt="Video" />
              </div>
              <p className="notify-title py-1">Download our app</p>

              <div className="notify-text video-text">
                <p className="py-1">
                  Video calls can only be placed on our mobile app available on
                  PlayStore and App Store.
                </p>
              </div>
              <div className="my-1 flex gap-2">
                <Image>
                  <img src={images.appstore} alt="app" />
                </Image>
                <Image>
                  <img src={images.googleplay} alt="app" />
                </Image>
              </div>
            </div>
          </Inner>
        </Container>
      );
    } else {
      return (
        <Container index={index} className="flex ai-center jc-center">
          <Inner>
            <div className="close">
              <button onClick={() => setModal("")}>
                <IoMdClose size={29} />
              </button>
            </div>
            <div className="flex ai-center jc-center py-3 flex-col">
              <div className="notify-image flex ai-center jc-center">
                <img src={icons.call} alt="Call" />
              </div>
              <p className="notify-title py-1">Download our app</p>

              <div className="notify-text video-text">
                <p className="py-1">
                  Voice calls can only be placed on our mobile app available on
                  PlayStore and App Store.
                </p>
              </div>
              <div className="my-1 flex gap-2">
                <Image>
                  <img src={images.appstore} alt="app" />
                </Image>
                <Image>
                  <img src={images.googleplay} alt="app" />
                </Image>
              </div>
            </div>
          </Inner>
        </Container>
      );
    }
  }

  if (password) {
    return <ReuseableModal setModal={setModal} />;
  } else {
    switch (active) {
      case 1:
        return (
          <Container className="center">
            <Inner>
              <div className="flex ai-center jc-center py-3 flex-col">
                <div className="notify-image flex ai-center jc-center">
                  <img src={images.notification} alt="Notification" />
                </div>
                <p className="notify-title py-1 sharp">Enable Notification</p>
                <div className="notify-text">
                  <p className="py-1">
                    Get push-notification when you get the match or receive a
                    message.
                  </p>
                </div>
                <div className="my-1">
                  <Button
                    fill
                    title="Allow Notification"
                    onPressOne={() => {
                      setModal(false);
                      setPermission({
                        ...permission,
                        notification: "allow",
                      });
                    }}
                  />
                </div>
                <div>
                  <Button
                    title="Skip for now"
                    bg="none"
                    onPressOne={() => setModal(false)}
                  />
                </div>
              </div>
            </Inner>
          </Container>
        );
      default:
        return (
          <Container className="center">
            <Inner>
              <div className="flex ai-center jc-center py-3 flex-col">
                <div className="notify-image flex ai-center jc-center">
                  <img src={images.location} alt="Notification" />
                </div>
                <p className="notify-title py-1 sharp">Enable Location</p>

                <div className="notify-text">
                  <p className="py-1">
                    Your life partner maybe somewhere close. Kindly enable your
                    location.
                  </p>
                </div>
                <div className="my-1">
                  <Button
                    fill
                    title="Allow Location"
                    onPressOne={() => {
                      setActive(1);
                      setPermission({
                        ...permission,
                        location: "allow",
                      });
                    }}
                  />
                </div>
                <div>
                  <Button
                    title="Skip for now"
                    bg="none"
                    onPressOne={() => {
                      setActive(1);
                    }}
                  />
                </div>
              </div>
            </Inner>
          </Container>
        );
    }
  }
};

export default NotificationModal;
