// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Book of Shadows',
  tagline: 'Shadow Priest Resources',
  favicon: 'img/book.jpg',

  clientModules: [
    'wowheadModule.js'
  ],

  url: 'https://warcraftpriests.github.io',
  baseUrl: '/bookofshadows/',

  // GitHub pages deployment config.
  organizationName: 'warcraftpriests', // Usually your GitHub org/user name.
  projectName: 'bookofshadows', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // path: 'compendium',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // "edit this page" links use this as the base url.
          editUrl:
            'https://github.com/WarcraftPriests/bookofshadows/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/WarcraftPriests/bookofshadows/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
      const whTooltips={colorLinks: true, iconizeLinks: true, renameLinks: true};
      document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
          window.$WowheadPower.refreshLinks();
        }
       });
      `
    },
    {
      tagName: 'script',
      attributes: {
        defer: "true",
        src: 'https://wow.zamimg.com/widgets/power.js'
      }
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/book-of-shadows.jpg',
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {
        title: 'Book of Shadows',
        logo: {
          alt: 'Book of Shadows Logo',
          src: 'img/book.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'compendiumSidebar',
            position: 'left',
            label: 'Compendium',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/guides', label: 'Guides', position: 'left'},
          {
            href: 'https://github.com/warcraftpriests/bookofshadows',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Book of Shadows',
            items: [
              {
                label: 'Compendium',
                to: '/compendium',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'WarcraftPriests',
                href: 'https://warcraftpriests.com/',
              },
              {
                label: 'Sim Charts',
                href: 'https://warcraftpriests.github.io/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/WarcraftPriests',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/WarcraftPriests',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/warcraftpriests/bookofshadows',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WarcraftPriests. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
