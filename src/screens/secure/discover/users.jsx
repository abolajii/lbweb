import { Active } from "../../../components";
import { MdLocationOn } from "react-icons/md";
import React from "react";
import { colors } from "../../../constants";
import { mobileViewMax } from "../../../responsive/mobile";
// import { people } from "./data";
import styled from "styled-components";

const Relative = styled.div`
  height: 450px;
  width: 321px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.1);
  transition: transform 0.5s;
  position: relative;

  ${mobileViewMax({
    height: "430px",
    width: "300px",
  })}
`;

const people = [
  {
    id: 1,
    bg: "#B1DDF1",
    offset: { x: 0, y: 0 },
    coords: [0, 0],
    direction: "",
    button: "",
    location: "Atlanta",
    miles: "10",
    name: "Amanda",
    age: 29,
  },
  {
    id: 2,
    bg: "#9F87AF",
    offset: { x: 0, y: 0 },
    coords: [0, 0],
    direction: "",
    button: "",
    location: "New orleans",
    miles: "20",
    name: "Mary",
    age: 21,
  },
  {
    id: 3,
    bg: "#88527F",
    offset: { x: 0, y: 0 },
    coords: [0, 0],
    direction: "",
    button: "",
    location: "Georgia",
    miles: "30",
    name: "Myarr",
    age: 39,
  },
  {
    id: 4,
    bg: "#614344",
    offset: { x: 0, y: 0 },
    coords: [0, 0],
    direction: "",
    button: "",
    location: "Washington",
    miles: "29",
    name: "Angela",
    age: 40,
  },
  {
    id: 5,
    bg: "#332C23",
    offset: { x: 0, y: 0 },
    coords: [0, 0],
    direction: "",
    button: "",
    location: "New York",
    miles: "17",
    name: "Micheal",
    age: 35,
  },
];

const Card = styled.div.attrs(
  ({
    x,
    y,
    rotate,
    direction,
    index,
    transformCard,
    width,
    height,
    button,
  }) => {
    if (button) {
      switch (button) {
        case "like":
          return {
            style: {
              transform: "translate(500%, 0%) rotate(100deg)",
            },
          };
        case "dislike":
          return {
            style: {
              transform: "translate(-500%, 0%) rotate(-100deg)",
            },
          };
        case "fav":
          return {
            style: {
              transform: "translate(0%, -500%)",
            },
          };

        default:
          break;
      }
    }
    if (transformCard) {
      return {
        style: {
          transform: `translateY(${-20 * index}px)`,
        },
      };
    }

    if (!direction) {
      return {
        style: {
          transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
        },
      };
    }

    if (direction === "right" || direction === "left") {
      const move = direction === "right" ? 1 : -1;
      return {
        style: {
          transform: `translate(${move * width}px, ${y}px) rotate(${
            90 * move
          }deg)`,
        },
      };
    } else if (direction === "up") {
      const move = -1;
      return {
        style: {
          transform: `translate(${x}px, ${move * height}px)`,
        },
      };
    } else {
      return null;
    }
  }
)`
  height: 100%;
  width: 100%;
  background: ${({ bg }) => bg};
  border-radius: 9px;
  cursor: pointer;
  transition: transform 1s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ i }) => i + 1};

  .miles {
    position: absolute;
    top: 29px;
    left: 15px;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 5px;
    align-items: center;
    width: 110px;
    height: 34px;
    color: white;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
    overflow: hidden;
  }

  .miles-text {
    font-size: 12px;
    margin-left: 2px;
  }

  .bottom-container {
    height: 160px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.35) 50.06%,
      rgba(0, 0, 0, 0.35) 100%
    );
    border-radius: 20px 20px 9px 9px;
  }
  .view-profile {
    padding: 5px 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 7.5px;
    width: 127px;
    height: 34px;
    color: white;
    font-size: 12px;
  }

  .text {
    font-size: 23px;
    font-weight: 500;
    color: #fff;
    margin-right: 10px;
    line-height: 130%;
  }

  .location {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
`;

const LoveBirdz = ({
  setCards,
  cards,
  setActive,
  setSingleCard,
  setActiveDiscover,
  setHide,
}) => {
  const [transformCard, setTransformCard] = React.useState(true);
  const [cardIndex, setCardIndex] = React.useState(0);
  const [isCardMoving, setIsCardMoving] = React.useState(false);
  const [isCardDropped, setIsCardDropped] = React.useState(false);

  const threeSliceArr = cards?.slice(0, 3).map((each, index) => {
    return {
      ...each,
      index,
    };
  });

  const boxRef = React.useRef(null);

  const dismissCard = React.useCallback(
    (direction) => {
      setIsCardMoving(false);

      const newCards = cards.map((each, index) => {
        if (index === cardIndex) {
          return { ...each, direction };
        } else {
          return each;
        }
      });
      setCards(newCards);
      setTimeout(() => {
        setCards(
          cards.filter((each, index) => {
            return index !== cardIndex;
          })
        );

        setTransformCard(true);
      }, 400);
    },
    [cards, cardIndex, setCards]
  );

  const handleMouseMove = (e) => {
    // mousemove event
    const newCards = cards.map((each, index) => {
      if (index === cardIndex) {
        setIsCardMoving(true);
        return { ...each, coords: [e.clientX, e.clientY] };
      } else {
        return each;
      }
    });
    setCards(newCards);
  };

  const handleCardMove = React.useCallback(
    (e) => {
      const { clientX, clientY } = e;
      const newCards = cards.map((each, index) => {
        if (index === cardIndex) {
          return {
            ...each,
            offset: {
              x: clientX - each.coords[0],
              y: clientY - each.coords[1],
            },
          };
        } else {
          return each;
        }
      });
      setCards(newCards);
      //dismiss card
      if (
        Math.abs(cards[cardIndex].offset.x) >
        boxRef?.current?.clientWidth * 0.25
      ) {
        const direction = cards[cardIndex].offset.x > 0 ? "right" : "left";
        dismissCard(direction);
      }

      if (cards[cardIndex].offset.y < 0) {
        // dismissCard("down");
        Math.abs(cards[cardIndex].offset.y) >
          boxRef?.current?.clientHeight * 0.3 && dismissCard("up");
      }
      setIsCardDropped(true);
    },
    [cards, cardIndex, dismissCard, setCards]
  );

  const handleCardDropped = React.useCallback(
    (e) => {
      const newCards = cards.map((each, index) => {
        if (index === cardIndex) {
          setIsCardMoving(true);
          setIsCardDropped(true);
          return {
            ...each,
            offset: { x: 0, y: 0 },
          };
        } else {
          return each;
        }
      });
      setCards(newCards);
      setIsCardMoving(false);
      setTransformCard(true);
    },
    [cards, cardIndex, setCards]
  );

  React.useEffect(() => {
    if (isCardMoving) window.addEventListener("mousemove", handleCardMove);
    else window.removeEventListener("mousemove", handleCardMove);
    return () => window.removeEventListener("mousemove", handleCardMove);
  }, [isCardMoving, handleCardMove]);

  React.useEffect(() => {
    if (isCardDropped) window.addEventListener("mouseup", handleCardDropped);
    else window.removeEventListener("mouseup", handleCardDropped);
    return () => window.removeEventListener("mouseup", handleCardDropped);
  }, [isCardDropped, handleCardDropped]);

  return (
    <div className="center">
      <Relative ref={boxRef} className="center">
        {cards.length === 0 && <p></p>}
        {threeSliceArr?.map((each, index) => {
          return (
            <Card
              key={each.id}
              button={each.button}
              bg={each.bg}
              x={each.offset.x}
              y={each.offset.y}
              rotate={each.offset.x * 0.1}
              width={window.innerWidth}
              height={window.innerHeight}
              i={people.length - each.id}
              index={each.index}
              direction={each.direction}
              transformCard={transformCard}
              onMouseDown={(e) => {
                if (people.length - each.id === cards.length - 1) {
                  setCardIndex(index);
                  handleMouseMove(e);
                  setTransformCard(false);
                }
              }}
              onMouseUp={(e) => {
                setTransformCard(true);
              }}
            >
              <div>
                <div className="miles flex ai-center">
                  <MdLocationOn
                    name="location"
                    size={18}
                    color={colors.white}
                  />
                  <p className="miles-text">{each.miles} miles away</p>
                </div>
                <div className="bottom">
                  <div className="bottom-container py-1 px-1 ">
                    <div className="flex ai-center jc-center">
                      <button
                        className="view-profile mt"
                        onClick={() => {
                          setSingleCard(each);
                          setActiveDiscover(1);
                          setHide(true);
                        }}
                      >
                        Tap to view profile
                      </button>
                    </div>
                    <div className="textContainer mt-1 flex ai-center">
                      <div className="nameAge">
                        <p className="text">
                          {each.name}, {each.age}
                        </p>
                      </div>
                      <Active size={10} />
                    </div>
                    <p className="location">
                      Lives in {each.location || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </Relative>
    </div>
  );
};

export default LoveBirdz;
