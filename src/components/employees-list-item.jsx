import React from "react";
import { useState } from "react";
import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleRise,
    increase,
    rise,
    onSalaryChange,
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  if (increase) {
    classNames += " increase";
  }

  if (rise) {
    classNames += " like";
  }

  const [newSalary, setNewSalary] = useState(salary);

  function updateSalary(e) {
    const changedSalary = +e.target.value.slice(0, -1);
    setNewSalary(changedSalary);
    onSalaryChange(name, changedSalary);
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleRise}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
        onChange={updateSalary}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleIncrease}
        >
          <img
            className="icon-image"
            src="https://cdn-icons-png.flaticon.com/128/541/541732.png"
            alt=""
          />
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <img
            className="icon-image"
            src="https://cdn-icons-png.flaticon.com/128/2496/2496733.png"
            alt=""
          />
        </button>
        <img
          className="icon-image star"
          src="https://cdn-icons-png.flaticon.com/128/616/616490.png"
          alt=""
        />
      </div>
    </li>
  );
};

export default EmployeesListItem;
