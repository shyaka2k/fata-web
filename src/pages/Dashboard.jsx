import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Dashboard({ userName }) {
  const statsData = [
    { label: "Peace Missions Completed", value: 75, suffix: "%" },
    { label: "Cultural Programs", value: 50, suffix: "+" },
    { label: "Youth & Women Empowered", value: 1200, suffix: "+" },
  ];

  const [stats, setStats] = useState(statsData.map(() => 0));

  // Animate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((val, idx) =>
          val < statsData[idx].value ? val + Math.ceil(statsData[idx].value / 50) : statsData[idx].value
        )
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const navTiles = [
    { name: "Mission", link: "/about" },
    { name: "Leadership", link: "/leadership" },
    { name: "Events", link: "/events" },
    { name: "Get Involved", link: "/get-involved" },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-white to-blue-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-blue-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome, {userName}!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-blue-800/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore FATA’s mission, initiatives, and events across Africa.
        </motion.p>
        <div className="space-x-4">
          <Link to="/activities">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0,0,0,0.2)" }}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md"
            >
              Explore Activities
            </motion.button>
          </Link>
          <Link to="/events">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0,0,0,0.2)" }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md"
            >
              Upcoming Events
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white shadow-md py-6 px-6 flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
        {statsData.map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-gray-700 font-bold text-lg">{stats[idx]}{stat.suffix}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Quick Navigation Tiles */}
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {navTiles.map((tile, idx) => (
          <Link key={idx} to={tile.link}>
            <motion.div
              className="bg-blue-100 p-8 rounded-xl text-center shadow-md cursor-pointer hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-bold text-blue-900">{tile.name}</h3>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        © 2025 Forum of African Traditional Authorities. All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
