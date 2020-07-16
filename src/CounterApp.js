import React,  { useState } from 'react';
import propTypes from 'prop-types';

const CounterApp = ({value = 0}) => {

  const [counter, setCounter] = useState(value);
  console.log(setCounter);

  // handledAdd
  const handledAdd = () => setCounter(counter + 1);
    // setCounter( (counter) => counter + 1 );

  const handledLess = () => setCounter(counter - 1);

  const handledReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>

      <button onClick={ handledAdd }>+1</button>
      <button onClick={ handledReset }>Reset</button>
      <button onClick={ handledLess }>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: propTypes.number
}

export default CounterApp;