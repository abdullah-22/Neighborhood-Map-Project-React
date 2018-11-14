/**
 * Component-> Error Boundary
 *
 * Returns -> rendered fallback UI if any bounded component catches error
 */
import React, { Component } from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  componentDidCatch(error, info) {
    this.props.updateGlobalState({ hasError: true });
    console.log("Error: ", error);
    console.log(info);
  }

  render() {
    if (this.props.hasError) {
      return (
        <div className="error-page">
          <div className="error">
            <h1>Error: Could not load the components.</h1>
            <h2>Please refresh the page to try again.</h2>
            <h3>If the problem persists, contact the developer.</h3>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default ErrorBoundary;
