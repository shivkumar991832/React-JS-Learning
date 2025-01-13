import { useEffect } from "react"
import React, {useEffect} from 'react'

const Navbar = ({color}) => {
//   useEffect(() => {
//     alert("color was changed")
  
// }, [color]) // [] this for color change event


 //we can use multiple useEffect
  // Case 1 : Run on every render or page load
  useEffect(() => {
    alert("Hey I will run on every render")
  
    
  }, []) //this use effect will be use in our most of the app


  // Case 2: Run only on First render
  useEffect(() => {
    alert("hey welcome to the page. This is the first render")
  
    
  }, [first])//used when we want to change in a perticular state or props
  
  // Case 3 : Run only when certain value changed
  useEffect(() => {
    alert("hey im run bcz color was changed")
    setcolor(color + 1)
  
    
  }, [count]) //used when we want to change in a perticular state or props
  

  
  return (
    <div>
      I am Navbar of this {color} color
    </div>
  )
}

export default Navbar
