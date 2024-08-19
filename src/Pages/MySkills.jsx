import data from "../data/index.json";


export default function MySkills() {
  return (
    <section className="skills--section hero--section bg-white flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-16" id="mySkills">
      <div className="skills--section--container lg:w-1/2 w-full mt-6 lg mt:-0">
        <h2 className="skills--section--heading text-3xl font-extrabold text-gray-800 mt-4 mb-6">Experiencia</h2>
        <p className="section--title text-xl font-bold text-blue-600">Nuestro servicio</p>
      </div>
      <div className="skills--section--container flex flex-wrap justify-center  p-6">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="skills--section--img relative h-48">
              <img src={item.src} alt="Service" className="skills--section--img w-full h-full object-contain rounded-md" />
            </div>
            <div className="skills--section--card--content ml-6 text-justify mr-6 mt-3 ">
              <h3 className="skills--section--title text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="skills--section--description text-gray-600 mb-6">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}