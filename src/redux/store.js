// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// import counterReducer from "./reducers/counterReducer";
// import userReducer from "./reducers/userReducer";

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = createStore(rootReducer, enhancer(applyMiddleware(thunk)));

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
