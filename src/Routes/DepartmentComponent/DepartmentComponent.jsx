import React from "react";
import "./DepartmentComponent.css";
const DepartmentComponent = () => {
  const Departments = [
    {
      name: "AIDS",
      count: 120,
    },
    {
      name: "ECE",
      count: 150,
    },
    {
      name: "AI&IOT",
      count: 110,
    },
    {
      name: "Medical Electronic",
      count: 110,
    },
    {
      name: "BME",
      count: 110,
    },
    {
      name: "EEE",
      count: 100,
    },
    {
      name: "MECH",
      count: 130,
    },
    {
      name: "EIE",
      count: 90,
    },
    {
      name: "AIML",
      count: 110,
    },
    {
      name: "AICS",
      count: 80,
    },
    {
      name: "CSE",
      count: 200,
    },
  ];
  return (
    <React.Fragment>
      <table className="table">
        <div className="item">
          <h1>Department</h1>

          <thead>
            <tr>
              <th>Department</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Departments.map((department) => (
              <tr key={department.name}>
                <td>{department.name}</td>
                <td>{department.count}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
      <div className="item5">
        <h3>© 2024 Saveetha Engineering College. All rights reserved.</h3>
      </div>
    </React.Fragment>
  );
};

export default DepartmentComponent;
