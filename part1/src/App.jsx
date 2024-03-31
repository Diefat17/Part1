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
      <Statistics all={all} good={good} bad={bad} neutral={neutral}></Statistics>

    </div>
  )
}

const Botones = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticsLine = ({text, value}) => {
  return <p>{text} {value}</p>
}

const Statistics = ({all, good, bad, neutral}) => {
  if(all != 0){
    return (
      <>
        <StatisticsLine text="good" value={good}></StatisticsLine>
        <StatisticsLine text="neutral" value={neutral}></StatisticsLine>
        <StatisticsLine text="bad" value={bad}></StatisticsLine>
        <StatisticsLine text="all" value={bad + good + neutral}></StatisticsLine>
        <StatisticsLine text="average" value={(good - bad) / all}></StatisticsLine>
        <StatisticsLine text="positive" value={(good / all) * 100 + " %"}> </StatisticsLine>
      </>
    )
  } else {
    return <h2>No feedback given</h2>
  }
}

export default App
