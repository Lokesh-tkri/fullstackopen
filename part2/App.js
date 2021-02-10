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
  
  const App = ({courses}) => {
    return (
      <div>
        <h1> Web development curricullum</h1>
        <br />
        {courses.map((course) => {
        return <Course key={course.id} course={course} />})}
      </div>
    )
  };

  
  export default App;