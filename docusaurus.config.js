// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import tailwindPlugin from './plugins/tailwind-config.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Luka Filipović',
  tagline: 'Personal Website',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://lukafilipovic.com',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lukafilipxvic', // Usually your GitHub org/user name.
  projectName: 'lukafilipxvic.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [tailwindPlugin],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'content',
          routeBasePath: "/",
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lukafilipxvic/lukafilipxvic.github.io/tree/main/',
        },
        blog: {
          blogTitle: "Luka Filipović's Blog",
          blogDescription: 'The personal blog of Luka Filipović',
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: "ALL",
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Luka Filipović`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
                });
              },
          },
          showLastUpdateTime: true,
          // Please change editUrl to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lukafilipxvic/lukafilipxvic.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-57JS65Z085',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-WLB3RKQV',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Luka Filipović',
        logo: {
          alt: 'Filipović Family Crest',
          src: 'img/filipovic_crest.svg',
        },
        hideOnScroll: true,
        items: [
          {
            position: 'left',
            label: 'Projects',
            to: '/projects',
          },
          {
            position: 'left',
            label: 'Résumé',
            to: '/resume'
          },
          {
            position: 'left',
            label: 'Design',
            to: '/design',
          },
          {
            position: 'left',
            label: 'Course Notes',
            to: '/notes',
          },          {
            position: 'right',
            label: 'Blog',
            to: '/blog',
          },
          {
            position: 'right',
            type: 'html',
            value: '<a href="mailto:luka@lukafilipovic.com" class="relative z-10"> <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256" class="fill-gray-400"><path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192Z"></path></svg> </a>',
          },
          {
            position: 'right',
            type: 'html',
            value: '<a href="https://linkedin.com/in/lukafilipxvic"> <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256" class="fill-gray-400"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path></svg> </a>',
          },
          {
            position: 'right',
            type: 'html',
            value: '<a href="https://github.com/lukafilipxvic"> <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256" class="fill-gray-400"><path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path></svg> </a>',
          },
        ],
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} Luka Filipović`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
