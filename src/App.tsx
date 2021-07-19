import './App.css';
import { EmotionCompObj, EmotionCompString } from './components/Emotion';
import { ArticleText, P, SmallArticleText } from './components/StyleOrder';

function App() {
  return (
    <div className="App">
      <EmotionCompObj>css prop - string style 사용</EmotionCompObj>
      <EmotionCompString>css prop - object style 사용</EmotionCompString>
      <P>normal text</P>
      <ArticleText>article text</ArticleText>
      <SmallArticleText>small article text</SmallArticleText>
    </div>
  );
}

export default App;
