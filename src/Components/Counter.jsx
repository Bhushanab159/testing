import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div className='counter' data-test='component-counter'>
      <h1>Count click {count} </h1>
      <button onClick={()=> setCount(count + 1)} >Click</button> 
    </div>
  )
}

export default Counter
