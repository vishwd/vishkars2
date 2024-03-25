import React from 'react'
import { Products } from './Products'
import Home from './Home'

const Naam = () => {
  return (
    <>
    {
        Products.map((product) => {return(<Home Data ={product}/>)})
    }
    </>
  )
}

export default Naam;