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

- 프레임워크에 관계 없이 사용 가능
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
  "plugins": ["@emotion"]
}
```

&nbsp;

만약 CRA v2를 사용하거나, `babel-plugin-macros`를 사용 중이라면, 추가 설정 없이 emotion의 Babel macro를 사용 할 수 있다. emotion에서 지원하는 Babel macro는 `import` 한 패키지 이름 뒤에 `/macro`를 추가하여 사용 할 수 있다.

```javascript
import styled from '@emotion/styled/macro';
import { jsx, css, Global, keyframes } from '@emotion/react/macro';
import { css, keyframes, injectGlobal } from '@emotion/css/macro';
```

&nbsp;

> **주의**
>
> Babel macro 관련하여 최적화 이슈가 있기 때문에 가능하다면 @emotion/babel-plugin을 사용하는 것을 권장한다.

&nbsp;

## `css` Prop

emotion을 사용하여 요소를 스타일링 하는 대표적인 방법은 `css` Prop이다. `css` Prop을 사용하는 방법은 2가지가 있다.

- Babel Preset - babel config를 수정 할 수 있는 React 프로젝트
- JSX Pragma - babel config를 수정 할 수 없는 React 프로젝트 (ex. CRA)

컴파일 시 두 가지 방법 모두 같은 결과 코드를 생성한다. preset 설정 혹은 pragma 사용 시 React의 jsx 코드는 emotion의 jsx 함수로 대체된다.

|        | before                                              | after                               |
| ------ | --------------------------------------------------- | ----------------------------------- |
| input  | `<img src ="avatar.png" />`                         | `<img src ="avatar.png" />`         |
| output | `React.createElement('img', { src: 'avatar.png' })` | `jsx('img', { src: 'avatar.png' })` |

&nbsp;

### Babel preset

**.babelrc**

```json
// React v16.14.0 미만
{
  "presets": ["@emotion/babel-preset-css-prop"]
}

// React v16.14.0 이상
{
  "presets": [
    [
      "@babel/preset-react",
      { "runtime": "automatic", "importSource": "@emotion/react" }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}

// Next.js
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

알아봐야할 점: `.babelrc`의 plugins에 첫 번째 요소는 `@emotion`이 되어야했는데, 왜 이 예제에서는 누락되었는지?

&nbsp;

### JSX Pragma

`css` Prop을 사용하는 소스 파일 상단에 jsx Pragma를 작성하는 방법이다. babel config를 수정 할 수 없는 상황에서 쓰인다.

```javascript
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
```

jsx pragma 사용 시 `jsx` 함수를 import 해야한다.

&nbsp;

만약 CRA v4을 사용 중이라면 위 pragma는 동작하지 않고, 아래와 같이 수정하여 사용해야한다.

```javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
```

&nbsp;

### `css` prop 사용

`className` prop을 가진 요소, 혹은 컴포넌트는 `css` prop을 사용 할 수 있다. `css` prop에 전달된 스타일은 계산된 클래스 네임으로 평가되어 `className` prop에 적용된다.

**1. [Object 스타일](https://emotion.sh/docs/object-styles)**

`css` prop에 스타일 객체를 전달하여 사용

```tsx
/** @jsxImportSource @emotion/react */
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
```

&nbsp;

**2. String 스타일**

`css` prop에 `css` 함수를 사용

```tsx
/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

interface EmotionCompProps {
  children: ReactNode;
}

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
```

&nbsp;

> **Note**
>
> `@emotion/react` 패키지의 `css` 함수는 객체를 반환한다. 해당 객체는 계산된 클래스 이름과, flattened 스타일 정보를 포함한다. 이 객체는 `css` prop 안에서 다른 emotion style과 조합하여 사용될 수 있고, 다른 `css` 함수 콜과 사용될 수 있으며, `styled` API와도 함께 사용될 수 있다.
>
> <img src="https://user-images.githubusercontent.com/32444914/126188652-e08e6e84-ea7c-4075-a355-0de15002ccfd.png" alt="Screen Shot 2021-07-19 at 9.16.15 PM" style="zoom:50%;" />

&nbsp;

## 스타일 우선 순위

**1. `className` prop으로 전달된 emotion 스타일은 `css` prop에 전달된 스타일을 override한다.**

예를 들어, 아래 `P` 컴포넌트와 `Article` 컴포넌트를 각각 `App` 컴포넌트에서 렌더해보자.

```tsx
/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from 'react';

type ParagraphComponentProps = ComponentPropsWithoutRef<'p'>;

export const P = ({ children, ...rest }: ParagraphComponentProps) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: '1.5',
      fontFamily: 'sans-serif',
      color: 'black',
    }}
    {...rest}
  >
    {children}
  </p>
);

export const ArticleText = ({ children, ...rest }: ParagraphComponentProps) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      color: 'darkgray',
    }}
    {...rest} // <- props contains the `className` prop
  >
    {children}
  </P>
);

export default function App() {
  return (
    <>
      <P>normal text</P>
      <ArticleText>article text</ArticleText>
    </>
  );
}
```

먼저 `P` 컴포넌트의 세부사항을 살펴보면 아래와 같다.

<img src="https://user-images.githubusercontent.com/32444914/126280921-5f8d9b0f-fbe5-464e-85ab-6349bc48eade.png" alt="Screen Shot 2021-07-20 at 4.07.23 PM" style="zoom:50%;" />

`p` 요소에 `css` prop으로 전달한 스타일을 위와 같이 확인 할 수 있다. 그렇다면 `P` 컴포넌트를 사용하는 `ArticleText` 컴포넌트는 어떨까? 아래 이미지를 확인해보자.

<img src="https://user-images.githubusercontent.com/32444914/126280995-4ff49de3-80b8-4ff5-951e-85b070e95318.png" alt="Screen Shot 2021-07-20 at 4.07.35 PM" style="zoom:50%;" />

먼저 `P` 컴포넌트의 `css` prop에 전달한 스타일을 위 이미지 좌측에서 확인 할 수 있다. 이 스타일은 `P` 컴포넌트의 `className` prop으로 전달된다(위 이미지 형광색 화살표 참고). `className` prop으로 전달된 emotion 스타일은 `p` 요소의 `css` prop에 작성된 스타일을 override한다. 따라서 `ArticleText` 컴포넌트의 최종 스타일은 아래와 같다.

* <del>color: black</del>
* color: dartgray
* <del>fontFamily: "sans-serif"</del>
* fontFamily: "Geogia, serif"
* <del>fontSize: 12</del>
* fontSize: 14
* lineHeight: "1.5"
* margin: 0

즉, 부모로부터 전달받은 `className` prop을 통해 emotion 컴포넌트(`css` prop으로 스타일된)의 스타일을 커스텀 할 수 있다.

&nbsp;  

**2. emotion 스타일이 아닌 클래스 이름을 `className` prop에 전달하면, 해당 클래스 이름은 emotion 클래스 이름에 append되며, 스타일은 무시된다.**

위에서 사용한 `ArticleText` 컴포넌트에 emotion 스타일이 아닌 클래스 이름을 추가해보자.

```css
/* App.css */
.non-emotion-style {
  color: blue;
}
```

```tsx
/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from 'react';
import './App.css'; // 전역 스타일 import

type ParagraphComponentProps = ComponentPropsWithoutRef<'p'>;

export const ArticleText = ({ children, ...rest }: ParagraphComponentProps) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: 'Georgia, serif',
      color: 'darkgray',
    }}
    {...rest} // <- props contains the `className` prop
  >
    {children}
  </P>
);

export default function App() {
  return (
    <div>
      <ArticleText className="non-emotion-style">article text</ArticleText>
    </div>
  );
}
```

<img src="https://user-images.githubusercontent.com/32444914/126281129-e838172f-e7b6-4fdd-b7c3-7a8cf1f643d9.png" alt="Screen Shot 2021-07-20 at 4.31.40 PM" style="zoom:50%;" />

&nbsp;

