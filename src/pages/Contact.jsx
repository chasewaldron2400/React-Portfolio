import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m5eon2f', 'template_ko3l3u6', form.current, {
        publicKey: '7ckJPiUWuK-CiV9iy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="emailForm" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <p>Feel free to connect with me:</p>
        <a href="https://github.com/chasewaldron2400" target="_blank" rel="noopener noreferrer" className="social-link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/chase-waldron" target="_blank" rel="noopener noreferrer" className="social-link">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact