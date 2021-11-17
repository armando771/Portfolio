import React from "react";
import { Form } from './style';

function FormEmail() {
  return (
    <Form>
      <form action="https://formspree.io/f/xvodyapj" method="POST" className="form">
      <p>Contact me</p>
      <label> Your email:
        <input type="email" name="_replyto" placeholder="Your Email"/>
      </label>
      <label> Your message:
        <textarea name="message" placeholder="Enter your message here:" maxLength="300" minLength="20" required cols="30" rows="6"></textarea>
      </label>
      <button type="submit">Send</button>
      </form>
    </Form>
  )
}

export default FormEmail;
