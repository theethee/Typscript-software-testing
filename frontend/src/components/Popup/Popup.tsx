import "../Popup/Popup.css";

interface PopupProps {
  onClose: () => void;
  heading: string;
  text: string;
  color?: string;
}

const Popup: React.FC<PopupProps> = ({ onClose, heading, text, color }) => {
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
        <h4 id="heading" style={{ color, fontSize: "25px" }}>
          {heading}
        </h4>
        <p id="text" style={{ fontSize: "20px" }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Popup;
