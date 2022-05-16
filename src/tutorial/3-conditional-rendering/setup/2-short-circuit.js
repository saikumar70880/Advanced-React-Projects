import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h1>Hello World!</h1>
      <button
        className="btn"
        onClick={() => {
          setText(!text);
        }}
      >
        show/hide
      </button>
      {text && <h1>This is Saikumar Aleti</h1>}
    </>
  );
};

export default ShortCircuit;
