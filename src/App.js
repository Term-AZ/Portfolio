
import './App.css';
import Hello from "./components/Hello"
import Contact from "./components/Contact"
import { BrowserRouter, Routes, Route, HashRouter, redirect } from "react-router-dom";
import NavBar from './components/Navbar';
import Works from './components/Works';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <HashRouter >
      <NavBar/>
      <Routes>
        {/* <Route exact path="/hi" render={()=>(<redirect to="/Portfolio"/>)}/> */}

        <Route path="/" element={<Hello/>}/>
        <Route path="/projects" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects/:projectname/:projectid" element={<ProjectPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
