/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [{
    url: "/",
    name: "Summary",
    slug: "home",
    icon: "MonitorIcon",
  },
  {
    header: 'OpenROAD',
    icon: 'PackageIcon',
    i18n: 'Apps',
    items: [
      {
        url: "/nangate45-openroad",
        name: "Nangate45",
        slug: "nangate45",
        icon: "ServerIcon",
      },
      {
        url: "/sky130hd-openroad",
        name: "SkyWater130 hd",
        slug: "sky130hd",
        icon: "ServerIcon",
      },
      {
        url: "/sky130hs-openroad",
        name: "SkyWater130 hs",
        slug: "sky130hs",
        icon: "ServerIcon",
      },
    ]
  },
  {
    header: 'OpenROAD Archive',
    icon: 'PackageIcon',
    i18n: 'Apps',
    items: [
      {
        url: "archive/nangate45-openroad",
        name: "Nangate45",
        slug: "nangate45",
        icon: "ServerIcon",
      },
      {
        url: "archive/sky130hd-openroad",
        name: "SkyWater130 hd",
        slug: "sky130hd",
        icon: "ServerIcon",
      },
      {
        url: "archive/sky130hs-openroad",
        name: "SkyWater130 hs",
        slug: "sky130hs",
        icon: "ServerIcon",
      },
    ]
  },
]
