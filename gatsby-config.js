const about = require('./about.json');

require('dotenv').config();

const { ANALYTICS_ID, DETERMINISTIC } = process.env;

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-remark',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `${about.name}`,
      short_name: about.name,
      start_url: '/',
      background_color: about.colors.background,
      theme_color: about.colors.primary,
      display: 'minimal-ui',
      icon: 'media/icon.png',
    },
  },
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
  siteMetadata: {
    deterministic: !!DETERMINISTIC,
  },
};
