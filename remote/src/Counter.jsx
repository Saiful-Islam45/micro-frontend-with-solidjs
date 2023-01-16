import { createSignal } from "solid-js";

const CounterApp = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h4>{count()}</h4>
      <button style={{ border: "1px solid gray", background: "#888", padding: "2px" }} onClick={() => setCount(count() + 1)}>
        Increment
      </button>
    </div>
  );
};
export default CounterApp;
