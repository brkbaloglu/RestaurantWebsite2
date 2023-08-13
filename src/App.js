import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Chef from './pages/Chef'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="chef" element={<Chef/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
