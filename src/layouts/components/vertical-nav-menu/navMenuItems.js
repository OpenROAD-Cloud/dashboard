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
    items: [{
        url: "/gf14-openroad",
        name: "GF14",
        slug: "gf14",
        icon: "ServerIcon",
      },
      {
        url: "/tsmc65lp-openroad",
        name: "TSMC65LP",
        slug: "tsmc65lp",
        icon: "ServerIcon",
      }
    ]
  },
  // {
  //   header: 'OpenROAD-Flow',
  //   icon: 'PackageIcon',
  //   i18n: 'Apps',
  //   items: [
  //     {
  //       url: "/tsmc65lp-openroad-flow",
  //       name: "TSMC65LP",
  //       slug: "tsmc65lp",
  //       icon: "ServerIcon",
  //     },
  //     {
  //       url: "/gf14-openroad-flow",
  //       name: "GF14",
  //       slug: "gf14",
  //       icon: "ServerIcon",
  //     }
  //   ]
  // },

]
