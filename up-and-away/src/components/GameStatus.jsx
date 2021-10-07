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


const GameStatus = ({word, currLetters}) => {

    let lives = 9; 

   const wrongLetters = currLetters.filter(letter => {
        return !word.includes(letter)
    })

    lives -= wrongLetters.length

   

    return (
        <h3>{formatLives(lives)}</h3>
    )
}

export default GameStatus; 