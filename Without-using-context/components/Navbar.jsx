import React from 'react'
import Button from './button'

const Navbar = ({count}) => {
  return (

    <>
    <div>
      Navbar
    </div>
    <Button count={count}/>
    {/* props drilling */}
   </>
  )
}

export default Navbar

