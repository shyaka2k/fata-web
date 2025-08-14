import React from "react";

const NewsMedia = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">News & Media</h2>

        {/* Blog Posts / Announcements */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Latest Announcements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white rounded-lg shadow p-4">
                <h4 className="font-bold text-lg mb-2">Announcement Title {post}</h4>
                <p className="text-gray-600 text-sm">Brief summary of the announcement or blog post...</p>
                <a href="#" className="text-blue-500 mt-2 block hover:underline">Read more</a>
              </div>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Press Releases</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Press Release 1</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Press Release 2</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Press Release 3</a></li>
          </ul>
        </section>

        {/* Image Gallery */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Image Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((img) => (
              <img
                key={img}
                src={`/images/news-${img}.jpg`}
                alt={`News ${img}`}
                className="rounded-lg object-cover w-full h-32"
              />
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((video) => (
              <div key={video} className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0`}
                  title={`Video ${video}`}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
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
