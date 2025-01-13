import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setcolor] = useState(0)


  // //we can use multiple useEffect
  // // Case 1 : Run on every render or page load
  // useEffect(() => {
  //   alert("Hey I will run on every render")
  
    
  // }, []) //this use effect will be use in our most of the app


  // // Case 2: Run only on First render
  // useEffect(() => {
  //   alert("hey welcome to the page. This is the first render")
  
    
  // }, [first])//used when we want to change in a perticular state or props
  
  // // Case 3 : Run only when certain value changed
       useEffect(() => {
       alert("Count was changed")
       setcolor(color + 1)
  
    
      }, [count]) //used when we want to change in a perticular state or props
  

  return (
    <>
  <Navbar color={"blue"  + "red" + color}/> 
    {/* js expression */}


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
