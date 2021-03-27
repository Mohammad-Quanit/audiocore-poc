import React from "react";
import { graphql } from "gatsby";
import { FormiumForm, defaultComponents } from "@formium/react";
import { formium } from "../lib/formium";

import SEO from "../components/seo";
import { TextInput, Textarea } from "../components/InputFields";
import SubmitButton from "../components/button";
import { Container } from "@chakra-ui/layout";

const renderFormComponent = {
  ...defaultComponents,
  TextInput,
  Textarea,
  SubmitButton,
};

const Contact = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Contact" />
      <Container>
        <FormiumForm
          data={data.formiumForm}
          components={renderFormComponent}
          onSubmit={async (values) => {
            // Send form values to Formium
            await formium.submitForm("audioocore-form", values);
            alert("Success");
          }}
        />
      </Container>
    </>
  );
};

export const query = graphql`
  {
    formiumForm(id: { eq: "6011b0a7d0a32c0001f4a7b2" }) {
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
