import React, { useEffect, useState } from "react";
import "../AllCourses/Courses.css";

interface Video {
  id: number;
  title: string;
  videourl: string;
}

const fetchVideos = async (
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>
) => {
  try {
    const response = await fetch("http://localhost:3000/api/videos");
    const data = await response.json();
    setVideos(data);
  } catch (error) {
    console.error("Det gick inte att hämta videos: ", error);
  }
};

const RenderCourses: React.FC<{ video: Video }> = ({ video }) => {
  const navToCourse = () => {
    window.open(video.videourl, "_blank");
  };

  return (
    <div key={video.id}>
      <h3 className="h3-size">{video.title}</h3>
      <button className="nav-course-button" onClick={navToCourse}>
        Go to course
      </button>
    </div>
  );
};

function AllCourses() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetchVideos(setVideos);
  }, []);

  return (
    <>
      <div id="all-courses-container">
        <h1 style={{ fontSize: "50px" }}>NexGen</h1>
        <h3 style={{ fontSize: "30px" }}>All courses</h3>
        <div id="all-videos">
          {videos.map((video) => (
            <RenderCourses key={video.id} video={video}></RenderCourses>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllCourses;
