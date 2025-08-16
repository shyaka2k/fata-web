import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/home5.jpg",
  "/home2.jpg",
  "/home3.jpg",
  "/home4.jpg",
  "/home6.jpg",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            alt={`Hero ${currentImage + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight text-white drop-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Uniting Africa’s Traditional Leaders for Peace, Unity, and Sustainable Development
          </motion.h1>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/about"
              className="bg-green-600 hover:bg-green-500 transition text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
            >
              Learn More
            </a>
            <a
              href="/get-involved"
              className="bg-white hover:bg-gray-100 transition text-green-700 font-semibold px-6 py-3 rounded-lg shadow-lg"
            >
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro to FATA */}
      <section className="py-16 sm:py-20 bg-gray-50 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-green-600 mb-4">
          Welcome to FATA
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 mb-6">
          The Forum of African Traditional Authorities (FATA) unites traditional leaders across Africa 
          to preserve cultural heritage, foster unity, and contribute to sustainable development. 
          Together, we strengthen indigenous governance and build peace for future generations.
        </p>
        <a
          href="/about"
          className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          About Us
        </a>
      </section>

      {/* Featured News / Updates */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-green-600 mb-10">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "FATA Signs Partnership with AU", date: "August 2025", img: "/latest3.jpg" },
              { title: "Peace Dialogue in West Africa", date: "July 2025", img: "/latest2.jpg" },
              { title: "Cultural Exchange Program Launched", date: "June 2025", img: "/latest2.jpg" },
            ].map((news) => (
              <div
                key={news.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <img src={news.img} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{news.title}</h3>
                  <p className="text-gray-600 text-sm">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Tiles */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-green-600 mb-10">
            Explore FATA
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {[
              { title: "Mission", link: "/about", img: "/tile-mission.jpg" },
              { title: "Leadership", link: "/leadership", img: "/tile-leadership.jpg" },
              { title: "Events", link: "/events", img: "/tile-events.jpg" },
              { title: "Get Involved", link: "/get-involved", img: "/tile-involved.jpg" },
              { title: "Contact", link: "/contact", img: "/tile-contact.jpg" },
            ].map((tile) => (
              <a
                key={tile.title}
                href={tile.link}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 block"
              >
                <img src={tile.img} alt={tile.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{tile.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Championing Heritage and Unity */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 md:flex items-center gap-10">
          <div className="md:w-1/2 mb-8 md:mb-0 relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/Championing.jpg"
              alt="Championing Heritage and Unity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 text-green-500">
              Championing Heritage and Unity
            </h2>
            <p className="mb-6 text-gray-800 text-base sm:text-lg">
              FATA brings together traditional leaders to preserve Africa’s rich cultural
              legacy, advocate for sustainable development, and empower communities through
              indigenous governance systems.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 sm:py-16 bg-white" id="events">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-8 sm:mb-10 text-center text-green-500">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Cultural Preservation Summit", date: "September 25, 2025 – Nairobi, Kenya", img: "/latest1.jpg" },
              { title: "Leadership Forum", date: "October 12, 2025 – Accra, Ghana", img: "/latest2.jpg" },
              { title: "Heritage Day", date: "November 5, 2025 – Cape Town, South Africa", img: "/latest3.jpg" },
            ].map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <img src={event.img} alt={event.title} className="mb-4 w-full object-cover h-56 sm:h-64" />
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 sm:py-20 bg-green-700 text-white text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">
          Support the Mission of FATA
        </h2>
        <p className="mb-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Help preserve Africa's traditions and strengthen indigenous leadership.
        </p>
        <a
          href="/donate"
          className="bg-white hover:bg-gray-100 text-green-700 px-6 py-3 font-semibold rounded-lg shadow-lg transition"
        >
          Donate Now
        </a>
      </section>
    </div>
  );
};

export default Home;
