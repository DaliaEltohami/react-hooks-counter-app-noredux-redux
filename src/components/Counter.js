// implement counter using react function component useState "local state in this function component"

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
