import React, { useState } from "react";
import "./employees-add-form.css";

const EmployeesAddForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: Date.now(),
    };
    if (!name || !salary) {
      alert("Enter all fields");
      return;
    }
    onAdd(newEmployee);
    setName("");
    setSalary("");
  };

  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form className="add-form d-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="salary in $?"
          onChange={(e) => setSalary(e.target.value)}
          name="salary"
          value={salary}
        />
        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
