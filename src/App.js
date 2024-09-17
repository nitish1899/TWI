import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import { Home } from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Transvue from "../src/pages/TransvueSolutionsIndia";
import Connect2Xpert from "../src/pages/Connect2Xperts";
import GreenEarthPulp from "./pages/GreenEarthPulpPaper";
import AdvanceConsultancy from "./pages/AdvanceConsultancy";
import DreamLuxottica from "./pages/DreamLuxottica";
import ProGenXMarketing from "./pages/ProGenXMarketing";
import TBWGlobalSourcingHouse from "./pages/TBWGlobalSourcingHousePVTLTD";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/transvue" element={<Transvue />} />
          <Route path="/connect2Xpert" element={<Connect2Xpert />} />
          <Route path="/greenEarthPulp" element={<GreenEarthPulp />} />
          <Route path="/advanceConsultancy" element={<AdvanceConsultancy />} />
          <Route path="/tBWGlobalSourcingHouse" element={<TBWGlobalSourcingHouse />} />
          <Route path="/proGenXMarketing" element={<ProGenXMarketing />} />
          <Route path="/dreamLuxottica" element={<DreamLuxottica />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
