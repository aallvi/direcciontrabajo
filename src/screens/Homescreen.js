import React from 'react'
import { useSelector } from 'react-redux'

export const Homescreen = () => {



    const strcon = useSelector(state => state.login.token)
  console.log(strcon)



  return (
    <div>Homescreen</div>
  )
}
