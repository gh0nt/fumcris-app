import React from "react";


export default function AboutUs() {

    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/about-us.svg" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">Nosotros</p>
                    <h1 className="skills-section--heading">Sobre nosotros</h1>
                    <p className="hero--section-description">
                        Somos una institución sin ánimo de lucro, conformada por un grupo interdisciplinario, dedicada a brindar apoyo espiritual, psicológico y primeros auxilios en situaciones de emergencia. Nuestra labor comenzó en noviembre de 2023 y se oficializó el 24 de abril de 2024 en la Cámara de Comercio de Roldanillo, Valle del Cauca, Colombia.
                    </p>

                </div>
            </div>
        </section>

    );


};