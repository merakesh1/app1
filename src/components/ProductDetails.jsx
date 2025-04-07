import { useParams } from 'react-router-dom';
export default function Category() {
  let { productId } = useParams();
  return (
    <div>
      <h1>Product: {productId}</h1>
    </div>
  );
}
