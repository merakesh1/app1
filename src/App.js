/* import { Suspense, lazy } from 'react';
import About from './components/About';
const MyComponent = lazy(() => import('./components/MyComponent'))

function App() {
  return (
    <div className="App">
      <About />
      <Suspense fallback={
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading the data inside the component...</span>
        </div>
      }>
        <MyComponent />
      </Suspense>

    </div>
  );
}

export default App; */

/* import TrueCallerClone from "./components/TrueCaller";
export default function App() {
  return (
    <>
      <TrueCallerClone />
    </>
  );
} */

/* import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import WithLoading from "./components/withLoading";

let EnhancedComponent = WithLoading(UserList)

export default function App() {
  let [users, setUsers] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <h1>See the Users below</h1>
      <EnhancedComponent users={users} isLoading={isLoading} />
    </>
  );
} */

/* import { useState } from "react";
import Profile from "./components/Profile";
import Authorize from "./components/Authorize";

let EnhancedComponent = Authorize(Profile);

export default function App() {
  let [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <>
      <button onClick={() => setIsAuthorized(true)}>Login</button>
      <button onClick={() => setIsAuthorized(false)}>Logout</button>
      <EnhancedComponent isAuthorized={isAuthorized} username="John Doe" />
    </>
  );
} */

import { useState } from "react";
import A from "./components/A";
import B from "./components/B";
export default function App() {
  let [count, setCount] = useState(0);
  return (
    <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "bisque" }}>
      <A />
      <B count={count} />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}