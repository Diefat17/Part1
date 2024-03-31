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
  return <span>{text} {value}</span>
}

const Statistics = ({all, good, bad, neutral}) => {
  if(all != 0){
    return (
      <table>
        <tbody>
          <tr>
            <td><StatisticsLine text="good"></StatisticsLine></td>
            <td><StatisticsLine value={good}></StatisticsLine></td>
          </tr>
          <tr>
            <td><StatisticsLine text="neutral"></StatisticsLine></td>
            <td><StatisticsLine value={neutral}></StatisticsLine></td>
          </tr>
          <tr>
            <td><StatisticsLine text="bad"></StatisticsLine></td>
            <td><StatisticsLine value={bad}></StatisticsLine></td>
          </tr>
          <tr>
            <td><StatisticsLine text="all"></StatisticsLine></td>
            <td><StatisticsLine value={neutral}></StatisticsLine></td>
          </tr>
          <tr>
            <td><StatisticsLine text="average"></StatisticsLine></td>
            <td><StatisticsLine value={(good - bad) / all}></StatisticsLine></td>
          </tr>
          <tr>
            <td><StatisticsLine text="positive"></StatisticsLine></td>
            <td><StatisticsLine value={(good / all) * 100 + " %"}></StatisticsLine></td>
          </tr>
        </tbody>
      </table>
    )
  } else {
    return <h2>No feedback given</h2>
  }
}


export default App
