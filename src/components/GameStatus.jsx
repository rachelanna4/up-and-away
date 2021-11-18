import GameImage from "./GameImage";

const formatLives = (lives) => {
    let livesText = ""; 

    if (lives === 1) {
        livesText = `life`
    } else {
        livesText = `lives`
    }

    return livesText;
}

const hasWon = (word, currLetters) => {
    const wordLetters = word.replace(" ", "")

    if (wordLetters.split("").every(letter => currLetters.includes(letter))) {
        return true
    }
    return false
}


const GameStatus = ({word, currLetters, disableGamePlay, restartGame}) => {

    let lives = 9; 

   const wrongLetters = currLetters.filter(letter => {
        return !word.includes(letter)
    })

    lives -= wrongLetters.length

    const winStatus = hasWon(word, currLetters)

    if (winStatus || lives === 0) {
        disableGamePlay()
    }

   if (winStatus) {
       return (
           <section className = "score-area">
             <GameImage lives={lives} winStatus={winStatus} restartGame={restartGame}/>
             <h3 className="GameStatus">You have won and pigs <em>CAN</em> fly! <br/><span className="play-again">Click on Penelope to play again</span></h3>
             
           </section>
       )
   } else if (lives === 0) {
    return (
        <section className="score-area">
          <GameImage currLives={lives} winStatus={winStatus} restartGame={restartGame}/>
          <h3 className="GameStatus">Penelope has fallen from the sky! <br/><span className="play-again">Click on her to play again</span></h3>
        </section>
    )
   } else {
    return (
        <section className="score-area">
          <GameImage currLives={lives} winStatus={winStatus}/>
          <h3 className="GameStatus">You have <span>{lives}</span> {formatLives(lives)} left!</h3>
        </section>
    )
   }
}

export default GameStatus; 