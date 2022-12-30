
import React, {useState} from 'react';

function App() {
  const [value, setCount] = useState(4);
  const dec = () =>{
    setCount(value-1);
  }
  const inc = () =>{
    setCount(value+1);
  }
  return (
    <div className="App">
         <button onClick={dec}>-</button>
         <span>{value}</span>
         <button onClick={inc}>+</button>
    </div>
  );
}

export default App;
