import GameImage from "./GameImage";

const formatLives = (lives) => {
    let livesText = ""; 

    if (lives <= 0) {
        livesText = `Game Over: Penelope has fallen from the sky!`
    } else if (lives === 1) {
        livesText = `You have ${lives} life left!`
    } else {
        livesText = `You have ${lives} lives left!`
    }

    return livesText;
}

const hasWon = (word, currLetters) => {
    if (word.split("").every(letter => currLetters.includes(letter))) {
        return true
    }
    return false
}


const GameStatus = ({word, currLetters}) => {

    let lives = 9; 

   const wrongLetters = currLetters.filter(letter => {
        return !word.includes(letter)
    })

    lives -= wrongLetters.length

    const winStatus = hasWon(word, currLetters)

   if (winStatus) {
       return (
           <section className = "score-area">
             <GameImage lives={lives} winStatus={winStatus}/>
             <h3 className="GameStatus">You have won and pigs CAN fly!</h3>
           </section>
       )
   } else {
    return (
        <section className="score-area">
          <GameImage currLives={lives} winStatus={winStatus}/>
          <h3 className="GameStatus">{formatLives(lives)}</h3>
        </section>
    )
   }
}

export default GameStatus; 