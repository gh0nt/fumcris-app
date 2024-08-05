import React, { useEffect, useState } from "react";
import data from "../data/index.json"; // Ajusta la ruta del index.json


function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % data.testimonial.length);
    }, 100000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      {data?.testimonial?.map((item, index) => (
        <div key={index} className="testimonials--form--container">
          <img src={item.src} alt="members" />
          <h3>{item.author_name}</h3>
          <p>{item.author_designation}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
