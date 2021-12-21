import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Head from "./components/LandingPage/Head";
import About from "./components/LandingPage/About";
import Journey from "./components/LandingPage/Journey";
import Counter from "./components/LandingPage/Counter";

function App() {
  return (
    <>
      <Navbar />
      <Head />
      <About />
      <Journey />
      <Counter />
    </>
  );
}

export default App;
