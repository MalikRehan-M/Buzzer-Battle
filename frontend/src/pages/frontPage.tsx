import React, { useState } from "react";
import "./frontPage.css"; // import the CSS file
import "animate.css";
import { useNavigate } from "react-router-dom";

const FrontPage: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  
  function handleMulti() {
    navigate("/multiplayer");
  }
  function handleSingle() {
    navigate("/singleplayer");
  }
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
        <span className="bar_content">Welcome to the Buzzer Battle</span>
      </div>
      <div className="button-container">
        <div className="button-wrapper">
          <button onClick={handleSingle} className="custom-button ">Single Player</button>
          <button onClick={handleMulti} className="custom-button">Multi Player</button>
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
