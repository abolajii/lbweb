import { css } from "styled-components";

const desktopViewMin = (props) => {
  return css`
    @media (min-width: 1200px) {
      ${props}
    }
  `;
};

const desktopViewMax = (props) => {
  return css`
    @media (max-width: 1200px) {
      ${props}
    }
  `;
};

export { desktopViewMin, desktopViewMax };
