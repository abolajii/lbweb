import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 20px;
  bottom: 10px;

  p {
    font-size: 13px;
  }
`;

const CopyRight = () => {
  return (
    <Container>
      <p>© 2023 Lovebirdz. All Rights Reserved</p>
    </Container>
  );
};

export default CopyRight;
