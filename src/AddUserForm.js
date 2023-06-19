import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (!name) {
      alert("Please enter a name.");
      return;
    }

    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    if (!phone) {
      alert("Please enter a phone number.");
      return;
    }

    // Create a new user object
    const newUser = { name, email, phone };

    // Call the addUser function passed from the parent component
    addUser(newUser);

    // Clear the form inputs
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-md shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 px-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-md shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 px-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-lg font-medium mb-2">
          Phone Number
        </label>
        <PhoneInput
          country="US"
          value={phone}
          onChange={setPhone}
          className="w-full"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
