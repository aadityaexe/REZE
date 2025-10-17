"use client";
import React, { useRef, useEffect } from "react";

const VideoGallery = ({ video }) => {
  const videos = Array.isArray(video) ? video : [video];
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = entry.target;
          if (entry.isIntersecting) {
            vid.play().catch(() => {}); // play when visible
          } else {
            vid.pause(); // pause when not visible
          }
        });
      },
      { threshold: 0.5 } // 50% of video should be visible to play
    );

    videoRefs.current.forEach((vid) => {
      if (vid) observer.observe(vid);
    });

    return () => {
      videoRefs.current.forEach((vid) => {
        if (vid) observer.unobserve(vid);
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      {videos.map((src, index) => (
        <div
          key={index}
          className="relative  rounded-2xl overflow-hidden flex items-center justify-center"
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={src}
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
            loop
            playsInline
            controls={false}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
