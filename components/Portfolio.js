const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white p-4">
      <h2 className="text-2xl font-bold mb-6 mt-4 text-blue-950 text-center">Portfolio</h2>
      <div className="text-black text-large mt-6 p-4 md:flex flex-wrap">
        {/* Portfolio Items */}
        <div className="p-1 w-full md:w-1/3">
          <div className="p-4 mb-2 h-full text-center border rounded-md shadow-md">
            <img
              src="/machine_learning.jpg"
              alt="Project preview image"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
            <h3 className="mb-4 text-l font-medium">"Revolutionizing Image Classification: A Python-Based Machine Learning Project Utilizing ResNet9."</h3>
          </div>
        </div>
        <div className="p-1 w-full md:w-1/3">
          <div className="p-4 mb-2 h-full text-center border rounded-md shadow-md">
            <img
              src="/air_hockey.jpg"
              alt="Project preview image"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
            <h3 className="mb-4 text-l font-medium">"Air Hockey: An Immersive Python-Powered Game with Pygame and Tkinter GUI"</h3>
          </div>
        </div>
        <div className="p-1 w-full md:w-1/3">
          <div className="p-4 mb-2 h-full text-center border rounded-md shadow-md">
            <img
              src="/rest_api.jpg"
              alt="Project preview image"
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
            <h3 className="mb-4 text-l font-medium">"Effortless REST API Creation: A Python FastAPI App with PostgreSQL Database and User Authentication Integration"</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
