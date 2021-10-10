const CategorySelector = ({category, setCategory, restartGame}) => {
    return (
        <select name="category" className="CategorySelector" value={category} onChange={(event) => {
            restartGame(event.target.value);
        }}>
            <option value="" disabled hidden>Choose a word category</option>
            <option value="animals">Animals 🦊</option>
            <option value="nintendo">Nintendo Characters 🎮 </option>
            <option value="harryPotter">Harry Potter Characters 🪄</option>
            <option value="superheroes">Superheroes and Villians 🦸🏻</option>
            <option value="halloween">Halloween 🎃</option>
        </select>
    )
}

export default CategorySelector; 