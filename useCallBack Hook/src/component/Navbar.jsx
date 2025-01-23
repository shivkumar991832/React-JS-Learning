import React from 'react'
import { memo } from 'react'


// memo: by import memo its stop navbar rerendaring
const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={()=>{getAdjective}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
