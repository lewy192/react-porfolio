import React, { useState } from "react";

import Paperplane from "./Paperplane";

import "./Contact.css";

function Contact() {
    const [name, setUsersName] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
    };

    return (
        <section className="contact-container">
            <h2 className="contact-me">&lt;Contact Me/&gt;</h2>
            <p className="contact-me-para">
                Feel free to reach out to me at{" "}
                <a href="mailto:lewis.james.hill@outlook.com">
                    lewis.james.hill@outlook.com
                </a>{" "}
                or drop me a mail bellow.
            </p>
            <form className="contact-form" onSubmit={sendEmail}>
                <label htmlFor="name-field" className="name-label">
                    Name:
                </label>
                <input type="text" id="name-field" name="fullName" />
                <label htmlFor="contact-field" className="contact-label">
                    Email:
                </label>
                <input type="text" id="contact-field" name="contactDetails" />
                <label htmlFor="message-field" className="message-label">
                    Message:
                </label>
                <textarea
                    name="message"
                    id="message-field"
                    cols="30"
                    rows="3"
                ></textarea>
                <button type="submit" className="submit-button">
                    <Paperplane />
                </button>
            </form>
            <h2 className="contact-me">&lt;/Contact Me&gt;</h2>
        </section>
    );
}
export default Contact;
