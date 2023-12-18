import { useState } from "react";
import "../Register/Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [isBackToSignInClicked, setBackToSignInClicked] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleBackToSignIn = () => {
    setBackToSignInClicked(!isBackToSignInClicked);
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit click");

    const userData = {
      firstname: firstName,
      lastname: lastName,
      email: Email,
      username: userName,
      password: PassWord,
    };

    console.log("User data", userData);

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Grattis din registrering lyckades!");
      } else {
        console.error("Fel vid registrering:", response.statusText);
      }
    } catch (error) {
      console.error("Något gick fel:", error);
    }

    console.log("Kolla om objektet kommer med", userData);

    //Visar vad som skickas till en backend
    console.log("firt name:", firstName);
    console.log("last name:", lastName);
    console.log("email:", Email);
    console.log("username:", userName);
    console.log("password:", PassWord);
  };

  return (
    <>
      <div id="Register-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} id="align-form">
          <label className="reg-label">First name</label>
          <input
            className="styling-reg-input"
            type="text"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label className="reg-label">Last name</label>
          <input
            className="styling-reg-input"
            type="text"
            id="lastname"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label className="reg-label">Email</label>
          <input
            className="styling-reg-input"
            type="email"
            id="email"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="reg-label">Username</label>
          <input
            className="styling-reg-input"
            type="text"
            id="username"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label className="reg-label">Password</label>
          <input
            className="styling-reg-input"
            type="password"
            id="password"
            name="password"
            value={PassWord}
            onChange={(e) => setPassWord(e.target.value)}
            required
          />

          {/* <label className="reg-label">Repeat password</label>
          <input
            className="styling-reg-input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> */}

          <button id="styling-reg-button">Submit</button>
          <a
            style={{ marginTop: "20px", cursor: "pointer", fontSize: "20px" }}
            onClick={handleBackToSignIn}
          >
            Back to sign in
          </a>
        </form>
      </div>
    </>
  );
}

export default Register;
