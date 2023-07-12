import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route component={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;