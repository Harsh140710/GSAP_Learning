import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  //ToDo: Implement gsap text animation

  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <main className="flex p-20 flex-col min-h-screen bg-black">
      <h1
        id="text"
        className="poppins-bold text-white mb-10 text-3xl opacity-0 translate-y-10"
      >
        GsapText
      </h1>

      <p className="font-mono text-gray-400 text-lg para">
        We can use same method like{" "}
        <span className="text-orange-600">gsap.to()</span>,{" "}
        <span className="text-orange-600">gsap.from()</span>,{" "}
        <span className="text-orange-600">gsap.fromTo()</span> and{" "}
        <span className="text-orange-600">gsap.timeline()</span> to animate
        text.
      </p>

      <p className="font-mono text-gray-400 text-lg mt-10 para">
        Using this we achieve various text animations and effects like fade in,
        fade out, slide in, slide out, and many more.
      </p>

      <p className="font-mono text-gray-400 text-lg mt-10 para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in the text
        animations.
      </p>

      <p className="text-gray-500 mt-5 text-xl font-mono para">
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
