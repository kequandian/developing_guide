import { defineConfig } from 'dumi';

export default defineConfig({
  favicon:'https://avatars.githubusercontent.com/u/44112389?s=200&v=4',
  title: '可圈点',
  mode: 'site',//注释掉为doc模式
  logo: 'https://avatars.githubusercontent.com/u/44112389?s=200&v=4',
  navs: [
    // null, //默认为null，直接显示目录结构里的导航
    {
      path:'/guide',
      title:'开始！'
    },
    {
      path:'/git',
      title:'关于git和github',
      children:[
        {title:"git工具的使用",path:'/git/git工具的使用'},
        {title:'github登不上或不稳定解决方法',path:"/git/github解决方法"}
  
      ]
    },
    {
      title:'菜单',
      children:[
        {
          path:'http://github.com/kequandian',
          title:'关于我们',
        },
      ]
    }
  ],
  menus:{
    '/guide':[
      {
        title:'开始！',
        path:'/guide',
      }
    ],
    '/git':[
      {
        title:'git工具的使用',
        path:'/git/git工具的使用'
      },
      {
        title:'github登不上或不稳定解决方法',
        path:'/git/github解决方法'
      }
    ]
  }
});
