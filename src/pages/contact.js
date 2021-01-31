import React from "react";
import { graphql } from "gatsby";
import { FormiumForm } from "@formium/react";
import { formium } from "../lib/formium";

import SEO from "../components/seo";

const Contact = ({ data }) => {
  return (
    <>
      <SEO title="Contact" />
      <FormiumForm
        data={data.formiumForm}
        onSubmit={async (values) => {
          // Send form values to Formium
          await formium.submitForm("audioocore-form", values);
          alert("Success");
        }}
      />
    </>
  );
};

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
