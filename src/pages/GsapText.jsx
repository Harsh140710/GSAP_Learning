import React from "react";

const GsapText = () => {
  return (
    <main className="flex p-20 flex-col min-h-screen bg-black">
      <h1 className="poppins-bold text-white mb-10 text-3xl">GsapText</h1>

      <p className="font-mono text-gray-400 text-lg">
        We can use same method like{" "}
        <span className="text-orange-600">gsap.to()</span>,{" "}
        <span className="text-orange-600">gsap.from()</span>,{" "}
        <span className="text-orange-600">gsap.fromTo()</span> and{" "}
        <span className="text-orange-600">gsap.timeline()</span> to animate
        text.
      </p>

      <p className="font-mono text-gray-400 text-lg mt-10">
        Using this we achieve various text animations and effects like fade in,
        fade out, slide in, slide out, and many more.
      </p>

      <p className="font-mono text-gray-400 text-lg mt-10">
        For more advanced text animations and effects, you can explore the GSAP TextPlugin or other third-party libraries that specialize in the text animations.
      </p>

      <p className="text-gray-500 mt-5 text-xl font-mono">
        Read more about{" "}
        <a
          className="text-blue-500"
          href="https://gsap.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
        >
          gsap Text Plugin
        </a>{" "}
        method
      </p>
    </main>
  );
};

export default GsapText;
