import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import CounterWrapper from "remote/CounterWrapper";

import "./index.scss";

const App = () => {
  const divRef = useRef(null)

  useEffect(()=>{
    CounterWrapper(divRef.current)
  },[])
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <div ref={divRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
