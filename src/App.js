import "./App.css";
import Counter from "./components/Counter";
import CounterReduxToolkit from "./components/CounterReduxToolkit";
// import CounterRedux from "./components/CounterRedux";

function App() {
  return (
    <div className="App">
      React Counter App "with and without Redux"
      <Counter />
      <CounterReduxToolkit />
    </div>
  );
}

export default App;
