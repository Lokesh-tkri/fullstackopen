import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({name}) => {
  return (
    <h2>{name}</h2>
  )
}


const Total = ({ parts }) => {
  let exer = parts.map((part)=>part.exercises)
  const sum = exer.reduce((s,p) => s+p)
  return(
    <h2><p>Number of exercises {sum}</p></h2>
  ) 
} 

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => (<Part key={part.id} part={part} />))}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1> Web development curricullum</h1>
      <br />
      {courses.map((course) => {
      return <Course key={course.id} course={course} />})}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))