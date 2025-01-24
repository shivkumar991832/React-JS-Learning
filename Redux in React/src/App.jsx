import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import {decrement, increment, incrementByAmount, multiply, squarebtn} from  "./redux/counter/counterSlice"

// [importing] also known, useSelector, useDispatch both are hooks in react
import { useSelector, useDispatch } from 'react-redux'

function App() {
  // const [count, setCount] = useState(0)
//if you want to read count then {importing }
// this line say : hamare redux me se count ko lekar aao
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()//copy paste

  return (
    <>
    <Navbar/>
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      currently count is  {count} 
      {/* we need arrow function while we use onClick & dispatch used bcz we not want to run in a repitative way */}
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(multiply())}>multiply by 10</button>
     <button onClick={()=>dispatch(squarebtn())}>Square by 3</button>
     
    </div>
     
    </>
  )
}

export default App
