/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface EmotionCompProps {
  children: ReactNode;
}

// object style
export const EmotionCompObj = ({ children }: EmotionCompProps) => (
  <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'white',
      },
    }}
  >
    {children}
  </div>
);

// string style - css 함수 필요 (from @emotion/react)
export const EmotionCompString = ({ children }: EmotionCompProps) => (
  <div
    css={css`
      background-color: hotpink;
      &:hover {
        color: white;
      }
    `}
  >
    {children}
  </div>
);
