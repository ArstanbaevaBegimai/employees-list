import React from "react";
import { useState } from "react";
import "./App.css";
import AppFilter from "./components/app-filter";
import AppInfo from "./components/app-info";
import EmployeesAddForm from "./components/employees-add-form";
import EmployeesList from "./components/employees-list";
import SearchPanel from "./components/search-panel";

const data = [
  {
    name: "Emma Watson",
    salary: 10000,
    increase: false,
    rise: true,
    id: 1,
  },
  {
    name: "John Snow",
    salary: 800,
    increase: true,
    rise: false,
    id: 2,
  },
  {
    name: "Paul McCartney",
    salary: 20000,
    increase: false,
    rise: false,
    id: 3,
  },
];

const App = () => {
  const [state, setState] = useState(data);
  const [term, setTerm] = useState("");
  const [filtered, setFiltered] = useState("all");

  const deleteItem = (id) => {
    setState((state) => {
      const newArr = state.filter((elem) => elem.id !== id);
      return newArr;
    });
  };

  const addEmployee = (newEmployee) => {
    setState([...state, newEmployee]);
  };

  const onToggleIncrease = (id) => {
    setState((state) => {
      const newArr = state.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      });
      return newArr;
    });
  };

  const onToggleRise = (id) => {
    setState((state) => {
      const newArr = state.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      });
      return newArr;
    });
  };

  const searchEmployee = (state, term) => {
    if (term.length === 0) {
      return state;
    }

    return state.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const filterPost = (state, filtered) => {
    switch (filtered) {
      case "promotion":
        return state.filter((item) => item.rise);
      case "moreThan1000":
        return state.filter((item) => item.salary >= 1000);
      default:
        return state;
    }
  };

  const onFilterSelect = (filtered) => {
    setFiltered(filtered);
  };

  function onSalaryChange(name, salary) {
    setState((state) =>
      state.map((elem) => {
        if (elem.name === name) {
          return { ...elem, salary };
        }
        return elem;
      })
    );
  }
  console.log(state);

  const visibleData = filterPost(searchEmployee(state, term), filtered);

  return (
    <div className="app">
      <AppInfo data={state} />

      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filtered={filtered} onFilterSelect={onFilterSelect} />
      </div>

      <EmployeesList
        data={visibleData}
        onDelete={deleteItem}
        onToggleIncrease={onToggleIncrease}
        onToggleRise={onToggleRise}
        onSalaryChange={onSalaryChange}
      />
      <EmployeesAddForm data={state} onAdd={addEmployee} />
    </div>
  );
};

export default App;
