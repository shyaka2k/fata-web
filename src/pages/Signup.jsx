import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Signup failed");

      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/30 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg"
      >
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6 text-center text-green-900">
          Sign Up
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Name */}
          <motion.div
            className="flex items-center border rounded p-2 sm:p-3 focus-within:ring-2 focus-within:ring-green-400 bg-white/50"
            whileFocus={{ scale: 1.02 }}
          >
            <FaUser className="text-gray-400 mr-2 text-sm sm:text-base" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full outline-none p-2 sm:p-3 bg-transparent text-sm sm:text-base"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center border rounded p-2 sm:p-3 focus-within:ring-2 focus-within:ring-green-400 bg-white/50"
            whileFocus={{ scale: 1.02 }}
          >
            <FaEnvelope className="text-gray-400 mr-2 text-sm sm:text-base" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full outline-none p-2 sm:p-3 bg-transparent text-sm sm:text-base"
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div
            className="flex items-center border rounded p-2 sm:p-3 focus-within:ring-2 focus-within:ring-green-400 bg-white/50"
            whileFocus={{ scale: 1.02 }}
          >
            <FaLock className="text-gray-400 mr-2 text-sm sm:text-base" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full outline-none p-2 sm:p-3 bg-transparent text-sm sm:text-base"
              required
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={`w-full p-3 sm:p-4 rounded-full text-white font-semibold transition-colors ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            } text-sm sm:text-base`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </motion.button>
        </form>

        <p className="mt-6 text-center text-gray-700 text-sm sm:text-base">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Log In
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;
