// Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: true, showMenu: true };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      showMenu: !this.state.showMenu,
    });
  };

  handleCloseClick = () => {
    if (window.innerWidth <= 400) {
      // Handle click for small screens (sm)
      this.setState({
        clicked: !this.state.clicked,
        showMenu: !this.state.showMenu,
      });
    } else {
      // Handle click for large screens (lg)
      // Add your logic here for large screen click behavior
    }
  };
  render() {
    return (
      <nav className="fixed sm:fixed bg-white w-screen top-10 sm:top-10 z-10 flex justify-between px-5 sm:bg-zinc-500 md:bg-yellow-700   h-20    sm:px-0 items-center shadow-md">
        <div>
          <img
            src="assets/images/logo.png"
            alt=""
            className="h-20 object-cover min-w-72 sm:min-w-40 md:min-w-36 "
          ></img>
        </div>
        <ul
          className={`${
            this.state.showMenu
              ? "flex  sm:hidden gap-10 px-10 text-3xl font-semibold md:text-xl lg:text-2xl "
              : "flex flex-col fixed top-32 right-0 w-3/4 h-3/4 bg-slate-600 gap-5 font-semibold text-2xl text-center "
          }  `}
          style={{ top: "7.5rem" }}
        >
          <li className="hover:text-blue-500" onClick={this.handleCloseClick}>
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500" onClick={this.handleCloseClick}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-blue-500" onClick={this.handleCloseClick}>
            <Link to="/explore">Explore</Link>
          </li>
          
        </ul>
        <div className="flex">
          <i className="fas fa-heart px-5 sm:px-1  text-3xl md:text-2xl sm:text-xl hover:cursor-pointer hover:text-red-600"></i>
          <i className="fas fa-bag-shopping px-5 sm:px-1 text-3xl md:text-2xl sm:text-xl hover:cursor-pointer hover:text-yellow-500"></i>
          <Link to="/login">
            <i className="fas fa-user px-5 sm:px-1 text-3xl md:text-2xl sm:text-xl hover:cursor-pointer hover:text-blue-600" />
          </Link>

          <i
            onClick={this.handleClick}
            className={`${
              this.state.clicked
                ? "hidden sm:inline-block fas fa-bars px-5 sm:px-1 text-3xl sm:text-xl hover:cursor-pointer"
                : "fas fa-times px-5 sm:px-1 text-3xl sm:text-xl  hover:cursor-pointer"
            }`}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
