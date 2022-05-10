import React, { useContext } from "react";
import { VideoContext } from "../data/DataContext";
import { useHistory } from "react-router";
import Main from "./Main";
import Course from "../courses/Course";
import InsertBar from "./InsertBar";
import "./Panel.css";

export default (props) => {
  const history = useHistory();

  const { playlistsTitle } = useContext(VideoContext);

  const cursos = playlistsTitle.map((curso) => {
    return (
      <Course
        key={curso.id}
        playListId={curso.id}
        title={curso.snippet.title}
        image={curso.snippet.thumbnails.high.url}
        vendor={curso.snippet.channelTitle}
      ></Course>
    );
  });
  return (
    <Main>
      <div className="panel">
          <InsertBar />
        <div className="row justify-content-center">{cursos}</div>
      </div>
    </Main>
  );
};
