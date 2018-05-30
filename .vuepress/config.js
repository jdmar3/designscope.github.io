module.exports = {
  title: 'Design Scope',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quidem.',
  themeConfig: {
    nav: [
    { text: 'Internal', link: '/internal/' },
    { text: 'Guides', link: '/guides/' },
    { text: 'Info', link: '/info/' }
    ],
    "scripts": {
      "docs:build": "vuepress build docs"
    },
    sidebar: ['/', '/guides/', '/info/']
  }
};