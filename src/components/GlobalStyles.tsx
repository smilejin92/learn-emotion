import { css, Global } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      #root {
        font-size: 14px;
        margin: 0;
        padding: 0;
      }
    `}
  />
);
