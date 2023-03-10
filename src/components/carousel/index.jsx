import React, { useRef } from "react";

import Active from "../active";
import images from "../../constants/images";
import styled from "styled-components";
import { useAuth } from "../../context/user.context";

const Container = styled.div`
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .box-two {
    margin-left: 4rem;
  }

  .image-one {
    height: 28px;
    width: 34px;
    border-radius: 0px;
    top: -50px;
    transform: rotate(15.58deg) scale(1);

    -webkit-animation: heartbeat 1.9s ease-in-out infinite both;
    animation: heartbeat 1.9s ease-in-out infinite both;

    /* ----------------------------------------------
 * Generated by Animista on 2023-2-22 17:16:8
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

    /**
 * ----------------------------------------
 * animation heartbeat
 * ----------------------------------------
 */
    @-webkit-keyframes heartbeat {
      from {
        -webkit-transform: rotate(15.58deg) scale(1);
        transform: rotate(15.58deg) scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: rotate(15.58deg) scale(0.91);
        transform: rotate(15.58deg) scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: rotate(15.58deg) scale(0.98);
        transform: rotate(15.58deg) scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: rotate(15.58deg) scale(0.87);
        transform: rotate(15.58deg) scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: rotate(15.58deg) scale(1);
        transform: rotate(15.58deg) scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
    @keyframes heartbeat {
      from {
        -webkit-transform: rotate(15.58deg) scale(1);
        transform: rotate(15.58deg) scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: rotate(15.58deg) scale(0.91);
        transform: rotate(15.58deg) scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: rotate(15.58deg) scale(0.98);
        transform: rotate(15.58deg) scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: rotate(15.58deg) scale(0.87);
        transform: rotate(15.58deg) scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: rotate(15.58deg) scale(1);
        transform: rotate(15.58deg) scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
  }

  .image-two {
    height: 42px;
    width: 51px;
    border-radius: 0px;

    -webkit-animation: heartbeatTwo 1.5s ease-in-out infinite both;
    animation: heartbeatTwo 1.5s ease-in-out infinite both;

    /* ----------------------------------------------
 * Generated by Animista on 2023-2-22 17:16:8
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

    /**
 * ----------------------------------------
 * animation heartbeat
 * ----------------------------------------
 */
    @-webkit-keyframes heartbeatTwo {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
    @keyframes heartbeatTwo {
      from {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      10% {
        -webkit-transform: scale(0.91);
        transform: scale(0.91);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      17% {
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
      33% {
        -webkit-transform: scale(0.87);
        transform: scale(0.87);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
      }
      45% {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
      }
    }
  }
  .bold {
    font-size: 55px;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: white;
  }
`;

const Inner = styled.div`
  width: 600px;
  height: 750px;
  background: rgba(181, 13, 13, 0.25);
  border: 1px solid #e2b6b6;
  border-radius: 16px;
  padding-top: 67px;
`;

const Top = styled.div`
  margin-bottom: 70px;
`;

const Bottom = styled.div`
  .line {
    height: 10px;
    width: 48px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.9);
  }

  .dots {
    gap: 8px;
    margin-top: 20px;
  }
`;

const Overflow = styled.div`
  overflow-x: auto;
  gap: 10px;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 24px;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0px;
  }

  .text-box {
    position: absolute;
    bottom: 0px;
    height: 100px;
    width: 100%;

    p {
      font-weight: 600;
      font-size: 45px;
      line-height: 57px;
      color: #e0e0e0;
    }
  }
`;

const Box = styled.div`
  transition: all 0.5s;
  height: 360px;
  min-width: 235px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  transform: ${({ y }) => `scale(${y})`};
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const boxes = [
  { id: 1, img: images.meet, text: "meet" },
  { id: 2, img: images.match, text: "match" },
  { id: 3, img: images.date, text: "date" },
];

const Carousel = () => {
  const { carouselId, setCarouselId } = useAuth();

  const boxRef = useRef(null);

  React.useEffect(() => {
    const overFlowContainer = boxRef.current;

    const widthToScroll = overFlowContainer.children[0].offsetWidth / 2;

    overFlowContainer.scrollLeft = overFlowContainer.offsetWidth;

    let autoScroll;

    overFlowContainer.onscroll = function () {
      if (overFlowContainer.scrollLeft === 0) {
        overFlowContainer.classList.add("no-smooth");
        overFlowContainer.scrollLeft =
          overFlowContainer.scrollWidth - 2 * overFlowContainer.offsetWidth;
        overFlowContainer.classList.remove("no-smooth");
        setCarouselId(1);
      } else if (
        overFlowContainer.scrollLeft ===
        overFlowContainer.scrollWidth - overFlowContainer.offsetWidth
      ) {
        overFlowContainer.classList.add("no-smooth");
        overFlowContainer.scrollLeft = overFlowContainer.offsetWidth;
        overFlowContainer.classList.remove("no-smooth");
        setCarouselId(3);
      } else if (overFlowContainer.scrollLeft === 117.5) {
        setCarouselId(2);
      }

      if (autoScroll) {
        clearTimeout(autoScroll);
      }

      autoScroll = setTimeout(() => {
        overFlowContainer.classList.remove("no-smooth");
        overFlowContainer.scrollLeft += widthToScroll;

        if (
          overFlowContainer.scrollLeft ===
          overFlowContainer.scrollWidth - overFlowContainer.offsetWidth
        ) {
          overFlowContainer.scrollLeft = 0;
        }
      }, 3300);
    };
  }, [setCarouselId]);
  return (
    <Container className="flex flex-1 ai-center jc-center">
      <Inner className="py-2 px-2">
        <Top>
          <div className="flex ai-center">
            <div className="flex flex-1 flex-col">
              <p className="bold">Find your</p>
              <p className="bold">soulmate</p>
            </div>
            <div className="box-two ml-3 flex flex-1 flex-col relative">
              <div className="image-one absolute">
                <img src={images.love} alt="love" />
              </div>
              <div className="image-two">
                <img src={images.lovetwo} alt="love-two" />
              </div>
            </div>
          </div>
        </Top>
        <Bottom>
          <Overflow className="flex" ref={boxRef}>
            {boxes.map((box) => {
              return (
                <Box
                  className="relative"
                  key={box.id}
                  bg={box.bg}
                  y={carouselId === box.id ? 1 : 0.9}
                >
                  <Image src={box.img} alt="image" />
                  <div className="text-box flex ai-center jc-center">
                    <p>{box.text}</p>
                  </div>
                </Box>
              );
            })}
          </Overflow>
          <div className="dots flex">
            {boxes.map((box) => {
              return box.id === carouselId ? (
                <div className="line" key={box.id} />
              ) : (
                <Active size={10} bg="rgba(255,255,255,0.6)" key={box.id} />
              );
            })}
          </div>
        </Bottom>
      </Inner>
    </Container>
  );
};

export default Carousel;
