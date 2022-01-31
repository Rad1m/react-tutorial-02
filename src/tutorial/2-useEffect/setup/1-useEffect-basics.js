import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(()=>{
    console.log('call useEffect')
    if (value > 0) {
       document.title = `Notifications(${value})`
    }
  },[value]) // runs every time [value] is updated

  useEffect(()=>{
    console.log('Hello World')
  },[]) // runs only once on initial render []

  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={()=>setValue(value+1)}>Click this button</button>
    </>
  )
};

export default UseEffectBasics;
