/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  compendiumSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Spells',
      collapsible: true,
      collapsed: false,
      items: [
        'spells/spells',
        {
          type: 'category',
          label: 'Talents',
          collapsible: true,
          collapsed: false,
          items: [
            'spells/talents/priest',
            'spells/talents/shadow'
          ]
        },
        'spells/gear',
        'spells/consumables',
      ]
    }
  ],
};

export default sidebars;
