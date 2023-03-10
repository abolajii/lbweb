import { GoBack, Progress } from "../../../components";

import { FiChevronRight } from "react-icons/fi";
import React from "react";
import styled from "styled-components";
import { useAuth } from "../../../context/user.context";

const Container = styled.div``;

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

export const OverflowContainer = styled.div`
  height: 500px;
  width: 100%;
  padding: 15px;
`;

export const Details = styled.div`
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

const Preference = ({ setActive, setActiveSidebar, active }) => {
  const { user } = useAuth();

  const loggedInUserPreferences = user.preferences;

  const getUserPreferencesWithValues = (key) => {
    const preferences = loggedInUserPreferences[key];
    return preferences;
  };

  const preferencesArray = [
    { id: 1, name: "Gender", value: getUserPreferencesWithValues("gender") },
    { id: 2, name: "Age", value: getUserPreferencesWithValues("age") },
    { id: 3, name: "Height", value: getUserPreferencesWithValues("height") },
    {
      id: 4,
      name: "Distance",
      value: getUserPreferencesWithValues("distance"),
    },
    {
      id: 5,
      name: "Ethnicity",
      value: getUserPreferencesWithValues("ethnicity"),
    },
    {
      id: 6,
      name: "Religion",
      value: getUserPreferencesWithValues("religion"),
    },
    {
      id: 7,
      name: "Education",
      value: getUserPreferencesWithValues("education"),
    },
    {
      id: 8,
      name: "Relationship Goals",
      value: getUserPreferencesWithValues("relationship_golas"),
    },
    {
      id: 9,
      name: "Family Plan",
      value: getUserPreferencesWithValues("family_plans"),
    },
    { id: 10, name: "Kids", value: getUserPreferencesWithValues("kids") },
    { id: 11, name: "Smoking", value: getUserPreferencesWithValues("smoking") },
    {
      id: 12,
      name: "Drinking",
      value: getUserPreferencesWithValues("drinking"),
    },
  ];

  return (
    <Container>
      <div className="flex ai-center pt-2 px-2">
        <GoBack
          noMargin
          onClick={() => {
            setActiveSidebar(4);
          }}
        />
        <p className="ml-1">Back to Profile</p>
      </div>
      <div className="px-2">
        <Progress />
        <p className="settings-title mb mt">Preference</p>
        <p className="setting-subtitle mb-2">Select preference to make edit</p>
      </div>

      <OverflowContainer>
        <Details>
          {preferencesArray.map((each) => {
            return (
              <Item
                key={each.id}
                className="flex ai-center jc-space-btw border-bottom-2 py-1"
                onClick={() => setActive(each.id)}
              >
                <div className={active === each.id ? "label active" : "label"}>
                  <p>{each.name}</p>
                </div>
                <div className="flex ai-center">
                  <p
                    className={
                      active === each.id ? "value mr-1 active" : "value mr-1"
                    }
                  >
                    {each.value}
                  </p>
                  <FiChevronRight
                    size={17}
                    color={active === each.id ? "#b50d0d" : "#858585"}
                  />
                </div>
              </Item>
            );
          })}
        </Details>
      </OverflowContainer>
    </Container>
  );
};

export default Preference;
