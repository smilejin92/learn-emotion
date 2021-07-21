/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from '@emotion/react';
import './App.css';
import { EmotionCompObj, EmotionCompString } from './components/Emotion';
import { GlobalStyles } from './components/GlobalStyles';
import { BouncingText } from './components/Keyframes';
import { NestedStyle } from './components/NestedSelector';
import { ResponsiveComp1, ResponsiveComp2 } from './components/ResponsiveComps';
import {
  Button,
  Child,
  DangerButton,
  PrimaryButton,
} from './components/StyledComponents';
import { ArticleText, P, SmallArticleText } from './components/StyleOrder';
import { ThemedComp1, ThemedComp2, ThemedComp3 } from './components/ThemedComp';

function App() {
  const dangerStyle = css`
    color: red;
  `;

  const baseStyle = css`
    color: turquoise;
    background-color: darkgreen;
  `;

  const theme = {
    colors: {
      primary: 'blue',
    },
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
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
          <NestedStyle />
          <ResponsiveComp1 />
          <ResponsiveComp2 />
          <BouncingText />
          <ThemedComp1 />
          <ThemedComp2>Themed Component 2</ThemedComp2>
          <ThemedComp3 />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
