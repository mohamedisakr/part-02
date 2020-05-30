import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Tamil", number: 1111 },
    { id: 2, name: "Arto Hellas", number: "040-123456" },
    { id: 3, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 4, name: "Dan Abramov", number: "12-43-234345" },
    { id: 5, name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [keyword, setKeyword] = useState("");
  let filteredContacts = persons.filter(({ name }) =>
    name.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(filteredContacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    if (
      persons.find(
        ({ name }) => name.toLowerCase() === personObject.name.toLowerCase()
      )
    ) {
      alert(`${personObject.name} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search:
        <input
          type="search"
          placeholder="Search for contact"
          value={keyword}
          onChange={handleKeywordChange}
        />
        {keyword}
      </div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredContacts.map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
