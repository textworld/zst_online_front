import Mock from 'mockjs2'
import { builder } from '../util'

const orgTree = () => {
  return builder([{
    'key': 'key-01',
    'title': '研发中心',
    'icon': 'mail',
    'children': [{
      'key': 'key-01-01',
      'title': '后端组',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-01-01',
        'title': 'JAVA',
        'icon': null
      },
        {
          'key': 'key-01-01-02',
          'title': 'PHP',
          'icon': null
        },
        {
          'key': 'key-01-01-03',
          'title': 'Golang',
          'icon': null
        }
      ]
    }, {
      'key': 'key-01-02',
      'title': '前端组',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-02-01',
        'title': 'React',
        'icon': null
      },
        {
          'key': 'key-01-02-02',
          'title': 'Vue',
          'icon': null
        },
        {
          'key': 'key-01-02-03',
          'title': 'Angular',
          'icon': null
        }
      ]
    }]
  }, {
    'key': 'key-02',
    'title': '财务部',
    'icon': 'dollar',
    'children': [{
      'key': 'key-02-01',
      'title': '会计核算',
      'icon': null
    }, {
      'key': 'key-02-02',
      'title': '成本控制',
      'icon': null
    }, {
      'key': 'key-02-03',
      'title': '内部控制',
      'icon': null,
      'children': [{
        'key': 'key-02-03-01',
        'title': '财务制度建设',
        'icon': null
      },
        {
          'key': 'key-02-03-02',
          'title': '会计核算',
          'icon': null
        }
      ]
    }]
  }])
}

const role = () => {
  return builder({
    'data': [{
      'id': 'admin',
      'name': '管理员',
      'describe': '拥有所有权限',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [{
        'roleId': 'admin',
        'permissionId': 'comment',
        'permissionName': '评论管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
          {
            'action': 'query',
            'describe': '查询',
            'defaultCheck': false
          },
          {
            'action': 'get',
            'describe': '详情',
            'defaultCheck': false
          },
          {
            'action': 'edit',
            'describe': '修改',
            'defaultCheck': false
          },
          {
            'action': 'delete',
            'describe': '删除',
            'defaultCheck': false
          }],
        'actionList': ['delete', 'edit'],
        'dataAccess': null
      },
        {
          'roleId': 'admin',
          'permissionId': 'member',
          'permissionName': '会员管理',
          'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          'actionEntitySet': [{
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          },
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
          ],
          'actionList': ['query', 'get', 'edit', 'delete'],
          'dataAccess': null
        },
        {
          'roleId': 'admin',
          'permissionId': 'menu',
          'permissionName': '菜单管理',
          'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
          'actionEntitySet': [{
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          },
            {
              'action': 'import',
              'describe': '导入',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            }
          ],
          'actionList': ['add', 'import'],
          'dataAccess': null
        },
        {
          'roleId': 'admin',
          'permissionId': 'order',
          'permissionName': '订单管理',
          'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          'actionEntitySet': [{
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          },
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
          ],
          'actionList': ['query', 'add', 'get'],
          'dataAccess': null
        },
        {
          'roleId': 'admin',
          'permissionId': 'permission',
          'permissionName': '权限管理',
          'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          'actionEntitySet': [{
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
          ],
          'actionList': ['add', 'get', 'edit', 'delete'],
          'dataAccess': null
        },
        {
          'roleId': 'admin',
          'permissionId': 'role',
          'permissionName': '角色管理',
          'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          'actionEntitySet': [{
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
          ],
          'actionList': null,
          'dataAccess': null
        },
        {
          'roleId': 'admin',
          'permissionId': 'test',
          'permissionName': '测试权限',
          'actions': '[]',
          'actionEntitySet': [],
          'actionList': null,
          'dataAccess': null
        },
        {
          'roleId': 'admin',
          'permissionId': 'user',
          'permissionName': '用户管理',
          'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
          'actionEntitySet': [{
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          },
            {
              'action': 'import',
              'describe': '导入',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            },
            {
              'action': 'export',
              'describe': '导出',
              'defaultCheck': false
            }
          ],
          'actionList': ['add', 'get'],
          'dataAccess': null
        }
      ]
    },
      {
        'id': 'svip',
        'name': 'SVIP',
        'describe': '超级会员',
        'status': 1,
        'creatorId': 'system',
        'createTime': 1532417744846,
        'deleted': 0,
        'permissions': [{
          'roleId': 'admin',
          'permissionId': 'comment',
          'permissionName': '评论管理',
          'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          'actionEntitySet': [{
            'action': 'add',
            'describe': '新增',
            'defaultCheck': false
          },
            {
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            },
            {
              'action': 'edit',
              'describe': '修改',
              'defaultCheck': false
            },
            {
              'action': 'delete',
              'describe': '删除',
              'defaultCheck': false
            }
          ],
          'actionList': ['add', 'get', 'delete'],
          'dataAccess': null
        },
          {
            'roleId': 'admin',
            'permissionId': 'member',
            'permissionName': '会员管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
              {
                'action': 'query',
                'describe': '查询',
                'defaultCheck': false
              },
              {
                'action': 'get',
                'describe': '详情',
                'defaultCheck': false
              }
            ],
            'actionList': ['add', 'query', 'get'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'menu',
            'permissionName': '菜单管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
              {
                'action': 'import',
                'describe': '导入',
                'defaultCheck': false
              },
              {
                'action': 'get',
                'describe': '详情',
                'defaultCheck': false
              }
            ],
            'actionList': ['add', 'get'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'order',
            'permissionName': '订单管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
              {
                'action': 'query',
                'describe': '查询',
                'defaultCheck': false
              },
              {
                'action': 'get',
                'describe': '详情',
                'defaultCheck': false
              },
              {
                'action': 'edit',
                'describe': '修改',
                'defaultCheck': false
              }
            ],
            'actionList': ['add', 'query'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'permission',
            'permissionName': '权限管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
              {
                'action': 'get',
                'describe': '详情',
                'defaultCheck': false
              },
              {
                'action': 'edit',
                'describe': '修改',
                'defaultCheck': false
              }
            ],
            'actionList': ['add', 'get', 'edit'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'role',
            'permissionName': '角色管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
              {
                'action': 'edit',
                'describe': '修改',
                'defaultCheck': false
              },
              {
                'action': 'delete',
                'describe': '删除',
                'defaultCheck': false
              }
            ],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'test',
            'permissionName': '测试权限',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': ['add', 'edit'],
            'dataAccess': null
          },
          {
            'roleId': 'admin',
            'permissionId': 'user',
            'permissionName': '用户管理',
            'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
            'actionEntitySet': [{
              'action': 'add',
              'describe': '新增',
              'defaultCheck': false
            },
              {
                'action': 'import',
                'describe': '导入',
                'defaultCheck': false
              },
              {
                'action': 'get',
                'describe': '详情',
                'defaultCheck': false
              },
              {
                'action': 'edit',
                'describe': '修改',
                'defaultCheck': false
              }
            ],
            'actionList': ['add'],
            'dataAccess': null
          }
        ]
      },
      {
        'id': 'user',
        'name': '普通会员',
        'describe': '普通用户，只能查询',
        'status': 1,
        'creatorId': 'system',
        'createTime': 1497160610259,
        'deleted': 0,
        'permissions': [{
          'roleId': 'user',
          'permissionId': 'comment',
          'permissionName': '评论管理',
          'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
          'actionEntitySet': [{
            'action': 'query',
            'describe': '查询',
            'defaultCheck': false
          },
            {
              'action': 'get',
              'describe': '详情',
              'defaultCheck': false
            }
          ],
          'actionList': ['query'],
          'dataAccess': null
        },

          {
            'roleId': 'user',
            'permissionId': 'marketing',
            'permissionName': '营销管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'member',
            'permissionName': '会员管理',
            'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
            'actionEntitySet': [{
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
              {
                'action': 'get',
                'describe': '详情',
                'defaultCheck': false
              }
            ],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'menu',
            'permissionName': '菜单管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },

          {
            'roleId': 'user',
            'permissionId': 'order',
            'permissionName': '订单管理',
            'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
            'actionEntitySet': [{
              'action': 'query',
              'describe': '查询',
              'defaultCheck': false
            },
              {
                'action': 'get',
                'describe': '详情',
                'defaultCheck': false
              }
            ],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'permission',
            'permissionName': '权限管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'role',
            'permissionName': '角色管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },

          {
            'roleId': 'user',
            'permissionId': 'test',
            'permissionName': '测试权限',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          },
          {
            'roleId': 'user',
            'permissionId': 'user',
            'permissionName': '用户管理',
            'actions': '[]',
            'actionEntitySet': [],
            'actionList': null,
            'dataAccess': null
          }
        ]
      }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
  })
}

const permissionNoPager = () => {
  return builder([{
    'id': 'marketing',
    'name': '营销管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': null,
    'parents': null,
    'type': null,
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
    {
      'id': 'member',
      'name': '会员管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'menu',
      'name': '菜单管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'import',
        'get',
        'edit'
      ]
    },
    {
      'id': 'order',
      'name': '订单管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'permission',
      'name': '权限管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'role',
      'name': '角色管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'test',
      'name': '测试权限',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get'
      ]
    },
    {
      'id': 'user',
      'name': '用户管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get'
      ]
    }
  ])
}

// const permissions = () => {
//   return builder({
//     'data': [{
//       'id': 'marketing',
//       'name': '营销管理',
//       'describe': null,
//       'status': 1,
//       'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
//       'sptDaTypes': null,
//       'optionalFields': null,
//       'parents': null,
//       'type': null,
//       'deleted': 0,
//       'actions': [
//         'add',
//         'query',
//         'get',
//         'edit',
//         'delete'
//       ]
//     },
//       {
//         'id': 'member',
//         'name': '会员管理',
//         'describe': null,
//         'status': 1,
//         'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
//         'sptDaTypes': null,
//         'optionalFields': '[]',
//         'parents': null,
//         'type': 'default',
//         'deleted': 0,
//         'actions': [
//           'add',
//           'query',
//           'get',
//           'edit',
//           'delete'
//         ]
//       },
//       {
//         'id': 'menu',
//         'name': '菜单管理',
//         'describe': null,
//         'status': 1,
//         'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
//         'sptDaTypes': null,
//         'optionalFields': '[]',
//         'parents': null,
//         'type': 'default',
//         'deleted': 0,
//         'actions': [
//           'add',
//           'import',
//           'get',
//           'edit'
//         ]
//       },
//       {
//         'id': 'order',
//         'name': '订单管理',
//         'describe': null,
//         'status': 1,
//         'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
//         'sptDaTypes': null,
//         'optionalFields': '[]',
//         'parents': null,
//         'type': 'default',
//         'deleted': 0,
//         'actions': [
//           'add',
//           'query',
//           'get',
//           'edit',
//           'delete'
//         ]
//       },
//       {
//         'id': 'permission',
//         'name': '权限管理',
//         'describe': null,
//         'status': 1,
//         'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
//         'sptDaTypes': null,
//         'optionalFields': '[]',
//         'parents': null,
//         'type': 'default',
//         'deleted': 0,
//         'actions': [
//           'add',
//           'get',
//           'edit',
//           'delete'
//         ]
//       },
//       {
//         'id': 'role',
//         'name': '角色管理',
//         'describe': null,
//         'status': 1,
//         'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
//         'sptDaTypes': null,
//         'optionalFields': '[]',
//         'parents': null,
//         'type': 'default',
//         'deleted': 0,
//         'actions': [
//           'add',
//           'get',
//           'edit',
//           'delete'
//         ]
//       },
//       {
//         'id': 'test',
//         'name': '测试权限',
//         'describe': null,
//         'status': 1,
//         'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
//         'sptDaTypes': null,
//         'optionalFields': '[]',
//         'parents': null,
//         'type': 'default',
//         'deleted': 0,
//         'actions': [
//           'add',
//           'get'
//         ]
//       },
//       {
//         'id': 'user',
//         'name': '用户管理',
//         'describe': null,
//         'status': 1,
//         'actionData': '[{"action":"add","describe":"新增","defaultCheck":false},{"action":"get","describe":"查询","defaultCheck":false}]',
//         'sptDaTypes': null,
//         'optionalFields': '[]',
//         'parents': null,
//         'type': 'default',
//         'deleted': 0,
//         'actions': [
//           'add',
//           'get'
//         ]
//       }
//     ],
//     'pageSize': 10,
//     'pageNo': 0,
//     'totalPage': 1,
//     'totalCount': 5
//   })
// }

const groups = () => {
  return builder([{
    'id': 1,
    'permissions': [{
      'id': 1,
      'content_type': { 'id': 1, 'app_label': 'admin', 'model': 'logentry' },
      'name': 'Can add log entry',
      'codename': 'add_logentry'
    }, {
      'id': 2,
      'content_type': { 'id': 1, 'app_label': 'admin', 'model': 'logentry' },
      'name': 'Can change log entry',
      'codename': 'change_logentry'
    }, {
      'id': 3,
      'content_type': { 'id': 1, 'app_label': 'admin', 'model': 'logentry' },
      'name': 'Can delete log entry',
      'codename': 'delete_logentry'
    }, {
      'id': 4,
      'content_type': { 'id': 1, 'app_label': 'admin', 'model': 'logentry' },
      'name': 'Can view log entry',
      'codename': 'view_logentry'
    }, {
      'id': 9,
      'content_type': { 'id': 3, 'app_label': 'auth', 'model': 'group' },
      'name': 'Can add group',
      'codename': 'add_group'
    }, {
      'id': 10,
      'content_type': { 'id': 3, 'app_label': 'auth', 'model': 'group' },
      'name': 'Can change group',
      'codename': 'change_group'
    }, {
      'id': 11,
      'content_type': { 'id': 3, 'app_label': 'auth', 'model': 'group' },
      'name': 'Can delete group',
      'codename': 'delete_group'
    }, {
      'id': 12,
      'content_type': { 'id': 3, 'app_label': 'auth', 'model': 'group' },
      'name': 'Can view group',
      'codename': 'view_group'
    }, {
      'id': 5,
      'content_type': { 'id': 2, 'app_label': 'auth', 'model': 'permission' },
      'name': 'Can add permission',
      'codename': 'add_permission'
    }, {
      'id': 6,
      'content_type': { 'id': 2, 'app_label': 'auth', 'model': 'permission' },
      'name': 'Can change permission',
      'codename': 'change_permission'
    }, {
      'id': 7,
      'content_type': { 'id': 2, 'app_label': 'auth', 'model': 'permission' },
      'name': 'Can delete permission',
      'codename': 'delete_permission'
    }, {
      'id': 8,
      'content_type': { 'id': 2, 'app_label': 'auth', 'model': 'permission' },
      'name': 'Can view permission',
      'codename': 'view_permission'
    }, {
      'id': 13,
      'content_type': { 'id': 4, 'app_label': 'contenttypes', 'model': 'contenttype' },
      'name': 'Can add content type',
      'codename': 'add_contenttype'
    }, {
      'id': 14,
      'content_type': { 'id': 4, 'app_label': 'contenttypes', 'model': 'contenttype' },
      'name': 'Can change content type',
      'codename': 'change_contenttype'
    }, {
      'id': 15,
      'content_type': { 'id': 4, 'app_label': 'contenttypes', 'model': 'contenttype' },
      'name': 'Can delete content type',
      'codename': 'delete_contenttype'
    }, {
      'id': 16,
      'content_type': { 'id': 4, 'app_label': 'contenttypes', 'model': 'contenttype' },
      'name': 'Can view content type',
      'codename': 'view_contenttype'
    }, {
      'id': 21,
      'content_type': { 'id': 6, 'app_label': 'course', 'model': 'course' },
      'name': 'Can add course',
      'codename': 'add_course'
    }, {
      'id': 22,
      'content_type': { 'id': 6, 'app_label': 'course', 'model': 'course' },
      'name': 'Can change course',
      'codename': 'change_course'
    }, {
      'id': 23,
      'content_type': { 'id': 6, 'app_label': 'course', 'model': 'course' },
      'name': 'Can delete course',
      'codename': 'delete_course'
    }, {
      'id': 24,
      'content_type': { 'id': 6, 'app_label': 'course', 'model': 'course' },
      'name': 'Can view course',
      'codename': 'view_course'
    }, {
      'id': 17,
      'content_type': { 'id': 5, 'app_label': 'sessions', 'model': 'session' },
      'name': 'Can add session',
      'codename': 'add_session'
    }, {
      'id': 18,
      'content_type': { 'id': 5, 'app_label': 'sessions', 'model': 'session' },
      'name': 'Can change session',
      'codename': 'change_session'
    }, {
      'id': 19,
      'content_type': { 'id': 5, 'app_label': 'sessions', 'model': 'session' },
      'name': 'Can delete session',
      'codename': 'delete_session'
    }, {
      'id': 20,
      'content_type': { 'id': 5, 'app_label': 'sessions', 'model': 'session' },
      'name': 'Can view session',
      'codename': 'view_session'
    }, {
      'id': 25,
      'content_type': { 'id': 7, 'app_label': 'user', 'model': 'zstuser' },
      'name': 'Can add user',
      'codename': 'add_zstuser'
    }, {
      'id': 26,
      'content_type': { 'id': 7, 'app_label': 'user', 'model': 'zstuser' },
      'name': 'Can change user',
      'codename': 'change_zstuser'
    }, {
      'id': 27,
      'content_type': { 'id': 7, 'app_label': 'user', 'model': 'zstuser' },
      'name': 'Can delete user',
      'codename': 'delete_zstuser'
    }, {
      'id': 28,
      'content_type': { 'id': 7, 'app_label': 'user', 'model': 'zstuser' },
      'name': 'Can view user',
      'codename': 'view_zstuser'
    }],
    'name': 'teacher'
  }], '', 200)
}

const contentTypeList = () => {
  return builder([{
    'id': 1,
    'permissions': [{ 'id': 1, 'name': 'Can add log entry', 'codename': 'add_logentry', 'content_type': 1 }, {
      'id': 2,
      'name': 'Can change log entry',
      'codename': 'change_logentry',
      'content_type': 1
    }, { 'id': 3, 'name': 'Can delete log entry', 'codename': 'delete_logentry', 'content_type': 1 }, {
      'id': 4,
      'name': 'Can view log entry',
      'codename': 'view_logentry',
      'content_type': 1
    }],
    'app_label': 'admin',
    'model': 'logentry'
  }, {
    'id': 3,
    'permissions': [{ 'id': 9, 'name': 'Can add group', 'codename': 'add_group', 'content_type': 3 }, {
      'id': 10,
      'name': 'Can change group',
      'codename': 'change_group',
      'content_type': 3
    }, { 'id': 11, 'name': 'Can delete group', 'codename': 'delete_group', 'content_type': 3 }, {
      'id': 12,
      'name': 'Can view group',
      'codename': 'view_group',
      'content_type': 3
    }],
    'app_label': 'auth',
    'model': 'group'
  }, {
    'id': 2,
    'permissions': [{
      'id': 5,
      'name': 'Can add permission',
      'codename': 'add_permission',
      'content_type': 2
    }, { 'id': 6, 'name': 'Can change permission', 'codename': 'change_permission', 'content_type': 2 }, {
      'id': 7,
      'name': 'Can delete permission',
      'codename': 'delete_permission',
      'content_type': 2
    }, { 'id': 8, 'name': 'Can view permission', 'codename': 'view_permission', 'content_type': 2 }],
    'app_label': 'auth',
    'model': 'permission'
  }, {
    'id': 4,
    'permissions': [{
      'id': 13,
      'name': 'Can add content type',
      'codename': 'add_contenttype',
      'content_type': 4
    }, { 'id': 14, 'name': 'Can change content type', 'codename': 'change_contenttype', 'content_type': 4 }, {
      'id': 15,
      'name': 'Can delete content type',
      'codename': 'delete_contenttype',
      'content_type': 4
    }, { 'id': 16, 'name': 'Can view content type', 'codename': 'view_contenttype', 'content_type': 4 }],
    'app_label': 'contenttypes',
    'model': 'contenttype'
  }, {
    'id': 6,
    'permissions': [{ 'id': 21, 'name': 'Can add course', 'codename': 'add_course', 'content_type': 6 }, {
      'id': 22,
      'name': 'Can change course',
      'codename': 'change_course',
      'content_type': 6
    }, { 'id': 23, 'name': 'Can delete course', 'codename': 'delete_course', 'content_type': 6 }, {
      'id': 24,
      'name': 'Can view course',
      'codename': 'view_course',
      'content_type': 6
    }],
    'app_label': 'course',
    'model': 'course'
  }, {
    'id': 5,
    'permissions': [{ 'id': 17, 'name': 'Can add session', 'codename': 'add_session', 'content_type': 5 }, {
      'id': 18,
      'name': 'Can change session',
      'codename': 'change_session',
      'content_type': 5
    }, { 'id': 19, 'name': 'Can delete session', 'codename': 'delete_session', 'content_type': 5 }, {
      'id': 20,
      'name': 'Can view session',
      'codename': 'view_session',
      'content_type': 5
    }],
    'app_label': 'sessions',
    'model': 'session'
  }, {
    'id': 7,
    'permissions': [{ 'id': 25, 'name': 'Can add user', 'codename': 'add_zstuser', 'content_type': 7 }, {
      'id': 26,
      'name': 'Can change user',
      'codename': 'change_zstuser',
      'content_type': 7
    }, { 'id': 27, 'name': 'Can delete user', 'codename': 'delete_zstuser', 'content_type': 7 }, {
      'id': 28,
      'name': 'Can view user',
      'codename': 'view_zstuser',
      'content_type': 7
    }],
    'app_label': 'user',
    'model': 'zstuser'
  }], '', 200)
}

const zstPermissionList = () => {
  return builder({
    'data': [
      {
        'id': 1,
        'actions': [
          {
            'id': 1,
            'action': 'read',
            'description': 'dashboard',
            'permission': 1
          }
        ],
        'name': 'dashboard',
        'description': 'dashboard'
      },
      {
        'id':
          2,
        'actions':
          [
            {
              'id': 2,
              'action': 'list',
              'description': 'list',
              'permission': 2
            }
          ],
        'name':
          'course',
        'description':
          'course'
      }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
    }, 'success', 200
  )
}

const createPermissionList = () => {
  return builder('', 'success', 200)
}

Mock.mock(/\/org\/tree/, 'get', orgTree)
Mock.mock(/\/role/, 'get', role)
Mock.mock(/\/permission\/no-pager/, 'get', permissionNoPager)
// Mock.mock(/\/permission/, 'get', permissions)
Mock.mock(/\/auth\/groups\//, 'get', groups)
Mock.mock(/\/auth\/content-type\//, 'get', contentTypeList)
Mock.mock(/\/auth\/permission\//, 'get', zstPermissionList)
Mock.mock(/\/auth\/permission\//, 'post', createPermissionList)
