import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const clickHandler = (id) => {
    let newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item">
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => clickHandler(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear
      </button>
    </>
  );
};

export default UseStateArray;
