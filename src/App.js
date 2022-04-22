import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import AddUserList from "./components/Users/AddUserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (user) => {
    setUsers((currentUsers) => [...currentUsers, user]);
    console.log(user);
  };

  return (
    <div>
      <AddUsers onAddUser={onAddUserHandler} />
      <AddUserList users={users} />
    </div>
  );
};

export default App;
