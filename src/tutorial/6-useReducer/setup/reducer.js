export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newName = { id: new Date().getTime().toString(), name: action.name };
    const newPeople = [...state.people, newName];
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Item Added!",
      people: newPeople,
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value!",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Removed!",
    };
  } else {
    throw new Error("No matching action type found!");
  }
};
