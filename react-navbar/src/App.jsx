import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { Academics } from "./components/pages/Academics";
import { Contact } from "./components/pages/Contact";
import { About1 } from "./components/pages/About1";
import { About3 } from "./components/pages/About3";
import { About2 } from "./components/pages/About2";
import { Gallery1 } from "./components/pages/Gallery1";
import { Gallery3 } from "./components/pages/Gallery3";
import { Gallery2 } from "./components/pages/Gallery2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about/about1" element={<About1 />} />
        <Route path="/about/about2" element={<About2 />} />
        <Route path="/about/about3" element={<About3 />} />
        <Route path="/gallery/gallery1" element={<Gallery1 />} />
        <Route path="/gallery/gallery2" element={<Gallery2 />} />
        <Route path="/gallery/gallery3" element={<Gallery3 />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
