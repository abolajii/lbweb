import React from "react";
import { icons } from "../../constants";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  .interest-item {
    height: 45px;
    width: 160px;
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
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .active {
    background-color: #b50d0d;
    color: white;
  }

  .white {
    tint-color: white;
  }
`;

const OverflowContainer = styled.div`
  height: 250px;
  width: 100%;
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

const InterestBox = styled.div`
  width: 97%;
`;

const data = [
  { id: 1, name: "Photography", image: icons.camera, isActive: false },
  {
    id: 2,
    name: "Shopping",
    image: icons.shopping,
    isActive: false,
  },
  { id: 3, name: "Karaoke", image: icons.karaoke, isActive: false },

  { id: 4, name: "Yoga", image: icons.yoga, isActive: false },
  { id: 5, name: "Cooking", image: icons.cooking, isActive: false },
  { id: 6, name: "Tennis", image: icons.tennis, isActive: false },
  { id: 7, name: "Run", image: icons.run, isActive: false },
  { id: 8, name: "Swimming", image: icons.swim, isActive: false },
  { id: 9, name: "Art", image: icons.art, isActive: false },
  { id: 10, name: "Traveling", image: icons.travel, isActive: false },
  { id: 11, name: "Extreme", image: icons.extreme, isActive: false },
  { id: 12, name: "Music", image: icons.music, isActive: false },
  { id: 13, name: "Drink", image: icons.drink, isActive: false },
  { id: 14, name: "Video games", image: icons.game, isActive: false },
];

const Interests = ({ selectedItems, setSelectedItems }) => {
  const getSelected = (interest) => selectedItems?.includes(interest.id);

  const selectItems = (item) => {
    if (selectedItems?.includes(item.id)) {
      const newListItems = selectedItems.filter(
        (listItem) => listItem !== item.id
      );
      return setSelectedItems([...newListItems]);
    }
    setSelectedItems([...selectedItems, item.id]);
  };

  return (
    <Container className="mt-1">
      <OverflowContainer>
        <Details>
          <InterestBox>
            <div className="grid grid-2 mb-1 gap-1">
              {data.map((each) => {
                return (
                  <div key={each.id} className="mb-1">
                    <button
                      onClick={() => {
                        selectItems(each);
                      }}
                      className={
                        getSelected(each)
                          ? "interest-item flex ai-center active"
                          : "interest-item flex ai-center"
                      }
                    >
                      <div className="interest-icon">
                        <img
                          src={each.image}
                          alt={each.name}
                          className={getSelected(each) ? "white" : ""}
                        />
                      </div>
                      <p className="interest-text">{each.name}</p>
                    </button>
                  </div>
                );
              })}
            </div>
          </InterestBox>
        </Details>
      </OverflowContainer>
    </Container>
  );
};

export default Interests;
