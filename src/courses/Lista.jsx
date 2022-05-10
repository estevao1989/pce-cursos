import React from "react";
import Video from './Video'
export default ({ lista, func }) => {

    const renderedLista = lista.map(video => {
        return (
            <Video
                className="container"
                key={video.id}
                video={video}
                func={func}
            ></Video>
        )
    })

    return (
        <div>
            {renderedLista}
        </div>
    )
}