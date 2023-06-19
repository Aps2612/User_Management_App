import React, { useState, useEffect } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

// const isValidPhone = (phone) => {
//   return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
// };

const EditUserForm = ({ user, updateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Set the initial state of the form inputs with the values from the user prop
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (!name) {
      alert("Please enter a name.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // if (!isValidPhone(phone)) {
    //   alert("Please enter a valid phone number.");
    //   return;
    // }

    // Create an updated user object
    const updatedUser = { ...user, name, email, phone };

    // Call the updateUser function passed from the parent component
    updateUser(updatedUser);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium mb-2 ">
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
        Update User
      </button>
    </form>
  );
};

export default EditUserForm;
