import "../AllCourses/Courses.css";
import backArrow from "../../assets/arrow-back-icon.png";

function HtmlAndCss() {
  return (
    <>
      <div id="all-courses-container">
        <img id="arrow-back" src={backArrow} alt="arrow to navigate back" />
        <h1>NexGen</h1>

        <div id="all-videos">
          <h3 className="h3-size">HTML & CSS</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/h3bTwCqX4ns?si=kwNWULmplFldNjjj"
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

export default HtmlAndCss;
