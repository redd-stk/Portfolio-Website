import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contacts/contact";
import Footer from "./components/Footer/footer";
import "./App.css";
import Experience from "./components/Experience/experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="margin-top">
        <Intro />
      </div>
      <div  className="margin-top">
        <Skills />
      </div>
      <div className="margin-top">
        <Works />
      </div>
      <div className="margin-top">
        <Experience />
      </div>
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
