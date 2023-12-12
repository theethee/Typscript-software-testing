import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Typescript from "./pages/AllCourses/Typescript";
// import Javascript from "./pages/AllCourses/Javascript";
import HtmlAndCss from "./pages/AllCourses/HtmlAndCss";
// import AllCourses from "./pages/AllCourses/AllCourses";
// import Home from "./pages/Home/Home";
// import Landing from "./pages/LandingPage/Landing";
// import MyAccount from "./pages/MyAccount/MyAccount";
// import Register from "./pages/Register/Register";

// Här ska navigationen vara så småningom

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      {/* <Landing></Landing> */}
      {/* <MyAccount></MyAccount> */}
      {/* <Register></Register> */}
      {/* <AllCourses></AllCourses> */}
      <HtmlAndCss></HtmlAndCss>
      {/* <Javascript></Javascript> */}
      {/* <Typescript></Typescript> */}
      <Footer></Footer>
    </>
  );
}

export default App;
