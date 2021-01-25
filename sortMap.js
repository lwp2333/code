const data = {
  _id: '5febea4eb673051a9800d5e6',
  roleName: '枯木逢春',
  roleLevel: '超级管理员',
  description: '这是管理员不能删，不能删！！！',
  bindMenu: [
    '5feafe07129efd41d4bb2746',
    '5feafe25129efd41d4bb2747',
    '5feafeaa129efd41d4bb274b',
    '5feafeb2129efd41d4bb274c',
    '5feafedd129efd41d4bb274d',
    '5feafeef129efd41d4bb274e'
  ],
  menuTree: [
    {
      title: '配置中心',
      path: '/main/settingCenter',
      isLeaf: false,
      iconType: 'icon-chengjiechayan',
      parentId: null,
      _id: '5feafe07129efd41d4bb2746',
      slots: {
        icon: 'icon'
      },
      children: [
        {
          title: '菜单配置',
          path: '/main/settingCenter/routeConfig',
          isLeaf: true,
          iconType: 'icon-lvzhi12',
          parentId: '5feafe07129efd41d4bb2746',
          _id: '5feafe25129efd41d4bb2747',
          slots: {
            icon: 'icon'
          }
        },
        {
          title: '测试多层',
          path: '/main/settingCenter/test',
          isLeaf: false,
          iconType: 'icon-baoshibaoxiu',
          parentId: '5feafe07129efd41d4bb2746',
          _id: '5feafeaa129efd41d4bb274b',
          slots: {
            icon: 'icon'
          },
          children: [
            {
              title: '测试多层-1',
              path: '/main/settingCenter/test_1',
              isLeaf: false,
              iconType: 'icon-baoshibaoxiu',
              parentId: '5feafeaa129efd41d4bb274b',
              _id: '5feafeb2129efd41d4bb274c',
              slots: {
                icon: 'icon'
              },
              children: [
                {
                  title: '测试多层-1-1',
                  path: '/main/settingCenter/test_1_1',
                  isLeaf: false,
                  iconType: 'icon-baoshibaoxiu',
                  parentId: '5feafeb2129efd41d4bb274c',
                  _id: '5feafedd129efd41d4bb274d',
                  slots: {
                    icon: 'icon'
                  },
                  children: [
                    {
                      title: '测试多层-1-1-1',
                      path: '/main/settingCenter/test_1_1_1',
                      isLeaf: true,
                      iconType: 'icon-baoshibaoxiu',
                      parentId: '5feafedd129efd41d4bb274d',
                      _id: '5feafeef129efd41d4bb274e',
                      slots: {
                        icon: 'icon'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}


const sortBy = Object.keys(data).sort()
const res = {}
sortBy.forEach(item => {
  res[item] = data[item]
})
console.log(res)
