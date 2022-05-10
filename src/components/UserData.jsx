import React, { useContext } from "react";
import { VideoContext } from "../data/DataContext";
import { LogOut, Login, Register } from "../components/Buttons";
import "./UserData.css";

export default (props) => {

  const { isLoggedIn } = useContext(VideoContext);
 const userdata = JSON.parse(localStorage.getItem('isLoggedIn'));
  if (isLoggedIn != undefined) {
    return (
      <div className="user">
        <div className="user-data">
          <span>Olá {userdata.email}</span>
        </div>
        <div className="user-action">
          <LogOut />
        </div>
      </div>
    );
  } else {
    return (
      <div className="user">
        <Login />
        <Register />
      </div>
    );
  }
};
