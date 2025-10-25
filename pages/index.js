import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const increment = () => {
    console.log(count);
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>Counter app</div>
      <button onClick={decrement}> - </button>
      <span>Clicks {count}</span>
      <button onClick={increment}> + </button>
    </>
  );
}

export default Home;
