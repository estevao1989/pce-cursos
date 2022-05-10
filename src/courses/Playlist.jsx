import React, { useContext, useEffect, useState } from "react";
import './Playlist.css'
import Main from "../components/Main";
import { useParams } from "react-router";
import youtube from "./youtube";
import Lista from "./Lista";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Ask from "./asks/Ask";
import Answers from "./asks/Answers";




export default props => {

    const { id } = useParams()
    const [lista, setLista] = useState([])
    const [videoSelected, setVideoSelected] = useState()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        youtube.get('playlistItems', {
            params: {
                playlistId: id,
                maxResults: 80
            }
        }).then(response => {
            setLista(response.data.items)
            if (response.data.items[0].title !== "Private Video") {
                setVideoSelected(response.data.items[0])
            } else {
                setVideoSelected(response.data.items[1])
            }
        })
    }, [])
    if (videoSelected !== undefined) {
        return (
            <Main>
                <div className="playlist">
                    <div className="video-selecionado">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoSelected.snippet.resourceId.videoId}`} frameborder="0"
                            width={videoSelected.snippet.thumbnails.standard.width}
                            height={videoSelected.snippet.thumbnails.standard.height}
                        ></iframe>
                        <div className="gradient-gray">
                            <h3>Sobre a aula</h3>
                            <h6>{videoSelected.snippet.title}</h6>
                            <h6>Fornecido por {videoSelected.snippet.channelTitle}</h6>
                        </div>
                    </div>
                    <div className="lista-de-videos overflow-auto">
                        <Lista
                            lista={lista}
                            func={setVideoSelected}
                        ></Lista>
                    </div>
                    <div className="perguntas">
                        <div className="perguntas-title" onClick={() => setVisible(!visible)}>
                            <div className="m-1">
                                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                            </div>
                            <div className="m-1">
                                Fazer uma pergunta
                            </div>
                        </div>
                        <div className="perguntas-body">
                            {visible ? <Ask curso={id} setVisible={setVisible} visible={visible}></Ask> : null}
                            <div className="ask-answers">
                                <Answers curso={id} visible={visible} setVisible={setVisible}></Answers>
                            </div>

                        </div>
                    </div>
                </div>

            </Main>
        )
    } else {
        return (
            <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}
