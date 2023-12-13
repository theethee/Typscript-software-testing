import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Typescript from "./pages/AllCourses/Typescript";
import Javascript from "./pages/AllCourses/Javascript";
import HtmlAndCss from "./pages/AllCourses/HtmlAndCss";
import AllCourses from "./pages/AllCourses/AllCourses";
import Home from "./pages/Home/Home";
import Landing from "./pages/LandingPage/Landing";
import Register from "./pages/Register/Register";
import MyAccount from "./pages/MyAccount/MyAccount";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landingpage" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/allcourses" element={<AllCourses />} />
          <Route path="/htmlandcss" element={<HtmlAndCss />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/typescript" element={<Typescript />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
