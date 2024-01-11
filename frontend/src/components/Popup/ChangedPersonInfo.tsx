import "../Popup/Popup.css";
import Popup from "../Popup/Popup";

interface ChangedPersonInfoProps {
  onClose: () => void;
}

const ChangedPersonInfo: React.FC<ChangedPersonInfoProps> = ({ onClose }) => {
  return (
    <Popup
      onClose={onClose}
      heading="Congratulations"
      text="You have successfully changed your person information"
      color="green"
    ></Popup>
  );
};

export default ChangedPersonInfo;
