import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => (
  <div className="page not-found-page">
    <div className="not-found-content">
      <h1 className="not-found-code">404</h1>
      <p className="not-found-msg">
        Oops — this page doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">
        <FiArrowLeft size={15} /> Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;
