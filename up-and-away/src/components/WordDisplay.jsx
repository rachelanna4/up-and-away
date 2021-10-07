const WordDisplay = ({word, letters}) => {

    let lettersToDisplay = ""

    for (let i = 0; i < word.length; i++) {
        if(letters.includes(word[i])) {
            lettersToDisplay += word[i]
        } else {
            lettersToDisplay += "_"
        }
    }

    const splitWord = lettersToDisplay.split("").join(" ")

    return (
        <section>
            <h4>The word to guess is:</h4>
            <p>{splitWord}</p>
        </section>
    )
}

export default WordDisplay; 