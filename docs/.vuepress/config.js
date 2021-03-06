const themeConfig = require("./config/theme/");

module.exports = {
  title: "新",
  description: "新的开始",
  dest: "./vp",
  port: "8888",
  base: "/vp/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  themeConfig,
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
    ["@vuepress-reco/back-to-top", false],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat"],
        clean: true,
        modelStyle: {
          position: "fixed",
          right: "150px",
          bottom: "70px",
          opacity: "0.8",
          zIndex: 99999
        }
      }
    ],
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
      // 使你的 VuePress 站点支持简洁链接
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html"
      }
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: ".theme-reco-content img"
      }
    ],
  ]
};
