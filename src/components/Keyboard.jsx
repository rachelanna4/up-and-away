const Keyboard = ({currLetters, setLetters, gameFinished}) => {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const addLetter = (letter) => {
        const newLetterList = [...currLetters, letter];
        setLetters(newLetterList);
      };
    

    return (
        <section className="Keyboard">
        {alphabet.map(letter => {
            return <button key={letter} onClick={() => addLetter(letter)} disabled={currLetters.includes(letter) || gameFinished}>{letter}</button>
          })
        }
        </section>
    )
}

export default Keyboard; 