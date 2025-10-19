import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  //ToDO: implement the gsap.fromTo() method

  useGSAP(() => {
    gsap.fromTo("#red-box", {
      x: 0,
      rotate: 0,
      borderRadius: '0%'
    },
    {
      x: 500,
      repeat: -1,
      yoyo: true,
      borderRadius: '100%',
      rotate: 100,
      duration: 2,
      ease: "bounce.out"
    });
  }, []);

  return (
    <main className="flex p-20 flex-col h-screen bg-black">
      <h1 className="poppins-bold text-white mb-10 text-3xl">GsapFromTo</h1>

      <p className="font-mono text-gray-400 text-lg">
        The <span className="text-orange-600">gsap.fromTo()</span> method is used to
        animate elements from a new state to a new state.
      </p>

      <p className="font-mono text-gray-400 text-lg mt-10">
        The <span className="text-orange-600">gsap.fromTo()</span> method is similar
        to <span className="text-orange-600">gsap.from()</span> and <span className="text-orange-600">gsap.to()</span> method, but the
        difference is that the{" "}
        <span className="text-orange-600">gsap.fromTo()</span> method animates
        elements from a new state to a new state, while the{" "}
        <span className="text-orange-600">gsap.from()</span> method animates
        elements from a new state to their current state, and The <span className="text-orange-600">gsap.to()</span> method animates
        elements from their current state to a new state.
      </p>

      <p className="text-gray-500 mt-5 text-xl font-mono">
        Read more about{" "}
        <a
          className="text-blue-500"
          href="https://gsap.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
        >
          gsap.fromto()
        </a>{" "}
        method
      </p>

      <div
        id="red-box"
        className="bg-red-600 w-25 h-25 rounded-2xl text-white mt-10"></div>
    </main>
  );
}

export default GsapFromTo