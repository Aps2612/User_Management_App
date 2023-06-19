import React, { useState } from 'react';
import AddUserForm from './AddUserForm';
import UserList from './UserList';
import EditUserForm from './EditUserForm';


const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    // Generate a unique ID for the new user
    user.id = Date.now();

    // Add the new user to the users state
    setUsers([...users, user]);
  };

  const deleteUser = (userId) => {
    // Filter out the user with the given ID
    const updatedUsers = users.filter((user) => user.id !== userId);

    // Update the users state
    setUsers(updatedUsers);
  };

  const editUser = (userId) => {
    // Find the user with the given ID
    const user = users.find((user) => user.id === userId);

    // Set the currentUser state to the found user
    setCurrentUser(user);
    setEditing(true);
  };

  const updateUser = (updatedUser) => {
    // Map through the users state and update the user with the matching ID
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    // Update the users state and reset the editing state
    setUsers(updatedUsers);
    setEditing(false);
    setCurrentUser(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Management Application</h1>
      <div className="flex justify-between">
        {editing ? (
          <div className="w-1/4 mr-4">
            <h2 className="text-3xl font-semibold mb-4">Edit User</h2>
            <EditUserForm user={currentUser} updateUser={updateUser} />
          </div>
        ) : (
          <div className="w-1/4 mr-0">
            <h2 className="text-3xl font-semibold mb-4">Add User</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Users</h2>
          <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
};

export default App;