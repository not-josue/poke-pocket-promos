import { Link } from "react-router-dom";
import logo from "./logo-optimized.svg";
import darkLogo from "./logo-dark-optimized.svg";

export default function Navigation() {
  return (
    <header>
      <nav id="prime-nav">
        {/* Hamburger */}
        <button
          id="hamburger"
          aria-expanded="false"
          aria-haspopup="menu"
          aria-label="navigation menu"
        >
          <span aria-hidden="true" id="burger-top"></span>
          <span aria-hidden="true" id="burger-mid"></span>
          <span aria-hidden="true" id="burger-bot"></span>
        </button>
        {/* Nav Brand */}
        <div id="nav-brand">
          <img
            aria-hidden="true"
            id="light-logo"
            src={logo}
            alt=""
            width={91}
            height={58}
          />
          <img
            aria-hidden="true"
            id="dark-logo"
            src={darkLogo}
            alt=""
            width={91}
            height={58}
          />
          <span>Poké Pocket Promos</span>
        </div>
        {/* Primary Links */}
        <ul id="prime-links" role="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/releases">Releases</Link>
          </li>
        </ul>
        {/* Secondary Links */}
        <div id="second-links">
          {/* Login Link */}
          <Link className="login" to="/login">
            Login
          </Link>
          {/* Theme Button */}
          <button
            id="lg-theme-btn"
            className="theme-btn"
            aria-label="light and dark mode settings"
          >
            <svg
              aria-hidden="true"
              className="sun"
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 512 512"
            >
              {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
              <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
            </svg>
            <svg
              aria-hidden="true"
              className="moon"
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="22"
              viewBox="0 0 384 512"
            >
              {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
            </svg>
          </button>
          {/* Account Link */}
          <Link className="account" to="/account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 512 512"
            >
              {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
              <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
            </svg>
          </Link>
        </div>
      </nav>
      <nav id="mobile-nav" className="hidden">
        {/* Links */}
        <ul role="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/releases">Releases</Link>
          </li>
        </ul>
        {/* Buttons & Links */}
        <div>
          {/* Top */}
          <div>
            <button id="sm-theme-btn" className="theme-btn">
              <svg
                aria-hidden="true"
                className="sun"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                width="28"
                viewBox="0 0 512 512"
              >
                {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
              </svg>
              <svg
                aria-hidden="true"
                className="moon"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                width="22"
                viewBox="0 0 384 512"
              >
                {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
              </svg>
            </button>
            <Link className="account" to="/account">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                width="28"
                viewBox="0 0 512 512"
              >
                {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
              </svg>
            </Link>
          </div>
          {/* Bottom */}
          <Link className="login" to="/login">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
