import "./App.css";
import { Routes, Route } from "react-router-dom";

import "./server";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Vans from "./components/Pages/Van/Vans";
import VanDetail from "./components/Pages/Van/VanDetail";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/Pages/Host/Dashboard/Dashboard";
import Income from "./components/Pages/Host/Income/Income";
import Reviews from "./components/Pages/Host/Review/Reviews";
import HostLayout from "./components/layout/HostLayout";
import HostVans from "./components/Pages/Host/Van/HostVans";
import HostVanDetail from "./components/Pages/Host/Van/HostVanDetail";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='van/:id' element={<VanDetail />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />} />
            <Route path='vans' element={<Income />} />

            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
