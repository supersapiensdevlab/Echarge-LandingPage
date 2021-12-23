import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import AlphaRelease from "./components/pages/AlphaRelease";
import AlphaRelease2 from "./components/pages/AlphaRelease2";
import SmartPilot from "./components/pages/SmartPilot";
import SmartPilot2 from "./components/pages/SmartPilot2";
import Investor from "./components/pages/Investor";
import Investor2 from "./components/pages/Investor2";

function App() {
  return (
    <>
      <Router>
        <div className="h-full w-full">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/be_alpha" element={<AlphaRelease />}></Route>
            <Route exact path="/alpha" element={<AlphaRelease2 />}></Route>
            <Route
              exact
              path="/become_smartpilot"
              element={<SmartPilot />}
            ></Route>
            <Route exact path="smartpilot" element={<SmartPilot2 />}></Route>
            <Route exact path="/become_investor" element={<Investor />}></Route>
            <Route exact path="/investor" element={<Investor2 />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
