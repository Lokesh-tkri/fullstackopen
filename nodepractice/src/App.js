import React,{useEffect, useState} from 'react'
import Notes from './components/Notes'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [allnotes,setAllnotes] = useState([])
  const [searchitem,setSearchitem] = useState('')
  const [notestodisplay,setnotestodisplay] = useState(allnotes)


  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setAllnotes(response.data);
    })
  },[allnotes])

 
  const handlesearchOnchange = (event) => {
    setSearchitem(event.target.value)
    setnotestodisplay(filterfunc())
  }

  const filterfunc = () => {
    const rep = `${searchitem}.*`
    const regp = new RegExp(rep,'i')
    let resset = allnotes.filter((note)=>{
      return regp.test(note.name)
    })
    return resset
  }

  return (
    <div>
      <Filter searchitem={searchitem} handlesearchOnchange={handlesearchOnchange} />
      <Notes notes={notestodisplay} setnote={setnotestodisplay} />
    </div>
  )
}

export default App;