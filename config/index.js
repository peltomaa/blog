module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: "Touko Peltomaa's blog", // Navigation and Site Title
  siteTitleAlt: 'Blog - Touko Peltomaa', // Alternative Site title for SEO
  siteTitleManifest: 'Touko Peltomaa Blog',
  siteUrl: 'https://blog.toukopeltomaa.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Writing and publishing content', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'My blog posts about Programming, Analytics, Mobile Web, Mobile Apps and much more!', // Your site description
  author: 'Touko Peltomaa', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@toukopeltomaa', // Twitter Username - Optional
  // ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-90169543-1',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#00897B',
  backgroundColor: '#00897B',
}
