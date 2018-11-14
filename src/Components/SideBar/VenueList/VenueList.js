/**
 * Component -> Venue List
 *
 * Contains -> List Item (Venue)
 */
import React, { Component } from "react";
import ListItem from "../ListItem/ListItem";
import "./VenueList.css";

export default class VenueList extends Component {
  render() {
    return (
      <ol className="venue-list">
        {this.props.venues &&
          this.props.venues.map((venue, idx) => (
            <ListItem
              key={idx}
              {...venue}
              onListItemClick={this.props.onListItemClick}
            />
          ))}
      </ol>
    );
  }
}
