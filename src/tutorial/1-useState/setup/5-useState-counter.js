import React, { useState } from "react";

const UseStateCounter = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const increaseLater = () => {
    setTimeout(() => {
      setValue2((value2) => {
        return value2 + 1;
      });
    }, 1000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Simple Counter</h2>
        <h1>{value1}</h1>
        <button
          className="btn"
          onClick={() => {
            return setValue1(value1 + 1);
          }}
        >
          increase
        </button>
        <button
          className="btn"
          onClick={() => {
            return setValue1(value1 - 1);
          }}
        >
          decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            return setValue1(0);
          }}
        >
          reset
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value2}</h1>
        <button className="btn" onClick={increaseLater}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
