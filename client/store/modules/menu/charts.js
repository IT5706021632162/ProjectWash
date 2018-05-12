import lazyLoading from './lazyLoading'

export default {
  name: 'สาขา 1',
  path: '/charts',
  meta: {
    icon: 'fa-line-chart',
    expanded: false,
    link: 'charts/index.vue'
  },
  component: lazyLoading('charts', true),

  children: [
    {
      name: 'ค่าน้ำ + ค่าไฟ',
      path: 'chartist',
      component: lazyLoading('charts/Chartist'),
      meta: {
        link: 'charts/Chartist.vue'
      }
    },
    {
      name: 'รายรับ + รายจ่าย',
      path: 'chartjs',
      component: lazyLoading('charts/Chartjs'),
      meta: {
        link: 'charts/Chartjs.vue'
      }
    },
    {
      name: 'จุดคุ้มทุน',
      path: 'peity',
      component: lazyLoading('charts/Peity'),
      meta: {
        link: 'charts/Peity.vue'
      }
    },
    {
      name: 'สรุปผล',
      path: 'plotly',
      component: lazyLoading('charts/Plotly'),
      meta: {
        link: 'charts/Plotly.vue'
      }
    },
    {
      name: 'แจ้งเครื่องซักผ้า',
      path: 'wash',
      component: lazyLoading('charts/wash'),
      meta: {
        link: 'charts/wash.vue'
      }
    },
    {
      name: 'ต้นทุน',
      path: 'Cost',
      component: lazyLoading('charts/Cost'),
      meta: {
        link: 'charts/Cost.vue'
      }
    }
  ]
}
