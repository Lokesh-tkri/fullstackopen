

const Filter = ({searchitem,handlesearchOnchange}) => {
    return (
        <>
        <h1>
            Countries
        </h1>
        <label>Search countries : </label>
        <input value={searchitem} onChange={handlesearchOnchange}></input>
        </>
    )
}


export default Filter;