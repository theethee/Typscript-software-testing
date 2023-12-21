import "../MyAccount/MyAccount.css";
import noImg from "../../assets/user-icon.png";
import addImg from "../../assets/add-image-icon.png";
import edit from "../../assets/edit-icon.png";
import deleteAccount from "../../assets/delete-icon-red.png";
import React, { useEffect, useState } from "react";

function MyAccount() {
  // 1. Ska hämta personuppgifter och visa
  // 2. Det ska gå att edita
  // 3. Det ska gå att ta bort kontot

  const [isEditing, setIsEditing] = useState(false);
  // const [isDeleting, setIsDeleting] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:300/api/users/:userId`);
      const fetchUserData = await response.json();
      setUserData(fetchUserData);
    } catch (error) {
      console.error("Det går inte att hämta användarinfo", error);
    }
  };

  return (
    <>
      {/* Ändra till formulär! */}
      <div id="my-account-container">
        <h1>NexGen</h1>
        <h3>My account</h3>

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
              readOnly={!isEditing}
            />
          </div>

          <label className="style-label" htmlFor="text">
            First name
          </label>
          <div className="align-input-edit-icon">
            <input
              className="input-styling"
              type="text"
              readOnly={!isEditing}
            />
          </div>

          <label className="style-label" htmlFor="text">
            Last name
          </label>
          <div className="align-input-edit-icon">
            <input
              type="text"
              className="input-styling"
              readOnly={!isEditing}
            />
          </div>

          <label className="style-label" htmlFor="text">
            Email
          </label>
          <div className="align-input-edit-icon">
            <input
              className="input-styling"
              type="text"
              readOnly={!isEditing}
            />
          </div>

          <label className="style-label" htmlFor="text">
            Password
          </label>
          <div className="align-input-edit-icon">
            <input
              className="input-styling"
              type="text"
              readOnly={!isEditing}
            />
          </div>
        </form>

        <div id="align-edit-delete-personinfo-btn">
          {isEditing && <button id="save-changes-button">Save changes</button>}
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
          <button id="delete-account-button">
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
