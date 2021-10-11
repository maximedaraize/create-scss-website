module.exports = {
  lang: "en-US",
  title: "create scss",
  description: "Official guide of create scss cli",
  head: [
    ['meta', { name: 'theme-color', content: '#F9618F' }],
    ['script', {'defer': '','data-domain': 'createscss.com', src: 'https://plausible.io/js/plausible.js'}]
  ],
  themeConfig: {
    logo: "/logo.png",
    navbar: [
      // NavbarItem
      {
        text: "Guide",
        link: "/guide",
      },
      {
        text: "Github",
        link: "https://github.com/maximedaraize/create-scss-cli",
      },
      {
        text: "Npm",
        link: "https://www.npmjs.com/package/create-scss-cli",
      },
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'Guide',
      },
      {
        text: 'Getting Started',
        link: '/guide/',
      },
      {
        text: 'Templates',
        link: '/templates/',
      },
      {
        text: 'Structure',
        link: '/structure/',
      },
      {
        text: 'Integration',
        link: '/integration/',
      }, 
      {
        text: 'Helper code',
        link: '/code/',
      }, 
    ],
  },
};

