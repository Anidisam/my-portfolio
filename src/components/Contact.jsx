import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../assets/css/contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.target;

    // Send the form data using Formspree
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset(); // Optional: reset form after successful submission
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+234 7047920318</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>anidisamuel2006@gmail.com</span>
          </div>
          <div className="info-item">
            <FaWhatsapp className="icon" />
            <span>+234 7047920318</span>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/xgveyywe" // Formspree URL here
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Full Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send</button>

          {/* Display status message */}
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
