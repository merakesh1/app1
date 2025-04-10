export default function Profile(props) {
  let { username } = props;
  return (
    <div>
      <h1>Welcome to your profile: {username}!</h1>
    </div>
  );
}
