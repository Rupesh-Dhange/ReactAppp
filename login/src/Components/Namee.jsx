import React, { useState } from 'react'

const Namee = () => {
     let [name,setName] = useState("rupesh")
  return (
    <div>
       <button onClick={()=>setName("suresh")}>set name : {name}</button>
    </div>
  )
}

export default Namee