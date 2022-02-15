module.exports = {
  siteMetadata: {
    siteUrl: "https://www.aumentapacinetes.com",
    title: "Aumenta tus pacientes",
    author: "@piscberenicebastidas",
    description:
      "Curso para profesionales de la salud que quieren aumentar sus pacientes",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aumenta Pacientes`,
        short_name: `aumentapacientes`,
        start_url: `/`,
        icon: `src/images/icon.png`,
      },
    },
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
