import { defineConfig } from 'vitepress'
import { nav, sidebar, head, socialLinks } from './configs'
import footnote_plugin from 'markdown-it-footnote'

export default defineConfig({
  // 站点名称
  title: '玄学宝典',

  // 站点语言
  lang: 'zh-CN',

  // 网站头部
  head,
  metaChunk: true,
  // 站点介绍
  description: '玄学宝典 - 中华传统五术书籍(山医命相卜)/传世经典著作',

  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  // 站点地图
  sitemap: {
    hostname: 'https://xx.theojs.cn'
  },

  // markdown-it插件配置
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'dracula-soft'
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    config: (md) => {
      md.use(footnote_plugin)
    }
  },

  // 插件配置
  vite: {
    resolve: {
      alias: [{ find: /^.*\/VPFooter\.vue$/, replacement: 'tmfe/Footer' }]
    },
    define: {
      FooterData: JSON.stringify(require('./data/footerData').Footer_Data)
    }
  },

  // 源目录
  srcDir: 'src',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 主题配置
  themeConfig: {
    // // logo
    logo: { src: 'https://i.theojs.cn/avatar.png', width: 24, height: 24 },

    // 社交链接
    socialLinks,

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/Theo-messi/xx.theojs.cn/blob/main/src/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full',
        hourCycle: 'h24'
      }
    },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',

    // markdown 外部链接图标
    // externalLinkIcon: true,
    // 语言切换
    langMenuLabel: '切换语言',

    // 导航栏
    nav,

    // 侧边栏
    sidebar
  }
})
