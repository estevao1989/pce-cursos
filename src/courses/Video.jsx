import React from "react";
import './Video.css'

export default ({ video, func }) => {
    return (
        <React.Fragment>
            <div
                onClick={() => func(video)}
                key={video.id}
                className="video">
                <div className="gradient-gray">
                    {video.snippet.position + 1} - {video.snippet.title}
                </div>
            </div>
        </React.Fragment>
    )
}