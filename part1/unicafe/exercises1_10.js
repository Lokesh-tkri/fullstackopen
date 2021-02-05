import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return (
    <div>
      <h1>
      give feedback
      </h1>
      <br />
    </div>
  )
}

const Button = ({handleClick,text}) => {
  return (
    <button onClick = {handleClick}>{text}</button>
  )
}

const Buttons = ({funcs,labels}) => {
  return (
    <div>
      <Button handleClick={funcs[0]} text={labels[0]} />
      <Button handleClick={funcs[1]} text={labels[1]} />
      <Button handleClick={funcs[2]} text={labels[2]} />
      <br />
    </div>
  )
}

const Statistic = ({text,val}) => {
  return (
    <p>
      {text} {val}
    </p>
  )
}

const Statlabel = () => {
  return (
    <h1>
      Statistics
    </h1>
  )
}

const Statistics = ({values}) => {
  let tot = values.good+values.neutral+values.bad
  
  if (tot === 0){
    return (
      <div>
        <Statlabel />
        no feedback given
      </div>
    )
  }

  let avg = 0
  avg = ((1*values.good)+(-1*values.bad))/tot
  let pos = 0
  pos = (values.good/tot)*100

  return (
  <div>
    <Statlabel />
    <Statistic text='good' val = {values.good} />
    <Statistic text='neutral' val = {values.neutral} />
    <Statistic text='bad' val = {values.bad} />
    <Statistic text='all' val = {tot} />
    <Statistic text='average' val = {avg} />
    <Statistic text='positive' val = {pos} />
  </div>
  )
}

const App = () => {
  const [params,setParams] = useState({
    good:0,neutral:0,bad:0
  })

  const incGood = () => {
    const newParams = {
      ...params,
      good : params.good + 1,
    }
    setParams(newParams)
  }

  const incNeutral = () => {
    const newParams = {
      ...params,
      neutral : params.neutral + 1,  
    }
    setParams(newParams)
  }

  const incBad = () => {
    const newParams = {
      ...params,
      bad : params.bad + 1
    }
    setParams(newParams)
  }



  return (
    <div>
      <Header />
      <Buttons funcs={[incGood,incNeutral,incBad]} labels={['good','neutral','bad']}/>
      <Statistics values={params}/>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))