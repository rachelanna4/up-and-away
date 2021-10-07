import "./App.css";
import Header from "./components/Header.jsx";
import GameImage from "./components/GameImage";
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
  const [word] = useState(generateWord());
  const chosenLetters = [];
  const [letters, setLetters] = useState(chosenLetters);

  return (
    <div className="App">
      <Header />
      <GameImage />
      <Keyboard currLetters={letters} setLetters={setLetters} />
      <GameStatus word={word} currLetters={letters} />
      <WordDisplay word={word} letters={letters} />
    </div>
  );
};

export default App;
