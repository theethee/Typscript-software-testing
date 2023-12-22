import "../MyAccount/MyAccount.css";
import noImg from "../../assets/user-icon.png";
import addImg from "../../assets/add-image-icon.png";
import edit from "../../assets/edit-icon.png";
import deleteAccount from "../../assets/delete-icon-red.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  // 1. Ska hämta personuppgifter och visa
  // 2. Det ska gå att edita
  // 3. Det ska gå att ta bort kontot

  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    try {
      const userName = localStorage.getItem("username");
      if (userName) {
        setUserName(userName);
      }
    } catch (error) {
      console.error(
        "Error kunde inte hämta användare från local storage",
        error
      );
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(`http://localhost:3000/api/users/${userId}`);
      const fetchUserData = await response.json();
      setUserData(fetchUserData);
      console.log("userData", userData);
    } catch (error) {
      console.error("Det går inte att hämta användarinfo", error);
    }
  };

  const handleChangeUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `http://localhost:3000/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        console.log("Grattis användarinformationen är nu uppdatterad");
        fetchData();
        setIsEditing(false);
      } else {
        console.error("Det gick inte att uppdatera använarinfo");
      }
    } catch (error) {
      console.error("Något gick fel", error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `http://localhost:3000/api/users/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        console.log("Användaren är nu borttagen");
        navigate("/");
        localStorage.removeItem("isSignedIn");
      } else {
        console.error("Det gick inte att ta bort användaren");
      }
    } catch (error) {
      console.error("Något gick fel", error);
    }
  };

  return (
    <>
      {/* Ändra till formulär! */}
      <div id="my-account-container">
        <h1>NexGen</h1>
        <h3>My account</h3>
        <h4>Hi {userName}</h4>
        <img
          id="no-img-picked"
          src={noImg}
          alt="icon show no imgage picked yet"
        />
        <div id="align-add-img">
          <img id="add-img" src={addImg} alt="icon to add image" />
        </div>

        <form id="edit-form" /*onSubmit={handleChangeUserData}*/>
          <label className="style-label" htmlFor="text">
            Username
          </label>
          <div className="align-input-edit-icon">
            <input
              className="input-styling"
              type="text"
              value={userData.username}
              readOnly={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>

          <label className="style-label" htmlFor="text">
            First name
          </label>
          <div className="align-input-edit-icon">
            <input
              className="input-styling"
              type="text"
              value={userData.firstname}
              readOnly={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, firstname: e.target.value })
              }
            />
          </div>

          <label className="style-label" htmlFor="text">
            Last name
          </label>
          <div className="align-input-edit-icon">
            <input
              type="text"
              className="input-styling"
              value={userData.lastname}
              readOnly={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, lastname: e.target.value })
              }
            />
          </div>

          <label className="style-label" htmlFor="text">
            Email
          </label>
          <div className="align-input-edit-icon">
            <input
              className="input-styling"
              type="text"
              value={userData.email}
              readOnly={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>

          <label className="style-label" htmlFor="text">
            Password
          </label>
          <div className="align-input-edit-icon">
            <input
              className="input-styling"
              type="text"
              value={userData.password}
              readOnly={!isEditing}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
        </form>

        <div id="align-edit-delete-personinfo-btn">
          {isEditing && (
            <button onClick={handleChangeUserData} id="save-changes-button">
              Save changes
            </button>
          )}
          <button
            id="style-edit-button"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
            {/* ÄNRDA FÄRG PÅ IKONEN */}
            <img className="change-icon" src={edit} alt="edit icon" />
          </button>
        </div>

        <div id="align-delete-account-button">
          <button id="delete-account-button" onClick={handleDeleteUser}>
            Delete
            <img
              id="delete-icon-red"
              src={deleteAccount}
              alt="delete account icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
