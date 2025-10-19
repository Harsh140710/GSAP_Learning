import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();
  //ToDo: Implement the gsap scroll trigger

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, {
        x:150 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: '100%',
        scale: '1.5',
        scrollTrigger :{
          trigger: box,
          start: 'bottom bottom',
          end: 'top 10%',
          scrub: true,
        },
        ease: 'power1.inOut'
      })
    })
  },{ scope: scrollRef })

  return (
    <main className="flex p-20 flex-col min-h-screen bg-black">
      <h1 className="poppins-bold text-white mb-10 text-3xl">GsapStagger</h1>

      <p className="font-mono text-gray-400 text-lg">
        GSAP Scroll trigger is a plugin that allows you to create animations that are triggered by the scroll position of the page.
      </p>

      <p className="font-mono text-gray-400 text-lg mt-10">
        With ScrollTrigger, you can define various actions to be triggered at soecific scroll points, such as starting or ending an animation, scrubbing through animations as the user scrolls, pinning elements to the screen, and more.
      </p>

      <p className="text-gray-500 mt-5 text-xl font-mono">
        Read more about{" "}
        <a
          className="text-blue-500"
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
        >
          gsap ScrollTrigger
        </a>{" "}
        method
      </p>

      <h2 className="mt-50 text-white text-2xl flex items-center justify-center">Scroll down to see the animation</h2>

      <div className="mt-70 w-full h-screen" ref={scrollRef}>
        <div id="scroll-pink" className="h-25 w-25 rounded-2xl bg-pink-500"></div>
        <div id="scroll-orange" className="h-25 w-25 rounded-2xl bg-orange-500"></div>
      </div>
    </main>
  )
}

export default GsapScrollTrigger