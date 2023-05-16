import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Navbar from "./navbar.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
