import React, { ChangeEvent, FormEvent } from "react";

export interface IContactFormProps {
  form: {
    name: string;
    emailAddress: string;
    message: string;
  };
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
