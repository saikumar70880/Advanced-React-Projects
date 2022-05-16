import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";
// reducer function
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello World",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: "ADD_ITEM", name });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      {state.people.map((person) => {
        const { name, id } = person;
        return (
          <div className="item" key={id}>
            <h6>{name}</h6>
            <button
              className="btn"
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
