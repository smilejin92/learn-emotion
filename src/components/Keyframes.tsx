/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

// const bounce = keyframes`
// 	from, 20%, 53%, 80%, to {
// 		transform: translated3d(0, 0, 0);
// 	}

// 	40%, 43% {
// 		transform: translate3d(0, -30px, 0);
// 	}

// 	70% {
// 		transform: translate3d(0, -15px, 0);
// 	}

// 	90% {
// 		transform: translate3d(0, -4px, 0);
// 	}
// `;

const bounce = keyframes({
  'from, 20%, 53%, 80%, to': {
    transform: 'translated3d(0, 0, 0)',
  },
  '40%, 43%': {
    transform: 'translate3d(0, -30px, 0)',
  },
  '70%': {
    transform: 'translate3d(0, -15px, 0)',
  },
  '90%': {
    transform: 'translate3d(0, -4px, 0)',
  },
});

export const BouncingText = () => (
  <div
    css={css`
      animation: ${bounce} 1s ease infinite;
    `}
  >
    Bouncing Text
  </div>
);
