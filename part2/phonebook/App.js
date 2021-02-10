import React,{useEffect, useState} from 'react'
import Notes from './components/Notes'
import Filter from './components/Filter'
import Formui from './components/Formui'
import axios from 'axios'


const App = () => {
  const [allnotes,setAllnotes] = useState([])
  const [newnote,setNewnote] = useState('')
  const [newnum,setNewnum] = useState('')
  const [searchitem,setSearchitem] = useState('')
  const [showall,setShowall] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setAllnotes(response.data)
    })
  },[])

  const authnote = ((name,number) => {
    return allnotes.find((note) => (note.name === name|| note.number === number))
  })

  const addnote = (event) => {
    event.preventDefault()
    let noteobj = {
      name:newnote,
      number:newnum
    }
    if(authnote(noteobj.name,noteobj.number)){
      alert(`${noteobj.name} or ${noteobj.number} already exists`)
      noteobj = []
    }
    console.log(noteobj)
    if(noteobj.name==='' || noteobj.number===''){
      alert("name or number should not be empty")
      console.log(noteobj)
      noteobj = []
    }
    setAllnotes(allnotes.concat(noteobj))
    setNewnote('')
    setNewnum('')
  }

  const handlenameOnchange = (event) => {
    setNewnote(event.target.value)
  }

  const handlenumOnchange = (event) => {
    setNewnum(event.target.value)
  } 

  const handlesearchOnchange = (event) => {
    setSearchitem(event.target.value)
    let filtervar = true
    if(event.target.value !== ''){
      filtervar = false
    }
    setShowall(filtervar)
  }

  const filterfunc = () => {
    const rep = `^${searchitem}.*`
    const regp = new RegExp(rep,'i')
    const resset = allnotes.filter((note)=>{
      return regp.test(note.name)
    })
    return resset
  }

  const notestodisplay = showall ? allnotes : filterfunc()
  
  return (
    <div>
      <Filter searchitem={searchitem} handlesearchOnchange={handlesearchOnchange} />
      <Formui submitfunc={addnote} statevars={[newnote,newnum]} handlefuncs={[handlenameOnchange,handlenumOnchange]} />
      <Notes notestodisplay={notestodisplay} />
    </div>
  )
}

export default App;