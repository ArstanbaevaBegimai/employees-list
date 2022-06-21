import React from "react";
import "./app-filter.css";

const AppFilter = ({ filtered, onFilterSelect }) => {
  const buttonsData = [
    { name: "all", label: "All employees" },
    { name: "promotion", label: "For promotion" },
    { name: "moreThan1000", label: "Salary more than 1000$" },
  ];

  const buttons = buttonsData.map((item) => {
    const active = filtered === item.name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={item.name}
        onClick={() => onFilterSelect(item.name)}
      >
        {item.label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
