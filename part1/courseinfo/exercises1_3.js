import React from 'react';
import ReactDOM from 'react-dom' ;

const Header = (props) => {
    return (
        <h1>
            {props.course}
        </h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = (props) => {
    return (
        <>
          <Part part={props.part[0]} />
          <Part part={props.part[1]} />
          <Part part={props.part[2]} />
        </>
    )
}

const Total = (props) => {
  let sum = 0
  props.exercisescount.forEach(element => {
    sum+=element.exercises;
  });
    return (     
        <p>Number of exercises {sum}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
      <div>
          <Header course={course}/>
          <Content part={[part1,part2,part3]}/>
          <Total exercisescount={[part1,part2,part3]}/>
      </div>
    )
  }

ReactDOM.render(<App />,document.getElementById('root'));

  