import arrowBack from "../../assets/arrow-back-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SavedCourses() {
  const [isArrowClicked, setIsArrowClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleArrowBack = () => {
    setIsArrowClicked(!isArrowClicked);
    navigate("/landingpage");
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
      <div
        id="saved-courses-container"
        style={{ marginBottom: "64%", textAlign: "center" }}
      >
        <h1 style={{ fontSize: "50px" }}>NexGen</h1>
        <h3 style={{ fontSize: "30px" }}>Saved courses</h3>
      </div>
    </>
  );
}

export default SavedCourses;
