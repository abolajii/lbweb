import { FiChevronLeft } from "react-icons/fi";
import React from "react";
import styled from "styled-components";

const Container = styled.button`
  height: 50px;
  width: 50px;
  border: 1px solid #e8e6ea;
  border-radius: 15px;
  background: #fff;
  display: grid;
  place-items: center;
  margin-right: ${({ noMargin }) => !noMargin && `34px`};
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
`;

const GoBack = ({ onClick, size, noMargin, children }) => {
  return (
    <Container onClick={onClick} size={size} noMargin={noMargin}>
      {children ? children : <FiChevronLeft size={30} color="black" />}
    </Container>
  );
};

export default GoBack;
