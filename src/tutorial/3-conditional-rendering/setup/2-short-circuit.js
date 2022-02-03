import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = useState('') // change to useState('Radim') to see difference or leave empty useState('')
  const [isError, setIsError] = useState(false)
  
  return (
    <>
       {/* just an example */}
      {/* <h1>{firstValue}</h1>
      <h1> value: {secondValue}</h1> */}
  
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>Toggle error</button>
      {isError ? <h1>Error...</h1> : <h1>All good</h1>}
      {/* If something then "?" else ":" */}
      {/* ? means then
      : means else */}
      {isError ? <p>There is error...</p> : <p>There is no error</p>}
    </>
  )
};

export default ShortCircuit;
