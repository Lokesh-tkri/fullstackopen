

const Filter = ({searchitem,handlesearchOnchange}) => {
    return (
        <>
        <h1>
            Phone Book
        </h1>
        <label>Search option : </label>
        <input value={searchitem} onChange={handlesearchOnchange}></input>
        </>
    )
}


export default Filter;