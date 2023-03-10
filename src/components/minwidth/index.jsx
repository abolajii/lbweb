import React from "react";
import styled from "styled-components";

const MinWidthContainer = styled.div`
  max-width: 340px;
  margin: auto;
`;

const MinWidth = ({ children }) => {
  return <MinWidthContainer>{children}</MinWidthContainer>;
};

export default MinWidth;
