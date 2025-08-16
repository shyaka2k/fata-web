import React from "react";

const Events = () => {
  const upcomingEvents = [
    { title: "Annual Leadership Forum", date: "2025-09-15", location: "Accra, Ghana", link: "#" },
    { title: "Peace & Reconciliation Summit", date: "2025-10-05", location: "Nairobi, Kenya", link: "#" },
  ];

  const pastEvents = [
    { title: "Cultural Exchange Program", date: "2025-06-20", location: "Lagos, Nigeria" },
    { title: "Community Development Workshop", date: "2025-05-10", location: "Kampala, Uganda" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-10 text-center">FATA Events</h2>

        {/* Upcoming Events */}
        <section className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Upcoming Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 p-6 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-lg sm:text-xl mb-2">{event.title}</h4>
                  <p className="text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
                  <p className="text-gray-600 mb-2"><strong>Location:</strong> {event.location}</p>
                </div>
                <a
                  href={event.link}
                  className="mt-4 text-blue-500 hover:underline font-medium"
                >
                  Register / Learn More
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Past Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 flex flex-col"
              >
                <h4 className="font-bold text-lg sm:text-xl mb-2">{event.title}</h4>
                <p className="text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
