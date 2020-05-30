import React from "react";
import Contact from "./contact";

const ContactList = ({ contacts }) => (
  <>
    <h2>Contact List</h2>
    <div>
      {contacts.map((person) => (
        <Contact key={person.id} name={person.name} number={person.number} />
        // <p key={person.id}>
        //   {person.name} {person.number}
        // </p>
      ))}
    </div>
  </>
);

export default ContactList;
