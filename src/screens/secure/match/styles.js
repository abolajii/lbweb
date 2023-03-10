import { mobileViewMax, mobileViewMin } from "../../../responsive/mobile";

import styled from "styled-components";

export const Inner = styled.div`
  padding: 30px;
  background: #f3f3f3;

  .title {
    font-weight: 500;
    font-size: 15px;
    line-height: 150%;
    text-align: center;
    color: #3b3a3c;
    width: 197px;
    padding: 10px;
    border-bottom: 2px solid #ffe7e7;
    cursor: pointer;
    margin-bottom: 30px;

    ${mobileViewMax({
      width: "150px",
      padding: "0px",
      background: "transparent",
    })}
  }

  .active {
    color: #b50d0d;
    border-bottom: 2px solid #b50d0d;
  }

  button {
    background: none;
  }

  .name {
    font-style: normal;
    font-weight: 500;
    font-size: 14.5455px;
    line-height: 150%;
  }

  .location {
    font-style: normal;
    font-weight: 400;
    font-size: 8.48485px;
    line-height: 150%;
  }

  .message {
    width: 30px;
    height: 30px;
    background: #797675;
    border-radius: 50%;
  }

  .img {
    height: 25px;
    width: 25px;
    object-fit: contain;
  }
`;

export const OverflowContainer = styled.div`
  height: 600px;
  width: 100%;
`;

export const Details = styled.div`
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    margin-block: 20px;
  }
  &::-webkit-scrollbar-track {
    background: #ffe7e7;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b50d0d;
    opacity: 0.5;
    border-radius: 20px;
  }
`;

export const Card = styled.div`
  height: 230px;
  width: 180px;
  border-radius: 7px;
  background: rgba(0, 0, 0, 0.03);
  position: relative;
  color: #ffffff;
`;

export const Grid = styled.div`
  display: grid;
  // grid-template-columns: repeat(4, 1fr);
  place-items: center;
  grid-template-columns: ${({ repeat }) => `repeat(${repeat}, 1fr)`};
`;

export const GridItem = styled.div`
  margin-bottom: 30px;
`;

export const Shadow = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.35) 50.06%,
    rgba(0, 0, 0, 0.35) 100%
  );
  border-radius: 0px 0px 7px 7px;
  height: 80px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 10px;
`;
