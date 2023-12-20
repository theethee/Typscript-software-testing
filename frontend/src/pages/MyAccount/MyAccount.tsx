import "../MyAccount/MyAccount.css";
import noImg from "../../assets/user-icon.png";
import addImg from "../../assets/add-image-icon.png";
import edit from "../../assets/edit-icon.png";
import deleteIcon from "../../assets/delete-icon.png";
import deleteAccount from "../../assets/delete-icon-red.png";

function MyAccount() {
  // 1. Ska hämta personuppgifter och visa
  // 2. Det ska gå att edita
  // 3. Det ska gå att ta bort kontot
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

        <form id="edit-form">
          <label className="style-label" htmlFor="text">
            Username
          </label>
          <div className="align-input-edit-icon">
            <input className="input-styling" type="text" />
            <div className="align-edit-icons">
              <img className="change-icon" src={edit} alt="edit icon" />
            </div>
          </div>

          <label className="style-label" htmlFor="text">
            First name
          </label>
          <div className="align-input-edit-icon">
            <input className="input-styling" type="text" />
            <div className="align-edit-icons">
              <img className="change-icon" src={edit} alt="edit icon" />
            </div>
          </div>

          <label className="style-label" htmlFor="text">
            Last name
          </label>
          <div className="align-input-edit-icon">
            <input type="text" className="input-styling" />
            <div className="align-edit-icons">
              <img className="change-icon" src={edit} alt="edit icon" />
            </div>
          </div>

          <label className="style-label" htmlFor="text">
            Email
          </label>
          <div className="align-input-edit-icon">
            <input className="input-styling" type="text" />
            <div className="align-edit-icons">
              <img className="change-icon" src={edit} alt="edit icon" />
            </div>
          </div>

          <label className="style-label" htmlFor="text">
            Password
          </label>
          <div className="align-input-edit-icon">
            <input className="input-styling" type="text" />
            <div className="align-edit-icons">
              <img className="change-icon" src={edit} alt="edit icon" />
            </div>
          </div>
        </form>

        <div id="align-delete-account-button">
          <button id="delete-account-button">
            Delete account
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
