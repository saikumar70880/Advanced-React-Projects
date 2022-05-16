import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = `Counter - ${value}`;
  }, [value]);
  return (
    <>
      <h2>Simple Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  );
};

export default UseEffectBasics;
