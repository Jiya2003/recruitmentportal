import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Steps from './components/steps/Steps';
import Mid from './components/mid/Mid';
import Footer from './components/footer/Footer';
import UploadResumePage from './components/navbar/Uploadresume';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/upload-resume" element={<UploadResumePage />} />
         
        </Routes>
      </Router>
      <Header />
              <Steps />
              <Mid />
              <Footer />
    </div>
  );
}

export default App;
