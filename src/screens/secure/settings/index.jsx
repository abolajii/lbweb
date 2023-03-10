import { FiChevronRight } from "react-icons/fi";
import { GoBack } from "../../../components";
import NotificationModal from "../../../components/modals/notification.modal";
import Preference from "./preference";
import React from "react";
import SettingTemplate from "./setting.template";
import styled from "styled-components";
import { useAuth } from "../../../context/user.context";

const Container = styled.div``;

const Inner = styled.div`
  background: #f3f3f3;
  border-radius: 15px;
  position: relative;
  overflow: hidden;

  ${({ half }) => {
    return half && "width: 475px";
  }};

  .settings-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
  }

  .settings-subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3b3a3c;
  }

  .selected {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #b50d0d;
  }

  .item {
    border-bottom: 1px solid #e6e6e6;
    background: none;
    width: 100%;
  }

  .value {
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
  }

  .save-button {
    position: absolute;
    left: 0;
    bottom: 30px;
    width: 100%;
  }

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
`;

const Height = styled.div`
  height: 700px;
  position: relative;

  .version {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .app-version {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #f6621d;
  }
`;

const FreePlan = styled.div`
  width: 446px;
  height: 64px;
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

const Settings = ({ setActiveSidebar }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [settingId, setSettingId] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const { user } = useAuth();

  const loggedInUserPreferences = user.preferences;

  const getUserPreferencesWithValues = (key) => {
    const preferences = loggedInUserPreferences[key];
    return preferences;
  };

  switch (settingId) {
    case 1:
      return (
        <Container half className="flex gap-2">
          <Inner half>
            <Preference
              setActiveSidebar={setActiveSidebar}
              setActive={setActive}
              active={active}
            />
          </Inner>

          {active !== 0 && (
            <Inner className="py-2 px-1" half>
              {active === 1 && (
                <SettingTemplate
                  title="Gender"
                  data={_genders}
                  value={getUserPreferencesWithValues("gender")}
                />
              )}

              {active === 2 && (
                <SettingTemplate title="Age" minMax _min={20} _max={50} />
              )}

              {active === 3 && (
                <SettingTemplate
                  title="Height"
                  minMax
                  _min={48}
                  _max={96}
                  inches
                />
              )}

              {active === 4 && <SettingTemplate title="Distance" min />}

              {active === 5 && (
                <SettingTemplate
                  title="Ethnicity"
                  data={_ethnicity}
                  value={getUserPreferencesWithValues("ethnicity")}
                />
              )}
              {active === 6 && (
                <SettingTemplate
                  title="Religion"
                  data={_religion}
                  value={getUserPreferencesWithValues("religion")}
                />
              )}

              {active === 7 && (
                <SettingTemplate
                  title="Education"
                  data={_education}
                  value={getUserPreferencesWithValues("education")}
                />
              )}
              {active === 8 && (
                <SettingTemplate
                  title="Relationship Goals"
                  data={_relationship}
                  value={getUserPreferencesWithValues("relationship_goals")}
                />
              )}
              {active === 9 && (
                <SettingTemplate
                  title="Family Plans"
                  data={_familyPlans}
                  value={getUserPreferencesWithValues("family_plans")}
                />
              )}
              {active === 10 && (
                <SettingTemplate title="Kids" minMax _min={0} _max={10} />
              )}
              {active === 11 && (
                <SettingTemplate
                  title="Smoking"
                  data={_smoking}
                  value={getUserPreferencesWithValues("smoking")}
                />
              )}
              {active === 12 && (
                <SettingTemplate
                  title="Drinking"
                  data={_drinking}
                  value={getUserPreferencesWithValues("drinking")}
                />
              )}
            </Inner>
          )}
        </Container>
      );
    case 2:
      return (
        <Container>
          <Inner className="px-2 py-2">
            <div className="flex ai-center">
              <GoBack onClick={() => setActiveSidebar(4)} />
              <p className="ml-1">Back to Profile</p>
            </div>
            <div className="mt-2">
              <p className="settings-title">Subscription</p>
              <p className="settings-subtitle mt-1">Current Plan</p>
              <div className="py-1 border-bottom-2">
                <FreePlan className="flex ai-center jc-center">
                  <p className="free-plan">Free Plan</p>
                </FreePlan>
              </div>

              <div>
                <p className="settings-title my-1">Upgrade plan</p>
                <div className="plans flex gap-3">
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
            </div>
          </Inner>
        </Container>
      );
    default:
      return (
        <>
          {showModal && <NotificationModal password setModal={setShowModal} />}
          <Container>
            <Inner className="px-2 py-2">
              <div className="mb-1">
                <p className="settings-title">Settings</p>
              </div>
              <Height className="flex flex-col">
                <div>
                  <SettingsItem
                    className="flex ai-center jc-space-btw py-1 mb-1"
                    onClick={() => setShowModal(true)}
                  >
                    <p className="settings-item">Change Password</p>
                    <FiChevronRight size={17} color="#858585" />
                  </SettingsItem>
                  <SettingsItem
                    className="flex ai-center jc-space-btw py-1 mb-1"
                    onClick={() => setSettingId(1)}
                  >
                    <p className="settings-item">Preference</p>
                    <FiChevronRight size={17} color="#858585" />
                  </SettingsItem>
                  <SettingsItem
                    className="flex ai-center jc-space-btw py-1 mb-1"
                    onClick={() => setSettingId(2)}
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
                </div>
                <div className="version flex">
                  <SettingsItem
                    none
                    className="flex ai-center jc-space-btw py-1 mb-1"
                  >
                    <p className="settings-item">Version</p>
                    <p className="app-version">1.0.0</p>
                  </SettingsItem>
                </div>
              </Height>
            </Inner>
          </Container>
        </>
      );
  }
};

export default Settings;
