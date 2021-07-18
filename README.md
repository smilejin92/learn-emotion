# learn-emotion

css-in-js 중 하나. emotion을 사용하는 방법은 크게 2가지이다.

- Framework Agnostic
- React

&nbsp;

## [Framework Agnostic](https://emotion.sh/docs/@emotion/css)

```shell
npm i @emotion/css
```

- babel plugin 및 기타 설정 필요 X
- auto vendor-prefixing, 중첩 선택자, media query 지원
- `css` 함수를 사용하여 클래스 이름을 생성, `cx` 함수를 사용하여 클래스를 조합
- SSR의 경우 [추가 설정](https://emotion.sh/docs/ssr#api)이 필요
