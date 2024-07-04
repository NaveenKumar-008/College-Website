import React from "react";
import image from "../../assets/sec.jpeg";
import "./HomeComponent.css";
function HomeComponent() {
  return (
    <div className="item1">
      <img src={image} alt="logo"></img>
      <h6>Welcome to Our College</h6>

      <div className="item2">
        <p>
          Your future starts here. Learn more about our programs and events.
        </p>
      </div>
      <div className="foot">
        <h3>© 2024 Saveetha Engineering College. All rights reserved.</h3>
      </div>
    </div>
  );
}

export default HomeComponent;
