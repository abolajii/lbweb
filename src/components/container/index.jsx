import Button from "../button";
import Carousel from "../carousel";
import CopyRight from "../copyright/index";
import GoBack from "../goback";
import LogoHeader from "../logoheader";
import MinWidth from "../minwidth";
import Progress from "../progress";
import React from "react";
import styled from "styled-components";
const Animation = styled.div`
  background: linear-gradient(180deg, #e83a3a 0%, #b50d0d 100%);
  height: 850px;
`;

const Inner = styled.div`
  min-height: 830px;

  .number {
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    color: #3b3a3c;
    margin-bottom: 20px;
    margin-top: 8px;
  }

  .otp-input input {
    height: 40px !important;
    width: 40px !important;
  }

  .react-tel-input input {
    width: 100%;
  }
`;

const BoxOne = styled.div`
  height: 500px;
  position: relative;

  .number {
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    color: #3b3a3c;
    margin-bottom: 20px;
    margin-top: 8px;
  }

  .otp-input input {
    height: 40px !important;
    width: 40px !important;
  }
`;

const Container = ({
  children,
  two,
  header,
  onClick,
  btntitle,
  fill,
  onPressOne,
  title,
  noBtn,
  progress,
}) => {
  if (two) {
    return (
      <div className="flex">
        <div className="flex flex-1 bg-color flex-col">
          <Inner className="relative">
            <div className="center flex-col">
              <LogoHeader />
              <MinWidth>
                {header && (
                  <div className={noBtn ? "text-center" : "flex ai-center"}>
                    {!noBtn && <GoBack onClick={onClick} />}
                    <p className="header-title">{title}</p>
                  </div>
                )}
                {progress && <Progress />}
                {children}
                {header && (
                  <div className="my-2 center">
                    <Button
                      bg="#DED7D7"
                      color="#fff"
                      onPressOne={onPressOne}
                      fill={fill}
                      title={btntitle}
                    />
                  </div>
                )}
              </MinWidth>
              <CopyRight />
            </div>
          </Inner>
        </div>
        <div className="flex flex-1">
          <Animation className="flex flex-1">
            <Carousel />
          </Animation>
        </div>
      </div>
    );
  }
  return (
    <div className="center bg-color flex-col">
      <div className="my-2">
        <LogoHeader />
      </div>
      <MinWidth>
        <div className={noBtn ? "text-center" : "flex ai-center mb-1"}>
          {!noBtn && <GoBack onClick={onClick} />}
          <p className="header-title mb">{title}</p>
        </div>
        <BoxOne>
          {children}
          <div className="my-2 center">
            <Button
              bg="#DED7D7"
              color="#fff"
              onPressOne={onPressOne}
              fill={fill}
              title={btntitle}
            />
          </div>
        </BoxOne>
        <p className="sm center my-1">© 2023 Lovebirdz. All Rights Reserved</p>
      </MinWidth>
    </div>
  );
};

export default Container;
