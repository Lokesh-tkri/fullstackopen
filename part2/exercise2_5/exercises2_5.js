import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const notes = [
  {
    content:'HTML is easy',
    date: "2021-02-05T20:40:51.859Z",
    important:true,
    id:1
  }
]



ReactDOM.render(<App notes={notes}/>, document.getElementById('root'))