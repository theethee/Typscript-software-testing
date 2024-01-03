import "../Popup/Popup.css";

interface ChangedPersonInfoProps {
  onClose: () => void;
}

const ChangedPersonInfo: React.FC<ChangedPersonInfoProps> = ({ onClose }) => {
  return (
    <div id="popup-container">
      <button id="close-popup" onClick={onClose}>
        X
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h4 id="error-heading" style={{ color: "green", fontSize: "20px" }}>
          Congratulations
        </h4>
        <p id="warning-text" style={{ fontSize: "20px" }}>
          You have succesfully changed your person information.
        </p>
      </div>
    </div>
  );
};

export default ChangedPersonInfo;
