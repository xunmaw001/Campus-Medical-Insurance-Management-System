import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import xiaofeijilu from '@/views/modules/xiaofeijilu/list'
    import canbaojilu from '@/views/modules/canbaojilu/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import tingbaoqingqiu from '@/views/modules/tingbaoqingqiu/list'
    import baoxiaodaozhang from '@/views/modules/baoxiaodaozhang/list'
    import baoxiaojilu from '@/views/modules/baoxiaojilu/list'
    import baoxianxinxi from '@/views/modules/baoxianxinxi/list'
    import xinxidangan from '@/views/modules/xinxidangan/list'
    import xueshengtixing from '@/views/modules/xueshengtixing/list'
    import messages from '@/views/modules/messages/list'
    import xubaoqingqiu from '@/views/modules/xubaoqingqiu/list'
    import config from '@/views/modules/config/list'
    import chongzhijilu from '@/views/modules/chongzhijilu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/xiaofeijilu',
        name: '消费记录',
        component: xiaofeijilu
      }
      ,{
	path: '/canbaojilu',
        name: '参保记录',
        component: canbaojilu
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/tingbaoqingqiu',
        name: '停保请求',
        component: tingbaoqingqiu
      }
      ,{
	path: '/baoxiaodaozhang',
        name: '报销到账',
        component: baoxiaodaozhang
      }
      ,{
	path: '/baoxiaojilu',
        name: '报销记录',
        component: baoxiaojilu
      }
      ,{
	path: '/baoxianxinxi',
        name: '保险信息',
        component: baoxianxinxi
      }
      ,{
	path: '/xinxidangan',
        name: '信息档案',
        component: xinxidangan
      }
      ,{
	path: '/xueshengtixing',
        name: '学生提醒',
        component: xueshengtixing
      }
      ,{
	path: '/messages',
        name: '留言反馈',
        component: messages
      }
      ,{
	path: '/xubaoqingqiu',
        name: '续保请求',
        component: xubaoqingqiu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/chongzhijilu',
        name: '充值记录',
        component: chongzhijilu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
