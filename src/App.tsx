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
    </div>
  );
}

export default App;
