import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  //ToDO: implement the gsap Stagger method

    useGSAP(() => {
      gsap.to('.stagger-box', {
        y:120,
        rotation: 360,
        borderRadius: '100%',
        repeat: -1,
        yoyo: true,
        // stagger: 0.5,
        stagger: {
          amount: 1,
          grid: [2, 1],
          axis: 'y',
          ease: 'circ.inOut',
          from: 'center'
        }
      })
    }, [])
    
  return (
    <main className="flex p-20 flex-col min-h-screen bg-black">
      <h1 className="poppins-bold text-white mb-10 text-3xl">GsapStagger</h1>

      <p className="font-mono text-gray-400 text-lg">
        GSAP Stagger is a feature that allows you to apply animation with a
        staggered delay to a group of elements.
      </p>

      <p className="font-mono text-gray-400 text-lg mt-10">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="text-gray-500 mt-5 text-xl font-mono">
        Read more about{" "}
        <a
          className="text-blue-500"
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
        >
          gsap Stagger
        </a>{" "}
        method
      </p>

      <div className="flex flex-row w-full mt-5 gap-5">
        <div className="bg-blue-100 h-20 w-20 rounded-2xl stagger-box"></div>
        <div className="bg-blue-200 h-20 w-20 rounded-2xl stagger-box"></div>
        <div className="bg-blue-300 h-20 w-20 rounded-2xl stagger-box"></div>
        <div className="bg-blue-400 h-20 w-20 rounded-2xl stagger-box"></div>
        <div className="bg-blue-500 h-20 w-20 rounded-2xl stagger-box"></div>
        <div className="bg-blue-600 h-20 w-20 rounded-2xl stagger-box"></div>
        <div className="bg-blue-700 h-20 w-20 rounded-2xl stagger-box"></div>
      </div>
    </main>
  );
};

export default GsapStagger;
