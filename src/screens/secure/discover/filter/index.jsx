import { Button, LoadingModal } from "../../../../components";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import LoveBirdz from "../users";
import { MdClose } from "react-icons/md";
import Min from "../../../../components/slider/min";
import MinMax from "../../../../components/slider/minmax";
import NotificationModal from "../../../../components/modals/notification.modal";
import React from "react";
import SwipeButton from "../swipe.button";
import { TabView } from "../../../../utils/styles";
import { db } from "../../../../utils/firebase";
import { filterUsers } from "../../../../api/auth";
import { images } from "../../../../constants";
import styled from "styled-components";
import { useAuth } from "../../../../context/user.context";

const Container = styled.div`
  padding-top: 40px;
  // overflow: hidden;
`;

const Inner = styled.div`
  height: 700px;
  margin: auto;
  border-radius: 15px;

  .filter-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
  }

  .interested-gender {
    width: 66px;
    height: 34px;
    background: #ffffff;
    border: 1px solid #e8e6ea;
    border-radius: 11px;
  }

  .active {
    background: #b50d0d;
    color: #fff;
  }
`;

const FilterBox = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  border: none;

  img {
    width: 28px;
    object-fit: contain;
  }
`;

const ToolTip = styled.div`
  height: 50px;
  width: 50px;
  background: #fff;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  top: 65px;
`;

const FilterDropDown = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 65px;
  padding: 20px;

  .filter-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
  }

  .interested-gender {
    width: 66px;
    height: 34px;
    background: #ffffff;
    border: 1px solid #e8e6ea;
    border-radius: 11px;
  }

  .active {
    background: #b50d0d;
    color: #fff;
  }
`;

const Close = styled.div`
  height: 30px;
  width: 30px;
  background: rgba(18, 18, 29, 0.05);
  border-radius: 50%;
  cursor: pointer;
`;

const Box = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  margin-right: 40px;
`;

const RelativeContainer = styled.div`
  height: 650px;
`;

const gender = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Both" },
];

const Filter = ({ setActiveDiscover, setSingleCard, setHide, users }) => {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const [minMax, setMinMax] = React.useState([20, 50]);
  const [min, setMin] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const [matchName, setMatchName] = React.useState("");

  const checkCurrentTarget = () => {
    setShowDropDown(false);
  };

  const updatedCards = users.map((each, i) => {
    return {
      id: i + 1,
      offset: { x: 0, y: 0 },
      coords: [0, 0],
      direction: "",
      button: "",
      ...each,
    };
  });

  const { user, filter, setFilter, cards, setCards } = useAuth();

  const makeRequest = async (data) => {
    try {
      const response = await filterUsers(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const swipeLikeUser = async (swipedUser) => {
    // return;
    const res = await getDoc(
      doc(db, "users", swipedUser._id, "swipes", user._id)
    );
    if (res.exists()) {
      setModal(true);
      setMatchName(swipedUser.name);
      await setDoc(doc(db, "matches", user._id + swipedUser._id), {
        loggedInUser: user,
        swipedUser: swipedUser,
        userMatched: [user._id, swipedUser._id],
        timestamp: serverTimestamp(),
      });
    }

    await setDoc(
      doc(db, "users", user._id, "swipes", swipedUser._id),
      swipedUser
    );
  };

  const swipeFavoriteUser = async (swipedUser) => {
    // return;
    const res = await getDoc(
      doc(db, "users", swipedUser._id, "favorites", user._id)
    );
    if (res.exists()) {
      setModal(true);
      setMatchName(swipedUser.name);
      await setDoc(doc(db, "matches", user._id + swipedUser._id), {
        loggedInUser: user,
        swipedUser: swipedUser,
        userMatched: [user._id, swipedUser._id],
        timestamp: serverTimestamp(),
      });
    }
    await setDoc(
      doc(db, "users", user._id, "favorites", swipedUser._id),
      swipedUser
    );
  };

  const swipePassUser = async (swipedUser) => {
    // return;

    await setDoc(
      doc(db, "users", user._id, "passes", swipedUser._id),
      swipedUser
    );
  };

  return (
    <>
      {modal && (
        <LoadingModal
          match
          index={cards.length}
          name={matchName}
          setModal={setModal}
        />
      )}
      <Container className="center">
        <Inner className="p1 w-100">
          <div className="flex ai-center jc-space-btw">
            <div />
            <Box>
              <FilterBox
                className="button"
                onClick={() => {
                  setShowDropDown(!showDropDown);
                }}
              >
                <img src={images.filter} alt="filter" />
              </FilterBox>
              <>
                {showDropDown && (
                  <>
                    <ToolTip />
                    <FilterDropDown>
                      <div className="flex ai-center jc-space-btw p1">
                        <p className="filter-text">Filter</p>
                        <Close
                          className="center close-button"
                          onClick={(e) => {
                            checkCurrentTarget();
                          }}
                        >
                          <MdClose />
                        </Close>
                      </div>
                      <div>
                        <p className="mt-1 mb-1 filter-title">Interested in</p>
                        <div className="interested-container flex gap-1 ai-center jc-space-btw mb-1">
                          {gender.map((each, index) => {
                            return (
                              <button
                                onClick={() => {
                                  setActive(each.id);
                                  setFilter({ ...filter, gender: each.name });
                                }}
                                className={
                                  each.id === active
                                    ? "interested-gender active"
                                    : "interested-gender"
                                }
                              >
                                <p>{each.name}</p>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <Min />
                      <MinMax />
                      <div className="my-2">
                        <Button
                          width="100%"
                          title="Apply Changes"
                          fill
                          onPressOne={() => {
                            // setShowDropDown(false);

                            const data = {
                              id: "64026c05b6832149f771e37d" || user?._id,
                              miles: min === "0" ? "" : min,
                              age: minMax,
                              coords: {
                                latitude: 6.833999,
                                longitude: 3.824433,
                              },
                            };
                            makeRequest(data);
                          }}
                        />
                      </div>
                    </FilterDropDown>
                  </>
                )}
              </>
              <TabView>
                {showDropDown && (
                  <NotificationModal filter>
                    <div className="flex ai-center jc-space-btw p1">
                      <p className="filter-text">Filter</p>
                      <Close
                        className="center close-button"
                        onClick={(e) => {
                          checkCurrentTarget();
                        }}
                      >
                        <MdClose />
                      </Close>
                    </div>
                    <div>
                      <p className="mt-1 mb-1 filter-title">Interested in</p>
                      <div className="interested-container flex gap-1 ai-center jc-space-btw mb-1">
                        {gender.map((each, index) => {
                          return (
                            <button
                              onClick={() => {
                                setActive(each.id);
                                setFilter({ ...filter, gender: each.name });
                              }}
                              className={
                                each.id === active
                                  ? "interested-gender active"
                                  : "interested-gender"
                              }
                            >
                              <p>{each.name}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <Min minMax={minMax} setMinMax={setMinMax} />
                    <MinMax min={min} setMin={setMin} />
                    <div className="my-2">
                      <Button
                        width="100%"
                        title="Apply Changes"
                        fill
                        onPressOne={() => {
                          // setShowDropDown(false);

                          const data = {
                            id: "64026c05b6832149f771e37d" || user?._id,
                            miles: min === "0" ? "" : min,
                            age: minMax,
                            coords: {
                              latitude: 6.833999,
                              longitude: 3.824433,
                            },
                          };
                          makeRequest(data);
                        }}
                      />
                    </div>
                  </NotificationModal>
                )}
              </TabView>
            </Box>
          </div>
          <RelativeContainer className="center flex-col">
            <LoveBirdz
              setCards={setCards}
              cards={updatedCards}
              setSingleCard={setSingleCard}
              setActiveDiscover={setActiveDiscover}
              setHide={setHide}
            />
            <SwipeButton
              setCards={setCards}
              cards={updatedCards}
              swipeLikeUser={swipeLikeUser}
              swipePassUser={swipePassUser}
              swipeFavoriteUser={swipeFavoriteUser}
            />
          </RelativeContainer>
        </Inner>
      </Container>
    </>
  );
};

export default Filter;
