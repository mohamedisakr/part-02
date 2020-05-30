import React from "react";

const ContactForm = (
  newName,
  newNumber,
  handleSubmit,
  handleNameChange,
  handleNumberChange
) => (
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
);

export default ContactForm;
