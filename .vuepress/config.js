module.exports = {
  title: 'Design Scope',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quidem.',
  themeConfig: {
    nav: [
    { text: 'About', link: '/about/' },
    { text: 'Mission', link: '/mission/' },
    { text: 'Process', link: '/process/' }
    ],
    "scripts": {
      "dev": "vuepress dev:docs",
      "build": "vuepress build:docs"
    }
  }
};