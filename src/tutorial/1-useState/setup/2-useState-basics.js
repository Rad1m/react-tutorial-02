import React, { useState } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const UseStateBasics = () => {
  const [text, setText] = useState('random number')

  const handleClick = () => {
    if(text === 'random number'){
      setText(getRandomInt(10))
    } else {
      setText('random number')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change number
      </button>
    </React.Fragment>
  )
   
};

export default UseStateBasics;
