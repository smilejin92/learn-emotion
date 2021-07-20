/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const paragraph = css`
  color: turquoise;

  & a {
    color: currentColor;
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }
`;

export const NestedStyle = () => (
  <p css={paragraph}>
    <a href="/">a 태그는 중첩 선택자에 의해 스타일됨</a>
  </p>
);
