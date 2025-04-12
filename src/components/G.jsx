import { useContext } from 'react';
import { contextObj } from '../Contexts/CounterContext';
export default function G() {
  let { count } = useContext(contextObj);
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        backgroundColor: '#A1398C',
      }}
    >
      <h1>G</h1>
      <p>Count: {count} </p>
    </div>
  );
}
