import React from "react";
export default function HeroSection() {

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Fundación Movimiento Cristiano Internacional de Socorro</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FUMCRIS</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
          Somos una institución de socorro interdisciplinar, capacitada para prestar apoyo espiritual, psicológico y, primeros auxilios a quien lo necesite.
            </p>
        </div>
        <button className="btn btn-primary">Contáctanos</button>
      </div>
      <div className="hero--section--img">
        <img src="/img/hero.png" alt="Fumcris" />
      </div>
    </section>
  );
}