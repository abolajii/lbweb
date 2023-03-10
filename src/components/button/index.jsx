import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 340px;
  height: 56px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  background: white;
  color: black;
  .icon {
    margin-right: 16px;
    width: 16px;
    height: 16px;
  }

  &.mb {
    margin: 15px 0;
  }

  &.fill {
    background: linear-gradient(180deg, #e83a3a 0%, #b50d0d 100%);
    color: white;
  }

  ${({ bg }) => {
    return bg ? `background : ${bg}` : null;
  }};
  ${({ color }) => {
    return color ? `color : ${color}` : null;
  }};
  ${({ width }) => {
    return width ? `width : ${width}` : null;
  }};
  ${({ height }) => {
    return height ? `height : ${height}px` : null;
  }};

  ${({ logout }) => {
    return (
      logout &&
      "border: 1px solid #B50D0D; color: #b50d0d; font-weight: bold; font-size: 14px;"
    );
  }};
`;

const Button = ({
  children,
  flex,
  title,
  fill,
  onPressOne,
  onPressTwo,
  bg,
  color,
  width,
  height,
  logout,
}) => {
  if (logout) {
    return (
      <Container logout={logout} className="mb" onClick={onPressTwo}>
        {children}
        <p>Delete Account</p>
      </Container>
    );
  }

  if (flex) {
    return (
      <Container className="mb" onClick={onPressTwo}>
        {children}
        <p>{title ? title : "Continue"}</p>
      </Container>
    );
  } else {
    return (
      <Container
        bg={bg}
        width={width}
        height={height}
        color={color}
        onClick={onPressOne}
        className={fill ? "fill" : ""}
      >
        <p>{title ? title : "Continue"}</p>
      </Container>
    );
  }
};

export default Button;
