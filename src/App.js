
import './App.css';
import Hello from "./components/Hello"
import Contact from "./components/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Works from './components/Works';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="/projects" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects/:projectname/:projectid" element={<ProjectPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
