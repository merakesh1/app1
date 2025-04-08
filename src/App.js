import { Suspense, lazy } from 'react';
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

export default App;