import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>My blog posts:</h1>
    </Layout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query {
//     allSanityPost(sort: { fields: date, order: ASC }) {
//       nodes {
//         title
//         date(formatString: "DD MMMM YY")
//         description
//         _rawContent(resolveReferences: { maxDepth: 10 })
//       }
//     }
//   }
// `
