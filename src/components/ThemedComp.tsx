/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

export const ThemedComp1 = () => (
  <div css={theme => ({ color: theme.colors.primary })}>Themed Component 1</div>
);

export const ThemedComp2 = styled.div`
  color: ${props => props.theme.colors.primary};
`;

export const ThemedComp3 = () => {
  const theme = useTheme();

  // return <div css={{ color: theme.colors.primary }}>Themed Component 3</div>;

  return (
    <div
      css={css`
        color: ${theme.colors.primary};
      `}
    >
      Themed Component 3
    </div>
  );
};
