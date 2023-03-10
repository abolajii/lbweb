import styled from "styled-components";

export const Range = styled.input`
  position: absolute;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  top: -8px;
  left: 0px;
  width: 101%;
  outline: none;
  pointer-events: none;
  z-index: 8;

  ::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    pointer-events: auto;
    width: 20px;
    height: 20px;
    background: #b50d0d;
    border-radius: 50%;
    cursor: grab;
    z-index: 9;
  }

  ::-webkit-slider-runnable-track {
    appearance: none;
  }
`;

export const Progress = styled.div`
  position: relative;
  height: 5px;
  width: 101%;
  background: #dadae5;
  border-radius: 5px;
`;

export const Relative = styled.div`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  height: 100%;
  top: 0%;
  background: #b50d0d;
  right: ${({ right }) => `${right}%`};
  z-index: 3;
`;
