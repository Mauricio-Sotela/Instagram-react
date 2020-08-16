import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import logo from "./images/logo.png";
import userPict from "./images/maurcio.jpg";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Menu logo={logo} userPict={userPict} />
        <Header chanel__name="Mauricio" />
      </React.Fragment>
    );
  }
}
