import React from 'react';

const Note = ({note}) => {
    return (
        <li>{note.name} {note.number}</li>
    )
}


const Notes = ({notestodisplay}) => {
    return (
        <>
        <h1>Numbers</h1>
        <ul style={{'listStyle' : 'none'}}>
          {notestodisplay.map((note)=>{
            return (<Note key={note.id} note={note} />)
          })}
        </ul>
      </>
    )
}


export default Notes;