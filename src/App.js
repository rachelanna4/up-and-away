import "./App.css";
import Header from "./components/Header.jsx";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import WordDisplay from "./components/WordDisplay";
import ClueDisplay from "./components/ClueDisplay";
import CategorySelector from "./components/CategorySelector";
import wordCategories from "./data/word-categories";

import { useState } from "react";

const generateWord = (selectedCategory) => {
  if (!selectedCategory) {
    selectedCategory = "animals";
  }
  const filteredCategory = wordCategories.filter((category) => {
    return category.name === selectedCategory;
  });

  const wordsList = filteredCategory[0].options;

  const wordCount = wordsList.length;
  const index = Math.floor(Math.random() * wordCount);

  const selectedWord = { ...wordsList[index] };
  selectedWord.word = selectedWord.word.toUpperCase();
  return selectedWord;
};

const App = () => {
  const [word, setWord] = useState(generateWord());
  const [letters, setLetters] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);
  const [clueReveal, setClueReveal] = useState(false);
  const [category, setCategory] = useState("");

  const disableGamePlay = () => {
    setGameFinished(true);
  };

  const restartGame = (selectedCategory) => {
    let currentCategory = category;

    if (selectedCategory) {
      currentCategory = selectedCategory;
      setCategory(selectedCategory);
    }

    setWord(generateWord(currentCategory));
    setLetters([]);
    setGameFinished(false);
    setClueReveal(false);
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="game-area">
        <GameStatus
          className="GameStatus"
          word={word.word}
          currLetters={letters}
          disableGamePlay={disableGamePlay}
          restartGame={restartGame}
        />
        <div className="word-area">
          <CategorySelector
            category={category}
            setCategory={setCategory}
            restartGame={restartGame}
          />
          <WordDisplay
            word={word.word}
            letters={letters}
            gameFinished={gameFinished}
          />
          <ClueDisplay
            clue={word.clue}
            clueReveal={clueReveal}
            setClueReveal={setClueReveal}
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
