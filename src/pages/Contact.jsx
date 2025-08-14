import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Contact Us</h2>

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
    </div>
  );
};

export default Contact;
