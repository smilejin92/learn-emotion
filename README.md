# learn-emotion

css-in-js 중 하나. emotion을 사용하는 방법은 크게 2가지이다.

- Framework Agnostic
- React

emotion은 IE 11을 포함한 대부분의 브라우저를 지원한다.

&nbsp;

## [Framework Agnostic](https://emotion.sh/docs/@emotion/css)

```shell
npm i @emotion/css
```

- babel plugin 및 기타 설정 필요 X
- auto vendor-prefixing, 중첩 선택자, media query 지원
- `css` 함수를 사용하여 클래스 이름을 생성, `cx` 함수를 사용하여 클래스를 조합
- SSR의 경우 [추가 설정](https://emotion.sh/docs/ssr#api)이 필요

&nbsp;

## [React](https://emotion.sh/docs/@emotion/react)

```shell
npm i @emotion/react
```

- 빌드 환경을 수정 할 수 있는 React 프로젝트에 적합
- `css` prop 지원
  - `style` prop과 유사함. auto vendor-prefixing, 중첩 선택자, media query 지원
  - `styled` API를 사용하지 않고, 컴포넌트와 요소를 직접 수정 할 수 있음
  - 함수를 사용하여 theme을 전달 할 수 있음.
- SSR의 경우 추가 설정이 필요 없음
- theming 지원
- ESLint 플러그인 사용 가능

```jsx
// 아래 주석을 작성하여 babel이 jsx(React.createElement)를 emotion의 jsx 함수로 대신 사용 할 수 있게한다.

/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const color = 'white';

render(
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>,
);
```

&nbsp;

```shell
npm i @emotion/styled @emotion/react
```

기존의 `styled.div` 패턴에 익숙하다면 `@emotion/styled` 패키지를 사용하여 아래와 같이 작성 할 수 있다.

```jsx
import styled from '@emotion/styled';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

render(<Button>This my button component.</Button>);
```
