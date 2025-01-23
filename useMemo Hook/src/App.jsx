import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// .fill() basically a methods


// creating a big array
const nums = new Array(30_000_000).fill(0).map((_, i)=>{
  return {
    index: i,
    isMagical: i===29_000_00 //condition

  }
})
function App() {
  const [count, setCount] = useState(0)
  // lets create a state

 const [numbers, setNumbers] = useState(nums)


//  we got the magical number
//  const magical = numbers.find(item=>item.isMagical===true) //in this we checking each element so this ia a expensive and high computation
 const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers]) //Memoeize=do computation one time and saves it and also saves from rerender

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          if(count == 10){
            setNumbers(new Array(10_000_000).fill(0).map((_, i)=>{
              return {
                index: i,
                isMagical: i===9_000_00 //condition
            
              }
            }))
          }


        }}>
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
