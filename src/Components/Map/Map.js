/**
 * Component -> Map
 *
 * Built on the top of React-Google-Maps API
 *
 * Contains & controls-> Map, Markers, InfoWindows
 */

import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import "./Map.css";


const MAPS_API_KEY = "AIzaSyDQnbsXckiHxVKDJI8secUufNqEJ0TUREE";

/**
 * Component MyMap
 *
 * Loads & renders the map with Javascript
 * Details here -> tomchentw.github.io/react-google-maps/#usage--configuration
 */
const MyMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 31.5204, lng: 74.3587 }}
      zoom={props.zoom}
      center={{
        lat: parseFloat(props.center.lat),
        lng: parseFloat(props.center.lng)
      }}
    >
      {/* *
       * Receives "markers" as props from the main app components
       *
       * Filters using isVisible attribute of markers
       *
       * Displays only the active markers as specified from the sidebar component
       * */
      props.markers &&
        props.markers
          .filter(marker => marker.isVisible)
          .map((marker, idx, arr) => {
            const venueInfo = props.venues.find(
              venue => venue.id === marker.id
            );
            return (
              <Marker
                key={idx}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => props.onMarkerClick(marker)}
                animation={
                  arr.length === 1
                    ? window.google.maps.Animation.BOUNCE
                    : marker.animation
                }
              >
                {/* *
                 * Displays infoWindow of the marker
                 *
                 * Controlled by marker click event
                 *
                 * */
                marker.isOpen && (
                  <InfoWindow
                    onCloseClick={() => props.onInfoWindowClose(marker)}
                  >
                    <React.Fragment>
                      {venueInfo.bestPhoto && (
                        <img
                          src={`${venueInfo.bestPhoto.prefix}200x200${
                            venueInfo.bestPhoto.suffix
                          }`}
                          alt={"Venue"}
                        />
                      )}
                      <h3>{venueInfo.name.toUpperCase()}</h3>
                      {venueInfo.location.formattedAddress &&
                        venueInfo.location.formattedAddress.map(
                          (addressLine, idx) => {
                            return <p key={idx}>{addressLine}</p>;
                          }
                        )}
                      {venueInfo.canonicalUrl && (
                        <a href={`${venueInfo.canonicalUrl}`} target={"_blank"}>
                          <b>View @ FourSquare.com</b>
                        </a>
                      )}
                    </React.Fragment>
                  </InfoWindow>
                )}
              </Marker>
            );
          })}
    </GoogleMap>
  ))
);

export default class Map extends Component {
  render() {
    return (
      <MyMap
        {...this.props}
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&key=" + MAPS_API_KEY
        }
        loadingElement={<div className="loading-element" />}
        containerElement={<div className="map-container" />}
        mapElement={<div className="map-element" />}
      />
    );
  }
}
