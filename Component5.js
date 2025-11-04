import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import emailjs from "@emailjs/browser";

export default function Email() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  React.useEffect(() => {
    emailjs.init("x3LdwrPTsnoSJFkkS"); 
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter a valid email address.");
      setStatusColor("red");
      return;
    }

    emailjs
      .send("service_0kb5njq", "template_239l6ta", {
        user_email: email, 
      })
      .then(
        () => {
          setStatus("Subscription successful! Email sent.");
          setStatusColor("green");
          setEmail("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Something went wrong. Could not send the email.");
          setStatusColor("red");
        }
      );
  };

  return (
    <div style={{ background: "#f0f4f8", padding: "20px", borderRadius: "10px" }}>
      <Form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
        <strong style={{ marginRight: "15px", fontSize: "16px" }}>
          SIGN UP FOR DAILY UPDATES
        </strong>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e, { value }) => setEmail(value)}
          style={{ flex: "1", marginRight: "10px" }}
          required
        />
        <Button color="grey" type="submit">Subscribe</Button>
      </Form>

      {status && (
        <p style={{ marginTop: "10px", color: statusColor, fontWeight: "bold" }}>
          {status}
        </p>
      )}
    </div>
  );
}
