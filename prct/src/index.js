import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [counter,setCounter] = useState(0);
  const [varcounter,setVarCounter] = useState(0)

  const hook3 = () => {
    console.log('in useEffect of entire App');
  }

  useEffect(hook3,[])

  const hook1 = () => {
    console.log('in useEffect caused by varCounter');
  }
  useEffect(hook1,[varcounter])

  const hook2 = () => {
    console.log('in useEffect caused by counter')
  }

  useEffect(hook2,[counter])

  const handleVarCountClick = () => {
    setVarCounter(varcounter+1)
  }

  const handleCounClick =  () => {
    setCounter(counter+1)
  }


  return (
    <div>
      <p>Hello, world!</p>
      <p>varCounter is {varcounter}</p>
      <button onClick={handleVarCountClick}>varCounter</button>
      <p>Counter value is : {counter}</p>
      <button onClick={handleCounClick}>Counter</button>
    </div>
  )
}

ReactDOM.render( <App /> , document.getElementById('root'))