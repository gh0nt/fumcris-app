import React, { useEffect, useState } from "react";
import data from "../data/index.json"; // Adjust the path as needed

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % data.testimonial.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container flex flex-wrap justify-center  p-6">
      {data?.testimonial?.map((item, index) => (
        <div key={index} className="testimonials--form--container w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-48">
            <img
              src={item.src}
              alt={item.author_name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-gray-800">{item.author_name}</h3>
            <p className="text-gray-600">{item.author_designation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
