import './App.css';
import Department2 from './Department2';
import FirstPage from './FirstPage';
import Medical3 from './Medical3';
import Values4 from './Values4';
import Appointment from './Appointment';
import WhyChooseUs from './WhyChooseUs';
import Clients from './Clients';
import Bar from './Bar';
import Team from './Team';
import Footer from './Footer';
import Members from './Members';
import Ceo from './Ceo';
import Partners from './Partners';
import Solutions5 from "./Solutions5";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClinicPage from "./ClinicPage";
import HospitalPage from "./HospitalPage";
import DiagnosticPage from "./DiagnosticPage";
import MedicalPage from "./MedicalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PAGE / SCROLL PAGE */}
        <Route
  path="/"
  element={
    <>
      <div id="home"><FirstPage /></div>

      <Department2 />

      <Medical3 />

      <Values4 />

      <Bar />

      <div id="products"><Solutions5 /></div>

      <Appointment />

      <div id="services"><WhyChooseUs /></div>

      <Clients />

      <div id="about"><Ceo /></div>

      <Team />

      <Members />

      <div id="gallery"><Partners /></div>

      <div id="contact"><Footer /></div>
    </>
  }
/>

        {/* SEPARATE PAGES */}
        <Route path="/clinic" element={<ClinicPage />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/diagnostic" element={<DiagnosticPage />} />
        <Route path="/medical" element={<MedicalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;