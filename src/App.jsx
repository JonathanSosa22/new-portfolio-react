import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, About, Contact, Portfolio, Skills } from "./pages";
import { NavBar, Footer } from "./components";

function App() {
  return (
    <>
      <HashRouter>
        <div className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
