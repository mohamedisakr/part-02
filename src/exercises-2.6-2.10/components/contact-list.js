import React from "react";
import Contact from "./contact";

const ContactList = ({ contacts }) => (
  <>
    <h2>Contact List</h2>
    <div>
      {contacts.map((person) => (
        <Contact key={person.id} name={person.name} number={person.number} />
      ))}
    </div>
  </>
);

export default ContactList;
