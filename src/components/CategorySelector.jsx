const CategorySelector = ({category, setCategory, restartGame}) => {
    return (
        <select name="category" className="CategorySelector" value={category} onChange={(event) => {
            restartGame(event.target.value);
        }}>
            <option value="" disabled hidden>Choose a category</option>
            <option value="animals">Animals 🦊</option>
            <option value="countries">Countries 🌍 </option>
            <option value="nintendo">Nintendo Characters 🎮 </option>
            <option value="harryPotter">Harry Potter Characters 🪄</option>
            <option value="superheroes">Superheroes and Villians 🦸🏻</option>
            <option value="halloween">Halloween 🎃</option>
            <option value="christmas">Christmas 🎄</option>
        </select>
    )
}

export default CategorySelector; 