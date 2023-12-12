import "../Register/Register.css";

function Register() {
  return (
    <>
      <div id="Register-container">
        <h1>Register</h1>
        <form id="align-form">
          <label className="reg-label">First name</label>
          <input className="styling-reg-input" type="text" />
          <label className="reg-label">Last name</label>
          <input className="styling-reg-input" type="text" />
          <label className="reg-label">Email</label>
          <input className="styling-reg-input" type="email" />
          <label className="reg-label">Username</label>
          <input className="styling-reg-input" type="text" />
          <label className="reg-label">Password</label>
          <input className="styling-reg-input" type="password" />
          <label className="reg-label">Repeat password</label>
          <input className="styling-reg-input" type="password" />
          <button id="styling-reg-button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
