import React, { useState, useRef } from 'react';
import { calculateFactorial } from './utils';
import './App.css';

export default function App() {

  const [factorial, setFactorial] = useState({
    input: 0,
    value: 1,
    error: false
  })
  const inputEl = useRef(null)

  const handleSubmit = (e) => {

    try {

      e.preventDefault()
      
      const input = parseInt(inputEl.current.value)

      if (isNaN(input)) {
        throw new Error('Invalid Number: ', inputEl.current.value)
      }
      else if (input < 0) {
        throw new Error('Only positive integers supported!')
      }

      inputEl.current.value = input

      const value = calculateFactorial(input)

      setFactorial({
        input,
        value
      })
    }
    catch (err) {
      setFactorial({
        error: err.message
      })
    }
  }

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter a number..." ref={inputEl}/>
        <br />
        <button>Calculate Factorial</button>
      </form>
      <h2>Factorial: {!factorial.error ? factorial.value : factorial.error}</h2>
    </div>
  );
}