import React, { useState } from "react";

const GetInvolved = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Get Involved with FATA</h2>

        {/* Who Can Join */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who Can Join?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Traditional Leaders</li>
            <li>Civil Society Organizations</li>
            <li>Donors and Sponsors</li>
            <li>Academic Institutions</li>
            <li>Youth and Women’s Groups</li>
          </ul>
        </section>

        {/* How to Support */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Support</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Become a Partner</li>
            <li>Donate to Our Programs</li>
            <li>Sponsor an Event or Initiative</li>
            <li>Volunteer in Specific Roles</li>
          </ul>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Join Our Newsletter</h3>
          {subscribed ? (
            <p className="text-green-600 text-center font-medium">🎉 Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded p-2 w-full"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;
