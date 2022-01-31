import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  
  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(()=>{
      // setValue(value+1)
      // this implementation makes sure that if we click button 5 times, then increment will happen 5 times
      setValue((prevState)=>{
        return prevState + 1
      })
    },2000)
  }

  return (
    <>
    <section style ={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value-1)}>Decrease</button>
      <button className='btn' onClick={() => setValue(reset)}>Reset</button>
      <button className='btn' onClick={() => setValue(value+1)}>Increase</button>
    </section>

    <section style ={{margin: '4rem 0'}}>
      <h2>Increase Counter with delay</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>
        Increase later
      </button>
    </section>
    </>
  )
};

export default UseStateCounter;
