import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Sliding words bar */}
      <div className="bg-green-700 py-2 overflow-hidden">
        <motion.div
          className="text-white text-center text-sm md:text-base font-medium whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          Peace • Unity • Culture • Empowerment • Peace • Unity • Culture • Empowerment • Peace • Unity • Culture • Empowerment
        </motion.div>
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fata-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">
              Preserving African Tradition & Leadership
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering traditional authorities for a united, cultural future.
            </p>
            {/* Changed from Link to a tag that reloads page */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
              className="bg-white text-black px-6 py-3 font-semibold rounded hover:bg-gray-100 transition inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Rest of your component stays unchanged */}
      {/* Featured Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:flex items-center gap-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/images/tradition.jpg" alt="Traditional Leadership" className="rounded shadow" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif mb-4">Championing Heritage and Unity</h2>
            <p className="mb-6 text-gray-700">
              FATA brings together traditional leaders to preserve Africa’s rich cultural
              legacy, advocate for sustainable development, and empower communities through
              indigenous governance systems.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
              className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Meet the Leaders
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-100" id="events">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-10 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Cultural Preservation Summit",
                date: "September 25, 2025 – Nairobi, Kenya",
                img: "/images/event1.jpg",
              },
              {
                title: "Leadership Forum",
                date: "October 12, 2025 – Accra, Ghana",
                img: "/images/event2.jpg",
              },
              {
                title: "Heritage Day",
                date: "November 5, 2025 – Cape Town, South Africa",
                img: "/images/event3.jpg",
              },
            ].map((event) => (
              <div key={event.title} className="bg-white rounded shadow p-4">
                <img src={event.img} alt={event.title} className="mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-serif mb-4">Support the Mission of FATA</h2>
        <p className="mb-6">Help preserve Africa's traditions and strengthen indigenous leadership.</p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
          className="bg-white text-black px-6 py-3 font-semibold rounded hover:bg-gray-200 transition inline-block"
        >
          Donate Now
        </a>
      </section>
    </div>
  );
};

export default Home;
