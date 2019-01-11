import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="nav-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {this.props.totlaCounter}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
