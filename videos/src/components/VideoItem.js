import './VideoItem.css';

import React from 'react';
import decodeHTML from '../helpers/decoder';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="video-item item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img className="ui image" alt="" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{decodeHTML(video.snippet.title)}</div>
      </div>
    </div>
  );
};

export default VideoItem;
