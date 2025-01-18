import { useState } from 'react'
import Navbar from './components/Navbar'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [cards, setCards] = useState([])


  const fetchData = async()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  // useEffect uss State ko populate karega
  useEffect(() => {
   fetchData() 
  
    
  },[])
  

  return (
    <>
    <Navbar/>
     <div className="container">
     {cards.map((card)=>{
       return <div key={card.Id} className="card">
         <h1>{card.title}</h1>
         <p>{card.body}</p>
         <span>By: UserId: {card.userId}</span>

       </div>
     })}
      
     </div>
    </>
  )
}

export default App
