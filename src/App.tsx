/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import './App.css';
import { EmotionCompObj, EmotionCompString } from './components/Emotion';
import {
  Button,
  Child,
  DangerButton,
  PrimaryButton,
} from './components/StyledComponents';
import { ArticleText, P, SmallArticleText } from './components/StyleOrder';

function App() {
  const dangerStyle = css`
    color: red;
  `;

  const baseStyle = css`
    color: turquoise;
    background-color: darkgreen;
  `;

  return (
    <div className="App">
      <EmotionCompObj>css prop - string style 사용</EmotionCompObj>
      <EmotionCompString>css prop - object style 사용</EmotionCompString>
      <P>normal text</P>
      <ArticleText>article text</ArticleText>
      <SmallArticleText>small article text</SmallArticleText>
      <Button>Styled Button</Button>
      <PrimaryButton>Primary Button</PrimaryButton>
      <DangerButton>Danger Button</DangerButton>
      <Child>Child</Child>
      <div>
        <div css={baseStyle}>color는 turquoise이다.</div>
        <div css={[dangerStyle, baseStyle]}>
          base 클래스가 더 나중에 전달되었기 때문에 color는 turquoise이다.
        </div>
        <div css={[baseStyle, dangerStyle]}>
          danger 클래스가 더 나중에 전달되었기 때문에 color는 red이다.
        </div>
      </div>
    </div>
  );
}

export default App;
