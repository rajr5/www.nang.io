module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Josh Gachnang", // Site title.
  siteTitleAlt: "Josh Gachnang", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://nang.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-advanced-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Josh Gachnang's blog about React Native, React, Node, Javascript, Capacitor, Python, and a bunch of other awesome things.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Josh Gachnang", // Username to display in the author segment.
  userTwitter: "joshgachnang", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Chicago, IL", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/pcsforeducation",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/joshgachnang",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:josh@nang.io",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Josh Gachnang", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#ff8031", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  resume: [
    {
      title: "Triggr Health",
      subtitle: "2015 - present",
      body: ""
    },
    {
      title: "Rackspace",
      subtitle: "2013-2015",
      body: ""
    }
  ]
};
