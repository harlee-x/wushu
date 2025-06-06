import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    icp: '鄂ICP备2024060426号',
    police: '粤公网安备44200102445449号',
    showIcon: true
  },
  author: {
    name: 'Theo-Messi',
    link: 'https://github.com/Theo-Messi'
  },
  group: [
    {
      title: 'GitHub Source',
      icon: 'mdi:github',
      links: [
        {
          name: 'Theo-Docs',
          link: 'https://github.com/Theo-Messi/Theo-Docs'
        },
        {
          name: '玄学宝典',
          link: 'https://github.com/Theo-Messi/xx.theojs.cn'
        },
        {
          name: '常用配置文件',
          link: 'https://github.com/Theo-Messi/dotfiles'
        },
        {
          name: 'Lumen',
          link: 'https://github.com/Theo-Messi/lumen'
        }
      ]
    },
    {
      title: '合作伙伴',
      icon: 'mdi:account-group',
      links: [
        {
          name: '青云梯',
          icon: 'el:fire',
          color: '#FF5733',
          link: 'https://sho.theojs.cn/qyt'
        },
        { name: 'Totoro Cloud - 龙猫云', link: 'https://sho.theojs.cn/totoro' },
        { name: 'TNT Cloud', link: 'https://sho.theojs.cn/tnt' },
        { name: 'FlyingBird', link: 'https://sho.theojs.cn/flyingbird' },
        { name: '飞兔云', link: 'https://sho.theojs.cn/feitu' },
        { name: '银河录像局', link: 'https://sho.theojs.cn/yh' },
        { name: '奈飞小铺', link: 'https://sho.theojs.cn/ihezu' },
        { name: '蜜糖商店', link: 'https://sho.theojs.cn/metshop' },
        { name: 'SMS-Activate', link: 'https://sho.theojs.cn/sms' }
      ]
    },
    {
      title: '观影指南',
      icon: 'mdi:movie',
      links: [
        {
          name: 'Netflix',
          link: 'https://doc.theojs.cn/streaming/Netflix-guide'
        },
        {
          name: 'Disney+',
          link: 'https://doc.theojs.cn/streaming/Disney-introduce'
        },
        {
          name: 'Spotify Premium',
          link: 'https://doc.theojs.cn/streaming/Spotify'
        },
        {
          name: 'YouTube Premium',
          link: 'https://doc.theojs.cn/streaming/YouTube'
        },
        { name: 'Hulu', link: 'https://doc.theojs.cn/streaming/Hulu' },
        { name: 'HBO Max', link: 'https://doc.theojs.cn/streaming/HBO-Max' }
      ]
    },
    {
      title: '相关链接',
      icon: 'mdi:link',
      links: [
        { name: 'Theo-Docs', link: 'https://doc.theojs.cn/' },
        { name: '玄学宝典', link: 'https://xx.theojs.cn/' },
        { name: 'VitePress', link: 'https://vitepress.dev/' }
      ]
    }
  ]
}
