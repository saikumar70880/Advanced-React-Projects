import React, { useEffect, useRef } from "react";

// preserves value same as useState
// DOES NOT trigger re-render as useState does
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    console.log(refContainer.current);
    console.log(refContainer.current.value);
    refContainer.current.focus();
  });
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input type="text" ref={refContainer} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </article>
    </>
  );
};

export default UseRefBasics;
