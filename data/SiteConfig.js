module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
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
      url: "https://github.com/joshgachnang",
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
      title: "HomeSafe",
      subtitle: "2018",
      body:
        "HomeSafe is an app I built to demo the library of tools that I use to build client projects. I'm always forgetting to text my mom when I get home from driving long distance, so I decided to make a simple app to make both our lives easier. The app allows you to set up a location you're heading to and a list of contacts to text when you arrive safely. It tracks your location in the background and then uses Twilio to send a message when you get close to the location.",
      link: "home-safe",
      image:
        "https://res.cloudinary.com/avotoast/image/upload/c_scale,q_79,w_2151/v1545028458/nangio/homesafe-promo.png"
    },
    {
      title: "University of Maryland",
      subtitle: "2018",
      body:
        "I worked as a freelance developer to migrate a Flash app to React.js, using a Python backend. The project took about 4 months with two other developers, and was delivered on time with all features implemented to spec. The part I'm most proud of was performantly rendering and updating tens of thousands of paths onto a Leaflet map."
      // link: "maryland"
    },
    {
      title: "Triggr Health",
      subtitle: "2015-2018",
      body:
        "I was the first engineering hire. In the first 3 months, I helped migrate our backend to Mongo and NodeJS from Parse & a hosted HIPAA DB. I led the team to build a community feature in our app for supporting your peers, rewrote our iOS and Android apps in React Native to increase iteration speed, and adding interest-based groups to our community. During a hackweek, I built a display that shows random patients' reasons for getting sober to remind our team why we do what we do. Our stack consisted of React.js, React Native, NodeJS, iOS & Swift, Android & Java, Mongo, Ansible & AWS.",
      link: "triggr-health"
    },
    {
      title: "Rackspace",
      subtitle: "2013-2015",
      body:
        "I helped launch and build the second version of Rackspace OnMetal, a bare metal cloud product using OpenStack Ironic. I contributed heavily to OpenStack Ironic and other OpenStack projects. I was a Core Reviewer on the Ironic Python Agent, a deployment agent for servers, and a top reviewer for the Ironic project. I gave two talks at OpenStack summits about our project.",
      link: "rackspace"
    },
    {
      title: "Swoop Srch",
      subtitle: "2010-2011",
      body:
        "I helped build the first version of Swoop Srch, an apartment search application that let you rank which features in an apartment were most important (price, bedrooms, etc) and showed the most relevant. I developed the frontend, backend, and a crawler to make the most complete apartment database at the time.",
      link: "swoop-srch"
    }
  ]
};
