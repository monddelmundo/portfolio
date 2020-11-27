import React, { useState, ChangeEvent, FormEvent } from "react";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    emailAddress: "",
    message: "",
  });

  const setInitialState = () => {
    setForm((prevState) => ({
      ...prevState,
      name: "",
      emailAddress: "",
      message: "",
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch(
      "https://5yhe2kagzi.execute-api.ap-southeast-1.amazonaws.com/prod/sendEmail",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Message: {
            To: "edmond.delmundo@gmail.com",
            From: "mail@devcoral.com",
            Subject: {
              Data: `From ${form.name} <${form.emailAddress}>`,
            },
            Body: {
              Text: {
                Data: form.message,
              },
            },
          },
        }),
      }
    );
    const data = await res.json();

    if (data.statusCode === 200) {
      setInitialState();
      alert("Message sent successfully!");
    } else {
      alert("Message sending failed!");
    }
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (event.target.name) {
      case "user-name":
        setForm((prevState) => ({
          ...prevState,
          name: event.target.value,
        }));
        break;
      case "user-email":
        setForm((prevState) => ({
          ...prevState,
          emailAddress: event.target.value,
        }));
        break;
      case "user-message":
        setForm((prevState) => ({
          ...prevState,
          message: event.target.value,
        }));
        break;
      default:
        return;
    }
  };

  return (
    <div className="contact-container">
      <ContactForm
        form={form}
        onChange={onChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default React.memo(Contact);
