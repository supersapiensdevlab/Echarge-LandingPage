import React from "react";
import Footer from "../Footer/Footer";
import About from "./About";
import Counter from "./Counter";
import FindUs from "./FindUs";
import Head from "./Head";
import HowItsDone from "./HowItsDone";
import Journey from "./Journey";

const LandingPage = () => {
  return (
    <div>
      <Head />
      <About />
      <HowItsDone />
      <Journey />
      <Counter />
      <FindUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
