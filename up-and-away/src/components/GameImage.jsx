const GameImage = ({currLives, winStatus, restartGame}) => {

    if (winStatus) {
        return (
            <img className="GameImage" src="/game-images/pig-win.png" alt="pig flying with wings" onClick={() => {
                restartGame();
            }}/>
        )
    } else if (currLives === 0) {
        return (
            <img className="GameImage" src="/game-images/pig-0.png" alt="pig on the ground sat in a mud puddle" onClick={() => {
                restartGame();
            }}/>
        )
    }else if (currLives === 1) {
        return (
            <img className="GameImage" src="/game-images/pig-1.png" alt="pig with 1 balloon"/>
        )
    } else {
        return (
            <img className="GameImage" src={`/game-images/pig-${currLives}.png`} alt={`pig with ${currLives} balloons`}/>
        )
    }



}

export default GameImage; 