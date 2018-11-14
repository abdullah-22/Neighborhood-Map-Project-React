import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Coffee", "Pizza", "Burger"],
      limits: [5, 10, 15]
    };
  }

  /**
   * When the user clicks on the button,
   * toggle between hiding and showing the dropdown content
   */
  handleDropdownClick = e => {
    if (e.target.id === "1") {
      if (window.document.getElementById("limit").classList.contains("show"))
      {
        window.document.getElementById("limit").classList.toggle("show");
      }
      window.document.getElementById("options").classList.toggle("show");
    } else if (e.target.id === "2") {
      if (window.document.getElementById("options").classList.contains("show"))
      {
        window.document.getElementById("options").classList.toggle("show");
      }
      window.document.getElementById("limit").classList.toggle("show");
    }
  };

  // Close the dropdown if the user clicks outside of it
  handleOutsideClick = e => {
    if (!e.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  handleItemClick = e => {
    var updatedParams = null;
    if(e.target.id.toLowerCase().includes("option")){
        let qry = e.target.id.toLowerCase().replace("option: ","")
        updatedParams = Object.assign({}, this.props.params);
        updatedParams.query = qry;
      }
      else
      if(e.target.id.toLowerCase().includes("limit")){
        let lim = e.target.value;
        updatedParams = Object.assign({},this.props.params);
        updatedParams.limit = lim;
      }
      console.log(updatedParams)
      this.props.updateVenueParams(updatedParams)
  };

  componentDidMount() {
    window.document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.document.removeEventListener("click", this.handleOutsideClick);
  }

  render() {
    return (
      <div className="menu">
        <div className="dropdown">
          <button onClick={this.handleDropdownClick} id="1" className="dropbtn">
            Options
          </button>
          <div id="options" className="ul dropdown-content">
            {this.state.options.map((option, idx) => (
              <li
                key={idx}
                id={"Option: " + option}
                value={option}
                onClick={this.handleItemClick}
              >
                {option}
              </li>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button onClick={this.handleDropdownClick} id="2" className="dropbtn">
            Limit Venues
          </button>
          <div id="limit" className="ul dropdown-content">
            {this.state.limits.map((limit, idx) => (
              <li
                key={idx}
                id={"Limit: " + limit}
                value={limit}
                onClick={this.handleItemClick}
              >
                {limit}
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
