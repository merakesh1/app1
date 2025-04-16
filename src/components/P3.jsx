import { useState, useMemo, useReducer } from 'react';
import '../App.css';
import { object } from 'framer-motion/client';
import { type } from '@testing-library/user-event/dist/type';

export default function P3() {
  let [count, setCount] = useState(0);
  let [mode, setMode] = useState('black');

  let calculate = useMemo(() => {
    console.log('Calculating the value...');
    let res = 0;
    for (let i = 0; i < 1000000; i++) {
      res = res + count;
    }
    return res;
  }, [count]);

  return (
    <div
      style={{
        backgroundColor: mode,
        color: mode === 'black' ? 'white' : 'black',
        padding: '10px',
        margin: '2px',
        minHeight: '50vh',
        border: '1px solid black',
      }}
    >
      <p>Count: {count}</p>
      <p>Calculated Value: {calculate}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() =>
          setMode((prev) => (prev === 'black' ? 'white' : 'black'))
        }
      >
        Change Mode - {mode === 'black' ? 'light' : 'dark'}
      </button>
    </div>
  );
}
