import { Outlet, useParams } from 'react-router-dom';
export default function Category() {
  let { categoryName } = useParams();
  return (
    <div>
      <h1>Category: {categoryName}</h1>
      <p>{categoryName}</p>
      <Outlet />
    </div>
  );
}
