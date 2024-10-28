import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../assets/css/contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+123 7047920318</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>anidisamuel2006@gmail.com</span>
          </div>
          <div className="info-item">
            <FaWhatsapp className="icon" />
            <span>+123 7047920318</span>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="First Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
