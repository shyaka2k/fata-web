import React from "react";

const leaders = [
  { name: "HRH Izakare Drani Stephen", title: "President", country: "Uganda" },
  { name: "HRH Dissake Camille", title: "Vice President", country: "Cameroon" },
  { name: "HRH Kapinga Smogy Isaac", title: "Secretary General", country: "Zambia" },
  { name: "HRH Naana Kabukour Dumaaley Dagojo1", title: "Vice Secretary General", country: "Ghana" },
  { name: "HRH Brook Temesgen", title: "Treasurer General", country: "Ethiopia" },
  { name: "Baridam Suanu Timothy Yormaadam", title: "Vice Treasurer General", country: "Nigeria" },
  { name: "Bezo IV Mahamat Moussa", title: "Supreme Council President", country: "Chad" },
  { name: "Abdireshd Esmeal", title: "Vice Publicity Secretary", country: "Somalia" },
  { name: "Elhadji Malick Ngom", title: "President of Advisory Council", country: "Senegal" },
  { name: "Boka Yapi Julien", title: "Supreme Council Member", country: "Ivory Coast" },
];

const Leadership = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-800 mb-10">
          Leadership
        </h2>

        {/* Organogram placeholder */}
        <div className="mb-10 text-center">
          <img
            src="/images/organogram-placeholder.png"
            alt="FATA Organogram"
            className="mx-auto w-full max-w-lg rounded shadow object-cover"
          />
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            FATA Organizational Structure
          </p>
        </div>

        {/* Leader Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-lg shadow hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-1">
                {leader.name}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{leader.title}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{leader.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
