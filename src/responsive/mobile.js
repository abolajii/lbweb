import { css } from "styled-components";

const mobileViewMin = (props) => {
  return css`
    @media (min-width: 600px) {
      ${props}
    }
  `;
};

const mobileViewMax = (props) => {
  return css`
    @media (max-width: 600px) {
      ${props}
    }
  `;
};

export { mobileViewMin, mobileViewMax };
