import React, { useContext } from "react";
import { VideoContext } from "../data/DataContext";
import { useHistory } from "react-router";
import "./Course.css";

const Course = ({ image, title, vendor, playListId }) => {
  const { isLoggedIn } = useContext(VideoContext);

  const history = useHistory();

  function verifyLogin(isLoggedIn) {
    if (isLoggedIn) {
      history.push(`curso/${title}/${playListId}`);
    } else {
      alert('FAÇA LOGIN PARA ACEDER AS AULAS!')
    }
  }

  return (
    <div
      onClick={() => verifyLogin(isLoggedIn)}
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs"
      id="item-curso">
      <div className="curso">
        <div className="my-card">
          <div className="card-image">
            <div className="control-image">
              <img src={image} alt={image} className="" />
            </div>
          </div>
          <div className="card-body">
            <h5 className="titulo-curso">{title}</h5>
            <div className="vendor">
              <h6>{vendor}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
