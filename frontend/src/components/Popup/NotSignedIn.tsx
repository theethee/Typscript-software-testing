import "../Popup/Popup.css";

interface NotSignedInPopupProps {
  onClose: () => void;
}

const NotSignedIn: React.FC<NotSignedInPopupProps> = ({ onClose }) => {
  return (
    <div id="popup-container">
      <button onClick={onClose}>X</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h4 id="error-heading" style={{ color: "red", fontSize: "20px" }}>
          Error
        </h4>
        <p id="warning-text" style={{ fontSize: "20px" }}>
          Wrong username or password.
        </p>
      </div>
    </div>
  );
};

export default NotSignedIn;
