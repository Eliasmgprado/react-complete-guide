import React, { useState } from "react";

import Users from "./components/Users/Users";
import NewUser from "./components/NewUser/NewUser";

const INITIAL_USERS = [
  { id: 1, name: "AAA", age: 21 },
  { id: 2, name: "BBB", age: 88 },
];

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler}></NewUser>
      <Users items={users} />
    </div>
  );
}

export default App;
