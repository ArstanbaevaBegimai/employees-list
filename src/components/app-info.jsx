import React from "react";
import "./app-info.css";

const AppInfo = ({ data }) => {
  const filtered = data.filter((item) => item.increase);
  return (
    <div className="app-info">
      <h1>Employee accounting in Company XXX</h1>
      <h2>Total number of employees: {data.length}</h2>
      <h2>Bonus will be received: {filtered.length}</h2>
    </div>
  );
};

export default AppInfo;
