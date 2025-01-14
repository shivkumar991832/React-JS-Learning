import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "hey",
      desc: "I am a good todo"
    },

    {
      title: "hey Another todo",
      desc: "I am a good todo too"
    },

    {
      title: "hey I am a grocery todo",
      desc: "I am a good todo as well as grocery todo too"
    }
  ])


  // creating a Todo components or function
  // todo props le raha hai
  const Todo = ({todo})=>{ 
  //   return (<>

  //   <div className="m-4 border-1 border-purple-400">

  //   <div className="todo">{todo.title}</div>
  //   <div className="todo">{todo.desc}</div>

  //  </div>

  
  
  // </>)}
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* {showbtn? <button>showbtn is true</button> : "showbtn is false"}  */}
      {/* or */}
      {showbtn? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* ternary operator in js and applying conditionl rendaring but its not a better way*/}


      {/* {showbtn && <button>showbtn is now true & clicked second button</button> } */}
      {/* jab showbtn true hoga to show hoga otherwise show nhi hoga */}

     {/* arraow function */}
     {todos.map(todo =>{
      //  return <Todo key={todo.title} todo={todo}/> 
      // //this is taking todo as a props

      return (<div key={todo.title} className="m-4 border-1 border-purple-400">

      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
  
     </div>)
     })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
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
