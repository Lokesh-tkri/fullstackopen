import { useEffect, useState } from "react";

import axios from 'axios'


const Weather = ({data}) => {
  return (
    <div>
      <p>temperature:{data.current.temperature}</p>
      <p>wind:{data.current.wind_speed}</p>
    </div>
  )
}

const tempdata = {
  current: {
  temperature: 0,
  wind_speed: 0
  }
  }

const Singlenote = ({note}) => {

  console.log('in singlenote...');
  console.log(note);
  console.log('in singlenote...end');
  
  const [data,setdata] = useState(tempdata)
  console.log(note)
  const hook = () => {
    let url = 'http://api.weatherstack.com/current?access_key='+process.env.REACT_APP_API_KEY+'&query='+note.capital;
    const func = (response) => {
      setdata(response.data)
    }
    axios.get(url).then(func)
  }
  useEffect(hook,[note.capital])
  
  return (
    <>
    <h1>{note.name}</h1>
    <p>capital : {note.capital}</p>
    <p>population : {note.population}</p>
    <h2>Languages</h2>
    <ul>
      {note.languages.map((lang,i)=>{
        return (
          <li key={i} >{lang.name}</li>
        )
      })}
    </ul>
    <img src={note.flag} alt='flag'></img>
    <h2>
      Weather
    </h2>
      <Weather data={data} /> 
    </> 
  )
}



const Button = ({note,handlefunc}) => {
  return (
    <button onClick={() => handlefunc([note])}> details</button>
  )
}

const Note = ({note,handlefunc}) => {
  return (
  <>
  {note.name}
  <Button note={note} handlefunc={handlefunc} />
  </>
  )
}

const Results = ({notes,handlefunc}) => {
  return (
    <>
    <ul>
      {notes.map((note,i)=>{
        return (
          <li style={{'listStyle' : 'none'}}>
            <Note key={i} note={note} handlefunc={handlefunc} />
          </li>
          )
      })}
    </ul>
    </>
  )
}

const Toomany = () => {
  return (
    <p>Too many results, specify more filters</p>
  )
}



const Notes = ({notes,setnote}) => {
  if (notes.length > 10){
    return (<Toomany />)
  }else if(notes.length === 1){
    return (<Singlenote note={notes[0]} />)
  }else {
    return(
      <Results notes={notes} handlefunc={setnote}/>
    )
  }
}


export default Notes;