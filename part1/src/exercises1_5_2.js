import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [leftvalue,setLeftvalue] = useState(0)
  const [rightvalue,setRightvalue] = useState(0)

  //const [clicks,setClicks] = useState({left:0,right:0})



  const incleftvalue = () => {
    setLeftvalue(leftvalue+1)
  }

  const incrightvalue = () => {
    setRightvalue(rightvalue+1)
  }

  return (
    <div>
      {leftvalue}
      <Button handleClick={incleftvalue} text='incleft' />
      <Button handleClick={incrightvalue} text='incright' />
      {rightvalue}
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))