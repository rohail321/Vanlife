import "./App.css";
import { Routes, Route } from "react-router-dom";

import "./server";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Header from "./components/layout/header/Header";
import Vans from "./components/Pages/Van/Vans";
import VanDetail from "./components/Pages/Van/VanDetail";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/van/:id' element={<VanDetail />} />
      </Routes>
    </div>
  );
}

export default App;
