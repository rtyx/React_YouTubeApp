import React from 'react';

const VideoListItem = ({video, handleVideoSelect}) => {
    // const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li onClick={() => handleVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object"/>
                    <div className="media-body">
                        <div className="media-heading">
                            {title}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
