import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import SignedOut from "./pages/SignedOut/SignedOut";
import SavedCourses from "./pages/SavedCourses/SavedCourses";
import { useState } from "react";

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";
  return isSignedIn ? <>{element}</> : <Navigate to="/" />;
};

function App() {
  const [_isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsSignedIn(true);
    localStorage.setItem("isSignedIn", "true");
    navigate("landingpage");
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home handleSignIn={handleSignIn} />} />
        <Route
          path="/landingpage"
          element={<PrivateRoute element={<Landing />} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/myaccount"
          element={<PrivateRoute element={<MyAccount />} />}
        />
        <Route
          path="/allcourses"
          element={<PrivateRoute element={<AllCourses />} />}
        />
        <Route
          path="/htmlandcss"
          element={<PrivateRoute element={<HtmlAndCss />} />}
        />
        <Route
          path="/javascript"
          element={<PrivateRoute element={<Javascript />} />}
        />
        <Route
          path="/typescript"
          element={<PrivateRoute element={<Typescript />} />}
        />
        <Route
          path="/savedcourses"
          element={<PrivateRoute element={<SavedCourses />} />}
        />
        <Route path="/signedout" element={<SignedOut />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
