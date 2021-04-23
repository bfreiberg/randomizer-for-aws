module.exports = {
  pathPrefix: `/randomizer`,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://freiberg.dev/randomizer`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Feature Randomizer for AWS`,
        short_name: `Randomizer for AWS`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f5af19`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'aws-service-randomizer',
        bucketPrefix: 'randomizer',
        enableS3StaticWebsiteHosting: false,
      },
    },
  ],
};
