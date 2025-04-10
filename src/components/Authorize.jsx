export default function Authorize(Mycomponent) {
  return function EnhancedComponent({ isAuthorized, ...props }) {
    if (isAuthorized) {
      return <Mycomponent {...props} />;
    }
    return <p>Please login to view this page.</p>;
  };
}
