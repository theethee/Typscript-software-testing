import "../Popup/Popup.css";
import Popup from "../Popup/Popup";

interface NotSignedInPopupProps {
  onClose: () => void;
}

const NotSignedIn: React.FC<NotSignedInPopupProps> = ({ onClose }) => {
  return (
    <Popup
      onClose={onClose}
      heading="Error"
      text="Wrong username or password. Please try again!"
      color="red"
    ></Popup>
  );
};

export default NotSignedIn;
