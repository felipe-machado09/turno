import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'balance',
    children: [
      {
        path: '/dashboard',
        redirect: '/balance'
      },
      {
        path: 'balance',
        name: 'balance',
        component: () => import('@pages/Balance/Index.vue'),
        meta: { title: 'pages.balance.title' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'pages.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'pages.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'pages.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'pages.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'pages.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'pages.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'pages.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'pages.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'pages.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'pages.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'pages.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'pages.user.title' }
          }
        ]
      },
      {
        path: 'incomes',
        name: 'incomes.index',
        component: () => import('@cruds/Incomes/Index.vue'),
        meta: { title: 'pages.income.title' }
      },
      {
        path: 'incomes/create',
        name: 'incomes.create',
        component: () => import('@cruds/Incomes/Create.vue'),
        meta: { title: 'pages.income.title' }
      },
      {
        path: 'incomes/:id',
        name: 'incomes.show',
        component: () => import('@cruds/Incomes/Show.vue'),
        meta: { title: 'pages.income.title' }
      },
      {
        path: 'incomes/:id/edit',
        name: 'incomes.edit',
        component: () => import('@cruds/Incomes/Edit.vue'),
        meta: { title: 'pages.income.title' }
      },
      {
        path: 'expenses',
        name: 'expenses.index',
        component: () => import('@cruds/Expenses/Index.vue'),
        meta: { title: 'pages.expense.title' }
      },
      {
        path: 'expenses/create',
        name: 'expenses.create',
        component: () => import('@cruds/Expenses/Create.vue'),
        meta: { title: 'pages.expense.title' }
      },
      {
        path: 'expenses/:id',
        name: 'expenses.show',
        component: () => import('@cruds/Expenses/Show.vue'),
        meta: { title: 'pages.expense.title' }
      },
      {
        path: 'expenses/:id/edit',
        name: 'expenses.edit',
        component: () => import('@cruds/Expenses/Edit.vue'),
        meta: { title: 'pages.expense.title' }
      },
      {
        path: 'checks',
        name: 'checks.index',
        component: () => import('@cruds/Checks/Index.vue'),
        meta: { title: 'pages.check.title' }
      },
      {
        path: 'checks/create',
        name: 'checks.create',
        component: () => import('@cruds/Checks/Create.vue'),
        meta: { title: 'pages.check.title' }
      },
      {
        path: 'checks/:id',
        name: 'checks.show',
        component: () => import('@cruds/Checks/Show.vue'),
        meta: { title: 'pages.check.title' }
      },
      {
        path: 'checks/:id/edit',
        name: 'checks.edit',
        component: () => import('@cruds/Checks/Edit.vue'),
        meta: { title: 'pages.check.title' }
      },
      {
        path: 'notifications',
        name: 'other.notifications',
        component: () => import('@pages/Other.vue'),
        meta: { title: 'pages.other.notifications' }
      },
      {
        path: 'profile',
        name: 'other.profile',
        component: () => import('@pages/Other.vue'),
        meta: { title: 'pages.other.profile' }
      },
      {
        path: 'settings',
        name: 'other.settings',
        component: () => import('@pages/Other.vue'),
        meta: { title: 'pages.other.settings' }
      },
      {
        path: 'help',
        name: 'other.help',
        component: () => import('@pages/Other.vue'),
        meta: { title: 'pages.other.help' }
      },
      {
        path: 'check/list',
        name: 'check.list',
        component: () => import('@cruds/CheckControl/Index.vue'),
        meta: { title: 'pages.check.list' }
      },
      {
        path: 'check/details/:id',
        name: 'check.details',
        component: () => import('@cruds/CheckControl/Edit.vue'),
        meta: { title: 'pages.check.details' }
      },
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
