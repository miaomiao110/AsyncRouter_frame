import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:"/",
    name:"登录页面",
    component:() => import("@/pages/login/login")
  },
  {
    path:"/home",
    name:"登录-首页",
    component:() => import("@/pages/home"),
    // children:[
    //   {
    //     path:"/monitor",
    //     component:() => import("@/pages/monitor")
    //   },
    //   {
    //     path:"/application",
    //     component:() => import("@/pages/application")
    //   },
    //   {
    //     path:"/maintain",
    //     component:() => import("@/pages/maintain")
    //   },
    //   {
    //     path:"/setting",
    //     component:() => import("@/pages/modules/setting/setting")
    //   },
    // ]
  },
  // {
  //   path:"/monitor",
  //   component:() => import("@/pages/monitor")
  // },
  // {
  //   path:"/application",
  //   component:() => import("@/pages/application")
  // },
  // {
  //   path:"/maintain",
  //   component:() => import("@/pages/maintain")
  // },
  // {
  //   path:"/setting",
  //   component:() => import("@/pages/modules/setting/setting")
  // },
  {
    path:"/header1",
    // name:"头部菜单栏",  //注释仅为参考使用
    component:() => import("@/pages/modules/header1"),
    // redirect:'header/setting',
    children:[
      {
        path:"home",
        name:"首页",
        redirect:"/home",
        component:() => import("@/pages/home")
      },
      {
        path:"monitor",
        name:"监控中心",
        component:() => import("@/pages/modules/monitor/monitor"),
      },
      {
        path:"application_home",
        name:"应用中心",
        redirect:'/header1/application_home/application_home_inner',
        // hidden:true,
        component:() => import("@/pages/modules/application/application_home"),
        children:[
          {
            path:"application_home_inner",
            name:"应用中心",
            // redirect:'/header1/application_home',
            component:() => import("@/pages/modules/application/application"),            
          },
          {
            path:"smartlamp",
            name:"智慧照明",
            component:() => import("@/pages/home")
          },
          {
            path:"smartcheck",
            name:"智慧安监",
            component:() => import("@/pages/home")
          },
          {
            path:"smart_environmental_protection",
            name:"智慧环保",
            component:() => import("@/pages/home")
          },
          {
            path:"smartgovernment",
            name:"智慧市政",
            component:() => import("@/pages/home")
          },
          {
            path:"smarttraffic",
            name:"智慧交通",
            component:() => import("@/pages/home")
          },
          {
            path:"smartlife",
            name:"智慧生活",
            component:() => import("@/pages/home")
          },
          {
            path:"wirelesscity",
            name:"无线城市",
            component:() => import("@/pages/home")
          },
        ]
      },
      {
        path:"maintain_home",
        name:"运维管理",
        redirect:'/header1/maintain_home/dev_status_monitor',
        component:() => import("@/pages/modules/Maintain/maintain_home"),
        children:[
          {
            path:"dev_status_monitor",
            name:"设备状态监控",
            component:() => import("@/pages/home"),
          },
          {
            path:"lamp_dev_status_monitor",
            name:"照明设备告警监控",
            component:() => import("@/pages/home"),
          },
          {
            path:"base_dev_status_monitor",
            name:"基础设备告警监控",
            component:() => import("@/pages/home"),
          },
          {
            path:"dev_display",
            name:"设备概览",
            component:() => import("@/pages/home"),
          },
          {
            path:"dev_control_log",
            name:"设备操作日志",
            component:() => import("@/pages/home"),
          },
          {
            path:"message_notice",
            name:"消息通知",
            component:() => import("@/pages/home"),
          },
          {
            path:"service_monitor",
            name:"服务监控",
            component:() => import("@/pages/home"),
          },
        ]
      },
      {
        path:"relation",
        name:"联动控制",
        component:() => import("@/pages/home"),
        children:[
          {
            path:"statistics_display",
            name:"统计概览",
            component:() => import("@/pages/home"),
          },
          {
            path:"monitor_set",
            name:"监控项管理",
            component:() => import("@/pages/home"),
          },
          {
            path:"relation_strategy_set",
            name:"联动策略管理",
            component:() => import("@/pages/home"),
          },
          {
            path:"relation_log",
            name:"联动日志",
            component:() => import("@/pages/home"),
          },
        ]
      },
      {
        path:"setting",
        name:"系统管理",
        component:() => import("@/pages/modules/setting/setting"),
        children:[
        {
          path:"user_set",
          name:"用户管理",
          component:() => import("@/pages/modules/setting/menu_set")
        },
        {
          path:"role_set",
          name:"角色管理",
          component:() => import("@/pages/modules/setting/menu_set")
        },
        {
          path:"sys_log",
          name:"系统日志",
          component:() => import("@/pages/modules/setting/menu_set")
        },
        {
          path:"sys_set",
          name:"系统设置",
          component:() => import("@/pages/modules/setting/menu_set"),
          children:[
            {
              path:"menu_set",
              name:"菜单管理",
              component:() => import("@/pages/modules/setting/menu_set")              
            },
            {
              path:"word_set",
              name:"字典管理",
              component:() => import("@/pages/modules/setting/menu_set")              
            },
            {
              path:"hot_range_set",
              name:"热力区间设置",
              component:() => import("@/pages/modules/setting/menu_set")              
            },
            {
              path:"tree_rename",
              name:"结构树重命名",
              component:() => import("@/pages/modules/setting/menu_set")              
            },
          ]
        },
        {
          path:"timing_task",
          name:"定时任务",
          component:() => import("@/pages/modules/setting/menu_set")
        },
        {
          path:"mobile_devices_Jurisdiction",
          name:"移动设备权限",
          component:() => import("@/pages/modules/setting/menu_set")
        },
        ]
      },
      // {
      //   path:"menu_set",
      //   name:"菜单管理",
      //   component:() => import("@/pages/modules/setting/menu_set")
      // },
      {
        path:"maintainCenter",
        name:"运维中心",
        component:() => import("@/pages/modules/setting/menu_set")
      },
      // {
      //   path:"ceshivue",
      //   name:"ceshiPage",
      //   component:() => import("@/pages/modules/setting/ceshi"),
      //   children:[{
      //     path:"ceshivue2",
      //     name:"ceshiPage2",
      //     component:() => import("@/pages/modules/setting/ceshi"),
      //   }]
      // }
    ]
  },
  // {
  //   path:"/header1",
  //   component:() => import("@/pages/modules/header1"),
  //   // redirect:'header/setting',
  //   children:[
  //     {
  //       path:"setting",
  //       component:() => import("@/pages/modules/setting/setting")
  //     }
  //   ]
  // },
  // {
  //   path:"/ceshi",
  //   name:"测试",
  //   component:() => import("@/pages/home")
  // },
  // {
  //   path:"/ceshi",
  //   name:"测试",
  //   component:() => import("@/pages/home")
  // },
  // {
  //   path:"/ceshi",
  //   name:"测试",
  //   component:() => import("@/pages/home")
  // },
  // {
  //   path:"/ceshi",
  //   name:"测试",
  //   component:() => import("@/pages/home")
  // },
  // {
  //   path:"/ceshi",
  //   name:"测试",
  //   component:() => import("@/pages/home")
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
