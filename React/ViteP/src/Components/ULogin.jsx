import React, { useState } from 'react'

const ULogin = () => {
  let[login,isLogin] = useState(true);

  if (login) {
    return <button onClick={()=>isLogin(false)}>logout</button>
  } else {
    return <button>login</button>
  }
}

export default ULogin