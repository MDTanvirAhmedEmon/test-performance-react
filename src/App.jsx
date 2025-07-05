import { useState } from 'react';
import './App.css'
import Child from './components/Child';

function App() {

  const [count, setCount] = useState(0);
  const [name] = useState('React');

  console.log('🧑 Parent rendered');
  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setCount(count)}>Re-render Parent</button>

        {/* 👶 Child only re-renders if 'name' changes */}
        <Child name={name} />
      </div>
    </>
  )
}

export default App
