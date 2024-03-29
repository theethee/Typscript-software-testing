import "../LandingPage/Landing.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Landing() {
  const [isSignInClicked, setISSignedInClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  const navToSignIn = () => {
    setISSignedInClicked(!isSignInClicked);
    console.log("Sign in link is clicked");
    navigate("/");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20%",
          marginBottom: "50%",
        }}
      >
        <h1 style={{ fontSize: "30px" }}>You are signed out</h1>
        <a
          style={{ cursor: "pointer", marginBottom: "4%" }}
          onClick={navToSignIn}
        >
          Sign in
        </a>
      </div>
    </>
  );
}

export default Landing;
