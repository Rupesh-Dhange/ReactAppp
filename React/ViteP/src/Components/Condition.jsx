import React, { useState } from 'react'

const Condition = () => {
    let[a,seta] = useState(0)
  return (
    <div>
   <button type='button' onClick={()=>{
     seta(a+1);
   }}>{a}</button>
    </div>
  )
}

export default Condition