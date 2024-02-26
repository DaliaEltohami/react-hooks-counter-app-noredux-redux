import { DECREMENT, DECREMENTBYVAL, INCREMENT, INCREMENTBYVAL } from "./types";

export const Increment = async (dispatch) => {
  return dispatch({
    type: INCREMENT,
  });
};

export const Decrement = async (dispatch) => {
  return dispatch({
    type: DECREMENT,
  });
};

export const IncrementByVal = async (dispatch, val) => {
  return dispatch({
    type: INCREMENTBYVAL,
    value: val,
  });
};

export const DecrementByval = async (dispatch, val) => {
  return dispatch({
    type: DECREMENTBYVAL,
    value: val,
  });
};
