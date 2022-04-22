import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const AddUserList = ({ users }) => {
  console.log(users);
  return (
    <Card className={classes.users}>
      <ul>
        {users.map(({ username, age, job, email }) => (
          <li key={username}>
            {username} {age} {email} {job}{" "}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AddUserList;
