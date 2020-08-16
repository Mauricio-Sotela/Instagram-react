import React, { Component } from "react";
import { user } from "../components/userData.json";
import logo from "../images/mainLogo.jpg";
import icons from "../components/Icons";

export default function Header() {


  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-4">
          <div>
            <img src={logo} alt="logo" style={{ borderRadius: "50%" }} />
          </div>
        </div>
        <div className="col-sm-8 d-flex flex-column">
          <div className="container d-flex flex-row justify-content-between">
            <h2>{user.name}</h2>
            <span href="#" className=" ml-4 border border-dark p-2">
              Send a message
            </span>
            <span href="#">{icons("fas fa-user")}</span>
            <span href="#">{icons("fas fa-sort-down")}</span>
            <span href="#" style={{ fontSize: "2rem" }}>
              ...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
