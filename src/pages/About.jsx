import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-green-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">About Us</h2>
          <p className="text-lg mb-6">
            The Forum of African Traditional Authorities (FATA) is a continental platform uniting traditional leaders to promote peace, preserve African heritage, and support sustainable development.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Our Mission</h3>
            <p>
              Fostering peace, unity, and sustainable development through traditional leadership rooted in African values and identity.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Our Vision</h3>
            <p>
              To be the leading African platform for collaboration among traditional authorities in shaping the future of the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-8">Core Objectives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Promote Peace and Security",
                desc: "Facilitating dialogue, mediating conflicts, and supporting peace initiatives.",
              },
              {
                title: "Preserve Cultural Heritage",
                desc: "Safeguarding indigenous languages, customs, and traditional knowledge systems.",
              },
              {
                title: "Foster Unity",
                desc: "Strengthening cooperation among tribes, regions, and countries in Africa.",
              },
              {
                title: "Support Sustainable Development",
                desc: "Championing education, healthcare, and environmental protection in communities.",
              },
              {
                title: "Advocate for Traditional Leaders",
                desc: "Promoting the inclusion of traditional leaders in governance and policy-making.",
              },
            ].map((obj, index) => (
              <div key={index} className="bg-white p-6 rounded shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold text-green-700 mb-2">{obj.title}</h4>
                <p className="text-gray-700">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story (Optional) */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-green-800 mb-4">Our Story</h3>
        <p className="text-gray-700 leading-relaxed">
          FATA was established to provide a unified voice for African traditional leaders. With roots stretching across nations, it began as a network of respected chiefs and elders committed to resolving conflicts, safeguarding African traditions, and contributing to national development. Over time, it grew into a structured organization now playing an active role in peace-building, cultural preservation, and policy influence continent-wide.
        </p>
      </section>
    </div>
  );
};

export default About;
