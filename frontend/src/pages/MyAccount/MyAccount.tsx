import "../MyAccount/MyAccount.css";
// import noImg from "../../assets/user-icon.png";
// import addImg from "../../assets/add-image-icon.png";
import edit from "../../assets/edit-icon.png";
import deleteAccount from "../../assets/delete-icon-red.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangedPersonInfo from "../../components/Popup/ChangedPersonInfo";
import arrowBack from "../../assets/arrow-back-icon.png";

const MyAccount: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [_userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [showChangedInfo, setShowChangedInfo] = useState(false);
  const [isArrowClicked, setIsArrowClicked] = useState<boolean>(false);

  const handleArrowBack = () => {
    setIsArrowClicked(!isArrowClicked);
    navigate("/landingpage");
  };

  const handleChangedInfoPopup = () => {
    setShowChangedInfo(false);
  };

  const [userData, setUserData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    try {
      const storedUserName = localStorage.getItem("username");
      if (storedUserName) {
        setUserName(storedUserName);
      }
    } catch (error) {
      console.error(
        "Error kunde inte hämta användare från local storage",
        error
      );
    }
  }, []);

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
        console.log("Grattis användarinformationen är nu uppdaterad");
        fetchData();
        setIsEditing(false);
        setShowChangedInfo(true);
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
      <img
        className="arrow-back"
        style={{ width: "40px", marginTop: "15px", cursor: "pointer" }}
        src={arrowBack}
        alt="Arrow back"
        onClick={handleArrowBack}
      />
      <div id="my-account-container">
        <h1 style={{ fontSize: "50px" }}>NexGen</h1>
        <h3 style={{ fontSize: "30px" }}>My account</h3>

        {/* <img
          id="no-img-picked"
          src={noImg}
          alt="icon show no imgae picked yet"
        />
        <div id="align-add-img">
          <img id="add-img" src={addImg} alt="icon to add image" />
        </div> */}

        <form id="edit-form">
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
              id="firstname"
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
              id="lastname"
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
        {showChangedInfo && (
          <ChangedPersonInfo
            onClose={handleChangedInfoPopup}
          ></ChangedPersonInfo>
        )}
      </div>
    </>
  );
};

export default MyAccount;
