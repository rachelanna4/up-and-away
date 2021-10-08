const CategorySelector = () => {
    return (
        <select name="category" className="CategorySelector">
            <option value="" selected disabled hidden>Choose a word category</option>
            <option value="animal">Animals</option>
            <option value="halloween">Halloween</option>
        </select>
    )
}

export default CategorySelector; 