/**
 * Main app component to contain all other comonents.
 *
 * Contains => App -> Header, (Main ->> SideBar, Map), ErrorBoundary
 *
 */
import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import FourSquareAPI from "./API/FourSquare";
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map"
import SideBar from "./Components/SideBar/SideBar"

class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      mapCenter: [],
      mapZoom: 12,
      sideBarIsOpen: true,
      appHasError: false,
      venueParams: {
        query: "Coffee",
        near: "Lahore",
        limit: 10
      },
    };
  }

  /**
   * Updates the state of highest parent -> app component
   */
  updateGlobalState = (obj) => {
    this.setState(obj);
  };

  /*updateVenueParams = (obj) => {
    if (
      JSON.stringify(this.state.venueParams).toLowerCase() !==
      JSON.stringify(obj).toLowerCase()
    ) {
      this.setState({ isParamsUpdated: true, venueParams: obj });
      console.log("first if ... params updated: ", this.state.isParamsUpdated);
    } else {
      this.setState({ isParamsUpdated: false });
      console.log("2nd if ... params updated: ", this.state.isParamsUpdated);
    }
  };*/

  /**
   * Gets the response from the Foursquare &
   * update initial state of the app
   */
  componentDidMount () {
    FourSquareAPI.searchVenues(this.state.venueParams)
      .then(results => {
        const { venues } = results.response;
        const { center } = results.response.geocode.feature.geometry;
        const markers = venues.map(venue => {
          return {
            lat: venue.location.lat,
            lng: venue.location.lng,
            isOpen: false,
            isVisible: true,
            id: venue.id,
          };
        });
        this.setState({
          venues: venues,
          markers: markers,
          mapCenter: center,
          isParamsUpdated: false
        });
        console.log(results);
      })
      .catch(error => {
        this.setState({ appHasError: true });
        console.log("Error is in setting initial state in componentDidMount() in App.js")
        console.log(error);
      });
  };
  /**
   * Sets the isOpen property of all markers to false
   *
   * hence the infoWindow's visibilty
   */
  refreshMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({ markers: Object.assign(this.state.markers, markers) });
  };

  /**
   * Marker click handler
   *
   * handles the visibilty of infoWindow
   */
  handleMarkerClick = marker => {
    this.refreshMarkers();
    marker.isOpen = true;
    this.setState({
      markers: Object.assign(this.state.markers, marker)
    });
    //console.log(marker);
    /**
     * Calls the API method to get more details about the venue & update the state accordingly
     */
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    FourSquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({ venues: Object.assign(this.state.venues, newVenue) })
      //console.log(newVenue);
    })
    .catch(error => {
      this.setState({ appHasError: true });
      console.log("Error is in fetching the details of venues.")
      console.log(error);
    });
  };

  /**
   * refreshes the marker's state on closing infoWindow
   */
  handleInfoWindowClose = () => {
    this.refreshMarkers();
  };

  /**
   * ListItem (venue) handler of the side bar
   *
   * displays the marker of the clicked venue item
   */
  handleListItemClick = venue => {
    this.refreshMarkers();
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
    //console.log(venue);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="App">
          <ErrorBoundary
            hasError={this.state.appHasError}
            updateGlobalState={this.updateGlobalState}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <ErrorBoundary
            hasError={this.state.appHasError}
            updateGlobalState={this.updateGlobalState}
          >
          <Header
            sideBarStatus={this.state.sideBarIsOpen}
            updateGlobal={this.updateGlobalState}
          />
          <main>
              <SideBar
                sideBarIsOpen={this.state.sideBarIsOpen}
                venues={this.state.venues}
                markers={this.state.markers}
                onListItemClick={this.handleListItemClick}
                updateGlobalState={this.updateGlobalState}
              />
              <Map
                center={this.state.mapCenter}
                zoom={this.state.mapZoom}
                venues={this.state.venues}
                markers={this.state.markers}
                onMarkerClick={this.handleMarkerClick}
                onInfoWindowClose={this.handleInfoWindowClose}
                updateGlobalState={this.updateGlobalState}
              />
              <div className="footer">
                <img
                  src={require("./Components/Media/Images/powered-by-foursquare-blue.svg")}
                  alt="Powered by FOURSQUARE"
                />
              </div>
          </main>
          </ErrorBoundary>
        </div>
      );
    }
  }
}

export default App;