import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import logo from "./images/logo.png";
import userPict from "./images/maurcio.jpg";
import data from './data.json'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Menu logo={logo} userPict={userPict} />
        <Header data={data} />
      </React.Fragment>
    );
  }
}
