import React from "react";
import styled from "styled-components";

const GenderOption = styled.button`
  height: 58px;
  width: 170px;
  background: #ffffff;
  border: 1px solid #e8e6ea;
  border-radius: 15px;

  .gender-option {
    font-size: 15px;
  }

  &.active {
    background: #b50d0d;
    color: #fff;
  }
`;

const Gender = ({ active, setActive }) => {
  return (
    <div className="flex gap-3 mb-2">
      <GenderOption
        onClick={() => setActive(1)}
        className={
          active === 1
            ? "px-1 flex ai-center jc-start active"
            : "px-1 flex ai-center jc-start"
        }
      >
        <p className="gender-option">Woman</p>
      </GenderOption>
      <GenderOption
        className={
          active === 2
            ? "px-1 flex ai-center jc-start active"
            : "px-1 flex ai-center jc-start"
        }
        onClick={() => setActive(2)}
      >
        <p className="gender-option">Man</p>
      </GenderOption>
    </div>
  );
};

export default Gender;
