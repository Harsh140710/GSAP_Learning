// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const examples = [
  { id: 1, title: "GsapTo", path: "/gsap-to" },
  { id: 2, title: "GsapFrom", path: "/gsap-from" },
  { id: 3, title: "GsapFromTo", path: "/gsap-from-to" },
  { id: 4, title: "GsapTimeline", path: "/gsap-timeline" },
  { id: 5, title: "GsapStagger", path: "/gsap-stagger" },
  { id: 6, title: "Gsap ScrollTrigger", path: "/gsap-scroll-trigger" },
];

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl text-white font-bold mb-10 text-center">
        🎬 GSAP Animation Examples
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {examples.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1e22] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-start justify-between"
          >
            <div>
              <h3 className="text-white text-lg font-bold mb-1">
                {item.id}.
              </h3>
              <h4 className="text-white text-2xl font-semibold mb-3">
                {item.title}
              </h4>
            </div>

            <Link
              to={item.path}
              className="mt-4 bg-blue-800 text-white font-medium px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
            >
              Go to {item.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
