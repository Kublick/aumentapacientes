import React from "react";
import ReactPlayer from "react-player/lazy";

interface Props {
  url: string;
  controls: boolean;
  date: string;
}

const Videoplayer = ({ url, controls }) => {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          url={url}
          className="react-player"
          height="100%"
          width="100%"
          controls={controls}
        />
      </div>
    </>
  );
};

export default Videoplayer;
