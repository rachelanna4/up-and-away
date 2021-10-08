const GameImage = ({currLives, winStatus}) => {

    if (winStatus) {
        return (
            <img src="/game-images/pig-win.png" alt="pig flying with wings"/>
        )
    } else {
        return (
            <img src={`/game-images/pig-${currLives}.png`} alt="character with balloon"/>
        )
    }



}

export default GameImage; 