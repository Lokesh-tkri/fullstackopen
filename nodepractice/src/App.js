import React,{useEffect, useState} from 'react'
import Notes from './components/Notes'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [allnotes,setAllnotes] = useState([])
  const [searchitem,setSearchitem] = useState('')
  const [showall,setShowall] = useState(true)


  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setAllnotes(response.data)
    })
  },[])

 
  const handlesearchOnchange = (event) => {
    setSearchitem(event.target.value)
    let filtervar = true
    if(event.target.value !== ''){
      filtervar = false
    }
    setShowall(filtervar)
  }

  const filterfunc = () => {
    const rep = `${searchitem}.*`
    const regp = new RegExp(rep,'i')
    let resset = allnotes.filter((note)=>{
      return regp.test(note.name)
    })
    return resset
  }

  const notestodisplay = showall ? allnotes : filterfunc()
  
  return (
    <div>
      <Filter searchitem={searchitem} handlesearchOnchange={handlesearchOnchange} />
      <Notes notes={notestodisplay} />
    </div>
  )
}

export default App;