const Keyboard = () => {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


    return (
        <section>
        {alphabet.map(letter => {
            return <button>{letter}</button>
          })
        }
        </section>
    )
}

export default Keyboard; 