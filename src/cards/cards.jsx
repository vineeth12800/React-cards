import React, { Component } from "react";
import Card from "./cardUI";
import img1 from "../images/download.jpg";
import img2 from "../images/download2.jpg";
import img3 from "../images/download1.jpg";

class cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={img1} title="Author 1" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img2} title="Author 2" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={img3} title="Author 3" />
          </div>
        </div>
      </div>
    );
  }
}

export default cards;
