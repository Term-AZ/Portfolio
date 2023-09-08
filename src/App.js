
import './App.css';
import Hello from "./components/Hello"
import Works from "./components/Works"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import styled, { createGlobalStyle } from 'styled-components';


function App() {
  return (
    <div className="App">
        <Hello/>
        <Works/>
        {/* <Contact/> */}
    </div>
  );
}

export default App;
