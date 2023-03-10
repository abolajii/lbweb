import { Button, GoBack, Input } from "../../../components";
import { DesktopView, MobileView } from "../../../utils/styles";
import { dateOfBirth, findInterests } from "../../../helpers/user.helpers";

import { AiOutlineSetting } from "react-icons/ai";
import EditInterests from "./edit.interests";
import EditProfile from "./edit.profile";
import { FiChevronRight } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import React from "react";
import UpdateProfile from "./update.profile";
import { mobileViewMax } from "../../../responsive/mobile";
import styled from "styled-components";
import { svg } from "../../../constants";
import { useAuth } from "../../../context/user.context";

// todo
const data = [
  { id: "1", name: "Photography", image: svg.camera },
  {
    id: "2",
    name: "Shopping",
    image: svg.shopping,
  },
  { id: "3", name: "Dancing", image: svg.dance },

  { id: "4", name: "Singing", image: svg.sing },
  { id: "5", name: "Charity", image: svg.charity },
  { id: "6", name: "Tennis", image: svg.tennis },
  { id: "7", name: "Run", image: svg.run },
  { id: "8", name: "Swimming", image: svg.swim },
  { id: "9", name: "Art", image: svg.art },
  { id: "10", name: "Traveling", image: svg.travel },
  { id: "11", name: "Extreme", image: svg.extreme },
  { id: "12", name: "Music", image: svg.music },
  { id: "13", name: "Drink", image: svg.drink },
  { id: "14", name: "Video games", image: svg.game },
];

const Box = styled.div`
  width: 360px;
  padding-bottom: 20px;
  border-bottom: 2px solid #ffe6e6;

  ${mobileViewMax({
    width: "100%",
  })}
`;

const Container = styled.div`
  background: ${({ noBg }) => (noBg ? "" : "#f3f3f3")};
  border-radius: 15px;

  .dob {
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .email {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .about,
  .photos {
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    color: #3b3a3c;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .photos {
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .about-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .interest-item {
    height: 45px;
    width: 140px;
    border-radius: 15px;
    background: #fff;
    padding: 9px;
    cursor: pointer;
    border: 1px solid #e8e6ea;
  }

  .interest-icon {
    height: 19px;
    width: 19px;
    margin-right: 9px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .interest-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .image {
    height: 270px;
    width: 220px;
    border-radius: 15px;
    background: white;
    cursor: pointer;
    border: 1px dashed #e8e6ea;
  }

  .add {
    height: 58px;
    width: 58px;
    border-radius: 50%;
    background: linear-gradient(180deg, #e83a3a 0%, #b50d0d 100%);
  }

  .username {
    font-weight: 400;
    font-size: 25px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .edit {
    height: 34px;
    width: 68px;
    border-radius: 7.5px;
    padding: 5px 10px 5px 10px;
    background: #b50d0d;
  }

  .edit-text {
    margin-left: 3px;
    color: #fff;
  }

  .line {
    width: 1px;
    height: 13px;
    background: #d9d9d9;
    margin: 0 10px;
  }
`;

const InterestBox = styled.div`
  width: 99%;
  margin: auto;
`;

const OverflowContainer = styled.div`
  height: 250px;
  width: 100%;
`;

const MobileOverflowContainer = styled(OverflowContainer)`
  height: 500px;
`;

const Details = styled.div`
  height: 100%;
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

const Height = styled.div`
  position: relative;

  .app-version {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #f6621d;
  }
`;

const SettingsItem = styled.button`
  background: none;
  ${({ none }) => {
    return !none && "border-bottom: 2px solid #ffe5e5";
  }};
  width: 335px;
  .settings-item {
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    color: #555555;
  }

  .logout {
    color: #b50d0d;
  }
`;

const Item = styled.button`
  background: none;
  width: 90%;
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

const FreePlan = styled.div`
  height: 84px;
  background: #ffdddd;
  border-radius: 15px;

  .free-plan {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #b50d0d;
  }
`;

const Sub = styled.div`
  .plan-card {
    height: 425px;
    width: 315px;
    background: #fffefe;
    border: 1px solid #e8e6ea;
    border-radius: 15px;
  }

  .plan-title {
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    color: #000000;
  }

  .plan-price {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
    margin-right: 3px;
  }

  .plan-month {
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .plan-save {
    height: 23px;
    width: 84px;
    border-radius: 5px;
    padding: 0px 10px 0px 10px;
    background: #b50d0d;
    margin-top: 3px;
    margin-left: 3px;
  }

  .plan-save-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
  }
  .top {
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 20px;
  }

  .container {
    margin-bottom: 10px;
  }

  .plan-details {
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
  }

  .selected {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #b50d0d;
  }
`;

const Choose = styled.p`
  font-size: 25px;
`;
const _genders = [
  { id: 2, name: "Men", selected: false },
  {
    id: 1,
    name: "Women",
    selected: true,
  },
  { id: 3, name: "Both", selected: false },
];

const _ethnicity = [
  { id: 10, name: "All" },
  { id: 1, name: "Asian" },
  { id: 2, name: "Black/African" },
  { id: 3, name: "Hispanic/Latin" },
  { id: 4, name: "Indian" },
  { id: 5, name: "Middle Eastern" },
  { id: 6, name: "Native American" },
  { id: 7, name: "Pacific Islander" },
  { id: 8, name: "White" },
  { id: 9, name: "Other" },
];

const _religion = [
  { id: 1, name: "All" },
  { id: 2, name: "Atheism" },
  { id: 3, name: "Agnosticism" },
  { id: 4, name: "Buddhism" },
  { id: 5, name: "Christianity/Catholic" },
  { id: 6, name: "Christianity/LSD" },
  { id: 7, name: "Christianity/Protestant" },
  { id: 8, name: "Christianity/Other" },
  { id: 9, name: "Hind" },
  { id: 10, name: "Jewish" },
];

const _education = [
  { id: 7, name: "All" },
  { id: 1, name: "High School/College" },
  { id: 2, name: "Associate" },
  { id: 3, name: "Bachelor" },
  { id: 4, name: "Master" },
  { id: 5, name: "Phd" },
  { id: 6, name: "Scholar" },
];

const _relationship = [
  { id: 1, name: "All" },
  { id: 2, name: "Marriage" },
  { id: 3, name: "Serious dating" },
  { id: 4, name: "Casual dating" },
  { id: 5, name: "Friendship" },
  { id: 6, name: "Pen pal" },
];

const _familyPlans = [
  { id: 1, name: "All" },
  { id: 2, name: "Yes" },
  { id: 3, name: "No" },
  { id: 4, name: "Maybe" },
  { id: 5, name: "Not sure" },
];

const _smoking = [
  { id: 1, name: "All" },
  { id: 2, name: "Non smoker" },
  { id: 3, name: "Light weight" },
  { id: 4, name: "Social smoker" },
  { id: 5, name: "Mid weight" },
  { id: 6, name: "Heavy weight" },
];

const _drinking = [
  { id: 1, name: "All" },
  { id: 2, name: "Non drinker" },
  { id: 3, name: "Light weight" },
  { id: 4, name: "Social drinker" },
  { id: 5, name: "Mid weight" },
  { id: 6, name: "Heavy weight" },
];

const Profile = ({ setHide, setActive, active }) => {
  const [activeProfile, setActiveProfile] = React.useState(0);
  const [title, setTitle] = React.useState("");

  const handleClick = (value) => {
    setActiveProfile(6);
    setTitle(value);
  };

  const { user } = useAuth();

  const loggedInUserPreferences = user.preferences;

  const getUserPreferencesWithValues = (key) => {
    const preferences = loggedInUserPreferences[key];
    return preferences;
  };

  const loggedInUserInterest = findInterests(data, user?.my_interests);

  switch (activeProfile) {
    case 1:
      return (
        <EditProfile setActiveProfile={setActiveProfile} setHide={setHide} />
      );
    case 2:
      return (
        <EditInterests setActiveProfile={setActiveProfile} setHide={setHide} />
      );

    case 3:
      return (
        <div className="px-1">
          <div className="flex ai-center mb-2">
            <GoBack
              size={50}
              onClick={() => {
                setActiveProfile(0);
                setHide(false);
              }}
            />
            <div>
              <p className="profile-title">Settings</p>
            </div>
          </div>
          <Height className="flex flex-col">
            <div>
              <SettingsItem
                className="flex ai-center jc-space-btw py-1 mb-1"
                onClick={() => setActiveProfile(4)}
              >
                <p className="settings-item">Change Password</p>
                <FiChevronRight size={17} color="#858585" />
              </SettingsItem>
              <SettingsItem
                className="flex ai-center jc-space-btw py-1 mb-1"
                onClick={() => setActiveProfile(5)}
              >
                <p className="settings-item">Preference</p>
                <FiChevronRight size={17} color="#858585" />
              </SettingsItem>
              <SettingsItem
                className="flex ai-center jc-space-btw py-1 mb-1"
                onClick={() => setActiveProfile(7)}
              >
                <p className="settings-item">Subscription</p>
                <FiChevronRight size={17} color="#858585" />
              </SettingsItem>
              <SettingsItem className="flex ai-center jc-space-btw py-1 mb-1">
                <p className="settings-item">Terms of service</p>
                <FiChevronRight size={17} color="#858585" />
              </SettingsItem>
              <SettingsItem className="flex ai-center jc-space-btw py-1 mb-1">
                <p className="settings-item">Privacy Policy</p>
                <FiChevronRight size={17} color="#858585" />
              </SettingsItem>
              <SettingsItem
                className="flex ai-center jc-space-btw py-1 mb-1"
                // onClick={() => setUser(null)}
              >
                <p className="settings-item logout">Logout</p>
                <FiChevronRight size={17} color="#B50D0D" />
              </SettingsItem>
            </div>
            <div className="version flex">
              <SettingsItem
                none
                className="flex ai-center jc-space-btw py-1 mb-1"
              >
                <p className="settings-item">App version</p>
                <p className="app-version">1.0.0</p>
              </SettingsItem>
            </div>

            <Button title="Delete Account" logout />
          </Height>
        </div>
      );

    case 4:
      return (
        <div className="px-1">
          <div className="flex ai-center mb-2">
            <GoBack
              size={50}
              onClick={() => {
                setActiveProfile(3);
                // setHide(false);
              }}
            />
            <div>
              <p className="profile-title">Settings</p>
            </div>
          </div>

          <p className="mobile-title mb">Change Password</p>
          <p className="small-title mb-2">
            Create a new password. Keep it safe.
          </p>
          <div className="mb-1">
            <Input right icon placeholder="Old password" />
          </div>
          <div className="mb-1">
            <Input right icon placeholder="New password" />
          </div>
          <div className="mb-1">
            <Input right icon placeholder="Re-enter password" />
          </div>
          <div className="my-3">
            <Button fill title="Save Changes" width="100%" />
          </div>
        </div>
      );

    case 5:
      return (
        <div className="">
          <div className="flex ai-center mb-2 px-1">
            <GoBack
              size={50}
              onClick={() => {
                setActiveProfile(0);
                setHide(false);
              }}
            />
            <div>
              <p className="profile-title">Preference</p>
            </div>
          </div>
          <MobileOverflowContainer>
            <Details>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Gender")}
              >
                <div className={active === 1 ? "label active" : "label"}>
                  <p>Gender</p>
                </div>
                <div className="flex ai-center">
                  <p className={active ? "value mr-1 active" : "value mr-1"}>
                    {getUserPreferencesWithValues("gender")}
                  </p>
                  <FiChevronRight
                    size={17}
                    color={active === 1 ? "#b50d0d" : "#858585"}
                  />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Age")}
              >
                <div className="label">
                  <p>Age</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("age")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Height")}
              >
                <div className="label">
                  <p>Height</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("height")}{" "}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Distance")}
              >
                <div className="label">
                  <p>Distance</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("distance")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Ethnicity")}
              >
                <div className="label">
                  <p>Ethnicity</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("ethnicity")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Religion")}
              >
                <div className="label">
                  <p>Religion</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("religion")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>

              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Education")}
              >
                <div className="label">
                  <p>Education</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("education")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Relationship Goals")}
              >
                <div className="label">
                  <p>Relationship Goals</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("relationship_goals")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Family Plans")}
              >
                <div className="label">
                  <p>Family Plans</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("family_plans")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Kids")}
              >
                <div className="label">
                  <p>Kids</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("kids")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Smoking")}
              >
                <div className="label">
                  <p>Smoking</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("smoking")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
              <Item
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => handleClick("Drinking")}
              >
                <div className="label">
                  <p>Drinking</p>
                </div>
                <div className="flex ai-center">
                  <p className="value mr-1">
                    {getUserPreferencesWithValues("drinking")}
                  </p>
                  <FiChevronRight size={17} color="#858585" />
                </div>
              </Item>
            </Details>
          </MobileOverflowContainer>
        </div>
      );
    case 6:
      return (
        <div className="px-1">
          <div className="flex ai-center mb-1">
            <GoBack
              size={50}
              onClick={() => {
                setActiveProfile(5);
              }}
            />
            <div>
              <p className="profile-title">{title}</p>
            </div>
          </div>
          <MobileOverflowContainer>
            <Details>
              {title === "Gender" && (
                <UpdateProfile
                  data={_genders}
                  value={getUserPreferencesWithValues("gender")}
                />
              )}
              {title === "Age" && <UpdateProfile minMax _min={20} _max={50} />}
              {title === "Height" && (
                <UpdateProfile minMax _min={48} _max={96} inches />
              )}
              {title === "Distance" && <UpdateProfile min />}

              {title === "Ethnicity" && (
                <UpdateProfile
                  data={_ethnicity}
                  value={getUserPreferencesWithValues("ethnicity")}
                />
              )}

              {title === "Religion" && (
                <UpdateProfile
                  data={_religion}
                  value={getUserPreferencesWithValues("religion")}
                />
              )}

              {title === "Education" && (
                <UpdateProfile
                  data={_education}
                  value={getUserPreferencesWithValues("education")}
                />
              )}
              {title === "Relationship Goals" && (
                <UpdateProfile
                  data={_relationship}
                  value={getUserPreferencesWithValues("relationship_goals")}
                />
              )}

              {title === "Family Plans" && (
                <UpdateProfile
                  data={_familyPlans}
                  value={getUserPreferencesWithValues("family_plans")}
                />
              )}

              {title === "Smoking" && (
                <UpdateProfile
                  data={_smoking}
                  value={getUserPreferencesWithValues("smoking")}
                />
              )}
              {title === "Drinking" && (
                <UpdateProfile
                  data={_drinking}
                  value={getUserPreferencesWithValues("drinking")}
                />
              )}
            </Details>
          </MobileOverflowContainer>
        </div>
      );

    case 7:
      return (
        <Sub className="px-1">
          <div className="flex ai-center mb-2">
            <GoBack
              size={50}
              onClick={() => {
                setActiveProfile(3);
              }}
            />
            <div>
              <p className="profile-title">Subscription</p>
            </div>
          </div>
          <div className="py-1">
            <FreePlan className="flex ai-center jc-center">
              <p className="free-plan sharp">Free Plan</p>
            </FreePlan>

            <Choose className="py-2 text-center sharp"> Choose Plan</Choose>
            <div className="center flex-col gap-2">
              <div className="plan-card py-2 px-1">
                <div className="top mb-2 flex ai-center jc-space-btw">
                  <div className="plan-title">Basic Plan</div>
                  <div>
                    <div className="flex ai-center">
                      <p className="plan-price">$9.99</p>
                      <p className="plan-month">/mth</p>
                    </div>
                    <div className="plan-save">
                      <p className="plan-save-text">save 30%</p>
                    </div>
                  </div>
                </div>
                <div className="container flex ai-center">
                  <div className="selected mr-1" />
                  <p className="plan-details">10x more matches</p>
                </div>
                <div className="container flex ai-center">
                  <div className="selected mr-1" />
                  <p className="plan-details">Read receipts on chats</p>
                </div>
              </div>
              <div className="plan-card py-2 px-1">
                <div className="top mb-2 flex ai-center jc-space-btw">
                  <div className="plan-title">Premium Plan</div>
                  <div>
                    <div className="flex ai-center">
                      <p className="plan-price">$12.99</p>
                      <p className="plan-month">/mth</p>
                    </div>
                    <div className="plan-save">
                      <p className="plan-save-text">save 30%</p>
                    </div>
                  </div>
                </div>
                <div className="container flex ai-center">
                  <div className="selected mr-1" />
                  <p className="plan-details">20x more matches</p>
                </div>
                <div className="container flex ai-center">
                  <div className="selected mr-1" />
                  <p className="plan-details">Read receipts on chats</p>
                </div>
              </div>
            </div>
          </div>
        </Sub>
      );

    default:
      return (
        <div>
          <DesktopView>
            <Container>
              <div className="flex px-2 py-2">
                <div className="flex flex-1 flex-col">
                  <Box>
                    <div className="flex ai-center jc-space-btw">
                      <div>
                        <div>
                          <p className="username">{user?.name}</p>
                        </div>
                        <div className="flex ai-center">
                          <div className="dob">{dateOfBirth(user?.dob)}</div>
                          <div className="line"></div>
                          <div className="gender dob">
                            {user?.gender === "Man" ? "Male" : "Female"}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          className="edit flex ai-center"
                          onClick={() => setActiveProfile(1)}
                        >
                          <MdModeEdit color="#fff" />
                          <p className="edit-text">Edit</p>
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="email">{user?.email}</p>
                      <p className="email">{user?.phone}</p>
                    </div>
                  </Box>
                  <Box>
                    <div>
                      <p className="about">About</p>
                      <p className="about-text">
                        My name is {user?.name} and I enjoy meeting new people
                        and finding ways to help them have an uplifting
                        experience. I enjoy reading..
                      </p>
                    </div>
                  </Box>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex ai-center jc-space-btw mb">
                    <p className="about">Interests</p>
                    <div>
                      <button
                        className="edit flex ai-center"
                        onClick={() => setActiveProfile(2)}
                      >
                        <MdModeEdit color="#fff" />
                        <p className="edit-text">Edit</p>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-item-2">
                    {loggedInUserInterest.map((each) => {
                      return (
                        <div className="flex gap-2 mb">
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={each.image} alt="Yoga" />
                            </div>
                            <p className="interest-text">{each.name}</p>
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* <div className="flex gap-2 mb">
                    <button className="interest-item flex ai-center">
                      <div className="interest-icon">
                        <img src={icons.music} alt="music" />
                      </div>
                      <p className="interest-text">Music</p>
                    </button>
                    <button className="interest-item flex ai-center">
                      <div className="interest-icon">
                        <img src={icons.drink} alt="Drink" />
                      </div>
                      <p className="interest-text">Drinking</p>
                    </button>
                  </div>
                  <div className="flex gap-2 mb">
                    <button className="interest-item flex ai-center">
                      <div className="interest-icon">
                        <img src={icons.game} alt="game" />
                      </div>
                      <p className="interest-text">Video Games</p>
                    </button>
                    <button className="interest-item flex ai-center">
                      <div className="interest-icon">
                        <img src={icons.swim} alt="Swim" />
                      </div>
                      <p className="interest-text">Swimming</p>
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="pb-3">
                <p className="photos px-2">Photos</p>
                <div>
                  <div className="gap-1 center">
                    <div className="image flex ai-center jc-center">
                      <div className="add flex ai-center jc-center">
                        <IoMdAdd color="#fff" size={20} />
                      </div>
                    </div>
                    <div className="image flex ai-center jc-center">
                      <div className="add flex ai-center jc-center">
                        <IoMdAdd color="#fff" size={20} />
                      </div>
                    </div>
                    <div className="image flex ai-center jc-center">
                      <div className="add flex ai-center jc-center">
                        <IoMdAdd color="#fff" size={20} />
                      </div>
                    </div>
                    <div className="image flex ai-center jc-center">
                      <div className="add flex ai-center jc-center">
                        <IoMdAdd color="#fff" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </DesktopView>

          <MobileView className="px-1">
            <Container noBg>
              <div className="flex ai-center jc-space-btw mb-1">
                <p className="large-title">Profile</p>
                <GoBack
                  noMargin
                  onClick={() => {
                    setActiveProfile(3);
                    setHide(true);
                  }}
                >
                  <AiOutlineSetting size={25} />
                </GoBack>
              </div>
              <div>
                <Box>
                  <div className="flex ai-center jc-space-btw">
                    <div>
                      <div>
                        <p className="username">{user?.name}</p>
                      </div>
                      <div className="flex ai-center">
                        <div className="dob">{user.dob}</div>
                        <div className="line"></div>
                        <div className="gender dob">{user.gender}</div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="edit flex ai-center"
                        onClick={() => {
                          setActiveProfile(1);
                          setHide(true);
                        }}
                      >
                        <MdModeEdit color="#fff" />
                        <p className="edit-text">Edit</p>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="email">{user.email}</p>
                    <p className="email">{user.phone}</p>
                  </div>
                </Box>
              </div>
              <div>
                <Box>
                  <div>
                    <p className="about">About</p>
                    <p className="about-text">
                      My name is {user.name} and I enjoy meeting new people and
                      finding ways to help them have an uplifting experience. I
                      enjoy reading..
                    </p>
                  </div>
                </Box>
              </div>
              <div>
                <div className="flex ai-center jc-space-btw mb">
                  <p className="about">Interests</p>
                  <div>
                    <button
                      className="edit flex ai-center"
                      onClick={() => {
                        setActiveProfile(2);
                        setHide(true);
                      }}
                    >
                      <MdModeEdit color="#fff" />
                      <p className="edit-text">Edit</p>
                    </button>
                  </div>
                </div>
                <OverflowContainer>
                  <Details>
                    <InterestBox>
                      {loggedInUserInterest.map((each) => {
                        return (
                          <div className="flex ai-center mb-1 gap-2">
                            <div>
                              <button className="interest-item flex ai-center">
                                <div className="interest-icon">
                                  <img src={each.image} alt="Yoga" />
                                </div>
                                <p className="interest-text">{each.name}</p>
                              </button>
                            </div>
                            <div>
                              <button className="interest-item flex ai-center">
                                <div className="interest-icon">
                                  <img src={each.image} alt="Yoga" />
                                </div>
                                <p className="interest-text">{each.name}</p>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      {/* <div className="flex ai-center mb-1 gap-2">
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                      </div> */}
                      {/* <div className="flex ai-center mb-1 gap-2">
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                      </div>
                      <div className="flex ai-center mb-1 gap-2">
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                      </div>
                      <div className="flex ai-center mb-1 gap-2">
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                      </div>
                      <div className="flex ai-center mb-1 gap-2">
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                      </div>
                      <div className="flex ai-center mb-1 gap-2">
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                        <div>
                          <button className="interest-item flex ai-center">
                            <div className="interest-icon">
                              <img src={icons.yoga} alt="Yoga" />
                            </div>
                            <p className="interest-text">Yoga</p>
                          </button>
                        </div>
                      </div> */}
                    </InterestBox>
                  </Details>
                </OverflowContainer>
              </div>
            </Container>
          </MobileView>
        </div>
      );
  }
};

export default Profile;
