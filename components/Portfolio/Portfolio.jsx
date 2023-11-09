import React from "react";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
      </div>
      <h1>Portfolio</h1>
      <p>
        You can have a look at some of my personal projects here!, just click on
        them and they´ll take you to the application.
      </p>
      <div className="projects">
        <a href="https://ecommerce-sanity-stripe-pi-six.vercel.app/">
          <section>E-commerce</section>
        </a>

        <a href="https://crudappv2.vercel.app/">
          <section>CRUD</section>
        </a>

        <a href="https://carreguz13.github.io/RickMortyReact/">
          <section>Rick & Morty api</section>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
