import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Menu />
        <Header />
      </React.Fragment>
    );
  }
}
