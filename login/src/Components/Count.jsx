import React, { useState } from 'react'

function Count() {
    let[count,setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>count {count}</button>
    </div>
  )
}

export default Count