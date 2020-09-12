import React from "react";
import icon from "./Icons";
import FontAwesome from "react-fontawesome";
import {  Avatar } from "@material-ui/core";

export default function Menu(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-light d-flex justify-content-between border  fixed">
        <div className="container">
          <div>
            <a href="#">
              <img src={props.logo} alt="logo" />
            </a>
          </div>
          <div className="search_icon">
            <FontAwesome className={"fas fa-search"} />
          </div>
          <div>
            <input
              className="form-control mr-sm-2 text-center"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="menu__icons">
            {icon("fas fa-home")}
            {icon("far fa-paper-plane")}
            {icon("fas fa-compass")}
            {icon("fas fa-heart")}
            <Avatar src={props.userPict} alt="Mauricio" />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
