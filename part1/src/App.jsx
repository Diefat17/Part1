const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Totals parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  return(
    <>
      <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}></Part>
      <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}></Part>
      <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}></Part>
    </>
  )
  
}

const Part = (props) => {
  return(
    <>
      <p>{props.part} <span>{props.exercises}</span></p>
    </>
  )
}

const Totals = (props) => {
  return (
    <>
      <p>Totals {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}
export default App