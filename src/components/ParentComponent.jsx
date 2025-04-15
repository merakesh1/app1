import { useCallback, useState, memo } from 'react';

let Button = memo(({ onClick, children }) => {
  console.log(`${children} re-rendered`);
  return <button onClick={onClick}>{children}</button>;
}); //This is a memoized component which is not rerendered on every state change in this component

/* let Button = function ({ onClick, children }) {
  console.log(`${children} re-rendered`);
  return <button onClick={onClick}>{children}</button>;
}; */ // This is a normal component which is rerendered on every state change in this component

export default function ParentComponent() {
  let [count, setCount] = useState(0);
  let [text, setText] = useState('');

  let handleIncrement = useCallback(
    () => setCount((precount) => precount + 1),
    []
  ); //Empty dependency array so this function never changes

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter text..'
      />
      <p>Text: {text == '' ? 'No text' : text}</p>
      <p>Count: {count}</p>
      <Button onClick={handleIncrement}>Increment-Button</Button>
    </div>
  );
}
