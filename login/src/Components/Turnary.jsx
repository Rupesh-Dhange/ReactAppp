import React from 'react'

const Turnary = (isLogged) => {
  return (
    <>{isLogged ? <h1>logical : logged</h1> : <h1>notLogg</h1>}</>
  )
}

export default Turnary


