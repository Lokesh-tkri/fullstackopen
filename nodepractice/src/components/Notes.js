import { useEffect, useState } from "react";
import React from 'react';
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

const buttonclick = (note) => {
  console.log('in button...')
  console.log(note);
  return (
  <>
  </>)
}

const Note = ({note}) => {
    return (
      <>
        <li style={{'listStyle' : 'none'}}>
          {note.name}
          <button onClick={() => buttonclick(note)}> details</button>
        </li>
      </>
    )
}

const Results = ({notes}) => {
  return (
    <>
    <ul>
      {notes.map((note,i)=>{
        return (<Note key={i} note={note} />)
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


const Totnotes = ({notes}) => {

  if (notes.length > 10){
    return (<Toomany />)
  }else if(notes.length === 1){
    return (<Singlenote note={notes[0]} />)
  }else {
    return(
      <Results notes={notes} />
    )
  }
}

const Notes = ({notes}) => {
  
    return (
      <>
        <Totnotes notes={notes}/>
      </>
    )
}


export default Notes;