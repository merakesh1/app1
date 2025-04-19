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
/* 
import A from "./components/A";
import B from "./components/B";
import { useContext } from "react";
import { contextObj } from "./Contexts/CounterContext";
export default function App() {
  let { increment, decrement, reset } = useContext(contextObj);
  return (
    <div style={{ border: "1px solid black", padding: "10px", backgroundColor: "bisque" }}>
      <A />
      <B />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
} */
/* 
import ParentComponent from "./components/ParentComponent";
export default function App() {
  return (
    <>
      <ParentComponent />
    </>
  )
} */
/* 
import Parent from "./components/P1";
export default function App() {
  return (
    <>
      <Parent />
    </>
  );
} */

/* import P3 from "./components/P3"
export default function App() {
  return (
    <>
      <P3 />
    </>
  );
} */

/* import reducer from "./Reducers/reducer";
import { useReducer } from "react";

export default function App() {
  let [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Welcome to my Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  )
}
 */

/* import reducer from "./Reducers/reducer2";
import { useReducer, useState } from "react";
import './App.css'

export default function App() {
  let [todos, dispatch] = useReducer(reducer, []);
  let [text, setText] = useState('');

  let handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch({ type: "ADD_TODO", payload: text });
      setText('');
    } else {
      alert('Please enter some task to track it...');
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center todo-app">
      <div className="card shadow-lg todo-card">
        <div className="card-body p-4">
          <h1 className="text-center mb-4 heading">My Todo App</h1>
          <h3 className="text-center mb-4 text-secondary">Tasks: {todos.length}</h3>
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control todo-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add todo here..."
            />
            <button className="btn btn-sm btn-teal todo-add-button" onClick={handleAddTodo}>
              Add Todo
            </button>
          </div>
          <ul className="list-group todo-list">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center todo-item items"
              >
                <h6
                  className={`mb-0 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
                >
                  {todo.text}
                </h6>
                <div>
                  <button
                    className="btn btn-sm btn-coral me-2 todo-remove-button"
                    onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-sm btn-teal todo-toggle-button"
                    onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                  >
                    {todo.completed ? 'Incomplete' : 'Complete'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
 */

/* import Component1 from "./classComponents/Component1";

export default function App() {
  return (
    <>
      <Component1 />
    </>
  );
} */

/* import Entities from "./classComponents/Entities";
export default function App() {
  return (
    <>
      <Entities name="table" madeof="wood" />
      <Entities name="chair" madeof="plastic" />
      <Entities name="bed" />
    </>
  )
} */

/* import Counter from "./classComponents/Counter";
import "./App.css";
export default function App() {
  return (
    <>
      <Counter />
    </>
  );
} */

/* import Timer from "./classComponents/Timer";
export default function App() {
  return (
    <>
      <Timer />
    </>
  );
} */
/* 
import Counter1 from "./classComponents/Counter1";
import "./App.css";
export default function App() {
  return (
    <>
      <Counter1 />
    </>
  );
} */

import Timer1 from "./classComponents/Timer1";
export default function App() {
  return (
    <>
      <Timer1 />
    </>
  );
}