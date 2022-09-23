import React from "react";
import "./employees-list.css";
import EmployeesListItem from "./employees-list-item";

const EmployeesList = ({
  data,
  onDelete,
  onToggleIncrease,
  onToggleRise,
  onSalaryChange,
}) => {
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
            onSalaryChange={onSalaryChange}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
