import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Navbar({title}){
    return (
        <nav className="navbar-nav navbar-expand-sm navbar-dark bg-dark mb-3 p-3">
          <a href="/" className="navbar-brand text-danger">{title}</a>
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-warning">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="add" className="nav-link text-warning">Add User</Link>
            </li>
            <li className="nav-item active">
              <Link to="/github" className="nav-link text-warning">Github</Link>
            </li>
          </ul>
        </nav>
    )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:"Default App"
}
export default Navbar;
//rfc tab kısa yol oluşturması