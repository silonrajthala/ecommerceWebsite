// Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: true,
    showMenu: true,
    cartCount: 0,
    favoriteCount: 0,
  };

  componentDidMount() {
    this.updateCounts();

    window.addEventListener("cartUpdated", this.updateCounts);
    window.addEventListener("favoritesUpdated", this.updateCounts);
    window.addEventListener("storage", this.updateCounts);
  }

  componentWillUnmount() {
    window.removeEventListener("cartUpdated", this.updateCounts);
    window.removeEventListener("favoritesUpdated", this.updateCounts);
    window.removeEventListener("storage", this.updateCounts);
  }

  updateCounts = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

      const cartCount = Array.isArray(cart)
        ? cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0)
        : 0;

      const favoriteCount = Array.isArray(favorites) ? favorites.length : 0;

      this.setState({ cartCount, favoriteCount });
    } catch {
      this.setState({
        cartCount: 0,
        favoriteCount: 0,
      });
    }
  };

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  handleCloseClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    const { clicked, cartCount, favoriteCount } = this.state;

    return (
      <nav className="fixed top-10 z-10 flex h-20 w-screen items-center justify-between bg-white px-5 shadow-md sm:top-10 sm:bg-zinc-500 sm:px-0 md:bg-yellow-700">
        {/* Logo */}
        <div>
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="h-20 w-40 object-contain"
          />
        </div>

        {/* Navigation links - unchanged */}
        <ul
          className={`${
            this.state.showMenu
              ? "flex gap-10 px-10 text-3xl font-semibold sm:hidden md:text-xl lg:text-2xl"
              : "fixed right-0 top-32 flex h-3/4 w-3/4 flex-col gap-5 bg-slate-600 text-center text-2xl font-semibold"
          }`}
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

        {/* Icons */}
        <div className="flex items-center">
          {/* Favorites */}
          <Link
            to="/favorites"
            aria-label={`View favorites: ${favoriteCount} items`}
            className="relative px-3 sm:px-2"
            onClick={this.handleCloseClick}
          >
            <i className="fas fa-heart cursor-pointer text-2xl hover:text-red-600 sm:text-xl md:text-2xl" />

            {favoriteCount > 0 && (
              <span className="absolute -right-1 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                {favoriteCount > 99 ? "99+" : favoriteCount}
              </span>
            )}
          </Link>

          {/* Shopping cart */}
          <Link
            to="/cart"
            aria-label={`Shopping cart with ${cartCount} items`}
            className="relative px-5 sm:px-2"
            onClick={this.handleCloseClick}
          >
            <i className="fas fa-bag-shopping cursor-pointer text-3xl hover:text-yellow-500 sm:text-xl md:text-2xl" />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link to="/login">
            <i className="fas fa-user cursor-pointer px-5 text-3xl hover:text-blue-600 sm:px-1 sm:text-xl md:text-2xl" />
          </Link>

          {/* Mobile menu button */}
          <i
            onClick={this.handleClick}
            className={`${
              clicked ? "hidden sm:inline-block fas fa-bars" : "fas fa-times"
            } cursor-pointer px-5 text-3xl sm:px-1 sm:text-xl`}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
