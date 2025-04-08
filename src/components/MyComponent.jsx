import { useState, useEffect } from 'react';

export default function MyComponent() {
  let [data, setData] = useState(null);
  useEffect(() => {
    let timer = setTimeout(() => {
      setData(
        'Hardik Himanshu Pandya (born 11 October 1993) is an Indian international cricketer who plays for the Indian cricket team. He is an all-rounder who is a right-handed middle order batsman and fast-medium bowler. He is considered one of the best all-rounders in the world in white-ball cricket. Pandya has represented India in all three formats. He captains Mumbai Indians in the Indian Premier League and occasionally plays for Baroda in domestic cricket. He has captained the Indian team in white-ball cricket and was the vice captain of the team that won the 2024 T20 World Cup.'
      );
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!data) {
    return <div>Loading the data inside the component...</div>;
  }

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        marginTop: '50px',
      }}
    >
      <h2>See the data below</h2>
      <hr />
      <p style={{ textAlign: 'justify' }}>{data}</p>
    </div>
  );
}
