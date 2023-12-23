"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = (theurl) => {
  //video path
  const videourl = theurl;
  console.log(videourl.theurl);

  return (
    <div>
      <ReactPlayer
        width= "100%"
        height="100%"
        url = {videourl.theurl}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videourl.theurl} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;