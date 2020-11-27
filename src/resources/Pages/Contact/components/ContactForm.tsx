import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

import { IContactFormProps } from "../contactInterface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2),
    },
    textField: {
      marginBottom: theme.spacing(4),
      width: "40ch",
    },
  })
);

const ContactForm = ({ form, onChange, handleSubmit }: IContactFormProps) => {
  const classes = useStyles();

  return (
    <div>
      <form
        className="contact-form-container"
        // noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h1 className="text-contact">Contact</h1>
        <TextField
          //   required
          id="outlined-required"
          label="Full Name"
          name="user-name"
          placeholder="Enter Full Name"
          variant="outlined"
          className={classes.textField}
          value={form.name}
          onChange={onChange}
        />
        <TextField
          //   required
          id="outlined-required"
          label="Email Address"
          name="user-email"
          placeholder="Enter Email Address"
          variant="outlined"
          className={classes.textField}
          value={form.emailAddress}
          onChange={onChange}
        />
        <TextField
          //   required
          id="outlined-multiline-static"
          label="Message"
          name="user-message"
          multiline
          rows={4}
          placeholder="Your message"
          variant="outlined"
          className={classes.textField}
          value={form.message}
          onChange={onChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default React.memo(ContactForm);
