import React from "react";
import "./Contact.css";

function Contact({ mode }) {
  return (
    <div className={`contact-page ${mode}`}>
      <h2>Contact Me</h2>
      <p>Email: margit.viigi@voco.ee </p>
      <p>Phone: +372 5831 6752</p>
      <p>LinkedIn: ??</p>
      <p>GitHub: https://github.com/margitviigi</p>
    </div>
  );
}

export default Contact;