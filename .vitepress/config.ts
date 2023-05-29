import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import mark from 'markdown-it-mark'

// https://vitepress.dev/reference/site-config
import navJson from './nav.json'
import sidebarJson from './sidebar.js'

export default defineConfig({
  title: "E-Books",
  description: "电子书 + 笔记",
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: '/plugins/amis/sdk/sdk.css' }
    ],
    [
      'script',
      { src: '/plugins/amis/sdk/sdk.js' }
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
      pattern: 'https://gitee.com/-/ide/project/lingxyz/books/edit/main/-/:path'
    },
    search: {
      provider: 'local'
    }
  },
  ignoreDeadLinks: [
    './LICENSE',
  ],
  base: '/books/',
  lastUpdated: true,
  vite: {
    resolve: {
      // Overriding Internal Components
      alias: [
        {
          find: /^.*\/VPFeatures\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFeatures.vue', import.meta.url)
          )
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mark)
    }
  }
})
