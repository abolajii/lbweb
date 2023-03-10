import {
  Card,
  Details,
  Grid,
  GridItem,
  Inner,
  OverflowContainer,
  Shadow,
} from "./styles";
import { DesktopView, MobileView } from "../../../utils/styles";

import { Active } from "../../../components";
import React from "react";
import { icons } from "../../../constants";
import styled from "styled-components";

const SecondInner = styled(Inner)`
  padding: 0px;
  background: transparent;
`;

const likes = [
  { id: 1, name: "Shade", location: "Dallas" },
  { id: 2, name: "Mary", location: "Chicago" },
  { id: 3, name: "Mide", location: "San Francisco" },
  { id: 4, name: "Chisom", location: "Atlanta" },
  { id: 5, name: "Kim", location: "Orleans" },
  { id: 6, name: "Nita", location: "New York" },
  { id: 7, name: "Myarr", location: "Dallas" },
  { id: 8, name: "Ade", location: "Dallas" },
  { id: 9, name: "Yomi", location: "Dallas" },
  { id: 10, name: "Aduke", location: "Dallas" },
  { id: 11, name: "Arike", location: "Dallas" },
];
const favorites = [
  { id: 1, name: "Amaka", location: "Los Angeles" },
  { id: 2, name: "Faith", location: "Chicago" },
  { id: 3, name: "Mide", location: "San Francisco" },
  { id: 4, name: "Chisom", location: "Atlanta" },
  { id: 5, name: "Kim", location: "Orleans" },
  { id: 6, name: "Nita", location: "Dallas" },
  { id: 7, name: "Myarr", location: "Dallas" },
  { id: 8, name: "Ade", location: "Dallas" },
];

const Match = ({ setActive }) => {
  const [activeTab, setActiveTab] = React.useState(1);

  const data = activeTab === 1 ? likes : favorites;
  return (
    <>
      <DesktopView>
        <Inner>
          <div className="flex">
            <div>
              <button
                className={activeTab === 1 ? "title active" : "title"}
                onClick={() => setActiveTab(1)}
              >
                Likes
              </button>
            </div>
            <div>
              <button
                className={activeTab === 2 ? "title active" : "title"}
                onClick={() => setActiveTab(2)}
              >
                Favorites
              </button>
            </div>
          </div>
          <OverflowContainer className="mt-1">
            <Details>
              <Grid repeat="4">
                {data.map((each) => {
                  return (
                    <GridItem key={each.id}>
                      <Card>
                        <Shadow className="flex jc-space-btw ai-center">
                          <div>
                            <div className="flex">
                              <p className="name">{each.name}, 30</p>
                              <Active size={6} m={6} />
                            </div>
                            <p className="location">Lives in {each.location}</p>
                          </div>
                          <div>
                            <button
                              className="message flex ai-center jc-center"
                              onClick={() => setActive(3)}
                            >
                              <img
                                src={icons.message}
                                alt="message"
                                className="img"
                              />
                            </button>
                          </div>
                        </Shadow>
                      </Card>
                    </GridItem>
                  );
                })}
              </Grid>
            </Details>
          </OverflowContainer>
        </Inner>
      </DesktopView>
      <MobileView>
        <p className="px-2 mobile-title">Matches</p>
        <SecondInner>
          <div className="flex jc-center m">
            <div>
              <button
                className={activeTab === 1 ? "title active" : "title"}
                onClick={() => setActiveTab(1)}
              >
                Likes
              </button>
            </div>
            <div>
              <button
                className={activeTab === 2 ? "title active" : "title"}
                onClick={() => setActiveTab(2)}
              >
                Favorites
              </button>
            </div>
          </div>
          <OverflowContainer className="mt-1">
            <Details>
              <Grid repeat="2">
                {data.map((each) => {
                  return (
                    <GridItem key={each.id}>
                      <Card>
                        <Shadow className="flex jc-space-btw ai-center">
                          <div>
                            <div className="flex">
                              <p className="name">{each.name}, 30</p>
                              <Active size={6} m={6} />
                            </div>
                            <p className="location">Lives in {each.location}</p>
                          </div>
                          <div>
                            <button
                              className="message flex ai-center jc-center"
                              onClick={() => setActive(3)}
                            >
                              <img
                                src={icons.message}
                                alt="message"
                                className="img"
                              />
                            </button>
                          </div>
                        </Shadow>
                      </Card>
                    </GridItem>
                  );
                })}
              </Grid>
            </Details>
          </OverflowContainer>
        </SecondInner>
      </MobileView>
    </>
  );
};

export default Match;
