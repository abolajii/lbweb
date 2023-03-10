import { collection, getDocs } from "@firebase/firestore";
import { getAllUsers, updateCoords } from "../../../api/auth";

import { Active } from "../../../components";
import Filter from "./filter";
import GoBack from "../../../components/goback";
import { MdLocationOn } from "react-icons/md";
import React from "react";
import SwipeButton from "./swipe.button";
import { colors } from "../../../constants";
import { db } from "../../../utils/firebase";
import { mobileViewMin } from "../../../responsive/mobile";
import styled from "styled-components";
import { tabViewMax } from "../../../responsive/tab";
import { useAuth } from "../../../context/user.context";

const Container = styled.div`
  background: ${({ transparent }) => (transparent ? "" : "#f3f3f3")};
  border-radius: 15px;
`;

const Inner = styled.div`
  background: #f3f3f3;
  border-radius: 15px;
  padding: 20px;
  height: 700px;
  width: 364px;

  ${tabViewMax({
    display: "none",
  })}
`;

const Relative = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  height: 337px;
  width: 281px;
  border-radius: 15px;
`;

const SingleProfile = styled.div`
  background: ${({ bg }) => bg};
  height: 100%;
  width: 100%;
  border-radius: 15px;
  margin: auto;
`;

const ProfileDetails = styled.div`
  height: 750px;
  width: 100%;
  padding: 15px;
  .text {
    font-size: 23px;
    font-weight: 500;
    color: #3b3a3c;
    margin-right: 10px;
    line-height: 130%;
  }

  .location {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    margin-bottom: 5px;
  }

  .miles {
    background-color: #b50d0d;
    border-radius: 10px;
    padding: 5px;
    align-items: center;
    width: 110px;
    height: 34px;
    color: white;
  }

  .miles-text {
    font-size: 12px;
    margin-left: 2px;
  }
  width: 100%;
  margin: auto;

  .about-text {
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .about-me {
    font-size: 13.5px;
    line-height: 150%;
  }

  .interest-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px 20px;
  }

  .interest {
    border-radius: 7px;
    background: #ffffff;
    padding: 9px;
    text-align: center;
    border: 1px solid #e8e6ea;
  }

  .interest-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3b3a3c;
  }
`;

const Item = styled.div`
  border-bottom: 2px solid #e8e8e8;
  background: none;
  margin: auto;
  .label {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #555555;
  }
  .value {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #555555;
  }

  .active {
    color: #b50d0d;
  }
`;

const Details = styled.div`
  height: 650px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    margin-block: 20px;
  }
  &::-webkit-scrollbar-track {
    background: #ffe7e7;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b50d0d;
    opacity: 0.5;
    border-radius: 20px;
  }
`;

const Profile = styled.div`
  width: 300px;
  margin: auto;
`;

const MobileView = styled.div`
  background: ${({ bg }) => bg};

  height: 450px;
  border-radius: 0px 0px 15px 15px;
`;

const SwipeContainer = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
`;
const Bottom = styled.div`
  background: #f3f3f3;
  padding: 20px;
`;

const Mobile = styled.div`
  ${mobileViewMin({
    display: "none",
  })}
`;

const Discover = ({ setHide }) => {
  const [activeDiscover, setActiveDiscover] = React.useState(0);
  const [singleCard, setSingleCard] = React.useState(null);

  const { coords, user, users, setUsers, cards, setCards } = useAuth();

  const loggedInUserPreferences = user.preferences;

  const getUserPreferencesWithValues = (key) => {
    const preferences = loggedInUserPreferences[key];
    return preferences;
  };

  React.useEffect(() => {
    let unsub;

    const fetchProfiles = async () => {
      const passes = await getDocs(collection(db, "users", user._id, "passes"))
        .then((snapshot) => snapshot.docs.map((_doc) => _doc.id))
        .catch((err) => {
          console.log(err);
        });
      const swipes = await getDocs(collection(db, "users", user._id, "swipes"))
        .then((snapshot) => snapshot.docs.map((_doc) => _doc.id))
        .catch((err) => {
          console.log(err);
        });

      const favorite = await getDocs(
        collection(db, "users", user._id, "favorite")
      )
        .then((snapshot) => snapshot.docs.map((_doc) => _doc.id))
        .catch((err) => {
          console.log(err);
        });

      const allIds = [...passes, ...swipes, ...favorite, user._id];

      const allUsers = cards.filter((_user) => !allIds.includes(_user._id));
      setUsers(allUsers);

      // setSpinner(false);
    };

    users.length === 0 && fetchProfiles();
    return unsub;
  }, [user, users, setUsers, cards]);

  React.useEffect(() => {
    if (coords.length !== 0 && cards.length === 0) {
      // get all users
      const makeRequest = async () => {
        await updateCoords(user._id, coords);
        const res = await getAllUsers(user._id, coords);
        setCards(res.data);
      };
      makeRequest();
    }
  }, [coords, user, cards, setCards]);

  switch (activeDiscover) {
    case 1:
      return (
        <>
          <Container transparent className="flex gap-1">
            <Inner className="flex-1 flex-col">
              <Profile>
                <div>
                  <div className="flex ai-center my-2">
                    <GoBack
                      noMargin
                      onClick={() => {
                        setActiveDiscover(0);
                      }}
                    />
                    <p className="ml-1">Back to Explore</p>
                  </div>
                </div>
                <div className="flex-1 flex-col center">
                  <Relative>
                    <SingleProfile bg={singleCard?.bg}></SingleProfile>
                  </Relative>
                  <SwipeButton />
                </div>
              </Profile>
            </Inner>
            <Inner className="flex flex-1">
              <ProfileDetails className="py-2">
                <Details>
                  <div className="border-bottom-2 py-1 mx-1">
                    <div className="flex ai-center">
                      <div className="nameAge">
                        <p className="text">
                          {singleCard.name}, {singleCard.age}
                        </p>
                      </div>
                      <Active size={10} />
                    </div>
                    <p className="location">Lives in {singleCard?.location}</p>
                    <div className="miles flex ai-center mb">
                      <MdLocationOn
                        name="location"
                        size={18}
                        color={colors.white}
                      />
                      <p className="miles-text">
                        {singleCard.miles} miles away
                      </p>
                    </div>
                  </div>
                  <div className="border-bottom-2 py-1 mx-1">
                    <p className="about-text my">About</p>
                    <p className="about-me mb-1">
                      My name is Abolaji and I enjoy meeting new people and
                      finding ways to help them have an uplifting experience. I
                      enjoy reading..
                    </p>

                    <p className="about-text my">Interests</p>
                    <div className="interest-container my-1">
                      <div className="interest">
                        <div className="interest-text">Traveling</div>
                      </div>
                      <div className="interest">
                        <div className="interest-text">Music</div>
                      </div>
                      <div className="interest">
                        <div className="interest-text">Coding</div>
                      </div>
                      <div className="interest">
                        <div className="interest-text">Model</div>
                      </div>
                      <div className="interest">
                        <div className="interest-text">Dancing</div>
                      </div>
                    </div>
                  </div>

                  <div className="my-1 mx-1">
                    <p className="about-text mb">Preference</p>
                    <div className="preference">
                      <Item className="flex ai-center jc-space-btw py-1">
                        <p className="label">Age</p>
                        <p className="value">
                          {getUserPreferencesWithValues("age")}
                        </p>
                      </Item>
                      <Item className="flex ai-center jc-space-btw py-1">
                        <p className="label">Age</p>
                        <p className="value">
                          {getUserPreferencesWithValues("age")}
                        </p>
                      </Item>
                      <Item className="flex ai-center jc-space-btw py-1">
                        <p className="label">Age</p>
                        <p className="value">
                          {getUserPreferencesWithValues("age")}
                        </p>
                      </Item>
                      <Item className="flex ai-center jc-space-btw py-1">
                        <p className="label">Age</p>
                        <p className="value">
                          {getUserPreferencesWithValues("age")}
                        </p>
                      </Item>
                    </div>
                  </div>
                </Details>
              </ProfileDetails>
            </Inner>
          </Container>

          <Mobile>
            <MobileView className="relative" bg={singleCard?.bg}>
              <div className="pt-2 pl-2">
                <GoBack
                  onClick={() => {
                    setActiveDiscover(0);
                    setHide(false);
                  }}
                />
              </div>
              <SwipeContainer className="absolute">
                <SwipeButton />
              </SwipeContainer>
            </MobileView>
            <Bottom className="my-3">
              <ProfileDetails className="py-2">
                <Details>
                  <div className="border-bottom-2 py-1 mx-1">
                    <div className="flex ai-center">
                      <div className="nameAge">
                        <p className="text">
                          {singleCard.name}, {singleCard.age}
                        </p>
                      </div>
                      <Active size={10} />
                    </div>
                    <p className="location">Lives in {singleCard?.location}</p>
                    <div className="miles flex ai-center mb">
                      <MdLocationOn
                        name="location"
                        size={18}
                        color={colors.white}
                      />
                      <p className="miles-text">
                        {singleCard.miles} miles away
                      </p>
                    </div>
                  </div>
                  <div className="border-bottom-2 py-1 mx-1">
                    <p className="about-text my">About</p>
                    <p className="about-me mb-1">
                      My name is Abolaji and I enjoy meeting new people and
                      finding ways to help them have an uplifting experience. I
                      enjoy reading..
                    </p>

                    <p className="about-text my">Interests</p>
                    <div className="interest-container my-1">
                      <div className="interest">
                        <div className="interest-text">Traveling</div>
                      </div>
                      <div className="interest">
                        <div className="interest-text">Music</div>
                      </div>
                      <div className="interest">
                        <div className="interest-text">Coding</div>
                      </div>
                      <div className="interest">
                        <div className="interest-text">Model</div>
                      </div>
                      <div className="interest">
                        <div className="interest-text">Dancing</div>
                      </div>
                    </div>
                  </div>

                  <div className="my-1 mx-1">
                    <p className="about-text mb">Preference</p>
                    <div className="preference">
                      <Item className="flex ai-center jc-space-btw py-1">
                        <p className="label">Age</p>
                        <p className="value">
                          {getUserPreferencesWithValues("age")}
                        </p>
                      </Item>
                      <Item className="flex ai-center jc-space-btw py-1">
                        <p className="label">Age</p>
                        <p className="value">
                          {getUserPreferencesWithValues("age")}
                        </p>
                      </Item>
                      <Item className="flex ai-center jc-space-btw py-1">
                        <p className="label">Age</p>
                        <p className="value">
                          {getUserPreferencesWithValues("age")}
                        </p>
                      </Item>
                      <Item className="flex ai-center jc-space-btw py-1">
                        <p className="label">Age</p>
                        <p className="value">
                          {getUserPreferencesWithValues("age")}
                        </p>
                      </Item>
                    </div>
                  </div>
                </Details>
              </ProfileDetails>
            </Bottom>
          </Mobile>
        </>
      );

    default:
      return (
        <Container>
          <Filter
            setActiveDiscover={setActiveDiscover}
            setSingleCard={setSingleCard}
            setHide={setHide}
            users={users}
          />
        </Container>
      );
  }
};

export default Discover;
