import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = ({ onAddUser, checkEmail }) => {
  //   const [isValid, setIsvalid] = useState(true);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!username || !age || !job || !email) {
      //   setIsvalid(false);
      setError({
        title: "An Error occured!",
        message: "Please enter a valid information (non-empty values)!",
      });
      return;
    }

    if (!checkEmail(email)) {
      setError({
        title: "An Error Occured",
        message:
          "This email is already taken, please enter an another valid email",
      });
      return;
    }

    if (age < 1) {
      setError({
        title: "An error occured",
        message: "Please enter a valid age!",
      });
      return;
    }

    const user = {
      username,
      age,
      job,
      email,
      id: Math.random(),
    };
    onAddUser(user);
    setUsername("");
    setAge("");
    setJob("");
    setEmail("");
    // setIsvalid(true);
  };

  const changeHandler = (event) => {
    setUsername(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const changeJobHandler = (event) => {
    setJob(event.target.value);
  };

  const changeMailHandler = (event) => {
    setEmail(event.target.value.toLowerCase());
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        {/* <label style={{ fontFamily: "sans-serif" }} htmlFor="username">
        
      </label> */}
        <form onSubmit={submitHandler}>
          <input
            placeholder="Username"
            style={{ color: "dark gray" }}
            id="username"
            onChange={changeHandler}
            type="text"
            value={username}
          ></input>

          <br />
          <br />
          {/* <label htmlFor="age">Age:</label> */}
          <input
            placeholder="Age"
            onChange={changeAgeHandler}
            id="age"
            type="number"
            value={age}
          ></input>
          <br />
          <br />
          <input
            placeholder="e-mail"
            onChange={changeMailHandler}
            type="text"
            value={email}
          ></input>
          <br />
          <br />
          <input
            placeholder="Job"
            onChange={changeJobHandler}
            type="text"
            value={job}
          ></input>

          <Button type="submit">Submit</Button>
          {/* {!isValid && <p>Please enter a fucking valid information!</p>} */}
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
