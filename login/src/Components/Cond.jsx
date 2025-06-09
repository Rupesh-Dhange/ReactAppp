import React from 'react'

export const Cond = (isLogged) => {
  if(isLogged){
    return <h1>login</h1>
  }else{
    return <h2></h2>
  }
}
