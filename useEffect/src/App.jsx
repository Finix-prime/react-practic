// useEffect() = React hook that tells React do some code when (pick one):
//               - this components re-render
//               - this components mounts
//               - some of state value chanaged 

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           // run after every render
// 2. useEffect(() => {}, [])       // run only on mounts
// 3. useEffect(() => {}, [value])  // run on mounts + when value changes

// Uses
// #1 evnet listener
// #2 DOM manipulate
// #3 subscriptions (real time update)
// #4 fetching data from api
// #5 clean up when component unmounts


import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  // run after every render
  // useEffect(() => {
  //   document.title = `Count: ${count}`
  // });

  // run only on mounts
  // useEffect(() => {
  //   document.title = `My Counter Programs`
  // }, []);

  // run on mounts + when value changes
  useEffect(() => {
    document.title = `Count: ${count} ${color}`
  }, [count, color]);

  function addCount() {
    setCount(c => c + 1);
  }

  function subtractCount() {
    setCount(c => c - 1);
  }

  function changeColor() {
    setColor(c => c === "green" ? "red" : "green");
  }


  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={() => addCount()}>Add</button>
      <button onClick={() => subtractCount()}>Subtract</button><br />
      <button onClick={changeColor}>Change Color</button>
    </>
  )
}

export default App
