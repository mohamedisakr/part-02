import React from "react";
import Contact from "./contact";

const ContactList = ({ contacts, handleClick }) => (
  <>
    <h2>Contact List</h2>
    <div>
      {contacts.map((person) => (
        <Contact
          key={person.id}
          id={person.id}
          name={person.name}
          number={person.number}
          handleClick={handleClick}
        />
      ))}
    </div>
  </>
);

export default ContactList;
