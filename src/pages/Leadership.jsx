import React from "react";

const leaders = [
  {
    name: "HRH Izakare Drani Stephen",
    title: "President",
    country: "Uganda",
  },
  {
    name: "HRH Dissake Camille",
    title: "Vice President",
    country: "Cameroon",
  },
  {
    name: "HRH Kapinga Smogy Isaac",
    title: "Secretary General",
    country: "Zambia",
  },
  {
    name: "HRH Naana Kabukour Dumaaley Dagojo1",
    title: "Vice Secretary General",
    country: "Ghana",
  },
  {
    name: "HRH Brook Temesgen",
    title: "Treasurer General",
    country: "Ethiopia",
  },
  {
    name: "Baridam Suanu Timothy Yormaadam",
    title: "Vice Treasurer General",
    country: "Nigeria",
  },
  {
    name: "Bezo IV Mahamat Moussa",
    title: "Supreme Council President",
    country: "Chad",
  },
  {
    name: "Abdireshd Esmeal",
    title: "Vice Publicity Secretary",
    country: "Somalia",
  },
  {
    name: "Elhadji Malick Ngom",
    title: "President of Advisory Council",
    country: "Senegal",
  },
  {
    name: "Boka Yapi Julien",
    title: "Supreme Council Member",
    country: "Ivory Coast",
  },
];

const Leadership = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-10">Leadership</h2>

        {/* Organogram placeholder */}
        <div className="mb-10 text-center">
          <img
            src="/images/organogram-placeholder.png"
            alt="FATA Organogram"
            className="mx-auto w-full max-w-xl rounded shadow"
          />
          <p className="mt-2 text-gray-600">FATA Organizational Structure</p>
        </div>

        {/* Leader Profiles */}
        <div className="grid md:grid-cols-2 gap-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-green-700">{leader.name}</h3>
              <p className="text-gray-700">{leader.title}</p>
              <p className="text-gray-500 text-sm">{leader.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
