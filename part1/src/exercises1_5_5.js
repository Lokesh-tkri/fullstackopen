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
  
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allclicks,setAll] = useState([])

  const History = ({allclicks}) => {
    let dispStrng = ''
    if (allclicks.length === 0){
      dispStrng = 'Empty. Click buttons to store history'
    }
    else{
      dispStrng = allclicks.join(' ')
    }
    return (
      <p>
        History is {dispStrng}
      </p>
        
      
    )
  }

  const incleftvalue = () => {
    setLeft(left+1)
    setAll(allclicks.concat('L'))
  }

  const incrightvalue = () => {
    setRight(right+1)
    setAll(allclicks.concat('R'))
  }

  return (
    <div>
      {left}
      <Button handleClick={incleftvalue} text='incleft' />
      <Button handleClick={incrightvalue} text='incright' />
      {right}
      <History allclicks={allclicks} />
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))