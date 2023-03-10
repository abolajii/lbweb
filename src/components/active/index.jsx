import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  background: ${({ notification }) => (notification ? "#B50D0D" : "#34C759")};
  background: ${({ bg }) => bg};

  margin-left: ${({ m }) => `${m}px`};
  border-radius: 50%;

  .count {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    color: #ffffff;
  }
`;

const Active = ({ size, m, notification, count, bg }) => {
  if (count) {
    return (
      <div className="flex ai-center">
        <Inner
          bg={bg}
          size={size}
          m={m}
          notification={notification}
          className="flex ai-center jc-center"
        >
          <p className="count">{count}</p>
        </Inner>
      </div>
    );
  }
  return (
    <div className="flex ai-center">
      <Inner size={size} m={m} notification={notification} bg={bg} />
    </div>
  );
};

export default Active;
