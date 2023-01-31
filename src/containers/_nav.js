import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Main']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard 1',
    to: '/theme/colors',
    icon: 'cil-task',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dasboard 2',
    to: '/theme/typography',
    icon: 'cil-task',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Sub Main']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dasboard 3',
    to: '/charts',
    icon: 'cil-task'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard 4',
    to: '/widgets',
    icon: 'cil-task',
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Main Settings'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard 5',
    icon: 'cil-task',
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Label Settings']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label danger',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label info',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label warning',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider'
  }
]

export default _nav
