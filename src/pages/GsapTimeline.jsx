import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  //ToDO: implement the gsap.timeline() method

  const timeline = gsap.timeline({
    repeat:-1,
    repeatDelay: 1,
    yoyo: true
  });

  useGSAP(() => {
    timeline.to('#yellow-box', {
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut'
    }),

    timeline.to('#yellow-box', {
      y:70,
      rotation: 360,
      scale: 2,
      borderRadius: '100%',
      ease: 'back.inOut'
    }),

    timeline.to('#yellow-box', {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: '8',
      duration: 2,
      ease: 'back.inOut'
    })
  },[]);

  return (
    <main className="flex p-20 pt-3 flex-col min-h-screen bg-black">
      <h1 className="poppins-bold text-white mb-10 text-3xl">GsapTimeline</h1>

      <p className="font-mono text-gray-400 text-lg">
        The <span className="text-orange-600">gsap.timeline()</span> method is used to
        create a timeline instance that can be used to manage multiple animations.
      </p>

      <p className="font-mono text-gray-400 text-lg mt-10">
        The <span className="text-orange-600">gsap.timeline()</span> method is similar
        to <span className="text-orange-600">gsap.from()</span>, <span className="text-orange-600">gsap.to()</span> and <span className="text-orange-600">gsap.FromTo()</span>method, but the
        difference is that the{" "}
        <span className="text-orange-600">gsap.timeline()</span> method is to create a timeline instance that can be used to manage multiple animations, while the{" "}
        <span className="text-orange-600">gsap.to()</span> method animates
        elements from their current state to a new state, The <span className="text-orange-600">gsap.from()</span> method animates
        elements from a new state to their current state and <span className="text-orange-600">gsap.fromTo()</span> used to amimate to a new state to the new state respectively.
      </p>

      <p className="text-gray-500 mt-5 text-xl font-mono">
        Read more about{" "}
        <a
          className="text-blue-500"
          href="https://gsap.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
        >
          gsap.timeline()
        </a>{" "}
        method
      </p>

      <button className="bg-gray-500 w-1/9 mt-5 px-2 py-2 rounded-2xl poppins-bold cursor-pointer" onClick={() => {
        if(timeline.paused()){
          timeline.play()
        } else {
          timeline.pause()
        }
      }}>
        Play / Pause
      </button>

      <div
        id="yellow-box"
        className="bg-yellow-600 w-25 h-25 rounded-2xl text-white mt-10"></div>
    </main>
  );
}

export default GsapTimeline