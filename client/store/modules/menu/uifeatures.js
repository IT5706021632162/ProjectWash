import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'สาขา 2',
    icon: 'fa-line-chart',
    expanded: false
  },

  children: [
    {
      name: 'ค่าน้ำ + ค่าไฟ',
      path: '/buttons',
      meta: {
        link: 'ui/Buttons.vue'
      },
      component: lazyLoading('ui/Buttons')
    },
    {
      name: 'รายรับ + รายจ่าย',
      path: '/form',
      meta: {
        link: 'ui/Form.vue'
      },
      component: lazyLoading('ui/Form')
    },
    {
      name: 'จุดคุ้มทุน',
      path: '/typography',
      meta: {
        link: 'ui/Typography.vue'
      },
      component: lazyLoading('ui/Typography')
    },
    {
      name: 'สรุปผล',
      path: '/icons',
      meta: {
        link: 'ui/Icons.vue'
      },
      component: lazyLoading('ui/Icons')
    },
    {
      name: 'แจ้งเครื่องซักผ้า',
      path: '/wash',
      meta: {
        link: 'ui/wash.vue'
      },
      component: lazyLoading('ui/wash')
    },
    {
      name: 'ต้นทุน',
      path: '/Cost',
      meta: {
        link: 'ui/Cost.vue'
      },
      component: lazyLoading('ui/Cost')
    }
  ]
}
