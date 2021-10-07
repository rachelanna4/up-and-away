import "./App.css";
import Header from "./components/Header.jsx";
import GameImage from "./components/GameImage";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import WordDisplay from "./components/WordDisplay";
import { useState } from "react";

function App() {
  const wordGenerator = "MITTENS";
  const [word] = useState(wordGenerator);
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
}

export default App;
