import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)


  // Blog
  rootNotionPageId: '90b9c86c18dd444b8e0e9f76bdc6b1d3',
  postsCollectionId: 'ea3be0c8-e619-48be-897a-92a1efb427f4',
  // https://icepie.notion.site/CPU-uint128-s-Blog-9e8a1035601346ea947153d554f2a3c2
  // Test Suite
  // rootNotionPageId: '067dd719a912471ea9a3ac10710e7fdf',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '平均律',
  domain: 'blog.icepie.net',
  author: 'icepie',
  yearStarted: 2017,

  // open graph metadata (optional)
  description: 'I am here :)',

  // social usernames (optional)
  // twitter: '_Jkker_',
  github: 'icepie',
  steam: 'givein2u',
  telegram: 'icepie',
  email: 'icepie.dev@gmail.com',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover:
    'https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist@1.0.0/2020/052.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // https://icepie.notion.site/About-6640da72acec467fb7fa41eab90d513c
  pageUrlOverrides: {
    '/friends': '11773748d55c44cbb7843ddcc89d7ad5',
    '/about': '6640da72acec467fb7fa41eab90d513c',
    // '/test': '067dd719a912471ea9a3ac10710e7fdf',
  },

  i18n: {
    'en-US': {
      dateFormat: 'MMM D, YYYY',
    },
    'zh-CN': {
      dateFormat: 'YYYY年M月D日',
    },
  },
  projects: [
    {
      title: 'LUG@LIT',
      description: `🚀Luoyang Institute of Science and Technology GNU/Linux User Group`,
      coverImage: 'https://lm-1257148090.cos.ap-nanjing.myqcloud.com/uPic/截屏2022-10-21 01.29.22.png',
      href: 'https://www.litunix.org',
    },
    {
      title: '云小洛 (Air LIT)',
      description: `一个为洛理打造的校园实用小工具...`,
      coverImage: '/images/air-lit-banner.jpg',
      href: 'https://air-lit.icepie.net',
    },
    {
      title: 'tauri-notion',
      description: `A notion desktop app made by tauri`,
      coverImage: '/images/notion-tauri-banner.png',
      href: 'https://github.com/icepie/tauri-notion',
    }
  ],
})
