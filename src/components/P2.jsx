import { useState, useCallback, memo, useMemo } from 'react';
export default function P2() {
  let [count, setCount] = useState(0);
  let [other, setOther] = useState(false);

  let inc = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>
      <h2>Other: {other.toString()}</h2>
      <Child onClick={inc} />
      <button onClick={() => setOther(!other)}>Toggle other State</button>
    </>
  );
}

let Child = memo(function Child(props) {
  let { onClick } = props;
  console.log('Child Component rendered');
  return <button onClick={onClick}>Increment</button>;
});
