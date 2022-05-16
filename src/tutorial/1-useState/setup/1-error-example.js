import React from "react";
let title = "useState error example";
const ErrorExample = () => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          title = "Hello world!";
          console.log(title);
        }}
      >
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
