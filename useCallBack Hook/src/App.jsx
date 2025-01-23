import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [adjective, setAdjective] = useState("good")

  //making a function which change adjective



  //without using useCallback
  // const getAdjective =()=>{
  //   return "another" + count
  // }
    

  // with using useCallback

  const getAdjective = useCallback(
    () => {
      return "another" + count
    },
    [count],//dependency array : untill the count change there should must be freez getAdjective function
  )



  // useCallback really stop Navbar rerendaring Means its freez getAdjective function
  

  return (
    <>
    {/* getAdjective is as props in Navbar */}
    <Navbar adjective={"good"} getAdjective={getAdjective}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
