"use client";
import React, {useState} from "react";
import ReactPlayer from "react-player";

const VideoPlayer = (theurl, subtitleURL) => {
  //video path
  const videourl = theurl;


  return (
    <div>
      <ReactPlayer
        width= "100%"
        height="100%"
        url = {videourl.theurl}
        controls={true}

        config={
          {
            file:{
              attributes: {
                crossOrigin: false
              },
              tracks:[{
                kind: "subtitles",
                src: theurl.subtitleURL,
                srcLang: "en",
                default: false,

              }]
            }
          }
        }
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videourl.theurl} type="video/x-matroska" />
    </div>
  );
};

export default VideoPlayer;