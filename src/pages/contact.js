import React from "react";
import { graphql } from "gatsby";
import { FormiumForm } from "@formium/react";
import { createClient } from "@formium/client";

import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const formium = createClient(process.env.GATSBY_FORMIUM_PROJECTID);

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <FormiumForm
      data={data.formiumForm}
      onSubmit={async (values) => {
        // Send form values to Formium
        await formium.submitForm("audioocore-form", values);
        alert("Success");
      }}
    />
    ;
  </Layout>
);

export const query = graphql`
  {
    formiumForm(slug: { eq: "audioocore-form" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;

export default Contact;
