import { useRouteError } from 'react-router-dom';
export default function Error() {
  let err = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>{err.message}</p>
      <p>{err.statusText}</p>
    </div>
  );
}
