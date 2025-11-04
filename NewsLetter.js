import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, Button, Message } from "semantic-ui-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0kb5njq",        // Your EmailJS service ID
        "template_239l6ta",       // Your EmailJS template ID
        { user_email: email },
        "x3LdwrPTsnoSJFkkS"       // Your EmailJS public key
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setEmail("");
        },
        (err) => {
          console.error("FAILED...", err);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div style={{ textAlign: "center", margin: "40px 0" }}>
      <h2>Sign Up for Daily Updates</h2>
      <Form onSubmit={handleSubmit} style={{ display: "inline-flex", gap: "10px" }}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button color="blue" type="submit">
          Subscribe
        </Button>
      </Form>

      {success && (
        <Message positive>
          <Message.Header>Subscription Successful!</Message.Header>
          <p>A welcome email has been sent to your inbox.</p>
        </Message>
      )}

      {error && (
        <Message negative>
          <Message.Header>Something went wrong!</Message.Header>
          <p>Please try again later.</p>
        </Message>
      )}
    </div>
  );
};

export default Newsletter;
