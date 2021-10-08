import "./App.css";
import Header from "./components/Header.jsx";

import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import WordDisplay from "./components/WordDisplay";
import { useState } from "react";

const generateWord = () => {
  const wordsList = [
    "RAINDROP",
    "ROSES",
    "WHISKERS",
    "KITTEN",
    "KETTLE",
    "MITTENS",
    "PACKAGE",
    "STRING",
    "APPLE",
    "STRUDEL",
    "SNOWFLAKE",
  ];
  const wordCount = wordsList.length;
  const index = Math.floor(Math.random() * wordCount);
  return wordsList[index];
};

const App = () => {
  const [word, setWord] = useState(generateWord());
  const [letters, setLetters] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);

  const disableGamePlay = () => {
    setGameFinished(true);
  };

  const restartGame = () => {
    setWord(generateWord());
    setLetters([]);
    setGameFinished(false);
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="game-area">
        <GameStatus
          className="GameStatus"
          word={word}
          currLetters={letters}
          disableGamePlay={disableGamePlay}
          restartGame={restartGame}
        />
        <div className="word-area">
          <WordDisplay
            word={word}
            letters={letters}
            gameFinished={gameFinished}
          />
          <Keyboard
            currLetters={letters}
            setLetters={setLetters}
            gameFinished={gameFinished}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
