# learn-emotion

css-in-js 중 하나. emotion을 사용하는 방법은 크게 2가지이다.

- Framework Agnostic
- React

&nbsp;  emotion은 IE 11을 포함한 대부분의 브라우저를 지원한다.

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
  - `styled` API를 사용하지 않고, 컴포넌트와 요소를 직접 스타일링 할 수 있음
  - 함수를 사용하여 theme을 전달 할 수 있음
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

기존의 `styled.div` 패턴에 익숙하다면 `@emotion/styled` 패키지를 사용하여 아래와 같이 작성 할 수 있다.

```shell
npm i @emotion/styled @emotion/react
```

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

&nbsp;

## @emotion/babel-plugin

Babel 플러그인을 사용해 스타일을 압축, 호이스팅하여 최적화 할 수 있다. 또한 소스맵과 label을 통해 개발 경험을 향상시킬 수 있다.

```shell
npm i @emotion/babel-plugin -D
```

```json
// .babelrc
{
  "plugins": ["@emotion", "@emotion/babel-plugin"]
}
```

주의해야 할 것은, `.babelrc` 파일 작성 시 `plugins` 중 첫 번째는 `@emotion`이 되어야한다.

&nbsp;

만약 CRA v2를 사용하거나, `babel-plugin-macros`를 사용한다면 추가 설정 없이 emotion의 Babel macro를 사용 할 수 있다. emotion에서 지원하는 Babel macro는 `import` 한 패키지 이름 뒤에 `/macro`를 추가하여 사용 할 수 있다.

```javascript
import styled from '@emotion/styled/macro';
import { jsx, css, Global, keyframes } from '@emotion/react/macro';
import { css, keyframes, injectGlobal } from '@emotion/css/macro';
```

> **주의**
>
> Babel macro 관련하여 최적화 이슈가 있기 때문에 가능하다면 @emotion/babel-plugin을 사용하는 것을 권장한다.

&nbsp;
