// implement counter using Redux store and hooks

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Decrement,
  DecrementByval,
  Increment,
  IncrementByVal,
} from "../actions/counterActions";

export default function CounterRedux() {
  const [value, setValue] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleValChange = (e) => {
    setValue(e.target.valueAsNumber);
  };

  const handleIncrement = () => {
    Increment(dispatch);
  };
  const handleDecrement = () => {
    Decrement(dispatch);
  };
  const handleIncVal = (val) => {
    IncrementByVal(dispatch, val);
    setValue(0);
  };
  const handleDecVal = (val) => {
    DecrementByval(dispatch, val);
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
