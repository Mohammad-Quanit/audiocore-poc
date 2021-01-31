import React from "react";
import { Link, graphql } from "gatsby";

export default function Location({ data }) {
  return (
    <>
      <h1>Locations:</h1>
      <ul>
        {data.allContentfulCity.edges.map(({ node: city }) => (
          <li key={city.name}>
            <Link to={city.gatsbyPath}>{city.name}</Link>
            <br />
            {city.description} - {city.location.lat} - {city.location.lon}
          </li>
        ))}
      </ul>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    allContentfulCity(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          name
          description
          location {
            lat
            lon
          }
          gatsbyPath(filePath: "/city/{contentfulCity.name}")
        }
      }
    }
  }
`;
