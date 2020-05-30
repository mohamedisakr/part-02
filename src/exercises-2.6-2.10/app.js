import React, { useState } from "react";
import ContactList from "./components/contact-list";
import ContactForm from "./components/contact-form";
import SearchBox from "./components/search-box";

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
      {/* <h2>Phonebook</h2>
      <div>
        Search:
        <input
          type="search"
          placeholder="Search for contact"
          value={keyword}
          onChange={handleKeywordChange}
        />
        {keyword}
      </div> */}
      <SearchBox
        keyword={keyword}
        placeholder="Search for contact"
        handleKeywordChange={handleKeywordChange}
      />
      <div>
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
      </div>

      {/* <ContactForm
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      /> */}
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
