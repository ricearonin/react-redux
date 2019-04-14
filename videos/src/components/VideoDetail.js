import React from 'react';
import decodeHTML from '../helpers/decoder';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>;
  }
  return <div>{decodeHTML(video.snippet.title)}</div>;
};

export default VideoDetail;
