/**
 * Component -> SideBar
 *
 * Handles filtering of venues & markers using input search
 */

import React, { Component } from "react";
import VenueList from "./VenueList/VenueList";
import "./SideBar.css";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      activeVenues: [],
      inputTabIndex: 2
    };
  }

  /**
   *  Function -> handleFilterVenues
   *
   *  Filters venues listed in the sidebar
   *
   *  returns -> filtered venues from the search query
   */
  handleFilterVenues = () => {
    if (
      this.state.query.trim() !== "" ||
      this.state.query.trim().length !== 0
    ) {
      const activeVenues = this.props.venues.filter(venue =>
        venue.name.toLowerCase().includes(this.state.query.toLowerCase())
      );
      return activeVenues;
    } else {
      return this.props.venues;
    }
  };

  /**
   * Function -> listens to the onChange & onFocus of search box
   *
   * toggles markers' visibilty according to the search query
   */
  handleInputChange = e => {
    this.setState({ query: e.target.value.trim() });
    const activeMarkers = this.props.venues.map(venue => {
      const isMatched = venue.name
        .toLowerCase()
        .includes(e.target.value.trim().toLowerCase());
      const activeMarker = this.props.markers.find(
        marker => marker.id === venue.id
      );
      if (isMatched) {
        activeMarker.isVisible = true;
      } else {
        activeMarker.isVisible = false;
      }
      return activeMarker;
    });
    this.props.updateGlobalState({ markers: activeMarkers });
  };

  render() {
    return (
      this.props.sideBarIsOpen && (
        <div className="sidebar-container">
          <div className="sidebar-menu">
            <div className="search-box">
              <input
                type="search"
                id="search"
                placeholder="Filter by name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputChange}
                tabIndex="2"
              />
            </div>
            <VenueList
              {...this.props}
              venues={this.handleFilterVenues()}
              onListItemClick={this.props.onListItemClick}
              inputTabIndex={this.state.inputTabIndex}
            />
            <div className="attribution">
              <h3>
                <b>
                  DATA PROVIDED BY -{" "}
                  <a href="https://developer.foursquare.com/">FOURSQUARE</a>
                </b>
              </h3>
              <img
                src={require("../Media/Images/powered-by-foursquare-blue.svg")}
                alt="Powered by FOURSQUARE"
              />
            </div>
          </div>
        </div>
      )
    );
  }
}
