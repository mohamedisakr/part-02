import React, { useState, useEffect } from "react";
import ContactService from "../services/contacts";
import ContactList from "./contact-list";
import ContactForm from "./contact-form";
import SearchBox from "./search-box";
import Notification from "./notification";
import Success from "./success";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [keyword, setKeyword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    ContactService.getAll().then((initiatedContacts) =>
      setPersons(initiatedContacts)
    );
  }, []);

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
      setErrorMessage(`${personObject.name} is already added to phonebook`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 4000);
      setNewName("");
      setNewNumber("");
      return;
    }

    ContactService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setConfirmation(`${returnedPerson.name} added successfully.`);
      setTimeout(() => {
        setConfirmation(null);
      }, 4000);
      setNewName("");
      setNewNumber("");
    });
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

  const deleteContact = (id) => {
    console.log(`delete contact with id ${id}.`);
    const contactToDelete = persons.find((person) => person.id === id);
    const reply = window.confirm(
      `Are you sure you want to delete ${contactToDelete.name}?`
    );
    if (reply) {
      ContactService.remove(id).then(() =>
        setPersons(persons.filter((person) => person.id !== id))
      );
    }
  };

  // console.log(persons);
  let filteredContacts = persons.filter((person) =>
    person.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <Notification message={errorMessage} />
      <Success message={confirmation} />
      <SearchBox
        keyword={keyword}
        placeholder="Search for contact"
        handleKeywordChange={handleKeywordChange}
      />
      <ContactForm
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <ContactList contacts={filteredContacts} handleClick={deleteContact} />
    </div>
  );
};

export default App;
