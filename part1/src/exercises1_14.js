import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Quote = ({text,votecount}) =>{
  return (
  <>
    <p>
      {text}
    </p>
    <p>
      has {votecount} votes
    </p>
  </>
  )
}

const App = (props) => {

  const votesobj = {}
  for (let index = 0; index < props.anecdotes.length; index++) {
    votesobj[index] = 0;
  }
    
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votesobj)
  const [mostvoted, setMostvoted] = useState(0)

  const getRandquote = () => {
    let rnum = (Math.random()*(anecdotes.length-1))
    rnum=(Math.round(rnum))
    setSelected(rnum)
  }

  const findmostvoted = (selvar) => {
    setMostvoted(selvar)
  }

  const addVote = () => {
    const newvotesobj = {
      ...votes,
    }
    newvotesobj[selected] += 1
    setVotes(newvotesobj)
    if (newvotesobj[mostvoted] < newvotesobj[selected]){
      findmostvoted(selected)
    }
  }

  return (
    <div>
      <h1>
        Anecdote of the Day
      </h1>
      <Quote text={props.anecdotes[selected]} votecount={votes[selected]} />
      <br />
      <Button handleClick={addVote} text='vote' />
      <Button handleClick={getRandquote} text='next anecdote' />
      <h1>
        Anecdote with most votes
      </h1>
      <Quote text={props.anecdotes[mostvoted]} votecount={votes[mostvoted]} />
    </div>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)