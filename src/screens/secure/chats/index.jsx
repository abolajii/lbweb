import { Active, GoBack } from "../../../components";
import {
  Body,
  ChatContainer,
  Container,
  Header,
  Inner,
  Input,
  InputContainer,
  Receiver,
  SendInput,
  SendMessage,
  Sender,
  VoiceNote,
} from "./styles";
import { DesktopView, MobileView } from "../../../utils/styles";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import { BiSearchAlt } from "react-icons/bi";
import NotificationModal from "../../../components/modals/notification.modal";
import React from "react";
import { db } from "../../../utils/firebase";
import { icons } from "../../../constants";
import { useAuth } from "../../../context/user.context";

const Chat = ({ setHide }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modal, setModal] = React.useState("");
  let lastMsg;

  const { user } = useAuth();
  const [matches, setMatches] = React.useState([]);

  React.useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "matches"),
          where("userMatched", "array-contains", user._id)
        ),
        (snapshot) =>
          setMatches(
            snapshot.docs.map((_doc) => {
              return { id: _doc.id, ..._doc.data() };
            })
          )
      ),
    [user]
  );

  console.log({ matches });
  return (
    <>
      {modal === "video" && (
        <NotificationModal disabled video setModal={setModal} />
      )}
      {modal === "audio" && <NotificationModal disabled setModal={setModal} />}
      <DesktopView>
        <Container className="flex jc-space-btw">
          <Inner>
            {matches.length > 0 && (
              <InputContainer className="flex ai-center">
                <div>
                  <BiSearchAlt color="rgba(0, 0, 0, 0.4)" size={20} />
                </div>
                <Input placeholder="Search" />
              </InputContainer>
            )}
            {matches.map((each) => {
              // console.log(new Date(each.timestamp));
              console.log(
                new Date(each.timestamp.seconds * 1000)
                  .toTimeString()
                  .split(" ")[0]
              );
              return (
                <ChatContainer onClick={() => setIsOpen(true)} className="mt-1">
                  <div className="flex ai-center">
                    <div className="profile-img" />
                    <div className="flex-1">
                      <div className="flex jc-space-btw">
                        <div className="profile-name">
                          {each.swipedUser.name}
                        </div>
                        <div className="time">
                          {
                            new Date(each.timestamp.seconds * 1000)
                              .toTimeString()
                              .split(" ")[0]
                          }
                        </div>
                      </div>
                      <div className="flex jc-space-btw">
                        <div className="msg">{lastMsg || "Say Hi"}</div>
                      </div>
                    </div>
                  </div>
                </ChatContainer>
              );
            })}

            {/* <ChatContainer className="mt-1">
              <div className="flex ai-center">
                <div className="profile-img" />
                <div className="flex-1">
                  <div className="flex jc-space-btw">
                    <div className="profile-name">Angela</div>
                    <div className="time">23min</div>
                  </div>
                  <div className="flex jc-space-btw">
                    <div className="msg">Okay! No problem</div>
                    <div className="flex ai-center">
                      <Active size={18} notification count={1} />
                    </div>
                  </div>
                </div>
              </div>
            </ChatContainer> */}
          </Inner>

          {isOpen && (
            <Inner>
              <Header className="flex ai-center">
                <div>
                  <div className="profile-img" />
                </div>
                <div className="flex flex-1 jc-space-btw">
                  <div className="flex ai-center jc-center">
                    <p className="profile-name">Mary</p>
                    <div className="flex ai-center jc-center">
                      <Active size={8} m={6} />
                    </div>
                  </div>
                  <div className="flex ai-center">
                    <button
                      className="call-container"
                      onClick={() => {
                        setModal("video");
                      }}
                    >
                      <img src={icons.video} alt="video" />
                    </button>
                    <button
                      className="call-container"
                      onClick={() => {
                        setModal("audio");
                      }}
                    >
                      <img src={icons.call} alt="call" />
                    </button>
                  </div>
                </div>
              </Header>

              <Body>
                {/*  */}

                <div className="flex jc-center ai-center">
                  <div className="line flex flex-1"></div>
                  <p className="day">Today</p>
                  <div className="line flex flex-1"></div>
                </div>

                <div className="message-box">
                  <Sender>
                    <div className="sender">
                      <p>Hi Still waiting for the time and place, any luck?</p>
                    </div>
                    <p className="msg-time">3:30PM</p>
                  </Sender>
                  <Receiver>
                    <div className="receiver">
                      <p>Oh, yeah. Sorry, got caught up with work.</p>
                    </div>
                    <p className="msg-time">3:30PM</p>
                  </Receiver>
                  <Receiver>
                    <div className="receiver">
                      <p>See you soon.</p>
                    </div>
                    <p className="msg-time">3:30PM</p>
                  </Receiver>
                </div>

                {/* Send message */}
                <div className="msg-container flex flex-1 jc-space-btw ai-center">
                  <div>
                    <VoiceNote>
                      <img src={icons.mic} alt="voice" />
                    </VoiceNote>
                  </div>
                  <div className="flex-1">
                    <InputContainer className="input-container">
                      <SendInput placeholder="Your message" />
                    </InputContainer>
                  </div>
                  <div>
                    <SendMessage>
                      <img src={icons.send} alt="voice" className="send" />
                    </SendMessage>
                  </div>
                </div>
              </Body>
            </Inner>
          )}
        </Container>
      </DesktopView>
      <MobileView>
        {isOpen ? (
          <>
            <Container className="px-1">
              <Header className="flex ai-center">
                <div className="flex ai-center">
                  <GoBack
                    noMargin
                    onClick={() => {
                      setIsOpen(false);
                      setHide(false);
                    }}
                  />
                  <div className="profile-img ml" />
                </div>
                <div className="flex flex-1 jc-space-btw">
                  <div className="flex ai-center jc-center">
                    <p className="profile-name">Mary</p>
                    <div className="flex ai-center jc-center">
                      <Active size={8} m={6} />
                    </div>
                  </div>
                  <div className="flex ai-center">
                    <button
                      className="call-container"
                      onClick={() => {
                        setModal("video");
                      }}
                    >
                      <img src={icons.video} alt="video" />
                    </button>
                    <button
                      className="call-container"
                      onClick={() => {
                        setModal("audio");
                      }}
                    >
                      <img src={icons.call} alt="call" />
                    </button>
                  </div>
                </div>
              </Header>

              <Body>
                <div className="flex jc-center ai-center">
                  <div className="line flex flex-1"></div>
                  <p className="day">Today</p>
                  <div className="line flex flex-1"></div>
                </div>

                <div className="message-box">
                  <Sender>
                    <div className="sender">
                      <p>Hi Still waiting for the time and place, any luck?</p>
                    </div>
                    <p className="msg-time">3:30PM</p>
                  </Sender>
                  <Receiver>
                    <div className="receiver">
                      <p>Oh, yeah. Sorry, got caught up with work.</p>
                    </div>
                    <p className="msg-time">3:30PM</p>
                  </Receiver>
                  <Receiver>
                    <div className="receiver">
                      <p>See you soon.</p>
                    </div>
                    <p className="msg-time">3:30PM</p>
                  </Receiver>
                </div>

                {/* Send message */}
                <div className="msg-container flex flex-1 jc-space-btw ai-center">
                  <div>
                    <VoiceNote>
                      <img src={icons.mic} alt="voice" />
                    </VoiceNote>
                  </div>
                  <div className="flex-1">
                    <InputContainer className="input-container">
                      <SendInput placeholder="Your message" />
                    </InputContainer>
                  </div>
                  <div>
                    <SendMessage>
                      <img src={icons.send} alt="voice" className="send" />
                    </SendMessage>
                  </div>
                </div>
              </Body>
            </Container>
          </>
        ) : (
          <Container className="px-1">
            <p className="px-1 mobile-title">Chats</p>
            <InputContainer className="flex ai-center my bg-white">
              <div>
                <BiSearchAlt color="rgba(0, 0, 0, 0.4)" size={20} />
              </div>
              <Input placeholder="Search" className="bg-white" />
            </InputContainer>
            <ChatContainer className="mt-1">
              <div className="flex ai-center">
                <div className="profile-img" />
                <div className="flex-1">
                  <div className="flex jc-space-btw">
                    <div className="profile-name">Angela</div>
                    <div className="time">23min</div>
                  </div>
                  <div className="flex jc-space-btw">
                    <div className="msg">Okay! No problem</div>
                    <div className="flex ai-center">
                      <Active size={18} notification count={1} />
                    </div>
                  </div>
                </div>
              </div>
            </ChatContainer>
            <ChatContainer
              onClick={() => {
                setIsOpen(true);
                setHide(true);
              }}
              className="mt-1"
            >
              <div className="flex ai-center">
                <div className="profile-img" />
                <div className="flex-1">
                  <div className="flex jc-space-btw">
                    <div className="profile-name">Mary</div>
                    <div className="time">29min</div>
                  </div>
                  <div className="flex jc-space-btw">
                    <div className="msg">See you soon</div>
                    <div></div>
                  </div>
                </div>
              </div>
            </ChatContainer>
          </Container>
        )}
      </MobileView>
    </>
  );
};

export default Chat;
