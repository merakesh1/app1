import { useCallback, useState } from 'react';
import Child from './Child';

export default function Parent() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(1);
  let [count1, setCount1] = useState(0);
  let increment = useCallback(
    () => {
      setCount((prev) => prev + step);
    },
    [step] //this will make sure that the increment function is recreated only when step value changes
  );

  let increment1 = useCallback(
    () => {
      setCount1((prev) => prev + step);
    },
    [] //this will make sure that the increment function is created only once
  );

  return (
    <>
      <h2>Count: {count}</h2>
      <h3>Step: {step}</h3>
      <h3>Count1: {count1}</h3>
      <Child onclick={increment} />
      <button onClick={() => setStep((prev) => prev + 1)}>
        Increment-step
      </button>
      <button onClick={() => increment1()}>increment1</button>
    </>
  );
}
