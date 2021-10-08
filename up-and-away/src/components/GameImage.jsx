const GameImage = ({currLives, winStatus}) => {

    if (winStatus) {
        return (
            <img src="/game-images/pig-win.png" alt="pig flying with wings"/>
        )
    } else if (currLives === 1) {
        return (
            <img src="/game-images/pig-1.png" alt="pig with 1 balloon"/>
        )
    } else {
        return (
            <img src={`/game-images/pig-${currLives}.png`} alt={`pig with ${currLives} balloons`}/>
        )
    }



}

export default GameImage; 