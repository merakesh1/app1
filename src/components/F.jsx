import G from './G';
export default function F(props) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        backgroundColor: '#A16D39',
      }}
    >
      <h1>F</h1>
      <G count={props.count} />
    </div>
  );
}
