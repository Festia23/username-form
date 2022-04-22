import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onHandleError }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={onHandleError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2 className={classes.headerh2}>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onHandleError}>WTF Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
