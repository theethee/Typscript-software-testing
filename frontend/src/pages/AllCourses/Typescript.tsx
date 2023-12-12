import "../AllCourses/Courses.css";
import backArrow from "../../assets/arrow-back-icon.png";

function Typescript() {
  return (
    <>
      <div id="all-courses-container">
        <img id="arrow-back" src={backArrow} alt="arrow to navigate back" />
        <h1>NexGen</h1>

        <div id="all-videos">
          <h3 className="h3-size">Typescript</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d56mG7DezGs?si=vE_2_8qf7KFoVilj"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowFullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Typescript;
