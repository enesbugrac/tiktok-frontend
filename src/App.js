import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video.js";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
            song={video.song}
            channel={video.channel}
            likes={video.likes}
            description={video.description}
            shares={video.shares}
            messages={video.messages}
            url="https://instagram.fada2-2.fna.fbcdn.net/v/t50.2886-16/116318243_114096520231264_5248633621650744716_n.mp4?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=BpI_fioMdAkAX9dedjc&oe=5F58F106&oh=ae8d7b071c62516a1298c521effee8b1"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
