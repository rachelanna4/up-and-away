const formatLives = (lives) => {
    let livesText = ""; 

    if (lives === 1) {
        livesText = `${lives} life`
    } else {
        livesText = `${lives} lives`
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
        <h3>You have {formatLives(lives)} left!</h3>
    )
}

export default GameStatus; 