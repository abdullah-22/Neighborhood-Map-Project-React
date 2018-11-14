/**
 * Component -> Hamburger Icon in the header
 *
 * Controls behavior of the sidebar
 *
 */

import React, { Component } from "react";
import "./hamburger.min.css";
import "./Hamburger.css";

export default class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true
    };
  }

  /**
   * Toggles state of sidebar on windows resizing event
   *
   * Sidebar is closed automatically on smaller screens to ensure responsiveness
   * & a better UX
   *
   */
  handleWindowResize = () => {
    if (window.innerWidth <= 768) {
      this.setState({ isActive: false });
      this.props.updateGlobalState({ sideBarIsOpen: false });
    }
  };

  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  /**
   * Toggles hamburger animation & global state of sidebar on click event
   */
  handleHamburgerClick = () => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");
    if (this.state.isActive && this.props.sideBarIsOpen === true) {
      this.setState({ isActive: false });
      this.props.updateGlobalState({ sideBarIsOpen: false });
    } else {
      this.setState({ isActive: true });
      this.props.updateGlobalState({ sideBarIsOpen: true });
    }
  };

  render() {
    return (
      <div className="hamburger-container" tabIndex="1">
        <button
          className={
            this.state.isActive
              ? "hamburger hamburger--spin is-active"
              : "hamburger hamburger--spin"
          }
          type="button"
          onClick={this.handleHamburgerClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    );
  }
}
