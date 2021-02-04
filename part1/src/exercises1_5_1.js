import React,{useState} from 'react'
import ReactDOM from 'react-dom'

const Display = ({value}) => {
  return (
    <div>
      counter value is {value}
    </div>
  )
}

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {

  const [counter,setCounter] = useState(0);

  const increment = () => setCounter(counter+1)
  const reset = () => setCounter(0)
  const decrement = () => setCounter(counter-1)

  return (
    <div>
      <Display value={counter}/>
      <Button handleClick={increment} text='increment' />
      <Button handleClick={reset} text='reset' />
      <Button handleClick={decrement} text='decrement' />
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))