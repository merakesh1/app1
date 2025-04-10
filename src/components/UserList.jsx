export default function UserList(props) {
  let { users } = props;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
            <li>{user.company.name}</li>
            <li>{user.company.catchPhrase}</li>
            <li>{user.company.bs}</li>
            <li>{user.address.street}</li>
            <li>{user.address.suite}</li>
            <li>{user.address.city}</li>
            <li>{user.address.zipcode}</li>
            <li>{user.address.geo.lat}</li>
          </ul>
          <hr />
        </li>
      ))}
    </ul>
  );
}
