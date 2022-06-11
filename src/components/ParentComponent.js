import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";


function ParentComponent() {
  const [firstName, setFirstName] = useState("Julien");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    console.log(event.target.value)
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    console.log(event.target.value)
    setLastName(event.target.value);
  }

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default ParentComponent;