import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import Landing from "./pages/LandingPage/Landing";
// import MyAccount from "./pages/MyAccount/MyAccount";
import Register from "./pages/Register/Register";

// Här ska navigationen vara så småningom

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      {/* <Landing></Landing> */}
      {/* <MyAccount></MyAccount> */}
      <Register></Register>
      <Footer></Footer>
    </>
  );
}

export default App;
