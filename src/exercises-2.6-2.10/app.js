import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: "Tamil" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = { id: persons.length + 1, name: newName };
    console.log(personObject);

    // persons.forEach((member) => {
    //   if (member.name.toLowerCase() === personObject.name.toLowerCase()) {
    //     alert(`${personObject.name} is already added to phonebook`);
    //     setNewName("");
    //     return;
    //   }
    //   else {              }
    // });

    setPersons(persons.concat(personObject));
    setNewName("");
    console.log(persons);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        {newName}
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.id}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
