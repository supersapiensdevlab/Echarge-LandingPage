import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Head from "./components/LandingPage/Head";
import About from "./components/LandingPage/About";
import Journey from "./components/LandingPage/Journey";
import Counter from "./components/LandingPage/Counter";
import FindUs from "./components/LandingPage/FindUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Head />
      <About />
      <Journey />
      <Counter />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
