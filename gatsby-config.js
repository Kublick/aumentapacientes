module.exports = {
  siteMetadata: {
    siteUrl: "https://www.aumentapacinetes.com",
    title: "Aumenta tus pacientes",
    authoer: "@piscberenicebastidas",
    description:
      "Curso para profesionales de la salud que quieren aumentar sus pacientes",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "227610218315785",
      },
    },
  ],
};
