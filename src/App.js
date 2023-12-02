import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contacts/contact";
import Footer from "./components/Footer/footer";
import './App.css'

function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="topMargin">
        <Intro />
      </div>
      <div className="topMargin">
        <Skills />
      </div>
      <div className="topMargin">
        <Works />
      </div>
      <div className="topMargin">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
