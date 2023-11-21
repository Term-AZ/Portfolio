
import './App.css';
import Hello from "./components/Hello"
import Contact from "./components/Contact"
import { BrowserRouter, Routes, Route, HashRouter, redirect } from "react-router-dom";
import NavBar from './components/Navbar';
import Works from './components/Works';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <HashRouter >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="/projects" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects/:projectname/:projectid" element={<ProjectPage/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
