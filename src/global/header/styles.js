import styled from "styled-components";

export const DropDownContainer = styled.div`
  position: relative;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 80px;
  right: 0px;
  height: 117px;
  width: 257px;
  background: #ffffff;
  border: 1px solid #e8e6ea;
  border-radius: 7px 3px 7px 7px;
  z-index: 3;
`;

export const DropDownItem = styled.div`
  ${({ none }) => {
    return !none && "border-bottom: 1px solid #ffe5e5";
  }};
  padding: 10px 0;
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #3b3a3c;
  }

  button {
    background: none;
  }

  img {
    height: 16px;
    width: 15px;
    margin-right: 10px;
  }

  .dropdown-icon {
    margin-right: 10px;
  }
`;
