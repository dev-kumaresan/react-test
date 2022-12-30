
import React, {useState,useEffect} from 'react';
function App() {
  const [value, setResource] = useState['posts'];
  useEffect(()=>{

  },[value]);
  return (
    <>
    <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('likes')}>likes</button>
        <button onClick={() => setResource('comments')}>comments</button>
    </div>
    <h1>{value}</h1>
    </>
  );
}

export default App;
