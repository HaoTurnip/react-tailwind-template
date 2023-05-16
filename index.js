import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Navbar from "./navbar.component";
import ProductGrid from "./productsgrid.component"
import Footer from "./Footer.component"

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
        <ProductGrid/>
        <Footer/>
      </div>
    
        
    
    );
  }
}

render(<App />, document.getElementById("root"));
