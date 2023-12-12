import "../AllCourses/Courses.css";

function AllCourses() {
  return (
    <>
      <div id="all-courses-container">
        <h1>NexGen</h1>
        <h3>All courses</h3>

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
          <button className="nav-course-button">Go to course</button>
          <h3 className="h3-size">Javascript</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/W6NZfCO5SIk?si=jOzdh1-oyfsA9UKr"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowFullscreen
          ></iframe>
          <button className="nav-course-button">Go to course</button>
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
          <button className="nav-course-button">Go to course</button>
        </div>
      </div>
    </>
  );
}

export default AllCourses;
