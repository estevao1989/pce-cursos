import React, { useEffect, useState } from "react";
import axios from "axios";
import youtube from "../courses/youtube";

export const VideoContext = React.createContext();

export const DataProvider = (props) => {
  const [cursos, setCursos] = useState();
  const [playlistsTitle, setPlaylistsTitle] = useState([]);
  const [render, setRender] = useState(0);
  const [insertId, setInsertId] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState();

  function getCursos() {
    axios.get("http://localhost:3001/cursos").then((response) => {
      setCursos(response.data);
    });
  }

  useEffect(() => {
    localStorage.setItem('render', render)
    getCursos();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    }
  });

  useEffect(() => {
    buscarPlaylists(cursos);
  }, [cursos]);

  function buscarPlaylists(cursos) {
    setPlaylistsTitle([])
    if (cursos !== undefined) {
      cursos.forEach((element) => {
        youtube
          .get("/playlists", {
            params: {
              id: element.curso,
              maxResults: 20,
            },
          })
          .then((response) => {
            setPlaylistsTitle((playlistsTitle) => [
              ...playlistsTitle,
              response.data.items[0],
            ]);
          });
      });
    }
  }

  return (
    <VideoContext.Provider
      value={{
        cursos,
        playlistsTitle,
        render,
        isLoggedIn,
        insertId,
        setInsertId,
        setRender,
        setIsLoggedIn,
        setCursos
      }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};
