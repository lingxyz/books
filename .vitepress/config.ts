import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
import navJson from './nav.json'
import sidebarJson from './sidebar.json'

export default defineConfig({
  title: "E-Books",
  description: "电子书 + 笔记",
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navJson,
    sidebar: sidebarJson,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lingxyz/books' }
    ],
    editLink: {
      pattern: 'https://gitee.com/-/ide/project/lingxyz/books/edit/master/-/:path'
    },
    search: {
      provider: 'local'
    }
  },
  ignoreDeadLinks: [
    './LICENSE',
  ],
  base: '/books/',
  lastUpdated: true
})
