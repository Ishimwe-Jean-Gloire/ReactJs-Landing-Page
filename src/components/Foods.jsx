import React from 'react'

const Foods = () => {
    const food1="Banana";
    const food2="Orange";
    const food3="Mango";
  return (
   <ul>
    <li>Apple</li>
    <li>{food1}</li>
    <li>{food2}</li>
    <li>{food3.toUpperCase()}</li>
   </ul>
  )
}

export default Foods
