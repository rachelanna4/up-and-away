import "./App.css";
import Header from "./components/Header.jsx";
import GameImage from "./components/GameImage";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import WordDisplay from "./components/WordDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <GameImage />
      <Keyboard />
      <GameStatus />
      <WordDisplay />
    </div>
  );
}

export default App;
