import React, { useContext, useEffect, useState } from "react";
import { VideoContext } from "../data/DataContext";
import { useHistory } from "react-router";
import youtube from "../courses/youtube";


import axios from "axios";

export default (props) => {
  const [lista, setLista] = useState("");

  const { setRender, render, setCursos, cursos } = useContext(VideoContext);

  const history = useHistory();

  function inserirPlaylist(e) {
    e.preventDefault();
    youtube
      .get("/playlists", {
        params: {
          id: lista,
          maxResults: 20,
        },
      })
      .then((response) => {
        if (response.data.pageInfo.totalResults == 0) {
          alert('ID DE PLAYLIST INVALIDA')
          history.push("/")
        } else {
          axios
            .post("http://localhost:3001/insert", {
              list: lista,
            })
            .then((response) => {
              axios.get("http://localhost:3001/cursos").then((response) => {
                setCursos(response.data);
              });
              history.push("/");
            });
        }
      })

  }
  function apagarPlaylist(e) {
    e.preventDefault();
    youtube
      .get("/playlists", {
        params: {
          id: lista,
          maxResults: 20,
        },
      })
      .then((response) => {
        if (response.data.pageInfo.totalResults == 0) {
          alert('ID DE PLAYLIST INVALIDA')
          history.push("/")
        } else {
          axios
            .post("http://localhost:3001/erase", {
              list: lista,
            })
            .then((response) => {
              axios.get("http://localhost:3001/cursos").then((response) => {
                setCursos(response.data);
              });
              history.push("/");
            });
        }
      })
  }
  if (localStorage.getItem('isLoggedIn')) {
    const user = JSON.parse(localStorage.getItem('isLoggedIn'))
    if (user.userLevel == 1) {
      return (
        <div className="input-group mb-3">
          <input
            onChange={(e) => setLista(e.target.value)}
            type="text"
            className="form-control"
            placeholder="ID DA PLAYLIST"
            aria-label="ID DA PLAYLIST"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={(e) => inserirPlaylist(e)}
          >
            INSERIR
          </button>
          <button
            className="btn btn-danger"
            type="button"
            id="button-addon2"
            onClick={(e) => apagarPlaylist(e)}
          >
            APAGAR
          </button>
        </div>
      );
    } else {
      return <></>
    }
  } else {
    return <></>
  }
};
