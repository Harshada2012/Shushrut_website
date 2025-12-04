import './App.css'
import Department2 from './Department2';
import FirstPage from './FirstPage';
import Medical3 from './Medical3';
import Values4 from './Values4';
import Appointment from './Appointment';
import WhyChooseUs from './WhyChooseUs';
import Clients from './Clients';
import Stats from './Stats';
import Bar from './Bar';
import Team from './Team';
import Footer from './Footer';
import Members from './Members';
import Ceo from './Ceo';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Solutions5 from "./Solutions5";
import ClinicPage from "./ClinicPage";
import HospitalPage from "./HospitalPage";
import DiagnosticPage from "./DiagnosticPage";
import MedicalPage from "./MedicalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FirstPage />
              <Department2 />
              <Medical3 />
              <Values4 />
              <Stats />
              <Bar />
              <Solutions5 />
              <Appointment />
              <WhyChooseUs />
              <Clients />
              <Ceo/>
              <Team />
              <Members />
              <Footer />
            </>
          }
        />

        <Route path="/clinic" element={<ClinicPage />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/diagnostic" element={<DiagnosticPage />} />
        <Route path="/medical" element={<MedicalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;