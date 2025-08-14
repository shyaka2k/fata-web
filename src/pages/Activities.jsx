import React from "react";

const Activities = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
          FATA Activities & Programs
        </h1>

        {/* Annual Forums and Conferences */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Annual Forums and Conferences</h2>
          <p className="text-gray-700">
            FATA organizes yearly forums that gather traditional leaders across Africa to discuss pressing issues,
            share knowledge, and promote unity. These forums have been held in Uganda, Ghana, and Ethiopia.
          </p>
        </section>

        {/* Peace and Reconciliation Missions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Peace and Reconciliation Missions</h2>
          <p className="text-gray-700">
            FATA leaders actively mediate conflicts and support peace initiatives in communities. Their efforts have
            helped resolve tribal conflicts and promoted healing in post-conflict regions.
          </p>
        </section>

        {/* Cultural Exchange Programs */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Cultural Exchange Programs</h2>
          <p className="text-gray-700">
            FATA encourages the exchange of cultural values by organizing visits and dialogues between communities.
            This helps preserve languages, traditional customs, and indigenous knowledge systems.
          </p>
        </section>

        {/* Partnerships and Collaborations */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Partnerships and Collaborations</h2>
          <p className="text-gray-700">
            We collaborate with African governments, the African Union, UNESCO, and civil society organizations to
            implement community development programs, educational outreach, and environmental conservation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Activities;
