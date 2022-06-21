import React from "react";
import "./employees-list.css";
import EmployeesListItem from "./employees-list-item";

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
