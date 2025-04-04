// CSS
import "./css/Contact.css";
// Components
import Form from "../components/Form";
// Data
import { metadata } from "../data/metadata";
// React
import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e95325dc-c83d-44f5-8068-3251501358c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      console.log("Sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <title>{metadata.contact.title}</title>
      <meta name="description" content={metadata.contact.description} />
      <main className="contact-page">
        <h1>Contact Us</h1>
        <p>
          Poké Pocket Promos was made out of love for Pokémon and Pokémon TCG
          Pocket. If you find any errors or want to see new features, be sure to
          send us a message! ❤️
        </p>

        <Form onSubmit={onSubmit} id="contact-form">
          <div>
            <input
              type="hidden"
              name="access_key"
              value="e95325dc-c83d-44f5-8068-3251501358c4"
            />

            <label htmlFor="contact-name">Name</label>
            <input
              type="text"
              name="contact-name"
              id="contact-name"
              placeholder="Cynthia"
              required
              autoFocus
            />

            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              name="contact-email"
              id="contact-email"
              placeholder="cynthia@sinnoh.com"
              required
            />

            <label htmlFor="contact-comments">Comments</label>
            <textarea
              name="contact-comments"
              id="contact-comments"
              rows="5"
              placeholder="I want more Pokémon!"
              required
            ></textarea>

            <button type="submit">Submit</button>
            <div id="contact-form-result">{result}</div>
          </div>
        </Form>
      </main>
    </>
  );
}
