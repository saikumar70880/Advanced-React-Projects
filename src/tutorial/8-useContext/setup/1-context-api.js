import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)
const PersonContext = React.createContext();
//once we create the context we'll have access to two components, Provider and Consumer. After the introduction of useContext hook Consumer is no longer being used. You can access the components using PersonContext.Provider and PersonContext.Consumer
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <PersonContext.Provider value={{ people, removePerson }}>
        <h3>Context API / useContext Hook</h3>
        <List people={people} removePerson={removePerson} />
      </PersonContext.Provider>
    </>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
