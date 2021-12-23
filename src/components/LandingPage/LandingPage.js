import React from "react";
import Footer from "../Footer/Footer";
import About from "./About";
import Counter from "./Counter";
import FindUs from "./FindUs";
import Head from "./Head";
import Journey from "./Journey";

const LandingPage = () => {
  return (
    <div>
      <Head />
      <About />
      <Journey />
      <Counter />
      <FindUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
