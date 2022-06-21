import React from "react";
import { useState } from "react";
import "./search-panel.css";

const SearchPanel = ({ onUpdateSearch }) => {
  const [term, setTerm] = useState("");

  const onUpdateSearchLocal = (e) => {
    const term = e.target.value;
    setTerm(term);
    onUpdateSearch(term);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
      onChange={onUpdateSearchLocal}
      value={term}
    ></input>
  );
};

export default SearchPanel;
