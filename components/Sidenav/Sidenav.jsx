import React from "react";
import me from "../../public/me.jpg";
import Image from "next/image";

function Sidenav() {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="sidenav">
      <div className="image-container">
        <Image className="img" src={me} alt="Carlos arreola" />
      </div>

      <a className="home-link" href="/">
        <h1>carlos arreola</h1>
      </a>
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

      <nav>
        <a onClick={() => scrollToSection("#home")}>
          <i class="fa-solid fa-house"></i>home
        </a>
        <a onClick={() => scrollToSection("#about")}>
          <i class="fa-solid fa-user"></i>about
        </a>
        <a onClick={() => scrollToSection("#portfolio")}>
          <i class="fa-solid fa-newspaper"></i>portfolio
        </a>
        <a onClick={() => scrollToSection("#contact")}>
          <i class="fa-solid fa-address-book"></i>contact
        </a>
      </nav>
      <p>
        Copyright © 2024 Carlos Arreola.
        <br /> All Rights Reserved.
      </p>
    </div>
  );
}

export default Sidenav;
