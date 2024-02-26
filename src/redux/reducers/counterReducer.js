import {
  DECREMENT,
  DECREMENTBYVAL,
  INCREMENT,
  INCREMENTBYVAL,
} from "../../actions/types";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENTBYVAL:
      return { ...state, count: state.count + action.value };
    case DECREMENTBYVAL:
      return { ...state, count: state.count - action.value };
    default:
      console.log(state);
      return state;
  }
};

export default counterReducer;
