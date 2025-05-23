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
          blogTitle: "Blog",
          blogDescription: 'The personal blog of Luka Filipović',
          blogSidebarTitle: 'Blog posts',
          blogSidebarCount: 0,
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
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
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
          alt: 'Family Crest',
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
            label: 'Reading List',
            to: '/reading-list/already-read'
          },
          {
            position: 'left',
            label: 'Design',
            to: '/design',
          },
          {
            position: 'right',
            label: 'Blog',
            to: '/blog',
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
