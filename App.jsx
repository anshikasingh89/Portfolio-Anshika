import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";


export default function App() {
  const [activePage, setActivePage] = useState("About");

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        {/* ✅ PASS BOTH PROPS */}
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        {/* ✅ PAGE RENDERING */}
        {activePage === "About" && <About />}
        {activePage === "Resume" && <Resume />}
        {activePage === "Portfolio" && <Portfolio />}
        {activePage === "Certifications" && <Certifications />}
        {activePage === "Contact" && <Contact />}


      </div>
    </main>
  );
}
