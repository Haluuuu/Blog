import YouTube from 'react-youtube';
import React from "react";

const VideoSection = () => {
    const videoId = "G0FQOxP4iTU"; // ID del video


    const opts = {
      playerVars: {
        autoplay: 0, // 0 para desactivar autoplay
        controls: 1, // Mostrar controles de reproducción
        mute: 0, // Cambia a 1 si deseas que el video esté silenciado al inicio
      },
    };
  
    return (
      <div className="video-section">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    );
  };
  
  export default VideoSection;