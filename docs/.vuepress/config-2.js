module.exports = {
  theme: "reco",
  title: "新",
  author: "新",
  startYear: "2019",
  description: "现在是个前端",
  dest: "./vp",
  port: "8888",
  base: "/vp/",
  themeConfig: {
    noFoundPageByTencent: false
  },
  plugins: [
    "go-top",
    [
      "@vuepress/register-components",
      {
        componentsDir: "./components"
      }
    ],
    [
      "ribbon",
      {
        size: 100, // 彩带的宽度，默认为 90
        opacity: 0.3, // 彩带的不透明度，默认为 0.3
        zIndex: -1 // 彩带的 z-index 属性，默认值为 -1
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/vp/favicon.ico",
        showText: "(/≧▽≦/)来啦老弟！",
        hideIcon: "/vp/favicon.ico",
        hideText: "(-.-)给朕肥来！",
        recoverTime: 2000
      }
    ],
    [
      // 使你的 VuePress 站点支持简洁链接
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html"
      }
    ]
  ],
  // webpack 配置
  configureWebpack: {
    devServer: {
      open: true
    },
    resolve: {
      alias: {
        "@alias": "path/to/some/dir"
      }
    }
  },
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // valineConfig: {
    //   appId: 'kWPcD8tnMP6geu36jT4T9Jf6-gzGzoHsz',// your appId
    //   appKey: 'riOgegOtPaAef1r2WwetTbgY', // your appKey
    // },
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类" // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag" // 默认文案 “标签”
      }
    },
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" }
    ],
    sidebar: "auto"

    // nav: [
    //   { text: "首页", link: "/" },
    //   { text: "Blog", link: "/blog/" },
    //   { text: "其它", link: "/other/" },
    //   { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
    //   { text: "js", link: "/js/" },
    //   { text: "外链", link: "http://www.baidu.com/" },
    //   {
    //     text: "下拉",
    //     items: [
    //       { text: "内链一", link: "/js/" },
    //       {
    //         text: "外链二",
    //         link: "http://www.baidu.com/"
    //       }
    //     ]
    //   }
    // ],
    // sidebar: {
    //   "/blog/": [
    //     "",
    //     "简单手写实现",
    //     "几个实例回顾",
    //     "几道代码题",
    //     "前端性能优化方案",
    //     "html和css相关",
    //     "webpack小记"
    //   ],
    //   "/other/": ["", "TC-VP-GP"],
    //   "/js/": [
    //     "",
    //     "js基础",
    //     "js进阶",
    //     {
    //       title: "js标题一",
    //       collapsable: false,
    //       children: ["/js/js2/"]
    //     }
    //   ]
    // }
  }
};
