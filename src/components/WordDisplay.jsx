const WordDisplay = ({word, letters, gameFinished}) => {

    let lettersToDisplay = ""

    if (gameFinished) {
        lettersToDisplay = word;
    } else {
    for (let i = 0; i < word.length; i++) {
        if(word[i] === " ") {
            lettersToDisplay += " ";
        } else 
        if (letters.includes(word[i])) {
            lettersToDisplay += word[i]
        } else {
            lettersToDisplay += "_"
        }
    }
}

    return (
        <section className="WordDisplay">
            <h4>The word to guess is:</h4>
            <p>{lettersToDisplay}</p>
        </section>
    )
}

export default WordDisplay; 