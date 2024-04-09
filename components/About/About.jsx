import React from "react";
import Mee from "../../public/mee.jpg";
import Image from "next/image";

function About() {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <p>
        Hello there! I'm Carlos Arreola, I have a degree in mechatronic engineering
        specialize in programming, as a Front-End Developer I'm passionate about web
        development and committed to continuous learning to expand my skills in
        both front-end and back-end technologies. I thrive on bringing designs
        to life, delivering seamless user experiences, and crafting functional
        websites.
      </p>
      <div className="middle">
        <Image className="image-a" src={Mee} alt="Carlos arreola" />
        <section>
          <h2>Front-End Developer</h2>
          <p>
            As a Front-End Developer, I'm passionate about turning creative
            concepts into engaging digital experiences. Let's bring your ideas
            to life through code and design!
          </p>
          <div className="list">
            <ul>
              <li>
                <i class="fa-solid fa-circle"></i> Name:{" "}
                <span>Carlos Arreola</span>{" "}
              </li>

              <li>
                <i class="fa-solid fa-circle"></i> Website:{" "}
                <a className="link" href="https://carreguz.vercel.app">
                  <span>carreguz.vercel.app</span>
                </a>
              </li>

              <li>
                <i class="fa-solid fa-circle"></i> Phone:{" "}
                <span>+52 81 2717 9069</span>{" "}
              </li>
              <li>
                <i class="fa-solid fa-circle"></i> City:{" "}
                <span>Mazatlan, Mex.</span>{" "}
              </li>
            </ul>

            <ul>
              <li>
                <i class="fa-solid fa-circle"></i> Age: <span>27</span>{" "}
              </li>
              <li>
                <i class="fa-solid fa-circle"></i> Degree: <span>Bachelor</span>{" "}
              </li>
              <li>
                <i class="fa-solid fa-circle"></i> Career:{" "}
                <span>Mechatronic Engineering</span>{" "}
              </li>
              <li>
                <i class="fa-solid fa-circle"></i> Email:{" "}
                <span>carreguz13@gmail.com</span>{" "}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
