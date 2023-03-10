import { Progress, Range } from "./styles";

import React from "react";
import styled from "styled-components";

const Bg = styled.div`
position: absolute;
height: 100%;
width: 100%;
top: 0%;
z-index: 3;
border-radius: 5px;
background: ${({ x }) => {
  return `linear-gradient(to right, #dadae5 0%, #b50d0d  0% ,#b50d0d  ${x}%, #dadae5 0%)`;
}}};
`;

const Min = () => {
  const [min, setMin] = React.useState(0);
  const _max = 250,
    _min = 0;

  return (
    <div>
      <div className="flex ai-center jc-space-btw my-1">
        <p>Distance</p>
        <p>{min}</p>
      </div>

      <Progress>
        <Bg x={(min / _max) * 100} />
        <Range
          type="range"
          min={_min}
          max={_max}
          value={min}
          onChange={(e) => {
            setMin(parseInt(e.target.value));
          }}
        />
      </Progress>
    </div>
  );
};

export default Min;
