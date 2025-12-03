import React, { useState } from "react";

export default function About(props) {

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setbtnText] = useState("Dark Mode");

  const toggle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });

      setbtnText("Light Mode");
      props.showAlert("Dark mode has been enabled", "success");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });

      setbtnText("Dark Mode");
      props.showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h2>About Us</h2>

      <div className="accordion" id="accordionExample">

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              This is the first item’s accordion body.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              This is the second item’s accordion body.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
              This is the third item’s accordion body.
            </div>
          </div>
        </div>

      </div>

      <button onClick={toggle} className="btn btn-dark my-3">
        {btntext}
      </button>
    </div>
  );
}
