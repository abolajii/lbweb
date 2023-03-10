import { css } from "styled-components";

const laptopViewMin = (props) => {
  return css`
    @media (min-width: 992px) {
      ${props}
    }
  `;
};

const laptopViewMax = (props) => {
  return css`
    @media (max-width: 992px) {
      ${props}
    }
  `;
};

export { laptopViewMin, laptopViewMax };
