import { useState } from 'react'


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = bad + good + neutral

  return (
    <div>
      <h1>give feedback</h1>
      <Botones handleClick= {() => setGood(good + 1)} text= "good"></Botones>
      <Botones handleClick= {() => setNeutral(neutral + 1)} text= "neutral"></Botones>
      <Botones handleClick= {() => setBad(bad + 1)} text= "bad"></Botones>
      <h1>statistics</h1>
      <Statics text="good" value={good}></Statics>
      <Statics text="neutral" value={neutral}></Statics>
      <Statics text="bad" value={bad}></Statics>
      <Statics text="all" value={bad + good + neutral}></Statics>
      <Statics text="average" value={(good - bad) / all}></Statics>
      <Statics text="positive" value={(good / all) * 100 + " %"}> </Statics>
    </div>
  )
}

const Botones = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statics = ({text, value}) => {
  return <p>{text} {value}</p>
}

export default App
