import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
import { StaticSkills } from "./components/StaticSkills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Courses } from "./components/Courses";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <StaticSkills />
      <Timeline />
      <Projects />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
