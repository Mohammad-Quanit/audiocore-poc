import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const linkStyle = {
  color: `white`,
  textDecoration: `none`,
  fontSize: "1rem",
  paddingRight: "20px",
};

const headerStyle = {
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
};

const linkContainerStyle = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1.45rem 1.0875rem`,
};

const Header = ({ siteTitle }) => (
  <header style={headerStyle}>
    <div style={linkContainerStyle}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={linkStyle}>
          {siteTitle}
        </Link>

        <Link to="/about" style={linkStyle}>
          About
        </Link>

        <Link to="/location" style={linkStyle}>
          Location
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
