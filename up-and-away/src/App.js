import "./App.css";
import Header from "./components/Header.jsx";
import GameImage from "./components/GameImage";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import WordDisplay from "./components/WordDisplay";
import { useState } from "react";

function App() {
  const wordGenerator = "mittens";
  const [word] = useState(wordGenerator);
  const chosenLetters = ["t"];
  const [letters] = useState(chosenLetters);

  return (
    <div className="App">
      <Header />
      <GameImage />
      <Keyboard />
      <GameStatus />
      <WordDisplay word={word} letters={letters} />
    </div>
  );
}

export default App;
