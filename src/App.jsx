import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const changeCount = (value) => {
    // if (count < 10) {
    // setCount(count + value)
    // }
    setCount((prev) => {
      if (prev === 10) {
        return 0;
      }
      return prev + value;
    });
  };
  const multiply = (value) => {
    setCount (count * value);
  };

  // if (count > 10) {
  //   return <div>Counter Reached max value</div>
  // }


  return (
    <div className="App">
      <h3>Counter: {count}</h3>
      {/* {count < 10 && (
        <div>
          <button onClick={() => changeCount(1)}>Add 1</button>
          <button onClick={() => changeCount(-1)}>Sub 1</button>
        </div>
      )} */}
      <button onClick={() => changeCount(1)}>Add 1</button>
      <button onClick={() => changeCount(-1)}>Sub 1</button>
      <button onClick={() => multiply(2)}>*2</button>
      <div>Counter is {count % 2 === 0 ? "Even": "Odd"}</div>
    </div>
  );
}

export default App;
