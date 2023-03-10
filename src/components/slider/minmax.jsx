import React from "react";
import { convertToFootInches } from "../../helpers/convert.inch";
import styled from "styled-components";

const Range = styled.input`
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

const Progress = styled.div`
  position: relative;
  height: 5px;
  width: 101%;
  background: #dadae5;
  border-radius: 5px;
`;

const Relative = styled.div`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  height: 100%;
  top: 0%;
  background: #b50d0d;
  right: ${({ right }) => `${right}%`};
  z-index: 3;
`;

const MinMax = ({ _min, _max, inches }) => {
  const [min, setMin] = React.useState(_min);
  const [max, setMax] = React.useState(_max);

  const gap = 5;

  const left =
    ((Math.min(parseInt(min), parseInt(max)) - _min) / (_max - _min)) * 100;

  const right =
    100 -
    ((Math.max(parseInt(max), parseInt(min)) - _min) / (_max - _min)) * 100;

  return (
    <div className="my">
      <div className="flex ai-center jc-space-btw my-1">
        <p>{inches ? convertToFootInches(min) : min}</p>
        <p>{inches ? convertToFootInches(max) : max}</p>
      </div>
      <div>
        <Progress>
          <Range
            type="range"
            min={_min}
            max={_max}
            value={min}
            onChange={(e) => {
              if (max - parseInt(e.target.value) >= gap) {
                setMin(parseInt(e.target.value));
              }
            }}
          />
          <Range
            type="range"
            min={_min}
            max={_max}
            value={max}
            onChange={(e) => {
              if (parseInt(e.target.value) - min >= gap) {
                setMax(parseInt(e.target.value));
              }
            }}
          />
          <Relative left={left} right={right} />
        </Progress>
      </div>
    </div>
  );
};

export default MinMax;
