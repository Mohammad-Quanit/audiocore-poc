import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

const About = () => {
  return (
    <>
      <SEO title="About" />
      <h1>Hi from About page</h1>
      <Link to="/">Go back to the homepage</Link>
    </>
  );
};

export default About;
