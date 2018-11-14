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
      <ol className="venue-list" role="tablist" tabIndex="0">
        {this.props.venues &&
          this.props.venues.map((venue, idx) => (
            <ListItem
              key={idx}
              tabIndex={idx + 1 + this.props.inputTabIndex}
              {...venue}
              onListItemClick={this.props.onListItemClick}
            />
          ))}
      </ol>
    );
  }
}
