export default function WithLoading(Mycomponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
    // return isLoading ? <div>Loading...</div> : <component {...props} />;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Mycomponent {...props} />;
  };
}
