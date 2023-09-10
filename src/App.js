
import './App.css';
import Hello from "./components/Hello"
import Works from "./components/Works"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Hello/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
