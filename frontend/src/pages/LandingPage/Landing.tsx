import { useEffect, useState } from "react";
import "../LandingPage/Landing.css";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [username, setUserName] = useState("");

  const [isMyAccountClicked, setIsMyAccountClicked] = useState<boolean>(false);

  const [isAllCoursesClicked, setIsAllCoursesClicked] =
    useState<boolean>(false);

  const [isSavedClicked, setIsSavedClicked] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleMyAccount = () => {
    setIsMyAccountClicked(!isMyAccountClicked);
    navigate("/myaccount");
  };

  const handleAllCourses = () => {
    setIsAllCoursesClicked(!isAllCoursesClicked);
    navigate("/allcourses");
  };

  const handleSavedCourses = () => {
    setIsSavedClicked(!isSavedClicked);
    navigate("/savedcourses");
  };

  useEffect(() => {
    try {
      const userName = localStorage.getItem("username");
      if (userName) {
        setUserName(userName);
      }
    } catch (error) {
      console.error(
        "Error kunde inte hämta användare från local storage",
        error
      );
    }
  });

  return (
    <>
      <div id="landing-container">
        <h1>NexGen</h1>
        <h3>Welcom {username}</h3>
        <div id="my-account">
          <button className="landing-buttons" onClick={handleMyAccount}>
            My account
          </button>
        </div>
        <div id="saved-courses">
          <button className="landing-buttons" onClick={handleSavedCourses}>
            Saved courses
          </button>
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
