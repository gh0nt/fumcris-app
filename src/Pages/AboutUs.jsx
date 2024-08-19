import React from "react";


export default function AboutUs() {

    return (
        <section id="AboutMe" className="hero--section bg-white flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-16">
            <div className="lg:w-1/2 w-full mt-6 lg mt:-0">
                
                <p className="text-xl font-bold text-blue-600">Nosotros</p>
                <h1 className="text-3xl font-extrabold text-gray-800 mt-4 mb-6">Sobre nosotros</h1>
                <p className="text-gray-600 mb-6">
                    Somos una institución sin ánimo de lucro, conformada por un grupo interdisciplinario, dedicada a brindar apoyo espiritual, psicológico y primeros auxilios en situaciones de emergencia. Nuestra labor comenzó en noviembre de 2023 y se oficializó el 24 de abril de 2024 en la Cámara de Comercio de Roldanillo, Valle del Cauca, Colombia.
                </p>

            
        </div>
            <div className="lg:w-1/2 w-full relative">
                <img src="./img/about-us.svg" alt="About Me" />
            </div>
            
        </section>

    );


};