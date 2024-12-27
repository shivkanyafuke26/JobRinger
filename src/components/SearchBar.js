import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-job">
            <h2>Search Job</h2>
        </div>
        <select className="search-input">
          <option value="">Select Job</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>

        
        <select className="search-input">
          <option value="">Select Location</option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="san-francisco">San Francisco</option>
        </select>

        <select className="search-input">
          <option value="">Select Salary</option>
          <option value="below-50k">Below 50k</option>
          <option value="50k-100k">50k-100k</option>
          <option value="above-100k">Above 100k</option>
        </select>

        <select className="search-input">
          <option value="">Select Experience</option>
          <option value="0-2">0-2 years</option>
          <option value="2-5">2-5 years</option>
          <option value="5+">5+ years</option>
        </select>

        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
