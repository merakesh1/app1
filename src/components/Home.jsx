import { useContext } from 'react';
import { contextObj } from '../Contexts/CounterContext';
export default function Home() {
  let { count } = useContext(contextObj);
  return (
    <div>
      <h1>Home-{count}</h1>
    </div>
  );
}
