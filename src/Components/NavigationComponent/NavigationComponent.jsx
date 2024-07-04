import React from "react";
import { Routes, BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomeComponent from "../../Routes/HomeComponent/HomeComponent";
import AboutComponent from "../../Routes/AboutComponent/AboutComponent";
import EventComponent from "../../Routes/EventComponent/EventComponent";
import DepartmentComponent from "../../Routes/DepartmentComponent/DepartmentComponent";
import "./NavigationComponent.css";
const NavigationComponent = () => {
  return (
    <Router>
      <header>
      <nav>
        
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Departments">Department</Link>
            </li>
            <li>
              <Link to="/Events">Event</Link>
            </li>
          </ul>
       
      </nav>
      </header>
      <Routes>
        <Route exact path="/" element={<HomeComponent />}></Route>
        <Route exact path="/About" element={<AboutComponent />}></Route>
        <Route
          exact
          path="/Departments"
          element={<DepartmentComponent />}
        ></Route>

        <Route exact path="/Events" element={<EventComponent />}></Route>
      </Routes>
    </Router>
  );
};

export default NavigationComponent;
