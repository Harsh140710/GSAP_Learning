import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  //ToDO: implement the gsap.to() method

  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 100,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <main className="flex p-20 flex-col min-h-screen bg-black">
      <h1 className="poppins-bold text-white mb-10 text-3xl">GsapTo</h1>

      <p className="font-mono text-gray-400 text-lg">
        The <span className="text-orange-600">gsap.to()</span> method is used to
        animate elements from their current state to a new state.
      </p>

      <p className="font-mono text-gray-400 text-lg mt-10">
        The <span className="text-orange-600">gsap.to()</span> method is similar
        to <span className="text-orange-600">gsap.from()</span> method, but the
        difference is that the{" "}
        <span className="text-orange-600">gsap.to()</span> method animates
        elements from their current state to a new state, while the{" "}
        <span className="text-orange-600">gsap.from()</span> method animates
        elements from a new state to their current state.
      </p>

      <p className="text-gray-500 mt-5 text-xl font-mono">
        Read more about{" "}
        <a
          className="text-blue-500"
          href="https://gsap.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
        >
          gsap.to()
        </a>{" "}
        method
      </p>

      <div
        id="blue-box"
        className="bg-blue-600 w-25 h-25 rounded-2xl text-white mt-10"></div>
    </main>
  );
};

export default GsapTo;
