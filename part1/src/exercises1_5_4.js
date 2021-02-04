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
  const [clicks,setClicks] = useState({left:0,right:0,all:[]})



  const incleftvalue = () => {

    const newClicks = {
      left : clicks.left+1,
      right : clicks.right,
      all : clicks.all.concat('L')
    }

    setClicks(newClicks)

  }

  const incrightvalue = () => {

    const newClicks = {
      left:clicks.left,
      right:clicks.right+1,
      all : clicks.all.concat('R')
    }

    setClicks(newClicks)

  }

  return (
    <div>
      {clicks.left}
      <Button handleClick={incleftvalue} text='incleft' />
      <Button handleClick={incrightvalue} text='incright' />
      {clicks.right}
      <p>
        All clicks {clicks.all}
      </p>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))