const ClueDisplay = ({clue, clueReveal, setClueReveal}) => {
    
    
    return (
        <section className="ClueDisplay">
          <button onClick={() => {
              setClueReveal(true)
          }} className={clueReveal ? "hidden" : ""}>I'm stuck! Give me a clue.</button>
          <p className={!clueReveal ? "hidden": ""}>{clue}</p>
        </section>
    )
}

export default ClueDisplay; 