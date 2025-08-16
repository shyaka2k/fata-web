import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const activitiesPreview = [
  { title: "Peace Missions", desc: "Preview of peace and reconciliation activities." },
  { title: "Cultural Programs", desc: "Experience our traditional heritage and exchanges." },
  { title: "Youth Empowerment", desc: "Support for youth and women initiatives." },
];

const fullActivities = [
  {
    title: "Annual Forums and Conferences",
    desc: "FATA organizes yearly forums that gather traditional leaders across Africa to discuss pressing issues, share knowledge, and promote unity. These forums have been held in Uganda, Ghana, and Ethiopia.",
  },
  {
    title: "Peace and Reconciliation Missions",
    desc: "FATA leaders actively mediate conflicts and support peace initiatives in communities. Their efforts have helped resolve tribal conflicts and promoted healing in post-conflict regions.",
  },
  {
    title: "Cultural Exchange Programs",
    desc: "FATA encourages the exchange of cultural values by organizing visits and dialogues between communities. This helps preserve languages, traditional customs, and indigenous knowledge systems.",
  },
  {
    title: "Partnerships and Collaborations",
    desc: "We collaborate with African governments, the African Union, UNESCO, and civil society organizations to implement community development programs, educational outreach, and environmental conservation.",
  },
];

function Welcome() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative text-center py-32 sm:py-40 md:py-48 overflow-hidden bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-blue-900"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to FATA
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto text-blue-800/90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Uniting Africa’s Traditional Leaders for Peace, Unity, and Development
          </motion.p>
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 8px 16px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-green-500 text-white rounded-full text-lg sm:text-xl font-semibold shadow-md hover:bg-green-600 transition duration-300"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Activities Preview */}
      <section className="px-6 sm:px-8 md:px-12 py-20 bg-gradient-to-t from-blue-50 to-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-blue-900">Explore Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {activitiesPreview.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200 cursor-pointer transform transition duration-300 hover:shadow-3xl hover:scale-105 hover:rotate-1"
              whileHover={{ scale: 1.08, rotate: 1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-12 italic text-gray-500 text-sm sm:text-base">
          Sign up to unlock full access to events and programs.
        </p>
      </section>

      {/* Full Activities Section */}
      <section className="min-h-screen bg-white py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-8 text-center">FATA Activities & Programs</h1>
          {fullActivities.map((item, idx) => (
            <section key={idx} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-800">{item.title}</h2>
              <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
            </section>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-8 text-center">Contact Us</h2>

          {/* Key Contacts */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Contacts</h3>
            <ul className="text-gray-700 space-y-2">
              <li>President: HRH Drani Izakare - +256782201280</li>
              <li>Secretary General: HRH Chief Ishima - +260977825941</li>
              <li>Admin/Treasurer: HRH Brook Temesgen - +251923125050</li>
              <li>Email: <a href="mailto:brooksewt@gmail.com" className="text-blue-600 hover:underline">brooksewt@gmail.com</a></li>
            </ul>
          </section>

          {/* Contact Form */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded p-2 h-32"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-5 py-2 rounded font-semibold hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
