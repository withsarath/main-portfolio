import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
 

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="navbar">
      {/* Left: Logo (invisible spacer mirror on right keeps center aligned) */}
      <Link to="/" className="nav-logo" aria-label="Home">
        <span className="logo-icon">{'</>'}</span>
      </Link>

      {/* Center: Nav links */}
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={`nav-link ${location.pathname === l.to ? "active" : ""}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Theme toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDark(!dark)}
        aria-label="Toggle theme"
      >
        {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
      </button>
    </nav>
  );
};

export default Navbar;
