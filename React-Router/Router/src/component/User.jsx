import React from 'react'
import { useParams } from 'react-router-dom'
// params means parameter

const User = () => {
    const params = useParams()
  return (
    <div>
      I am user {params.username}
    </div>
  )
}

export default User
