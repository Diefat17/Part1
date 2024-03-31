import { useState } from 'react'


const App = () => {

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
      <All all={all} good={good} bad={bad} neutral={neutral}></All>

    </div>
  )
}

const Botones = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = ({text, value}) => {
  return <p>{text} {value}</p>
}

const All = ({all, good, bad, neutral}) => {
  if(all != 0){
    return (
      <>
        <Statistics text="good" value={good}></Statistics>
        <Statistics text="neutral" value={neutral}></Statistics>
        <Statistics text="bad" value={bad}></Statistics>
        <Statistics text="all" value={bad + good + neutral}></Statistics>
        <Statistics text="average" value={(good - bad) / all}></Statistics>
        <Statistics text="positive" value={(good / all) * 100 + " %"}> </Statistics>
      </>
    )
  } else {
    return <h2>No feedback given</h2>
  }
}

export default App
