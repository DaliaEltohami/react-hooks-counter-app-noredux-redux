// implement counter using Redux Toolkit

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../redux/counterSlice";

// import {
//   Decrement,
//   DecrementByval,
//   Increment,
//   IncrementByVal,
// } from "../actions/counterActions";

export default function CounterReduxToolkit() {
  const [value, setValue] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleValChange = (e) => {
    setValue(e.target.valueAsNumber);
  };

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncVal = (val) => {
    dispatch(incrementByValue(val));
    setValue(0);
  };
  const handleDecVal = (val) => {
    dispatch(decrementByValue(val));
    setValue(0);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br></br>
      <button
        onClick={() => {
          handleDecVal(value);
        }}
      >
        Decrement By Value
      </button>
      <input
        type="number"
        placeholder="Enter value"
        onChange={(e) => {
          handleValChange(e);
        }}
        value={value}
      ></input>
      <button
        onClick={() => {
          handleIncVal(value);
        }}
      >
        Increment By Value
      </button>
    </div>
  );
}
