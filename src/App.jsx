import React from "react";
import { Routes, Route } from "react-router-dom";
import GsapTo from "./pages/GsapTo";
import Home from "./components/Home";
import GsapFrom from "./pages/GsapFrom";
import GsapFromTo from "./pages/GsapFromTo";
import GsapTimeline from "./pages/GsapTimeline";
import GsapScrollTrigger from "./pages/GsapScrollTrigger";
import GsapStagger from "./pages/GsapStagger";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gsap-to" element={<GsapTo />} />
      <Route path="/gsap-from" element={<GsapFrom />} />
      <Route path="/gsap-from-to" element={<GsapFromTo />} />
      <Route path="/gsap-timeline" element={<GsapTimeline />} />
      <Route path="/gsap-stagger" element={<GsapStagger />} />
      <Route path="/gsap-scroll-trigger" element={<GsapScrollTrigger />} />
    </Routes>
  );
};

export default App;
