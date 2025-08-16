import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const activitiesPreview = [
  {
    title: "Peace Missions",
    desc: "Preview of peace and reconciliation activities.",
  },
  {
    title: "Cultural Programs",
    desc: "Experience our traditional heritage and exchanges.",
  },
  {
    title: "Youth Empowerment",
    desc: "Support for youth and women initiatives.",
  },
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
      
        </div>
      </motion.section>

      {/* Preview Activities Section */}
      <section className="px-6 sm:px-8 md:px-12 py-20 bg-gradient-to-t from-blue-50 to-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-blue-900">
          Explore Our Work
        </h2>
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
          <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-8 text-center">
            FATA Activities & Programs
          </h1>
          {fullActivities.map((item, idx) => (
            <section key={idx} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-800">{item.title}</h2>
              <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Welcome;
