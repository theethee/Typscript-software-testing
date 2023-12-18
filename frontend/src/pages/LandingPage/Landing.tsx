import { useState } from "react";
import "../LandingPage/Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [isMyAccountClicked, setIsMyAccountClicked] = useState<boolean>(false);

  const [isAllCoursesClicked, setIsAllCoursesClicked] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const handleMyAccount = () => {
    setIsMyAccountClicked(!isMyAccountClicked);
    navigate("/myaccount");
  };

  const handleAllCourses = () => {
    setIsAllCoursesClicked(!isAllCoursesClicked);
    navigate("/allcourses");
  };

  return (
    <>
      <div id="landing-container">
        <h1>NexGen</h1>
        <h3>Welcom [Username]</h3>
        <div id="my-account">
          <button className="landing-buttons" onClick={handleMyAccount}>
            My account
          </button>
        </div>
        <div id="saved-courses">
          <button className="landing-buttons">Saved courses</button>
        </div>
        <button
          id="all-courses"
          className="landing-buttons"
          onClick={handleAllCourses}
        >
          All courses
        </button>
      </div>
    </>
  );
}

export default Landing;
