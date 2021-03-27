import { Box, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import ThemeToggle from "./toggle-theme";

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
  <Box as="header" style={headerStyle}>
    <Box as="div" m="0 auto" maxW="960px" p="1.45rem 1.0875rem">
      <Link as={GatsbyLink} to="/" style={linkStyle}>
        {siteTitle}
      </Link>

      <Link as={GatsbyLink} to="/about" style={linkStyle}>
        About
      </Link>

      <Link as={GatsbyLink} to="/location" style={linkStyle}>
        Location
      </Link>

      <Link as={GatsbyLink} to="/contact" style={linkStyle}>
        Contact Us
      </Link>
    </Box>

    <Box as="div" position="fixed" right="20px" top="20px">
      <ThemeToggle />
    </Box>
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
