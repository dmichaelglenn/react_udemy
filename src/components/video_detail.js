import React from 'react';

const VideoDetail = ({video}) => {
    //just adding this little check prevents a null error when the page is loading, because we don't get a "null" property back before the API has grabbed a video. Only add this when it's neccesarry, usually high-level components. He called it an "ajax spinner"
    if (!video) {
        return <div>Loading...</div>;
    }


    const videoId = video.id.videoId;
    //in es6, the backticks let us interpolate a javascript object like below as opposed to just concatenating a string
    const url = `https://www.youtube.com/embed/${videoId}`;


    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responive-item" src={url}></iframe>
            </div>
            <div className="details">
    <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;