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

   if (hasWon(word, currLetters)) {
       return (
           <h3>You have won and pigs CAN fly!</h3>
       )
   }

    return (
        <section>
        <GameImage />
        <h3>{formatLives(lives)}</h3>
        </section>
    )
}

export default GameStatus; 