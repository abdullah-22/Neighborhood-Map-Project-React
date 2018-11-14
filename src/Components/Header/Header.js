/**
 * Component -> Header
 *
 * Contains hamburger icon and the title
 */

import React, { Component } from "react";
import "./Header.css";
import Hamburger from "./Hamburger/Hamburger";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Hamburger sideBarIsOpen={this.props.sideBarStatus} updateGlobalState={this.props.updateGlobal} />
                <div className="title">
                    <h1>Find My Coffee</h1>
                </div>
            </div>
        )
    }
}