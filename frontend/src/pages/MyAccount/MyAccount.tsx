import "../MyAccount/MyAccount.css";
import noImg from "../../assets/user-icon.png";
import addImg from "../../assets/add-image-icon.png";
import edit from "../../assets/edit-icon.png";
import deleteIcon from "../../assets/delete-icon.png";
import deleteAccount from "../../assets/delete-icon-red.png";

function MyAccount() {
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

        <div id="change-personinfo">
          <div className="align-info">
            <p className="p-styling">[Username]</p>
            <div className="align-under-p">
              <img className="change-icon" src={edit} alt="edit icon" />
              <img className="change-icon" src={deleteIcon} alt="delete icon" />
            </div>
          </div>

          <div className="align-info">
            <p className="p-styling">[Password]</p>
            <div className="align-under-p">
              <img className="change-icon" src={edit} alt="edit icon" />
              <img className="change-icon" src={deleteIcon} alt="delete icon" />
            </div>
          </div>

          <div className="align-info">
            <p className="p-styling">[Email]</p>
            <div className="align-under-p">
              <img
                // id="align-email-icons"
                className="change-icon"
                src={edit}
                alt="edit icon"
              />
              <img className="change-icon" src={deleteIcon} alt="delete icon" />
            </div>
          </div>
        </div>
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
