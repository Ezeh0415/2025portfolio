import { BrowserRouter, Routes, Route } from "react-router-dom";
// website pages here
import Navbar from "./componet/header/Navbar";
import HomePage from "./componet/HomePage";
import About from "./componet/About";
import Projects from "./componet/Projects";
import ProjectDetails from "./componet/ProjectDetails";
import Contact from "./componet/Contact";
import Footer from "./componet/header/Footer";
import { ProjectsProvider } from "./componet/contex-file/ProjectContex";


function App() {
  return (
    <div className="md:max-w-[90%] md:mx-auto md:px-4">
      <BrowserRouter>
        <ProjectsProvider>
        <Navbar />
        {/* Define your routes here */}
        {/* Example route */}
        {/* <Route path="/" element={<Home />} /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
          </ProjectsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
