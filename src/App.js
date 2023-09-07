
import './App.css';
import Hello from "./components/Hello"
import Works from "./components/Works"
import Contact from "./components/Contact"
import AboutMe from "./components/AboutMe"
import styled, { createGlobalStyle } from 'styled-components';

const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width:100vw;
  scrollbar-width:none;
  $::-webkit-scrollbar{
    display:none;
  }

  `

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Hello/>
        <Works/>
        <Contact/>
      </Wrapper>
    </div>
  );
}

export default App;
