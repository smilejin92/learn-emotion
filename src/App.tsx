import './App.css';
import { EmotionCompObj, EmotionCompString } from './components/Emotion';

function App() {
  return (
    <div className="App">
      <EmotionCompObj>css prop - string style 사용</EmotionCompObj>
      <EmotionCompString>css prop - object style 사용</EmotionCompString>
    </div>
  );
}

export default App;
