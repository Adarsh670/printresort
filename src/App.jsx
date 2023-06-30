import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footerr from "./components/Footerr/Footerr";
import ContactUs from "./Pages/Contact/ContactUs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Job from "./Pages/Job/Job";
import JobData from "./Pages/jobData/JobData";
import Admin from "./Pages/Admin/Admin";
import JobEdit from "./Pages/jobData/JobEdit";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/joborder" element={<Job />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/abcdefghjobdata" element={<JobData />} />
          <Route path="/jobedit/:rowindex" element={<JobEdit />} />
          </Routes>
        <Footerr />
      </Router>
    </div>
  );
}

export default App;
