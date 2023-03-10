import Button from "../button";
import React from "react";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${({ index }) => (index ? index + 1 : 3)};
`;

const Inner = styled.div`
  height: 650px;
  width: 550px;
  background: white;
  border-radius: 15px;

  .modal-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #000000;
  }

  .modal-name {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #b50d0d;
    margin-bottom: 30px;
  }
`;

const Relative = styled.div`
  height: 230px;
  width: 209px;
  border-radius: 15px;
  position: relative;
`;

const BoxOne = styled(Relative)`
  background: teal;
  position: absolute;
  z-index: 5;
  left: -60px;
  transform: rotate(-12deg);
`;

const BoxTwo = styled(Relative)`
  background: cyan;
  position: absolute;
  top: -70px;
  z-index: 4;
  transform: rotate(4deg);
`;

const LoadingModal = ({ match, index, name, setModal }) => {
  if (match) {
    return (
      <Container className="flex ai-center jc-center" index={index}>
        <Inner className="center flex-col">
          <Relative className="mt-3">
            <BoxOne />
            <BoxTwo />
          </Relative>

          <p className="modal-title mt-1">It's a match !!!</p>
          <p className="my modal-name">{name}</p>

          <div className="">
            <Button
              fill
              title="Start Conversation"
              onPressOne={() => setModal(false)}
            />
            <Button title="Skip for now" onPressOne={() => setModal(false)} />
          </div>
        </Inner>
      </Container>
    );
  }
  return (
    <Container className="flex ai-center jc-center">
      <ScaleLoader color="#E83A3A" />
    </Container>
  );
};

export default LoadingModal;
