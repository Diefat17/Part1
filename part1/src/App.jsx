const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const excercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content part1 = {parts[0]} part2 = {parts[1]} part3 = {parts[2]} exercises1 = {excercises[0]} exercises2 = {excercises[1]} exercises3 = {excercises[2]}/>
      <Totals part='Number of exercises' exercises1 = {excercises[0]} exercises2 = {excercises[1]} exercises3 = {excercises[2]}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </>
  )
}

const Totals = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}
export default App