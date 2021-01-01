module.exports = {
  siteMetadata: {
    title: "audiocore-poc",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "UPb75wXeNeEwvn12-5FfQHkEnb6sLpMdKWN2rWdg7DE",
        spaceId: "qpg9qhcmnb20",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
