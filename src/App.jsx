import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    try {
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>HMR Test</h1>
      <button onClick={handleIncrement}>
        Count: {count}
      </button>
      {/* Edit this text to test HMR */}
      <p>Edit this text and save to test HMR</p>
    </div>
  );
}