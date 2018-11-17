module.exports = {
  siteMetadata: {
    name: `Ben Riad & Suzy Cole`,
    title: `Wedding`,
    date: `July 30, 2018`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
