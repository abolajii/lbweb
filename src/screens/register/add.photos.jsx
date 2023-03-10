import { tabViewMax, tabViewMin } from "../../responsive/tab";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  ${tabViewMax({
    display: "none",
  })}
`;

const Overflow = styled.div`
  overflow-x: auto;
  gap: 10px;

  scroll-snap-type: x mandatory;
  scroll-padding-inline: 24px;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0px;
  }

  ${tabViewMin({
    display: "none",
  })}
`;

const Card = styled.button`
  height: 270px;
  min-width: 209px;
  border-radius: 15px;
  background: #ffffff;
  border: 1px dashed #e8e6ea;
  border-radius: 15px;
`;

const MiniContainer = styled(Card)`
  height: 202px;
  min-width: 156px;
  border-radius: 11px;
`;

const Add = styled.div`
  height: 58px;
  width: 58px;
  border-radius: 50%;
  background: linear-gradient(180deg, #e83a3a 0%, #b50d0d 100%);
`;

const AddPhotos = () => {
  return (
    <>
      <Overflow className="flex mt-2">
        <MiniContainer className="flex ai-center jc-center">
          <Add />
        </MiniContainer>
        <MiniContainer className="flex ai-center jc-center">
          <Add />
        </MiniContainer>
        <MiniContainer className="flex ai-center jc-center">
          <Add />
        </MiniContainer>
      </Overflow>
      <Container className="flex gap-2 mt-2">
        <Card className="flex ai-center jc-center">
          <Add />
        </Card>
        <Card className="flex ai-center jc-center">
          <Add />
        </Card>
        <Card className="flex ai-center jc-center">
          <Add />
        </Card>
        <Card className="flex ai-center jc-center">
          <Add />
        </Card>
      </Container>
    </>
  );
};

export default AddPhotos;
