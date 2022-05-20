import React from 'react'
// import FormInput from './FormInput';
import { useState } from 'react'



// Creating a Counter app
function Counter() {
  const [ counter, setCounter ] = useState(0);
  return (
    <div className='counter-app'>
        <span className='heading-app'>Counter</span>
        <div className='counter'>
             <button onClick={() => {setCounter(counter => counter - 1 )}}>-</button>
             <span className='counter-value'>{counter}</span>
             <button onClick={() => {setCounter(increaseValue => increaseValue + 1)}}>+</button>
        </div>
    </div>
  );
};

export default Counter