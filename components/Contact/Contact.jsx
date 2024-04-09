import React, { useRef } from "react";
import Bush from "../../public/bush.png";
import Bush2 from "../../public/bush2.png";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vpilpbr",
        "template_au4mz2z",
        form.current,
        "CBHFh5FzqFYT_FIpV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Message send!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <Image src={Bush2} className="bush2"></Image>
      <Image src={Bush} className="bush"></Image>
      <div className="boxh1">
        <h1>Conatct</h1>
      </div>
      <p>
        I'm thrilled to connect with you and discuss potential projects,
        collaboration opportunities, or just have a friendly chat. Whether you
        have a web development project in mind, want to learn more about my
        skills and experience, or just want to say hello, feel free to reach
        out. Your message is important to me, and I'll do my best to respond as
        soon as possible.
      </p>
      <div className="main">
      {/* 
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <button type="submit" value="Send">
            Send
          </button>
        </form>
*/}
        <div className="section">
          <h2>Social Profiles</h2>

          <ul>
            <a href="https://wa.me/528127179069">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            {/* 
            <a href="https://www.linkedin.com/in/carreguz/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            */}
            <a href="https://www.instagram.com/carlosarre13/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/carreguz13">
              <i className="fa-brands fa-github"></i>
            </a>
          </ul>

          <div className="social-profiles2">
            <section>
              <h2>Email Me</h2>

              <a href="mailto:carreguz13@gmail.com">
                <i class="fa-regular fa-envelope"></i>
              </a>
            </section>
            <section>
              <h2>Call Me</h2>

              <a href="tel:528127179069">
                <i class="fa-solid fa-phone"></i>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
