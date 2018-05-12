import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'
import charts from './charts'
import uifeatures from './uifeatures'

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: 'Member',
      path: '/dashboard',
      meta: {
        icon: 'fa-users',
        link: 'dashboard/index.vue'
      },
      component: lazyLoading('dashboard', true)
    },
    {
      name: 'Add Admin',
      path: '/axiosDemo',
      meta: {
        auth: true,
        icon: 'fa-user-plus',
        link: 'axios/index.vue'
      },
      component: lazyLoading('axios', true)
    },
    {
      name: 'Add  Credit',
      path: '/axiosDemo',
      meta: {
        auth: true,
        icon: 'fa-credit-card',
        link: 'axios/index.vue'
      },
      component: lazyLoading('axios', true)
    },
    charts,
    uifeatures
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
