import { useEffect, useState } from "react";
import "../AllCourses/Courses.css";

interface Video {
  id: number;
  title: string;
  videourl: string;
}

function AllCourses() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/videos");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Det gick inte att hämta videos: ", error);
      }
    };
    fetchVideos();
  }, []);

  const navToCourse = (videourl: string) => {
    window.open(videourl, "_blank");
  };

  return (
    <>
      <div id="all-courses-container">
        <h1>NexGen</h1>
        <h3>All courses</h3>
        <div id="all-videos">
          {videos.map((video) => (
            <div key={video.id}>
              <h3 className="h3-size">{video.title}</h3>
              <button
                className="nav-course-button"
                onClick={() => navToCourse(video.videourl)}
              >
                Go to course
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllCourses;
