import E from './E';
import F from './F';

export default function B(props) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        backgroundColor: '#76b5c5',
      }}
    >
      <h1>B</h1>
      <E />
      <F count={props.count} />
    </div>
  );
}
