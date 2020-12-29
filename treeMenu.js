const { json } = require('express')

const menuList = [
  {
    id: '101',
    title: '示例中心',
    path: '/main/userCenter',
    isLeaf: false,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-bangbangmangmdpi',
    parentId: null
  },
  {
    id: '101-1',
    title: '表单',
    path: '/main/userCenter/form',
    isLeaf: true,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-linliquanmdpi',
    parentId: '101'
  },
  {
    id: '101-2',
    title: '地图',
    path: '/main/userCenter/amap',
    isLeaf: true,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-yijianfankuimdpi',
    parentId: '101'
  },
  {
    id: '101-3',
    title: '表格',
    path: '/main/userCenter/table',
    isLeaf: true,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-shequjiankang',
    parentId: '101'
  },
  {
    id: '101-4',
    title: 'Hooks',
    path: '/main/userCenter/hooks',
    isLeaf: true,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-shequshangcheng',
    parentId: '101'
  },
  {
    id: '101-5',
    title: '组件',
    path: '/main/userCenter/component',
    isLeaf: true,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-shequxiaozhan',
    parentId: '101'
  },
  {
    id: '101-6',
    title: '视图切换',
    path: '/main/userCenter/tagView',
    isLeaf: true,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-xiangmuxinxi',
    parentId: '101'
  },
  {
    id: '102',
    title: '配置中心',
    path: '/main/settingCenter',
    isLeaf: false,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-chengjiechayan',
    parentId: null
  },
  {
    id: '102-1',
    title: '菜单配置',
    path: '/main/settingCenter/routeConfig',
    isLeaf: true,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-lvzhi12',
    parentId: '102'
  },
  {
    id: '102-2',
    title: '测试多层',
    path: '/main/settingCenter/routeConfig',
    isLeaf: false,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-baoshibaoxiu',
    parentId: '102'
  },
  {
    id: '102-2-1',
    title: '测试多层-1',
    path: '/main/settingCenter/test-1',
    isLeaf: false,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-daishoubaoguo',
    parentId: '102-2'
  },
  {
    id: '102-2-1-1',
    title: '测试多层-1-1',
    path: '/main/settingCenter/test-1-1',
    isLeaf: false,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-zhuangxiubeianmdpi',
    parentId: '102-2-1'
  },
  {
    id: '102-2-1-1-1',
    title: '测试多层-1-1-1',
    path: '/main/settingCenter/test-1-1-1',
    isLeaf: true,
    slots: {
      icon: 'icon'
    },
    iconType: 'icon-yijianfankuimdpi',
    parentId: '102-2-1-1'
  }
]

// 数据根据parentId 分组

const toTree = (data = [], id = 'id', pid = 'parentId') => {
  let map = {}
  let result = []
  // 引用保存一份
  data.forEach(item => {
    map[item[id]] = item
  })
  data.forEach(item => {
    const parent = map[item[pid]]
    if (parent) {
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(item)
    } else {
      result.push(item)
    }
  })
  return result
}
const tree = toTree(menuList)
console.log(JSON.stringify(tree))
