import type { DefaultTheme } from 'vitepress'

// 社交链接设置

export const socialLinks: DefaultTheme.SocialLink[] = [
  {
    icon: 'github',
    link: 'https://github.com/Theo-Messi/xx.theojs.cn',
    ariaLabel: 'Github'
  },
  {
    icon: 'gmail',
    link: 'mailto:fanxiaobin422@gmail.com',
    ariaLabel: 'Gmail'
  },
  {
    icon: 'telegram',
    link: 'https://t.me/Theo_Messi',
    ariaLabel: 'Telegram'
  },
  {
    icon: {
      svg: '<iconify-icon icon="twemoji:red-heart" style="font-size:1.2em" alt="Github Sponsors"></iconify-icon>'
    },
    link: 'https://i.theojs.cn/docs/202405201759098.webp',
    ariaLabel: 'Github Sponsors'
  }
]
