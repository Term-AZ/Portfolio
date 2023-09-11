
import './App.css';
import Hello from "./components/Hello"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Works from './components/Works';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="/projects" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
