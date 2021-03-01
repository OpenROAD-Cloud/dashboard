/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [

    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: 'archive/nangate45-openroad',
          name: 'nangate45-openroad-archive',
          component: () => import('./views/pdks/nangate45.vue')
        },
        {
          path: 'archive/sky130hd-openroad',
          name: 'sky130hd-openroad-archive',
          component: () => import('./views/pdks/sky130hd.vue')
        },
        {
          path: 'archive/sky130hs-openroad',
          name: 'sky130hs-openroad-archive',
          component: () => import('./views/pdks/sky130hs.vue')
        },
        {
          path: '/nangate45-openroad',
          name: 'nangate45-openroad',
          component: () => import('./views/pdks/nangate45-v2.vue')
        },
        {
          path: '/sky130hd-openroad',
          name: 'sky130hd-openroad',
          component: () => import('./views/pdks/sky130hd-v2.vue')
        },
        {
          path: '/sky130hs-openroad',
          name: 'sky130hs-openroad',
          component: () => import('./views/pdks/sky130hs-v2.vue')
        },
      ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/Login.vue')
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/Error404.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

export default router
