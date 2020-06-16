import React, { Component } from "react";
import logo from "../images/logo.png";
import mauricio from "../images/maurcio.jpg";
import icon from "./Icons";
export default class Menu extends Component {
  render = () => (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-light d-flex justify-content-between border border-secondary">
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div>
          <input
            class="form-control mr-sm-2 text-center"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div>
          {icon("fas fa-home")}
          {icon("far fa-paper-plane")}
          {icon("fas fa-compass")}
          {icon("fas fa-heart")}
          <a href="#">
            <img
              src={mauricio}
              alt="Mauricio"
              style={{ width: "30px", borderRadius: "50%" }}
            />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}
