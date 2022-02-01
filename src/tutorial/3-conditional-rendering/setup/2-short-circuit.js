import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = useState('') // change to useState('Radim') to see difference or leave empty useState('')
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'
  
  return (
    <>
       {/* just an example */}
      {/* <h1>{firstValue}</h1>
      <h1> value: {secondValue}</h1> */}

      <h1>{text || 'john doe'}</h1>

    </>
  )
};

export default ShortCircuit;
