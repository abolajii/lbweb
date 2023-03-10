import React from "react";
import { images } from "../../../constants";
import { mobileViewMax } from "../../../responsive/mobile";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;

  .gap-2 {
    ${mobileViewMax({
      gap: "10px",
    })}
  }
`;

const Button = styled.button`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  border-radius: 50%;
  margin-left: ${({ m }) => `${m}px`};
  margin-right: ${({ m }) => `${m}px`};
  background: ${({ like }) =>
    like ? "linear-gradient(180deg, #E83A3A 0%, #B50D0D 100%);" : "#fff"};

  .close {
    height: 15px;
    width: 15px;
  }

  .fav {
    height: 30px;
    width: 32px;

    ${mobileViewMax({
      height: "26px",
      width: "28px",
    })}
  }

  .like {
    height: 28px;
    width: 33px;
  }

  &.fav-btn {
    ${mobileViewMax({
      height: "80px",
      width: "83px",
    })}
  }

  ${mobileViewMax({
    height: "70px",
    width: "73px",
  })}
`;

const SwipeButton = ({
  cards,
  setCards,
  swipeLikeUser,
  swipePassUser,
  swipeFavoriteUser,
}) => {
  return (
    <Container>
      <div className="flex ai-center gap-2">
        <Button
          size={78}
          className="flex jc-center ai-center"
          onClick={() => {
            const newCard = cards[0];
            setCards(
              cards.map((c) => {
                if (c.id === newCard.id) {
                  swipePassUser(c);
                  newCard.button = "dislike";
                }
                return c;
              })
            );
            setTimeout(() => {
              setCards(
                cards.filter((each) => {
                  return each.id !== newCard.id;
                })
              );
            }, 300);
          }}
        >
          <img src={images.close} alt="close" className="close" />
        </Button>
        <Button
          className="flex jc-center ai-center fav-btn"
          size={100}
          fav
          m={20}
          onClick={() => {
            const newCard = cards[0];
            setCards(
              cards.map((c) => {
                if (c.id === newCard.id) {
                  newCard.button = "fav";
                  swipeFavoriteUser(c);
                }
                return c;
              })
            );
            setTimeout(() => {
              setCards(
                cards.filter((each) => {
                  return each.id !== newCard.id;
                })
              );
            }, 300);
          }}
        >
          <img src={images.star} alt="fav" className="fav" />
        </Button>
        <Button
          onClick={() => {
            const newCard = cards[0];
            setCards(
              cards.map((c) => {
                if (c.id === newCard.id) {
                  swipeLikeUser(c);
                  newCard.button = "like";
                }
                return c;
              })
            );
            setTimeout(() => {
              setCards(
                cards.filter((each) => {
                  return each.id !== newCard.id;
                })
              );
            }, 300);
          }}
          className="flex jc-center ai-center"
          size={78}
          like
        >
          <img src={images.lovetwo} alt="close" className="fav" />
        </Button>
      </div>
    </Container>
  );
};

export default SwipeButton;
