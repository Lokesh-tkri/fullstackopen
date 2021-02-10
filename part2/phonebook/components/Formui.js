

const Label = ({label}) => {
    return (
        <label>{label}</label>
    )
}

const Input = ({label,statevar,handlefunc}) => {
    return (
        <>
            <Label label={label} />
            <input value={statevar} onChange={handlefunc}></input>
            <br />
        </>
    )
}


const Formui = (props) => {
    const {statevars,handlefuncs,submitfunc} = props
    const labels = ['name : ','number : ']
    return (
        <div>
        <h2>add a new contact</h2>
        <form onSubmit={submitfunc}>
            {labels.map((label,i) => <Input key={i} label={label} statevar={statevars[i]} handlefunc={handlefuncs[i]}/>)}
          <br />
          <button type='submit'>Add</button>
        </form>
      </div>
    )
}


export default Formui;