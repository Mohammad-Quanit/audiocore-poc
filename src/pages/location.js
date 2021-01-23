import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default function Location({ data }) {
  return (
    <Layout>
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
    </Layout>
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
