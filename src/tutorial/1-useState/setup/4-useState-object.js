import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Saikumar Aleti",
    age: 24,
    job: "Software Developer",
  });
  return (
    <>
      <h3>{people.name}</h3>
      <h3>{people.age}</h3>
      <h3>{people.job}</h3>
      <button
        type="button"
        className="btn"
        onClick={() => {
          if (people.job === "Software Developer") {
            setPeople({ ...people, job: "Web Developer" });
          } else {
            setPeople({ ...people, job: "Software Developer" });
          }
        }}
      >
        Change Job
      </button>
    </>
  );
};

export default UseStateObject;
