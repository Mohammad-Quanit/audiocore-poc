import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

export const query = graphql`
  query($id: String = "") {
    contentfulCity(id: { eq: $id }) {
      id
      name
      description
      location {
        lat
        lon
      }
    }
  }
`;

export default function City({ data }) {
  return (
    <Layout>
      <div>
        <h2>Hi this is {data.contentfulCity.name}</h2>
        <h4>{data.contentfulCity.name}</h4>
        <h4>
          {data.contentfulCity.location.lat} -{" "}
          <h4>{data.contentfulCity.location.lon}</h4>
        </h4>
      </div>
    </Layout>
  );
}
