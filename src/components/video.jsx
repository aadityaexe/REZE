import React, { useState } from "react";

const VideoGallery = () => {
  const videos = [
    "/videos/video1.mp4", // 16:9
    "/videos/video2.mp4", // 9:16
    "/videos/video3.mp4", // 1:1
    "/videos/video4.mp4", // 4:3
    "/videos/video5.mp4", // cinematic
    "/videos/video6.mp4", // ultra wide
  ];

  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    setPlayingIndex(index === playingIndex ? null : index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {videos.map((src, index) => (
        <div
          key={index}
          className="relative w-full bg-black rounded-2xl overflow-hidden aspect-video flex items-center justify-center"
        >
          <video
            src={src}
            controls
            className="w-full h-full object-contain"
            onPlay={() => handlePlay(index)}
            onPause={() => handlePlay(null)}
            muted={false}
            playsInline
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
