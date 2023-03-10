import { colors } from "../../constants";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;

  .textContainer {
    align-items: center;
    justify-content: center;
  }
  .text {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .margin {
    margin: 13px 25px;
  }

  .thirdPartyLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }

  .thirdPartyLoginLine {
    height: 1px;
    width: 110px;
    background-color: ${colors.grey};
  }

  .thirdPartyLoginText {
    font-size: 16px;
    margin: 0 10px;
  }

  .login {
    margin-right: 3px;
    font-size: 14px;
  }

  .m-15 {
    margin: 23px 0;
  }

  a {
    color: #b50d0d;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const Icon = styled.img`
  margin-right: 16px;
  width: 16px;
  height: 16px;
  object-fit: contain;
`;
