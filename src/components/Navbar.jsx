import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/abc'>abc</Link>
        </li>
      </ul>
    </div>
  );
}
