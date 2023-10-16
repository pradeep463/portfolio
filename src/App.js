import React, { useEffect } from "react";
import HomeCover from "./Components/HomeCover";
import Header from "./Components/Header";
import Expertise from "./Components/Expertise";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import MyWork from "./Components/MyWork";
import AOS from "aos";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Specify the duration of the animation.
      once: true, // Animation plays only once per element.
    });
  }, []);
  return (
    <div>
      <Header />
      <HomeCover />
      <Expertise />
      <MyWork />
      <Experience />
      <Contact />
    </div>
  );
}
