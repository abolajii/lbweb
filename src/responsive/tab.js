import { css } from "styled-components";

const tabViewMin = (props) => {
  return css`
    @media (min-width: 768px) {
      ${props}
    }
  `;
};

const tabViewMax = (props) => {
  return css`
    @media (max-width: 768px) {
      ${props}
    }
  `;
};

export { tabViewMin, tabViewMax };
