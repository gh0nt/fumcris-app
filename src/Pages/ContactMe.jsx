import React from "react";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section py-12 bg-white">
      <div className="text-center mb-8">
        <p className="sub--title text-brandColor font-medium text-lg">¡Llámanos!</p>
        <h1 className="text-4xl font-bold text-gray-800">Contáctanos</h1>
        <p className="text-lg text-gray-600 mt-4">
        </p>
      </div>
      <form className="contact--form--container max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <label htmlFor="first-name" className="contact--label block">
            <span className="text-md text-gray-700">Nombres</span>
            <input
              type="text"
              className="contact--input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brandColor focus:ring focus:ring-brandColor focus:ring-opacity-50 text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label block">
            <span className="text-md text-gray-700">Apellidos</span>
            <input
              type="text"
              className="contact--input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brandColor focus:ring focus:ring-brandColor focus:ring-opacity-50 text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <label htmlFor="email" className="contact--label block">
            <span className="text-md text-gray-700">Email</span>
            <input
              type="email"
              className="contact--input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brandColor focus:ring focus:ring-brandColor focus:ring-opacity-50 text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label block">
            <span className="text-md text-gray-700">Teléfono</span>
            <input
              type="number"
              className="contact--input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brandColor focus:ring focus:ring-brandColor focus:ring-opacity-50 text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label block mb-6">
          <span className="text-md text-gray-700">Mensaje</span>
          <textarea
            className="contact--input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brandColor focus:ring focus:ring-brandColor focus:ring-opacity-50 text-md"
            id="message"
            rows="8"
            placeholder="Escribe tu mensaje..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label block mb-6">
          <input
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
            className="mr-2 rounded border-gray-300 focus:border-brandColor focus:ring focus:ring-brandColor focus:ring-opacity-50"
          />
          <span className="text-sm text-gray-600">Acepto los términos</span>
        </label>
        <div className="text-center">
          <button className="bg-blue-800 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition-colors">
            Submit
          </button>

        </div>
      </form>
    </section>
  );
}
