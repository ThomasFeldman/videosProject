import React from 'react';

const VideoDetail = ({ video }) => {
    if (video === null) {
        return <div>Loading...</div>;
    } else{
    return <div>{video.snippet.title}</div>;
    }
};

export default VideoDetail;