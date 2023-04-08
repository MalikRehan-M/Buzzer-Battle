import React, { useState } from "react";
import "./frontPage.css"; // import the CSS file
import "animate.css";

const FrontPage: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [selectedOption, setSelectedOption] = useState("");

  // Add event handler for option selection
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="front-page-container">
      {" "}
      {/* Use className to apply CSS class */}
      <div className="bar">
        <span className="bar_content">Welcome to the quiz game</span>
      </div>
      <div className="button-container">
        <div className="button-wrapper">
          <button className="custom-button ">Single Player</button>
          <button className="custom-button">Multi Player</button>
        </div>
        <div className="button-wrapper">
          <button className="custom-button">Number of players</button>
          <button className="custom-button" onClick={toggleDropdown}>
            {selectedOption
              ? `Categories : ${selectedOption}`
              : "Select Category"}
          </button>
          {isDropdownOpen && (
            <div className="dropdown">
              <ul>
                <li onClick={() => handleOptionSelect("Entertainment")}>
                  Entertainment
                </li>
                <li onClick={() => handleOptionSelect("Technical")}>
                  Technical
                </li>
                <li onClick={() => handleOptionSelect("General")}>General</li>
              </ul>
              {/* Render selected option or perform action with selected option */}
            </div>
          )}
          <button className="custom-button">Create</button>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
