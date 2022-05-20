import React from 'react'
import { useState } from 'react'

function FormInput() {

  const [input, setInput] = useState("How to work?");
  function changeDescription(event)  {
      console.log(event.target.value)
      const descriptionValue = event.target.value;
      setInput(descriptionValue);  };

      const matchDescription = 'This is my baby';
  return (
      
    <div className='form-input'>
        <span className='form-heading'>Form</span>
        <div className='form'>
             <input placeholder='Write...' onChange={changeDescription}></input>
             <div className='output'>
                 <div className='match'>{matchDescription}</div>
                <div className='description'>{input === matchDescription? 'Matched': 'Sorry! Not Matched :('}</div>
             </div>
        </div>
    </div>
  )
}

export default FormInput