import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Projet from "./pages/Projet";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <section className=" flex flex-col ">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/projets" element={<Projet />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
