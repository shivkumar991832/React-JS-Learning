import React from 'react'

// for activating {count} copy from app.jsx
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  // copy from app.jsx
  const count = useSelector((state) => state.counter.value)
  
  return (
    <div>
      I am Counter is {count}
    </div>
  )
}

export default Navbar
