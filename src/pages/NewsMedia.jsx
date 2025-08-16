import React from "react";

const NewsMedia = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-8 text-center">
          News & Media
        </h2>

        {/* Blog Posts / Announcements */}
        <section className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Latest Announcements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-white rounded-lg shadow hover:shadow-lg p-4 transition-transform duration-300 hover:scale-[1.02]"
              >
                <h4 className="font-bold text-lg sm:text-xl mb-2">
                  Announcement Title {post}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Brief summary of the announcement or blog post...
                </p>
                <a
                  href="#"
                  className="text-blue-500 mt-2 block hover:underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Press Releases
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {["Press Release 1", "Press Release 2", "Press Release 3"].map(
              (release, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline text-sm sm:text-base"
                  >
                    {release}
                  </a>
                </li>
              )
            )}
          </ul>
        </section>

        {/* Image Gallery */}
        <section className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Image Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((img) => (
              <img
                key={img}
                src={`/images/news-${img}.jpg`}
                alt={`News ${img}`}
                className="rounded-lg object-cover w-full h-32 sm:h-40 md:h-48 hover:opacity-90 transition"
              />
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Videos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((video) => (
              <div
                key={video}
                className="relative w-full pb-[56.25%] overflow-hidden rounded-lg"
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                  title={`Video ${video}`}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsMedia;
