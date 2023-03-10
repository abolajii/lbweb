import { Button } from "../../../components";
import Min from "../../../components/slider/min";
import MinMax from "../../../components/slider/minmax";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  button {
    width: 100%;
  }
  position: relative;

  .btn {
    position: absolute;
    bottom: 18px;
    width: 100%;
    left: 0;
    z-index: 1;
  }
  .selected {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #b50d0d;
  }
`;

const UpdateProfile = ({ data, value, minMax, min, _min, _max, inches }) => {
  const [active, setActive] = React.useState(value);

  if (minMax) {
    return (
      <Container>
        <div className="px-1">
          <MinMax _max={_max} _min={_min} inches={inches} />
        </div>
        <div className="flex ai-center jc-center btn px-1">
          <Button fill title="Save" />
        </div>
      </Container>
    );
  }
  if (min) {
    return (
      <Container>
        <div className="px-1">
          <Min />
        </div>
        <div className="flex ai-center jc-center btn px-1">
          <Button fill title="Save" />
        </div>
      </Container>
    );
  }
  return (
    <Container>
      {data?.map((each) => {
        return (
          <button
            key={each.id}
            className="flex ai-center jc-space-btw border-bottom-2 py-1"
          >
            <div>
              <p className="value">{each.name}</p>
            </div>
            {active === each.name && <div className="selected" />}
          </button>
        );
      })}
      <div
        className={
          data.length < 8
            ? "flex ai-center jc-center btn"
            : "flex ai-center jc-center mt-3"
        }
      >
        <Button fill title="Save" />
      </div>
    </Container>
  );
};

export default UpdateProfile;
