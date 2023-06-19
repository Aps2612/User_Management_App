import React from "react";

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <ul className="grid gap-4">
      {users.map((user) => (
        <li key={user.id} className="bg-white shadow-md p-4 rounded-lg">
          <div className="mb-4">
            <strong className="text-lg font-semibold">Name :</strong> {user.name}
          </div>
          <div className="mb-4">
            <strong className="text-lg font-semibold">Email :</strong>{" "}
            {user.email}
          </div>
          <div className="mb-4">
            <strong className="text-lg font-semibold">Phone Number:</strong>{" "}
            +{user.phone}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => editUser(user.id)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mr-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => deleteUser(user.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
