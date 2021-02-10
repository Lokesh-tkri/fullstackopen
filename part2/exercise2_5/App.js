/*import React, { useState } from 'react';
import Notes from './Notes';

  const App = ({notes}) => {
    const [allnotes,setAllnotes] = useState(notes)
    const [newnote,setNewnote] = useState('')
    const [showall,setshowall] = useState(true)

    const addnote = (event) => {
      event.preventDefault()
      const nnote = {
        content:newnote,
        date: new Date().toISOString(),
        importtant: Math.random() > 0.5,
        id: allnotes.length+1
      }
      setAllnotes(allnotes.concat(nnote))
      setNewnote('')
    }

    const handleOnchange = (event) => {
      setNewnote(event.target.value)
    }



const notestodisplay = showall?allnotes:allnotes.filter(note => note.important)


    return (
      <div>
        <h1>Notes</h1>
        <button onClick={()=>setshowall(!showall)}>
          show {showall?'important':'all'}
        </button>
        {notestodisplay.map((note,i) => (<Notes key={i} content={note.content}/>))}
        
        
        <form onSubmit={addnote}>
          <label >new note is :</label>
          <br/>
          <input value={newnote} onChange={handleOnchange}></input>
          <button type='submit'>Save</button>
        </form>
      </div>
    )
  };


export default App;  */

import React, { useState } from 'react'
import Note from './Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>    
      <ul>
        {notesToShow.map((note) => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>  
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App 