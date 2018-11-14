/**
 * Component list item -> listed venue
 */

import React, { Component } from "react";
import "./ListItem.css";

export default class Listitem extends Component {
  render() {
    return (
      <React.Fragment>
        <li onClick={() => this.props.onListItemClick(this.props)}>
          <div className={"list-item"}>
            {this.props.categories[0] && (
              /** Icon for category type of the venues; displays only on screen size larger than 768px */
              <img
                src={
                  this.props.categories[0].icon.prefix +
                  "32" +
                  this.props.categories[0].icon.suffix
                }
                alt={this.props.categories[0].name}
              />
            )}
            <p>{this.props.name.toUpperCase()}</p>
          </div>
        </li>
      </React.Fragment>
    );
  }
}
