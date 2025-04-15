import { memo } from 'react';

let child = memo(function Child(props) {
  let { onclick } = props;
  console.log('Child Component rendered');
  return <button onClick={onclick}>Increment</button>;
});

export default child;
