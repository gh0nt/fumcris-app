import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      img: "/img/logo.jpeg",
      title: "FUMCRIS",
      description:
        "Fundación Movimiento Cristiano Internacional de Socorro “FUMCRIS”",
    },
    {
      img: "/img/hero.png",
      title: "¿Quiénes Somos?",
      description:
        "Somos un grupo de profesionales en disposición de servicio, nuestra interdisciplinariedad nos permite abarcar las distintas problemáticas desde múltiples perspectivas.",
    },
    {
      img: "/img/slide1.png",
      title: "Apoyo Espiritual",
      description:
        "Brindamos un apoyo espiritual a las personas que lo necesitan, ayudándoles a encontrar paz y orientación.",
    },
    {
      img: "/img/slide2.png",
      title: "Soporte Psicológico",
      description:
        "Nuestro equipo está capacitado para ofrecer soporte psicológico en situaciones de crisis.",
    },
    {
      img: "/img/slide3.png",
      title: "Primeros Auxilios",
      description:
        "Estamos listos para actuar y ofrecer primeros auxilios en cualquier emergencia.",
    },
    {
      img: "/img/slide4.png",
      title: "Comunidad y Solidaridad",
      description:
        "Promovemos la solidaridad y el apoyo comunitario para construir un mejor futuro juntos.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="heroSection"
      className="hero--section bg-white flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-16"
    >
      <div className="lg:w-1/2 w-full relative mt-32">
        <div className="slider relative w-full h-[500px] overflow-hidden">
          <img
            src={slides[currentSlide].img}
            alt={slides[currentSlide].title}
            className="w-full h-full object-contain transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevSlide}
              className="text-gray-700 text-2xl font-bold"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="text-gray-700 text-2xl font-bold"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
        <p className="text-xl font-bold text-blue-600 transition-opacity duration-700 ease-in-out">
          {slides[currentSlide].title}
        </p>
        <h1 className="text-3xl font-extrabold text-gray-800 mt-4 mb-6 transition-opacity duration-700 ease-in-out">
          {slides[currentSlide].title}
        </h1>
        <p className="text-gray-600 mb-6 transition-opacity duration-700 ease-in-out">
          {slides[currentSlide].description}
        </p>
        <button className="btn bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700">
          Contáctanos
        </button>
      </div>
    </section>
  );
}
