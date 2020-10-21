/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path:  `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
  siteMetadata: {
    title: "Steven Ross",
    author: "Steven Ross",
    email: 'ross.stevenedward@gmail.com',
    portfolio: 'https://www.steven-ross.com',
    linkedIn: 'https://www.linkedin.com/in/steveneross1',
    phone: '347-497-0802'
  }
}
