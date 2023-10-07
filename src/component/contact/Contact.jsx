import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g76wnq8",
        "template_x4qzkab",
        form.current,
        "_XpW9ENcQ6p-CQkUW"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container main__contact">
        <div className="contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h6>eyouelaya@gmail.com</h6>
              <a href="mailto:eyouelaya@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
          </div>

          <div className="contact__options">
            <article className="contact__option">
              <AiOutlineWhatsApp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h6>+1-650-705-8021</h6>
              <a href="https://wa.me/16507058021" target="_blank">
                Send a message
              </a>
            </article>
          </div>
        </div>
        {/* End of contact options */}
        <div className="contact__form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
