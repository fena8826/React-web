import React, { useState } from "react";
import { FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FilterHeader.css"; // Or use a dedicated CSS file if needed

const PizzaFilterHeader = ({ filterOptions }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <div className="filter-bar-container">
      <div className="filter-icon me-5">
        <FaFilter style={{ marginRight: 7 }} />
        Filter
      </div>

      {Object.entries(filterOptions).map(([key, options]) => (
        <div key={key} className="filter-group text-secondary-subtle fw-100">
          <div className="filter-label fw-100" onClick={() => toggleDropdown(key)}>
            {key}
            {openDropdown === key ? (
              <FaChevronUp className="ms-1 small d-inline-flex align-items-center dropdown-icon" />
            ) : (
              <FaChevronDown className="ms-1 small d-inline-flex align-items-center dropdown-icon" />
            )}
          </div>

          {openDropdown === key && (
            <div className="filter-dropdown">
              {options.map((opt, i) => (
                <div key={i} className="filter-option border-bottom fs-6">
                  {opt}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="results-text ms-auto me-3">
        Showing 1–12 of 28 Results
      </div>
    </div>
  );
};

export default PizzaFilterHeader;
