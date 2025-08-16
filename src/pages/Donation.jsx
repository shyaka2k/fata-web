import React, { useState } from "react";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [donated, setDonated] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    setDonated(true);
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Support FATA
        </h2>

        {/* Why Donate */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Donate?</h3>
          <p className="text-gray-700">
            Your contribution helps FATA promote peace, preserve cultural heritage,
            foster community development, and empower youth across Africa.
          </p>
        </section>

        {/* Ways to Donate */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ways to Donate</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>One-time or recurring donations</li>
            <li>Bank Transfer: FATA Bank Account details available upon request</li>
            <li>Mobile Money (if applicable)</li>
            <li>Online Payment Gateway (PayPal, Stripe, Flutterwave)</li>
          </ul>
        </section>

        {/* Donation Form */}
        <section className="bg-white rounded-lg shadow p-6 mb-12 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Make a Donation
          </h3>
          {donated ? (
            <p className="text-green-600 text-center font-medium">
              🎉 Thank you for your generous support!
            </p>
          ) : (
            <form onSubmit={handleDonate} className="flex flex-col space-y-4">
              <input
                type="number"
                placeholder="Enter amount (USD)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border rounded p-2 w-full"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700"
              >
                Donate
              </button>
            </form>
          )}
        </section>

        {/* Donation Tiers */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Donation Tiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <h4 className="font-bold text-lg mb-2">Supporter</h4>
              <p>$50 - $199</p>
            </div>
            <div className="bg-green-200 p-4 rounded-lg text-center">
              <h4 className="font-bold text-lg mb-2">Partner</h4>
              <p>$200 - $499</p>
            </div>
            <div className="bg-green-300 p-4 rounded-lg text-center">
              <h4 className="font-bold text-lg mb-2">Champion</h4>
              <p>$500+</p>
            </div>
          </div>
        </section>

        {/* Contact for Donations */}
        <section className="text-center">
          <p className="text-gray-700">
            For donation inquiries, contact us at{" "}
            <a href="mailto:brooksewt@gmail.com" className="text-blue-600 hover:underline">
              brooksewt@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Donation;
