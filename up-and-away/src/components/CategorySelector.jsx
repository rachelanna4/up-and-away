const CategorySelector = ({restartGame}) => {
    return (
        <select name="category" className="CategorySelector" onChange={(event) => {
            restartGame(event.target.value);
        }}>
            <option value="" selected disabled hidden>Choose a word category</option>
            <option value="animals">Animals</option>
            <option value="halloween">Halloween</option>
        </select>
    )
}

export default CategorySelector; 