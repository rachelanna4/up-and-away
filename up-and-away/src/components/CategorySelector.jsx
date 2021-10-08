const CategorySelector = ({restartGame}) => {
    return (
        <select name="category" className="CategorySelector" onChange={(event) => {
            restartGame(event.target.value);
        }}>
            <option value="" selected disabled hidden>Choose a word category</option>
            <option value="animals">Animals</option>
            <option value="halloween">Halloween</option>
            <option value="harryPotter">Harry Potter Characters</option>
            <option value="superheroes">Superheroes and Villians</option>
        </select>
    )
}

export default CategorySelector; 