import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sunrisepeak",
  description: "sunrisepeak",
  base: "/Sunrisepeak/",

  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "主页", link: "/" },
          {
            text: "开源",
            items: [
              { text: "主页", link: "/opensource/intro.md" },
              { text: "xlings | 包管理器", link: "/opensource/xlings.md" },
              {
                text: "mcpp | 交互式C++教程",
                link: "/opensource/mcpp-standard.md",
              },
              { text: "dstruct | 数据结构库", link: "/opensource/dstruct.md" },
            ],
          },
          {
            text: "思考",
            items: [
              { text: "我是谁, 从哪里来, 要到哪里去", link: "/" },
              { text: "自由和约束", link: "/" },
              { text: "道德律己, 法律律他", link: "/" },
            ],
          },
          {
            text: "游戏",
            items: [
              { text: "DDraceNetwork", link: "/games/ddnet.md" },
              { text: "黑神话: 悟空", link: "/games/black-myth-wukong.md" },
              { text: "艾尔登法环", link: "/games/elden-ring.md" },
            ],
          },
          {
            text: "热爱生活",
            items: [
              { text: "看看书", link: "/" },
              { text: "走走路", link: "/" },
              { text: "做做饭", link: "/" },
            ],
          },
          {
            text: "社区",
            items: [
              { text: "d2learn 社区", link: "/community/d2learn/intro.md" },
              {
                text: "d2learn 开源",
                link: "/community/d2learn/d2learn-opensource.md",
              },
              {
                text: "d2learn 论坛",
                link: "/community/d2learn/d2learn-forum.md",
              },
              { text: "MOGA 让开源再次伟大", link: "/community/moga.md" },
            ],
          },
          {
            text: "关于",
            items: [
              { text: "关于我", link: "/about/intro.md" },
              { text: "照片追忆", link: "/about/photo-memory.md" },
              { text: "联系我", link: "/about/reach-me.md" },
              { text: "日志", link: "/about/recent-activity/intro.md" },
            ],
          },
        ],

        sidebar: {
          "/about/": [
            { text: "关于我", link: "/about/intro.md" },
            { text: "照片追忆", link: "/about/photo-memory.md" },
            { text: "联系我", link: "/about/reach-me.md" },
            {
              text: "日志",
              collapsed: true,
              items: [
                { text: "简介", link: "/about/recent-activity/intro.md" },
                {
                  text: "2025",
                  items: [
                    {
                      text: "2025-10",
                      link: "/about/recent-activity/2025/2025-10.md",
                    },
                  ],
                },
              ],
            },
          ],
          "/opensource/": [
            { text: "开源主页", link: "/opensource/intro.md" },
            { text: "xlings | 抽象包管理器", link: "/opensource/xlings.md" },
            { text: "hanim | 动画引擎", link: "/opensource/hanim.md" },
            { text: "dstruct | 数据结构库", link: "/opensource/dstruct.md" },
            {
              text: "khistory | 按键检测可视化工具",
              link: "/opensource/khistory.md",
            },
            {
              text: "mcpp | 交互式现代C++教程",
              link: "/opensource/mcpp-standard.md",
            },
            { text: "d2ds | 交互式数据结构教程", link: "/opensource/d2ds.md" },
          ],
          "/community/": [
            {
              text: "[ d2learn社区 ]",
              items: [
                { text: "简介", link: "/community/d2learn/intro.md" },
                {
                  text: "d2learn 开源",
                  link: "/community/d2learn/d2learn-opensource.md",
                },
                {
                  text: "d2learn 论坛",
                  link: "/community/d2learn/d2learn-forum.md",
                },
              ],
            },
            { text: "MOGA 让开源再次伟大", link: "/community/moga.md" },
          ],
          "/games/": [
            { text: "DDraceNetwork", link: "/games/ddnet.md" },
            { text: "黑神话: 悟空", link: "/games/black-myth-wukong.md" },
            { text: "艾尔登法环", link: "/games/elden-ring.md" },
          ],
        },

        socialLinks: [
          { icon: "github", link: "https://github.com/Sunrisepeak" },
          { icon: "bilibili", link: "https://space.bilibili.com/65858958" },
          { icon: "youtube", link: "https://www.youtube.com/@sunrisepeak" },
          { icon: "x", link: "https://x.com/sunrisepeak_x" },
          { icon: "zhihu", link: "https://www.zhihu.com/people/SPeakShen" },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          {
            text: "Open Source",
            items: [
              { text: "Home", link: "/en/opensource/intro.md" },
              {
                text: "xlings | Package Manager",
                link: "/en/opensource/xlings.md",
              },
              {
                text: "mcpp | Interactive C++ Tutorial",
                link: "/en/opensource/mcpp-standard.md",
              },
              {
                text: "dstruct | Data Structure Library",
                link: "/en/opensource/dstruct.md",
              },
            ],
          },
          {
            text: "Thoughts",
            items: [
              {
                text: "Who am I, where do I come from, where am I going",
                link: "/en/",
              },
              { text: "Freedom and Constraints", link: "/en/" },
              { text: "Morality for Self, Law for Others", link: "/en/" },
            ],
          },
          {
            text: "Games",
            items: [
              { text: "DDraceNetwork", link: "/en/games/ddnet.md" },
              {
                text: "Black Myth: Wukong",
                link: "/en/games/black-myth-wukong.md",
              },
              { text: "Elden Ring", link: "/en/games/elden-ring.md" },
            ],
          },
          {
            text: "Life",
            items: [
              { text: "Reading", link: "/en/" },
              { text: "Walking", link: "/en/" },
              { text: "Cooking", link: "/en/" },
            ],
          },
          {
            text: "Community",
            items: [
              {
                text: "d2learn Community",
                link: "/en/community/d2learn/intro.md",
              },
              {
                text: "d2learn Open Source",
                link: "/en/community/d2learn/d2learn-opensource.md",
              },
              {
                text: "d2learn Forum",
                link: "/en/community/d2learn/d2learn-forum.md",
              },
              {
                text: "MOGA Make Open Source Great Again",
                link: "/en/community/moga.md",
              },
            ],
          },
          {
            text: "About",
            items: [
              { text: "About Me", link: "/en/about/intro.md" },
              { text: "Photo Memories", link: "/en/about/photo-memory.md" },
              { text: "Contact Me", link: "/en/about/reach-me.md" },
              { text: "Logs", link: "/en/about/recent-activity/intro.md" },
            ],
          },
        ],

        sidebar: {
          "/en/about/": [
            { text: "About Me", link: "/en/about/intro.md" },
            { text: "Photo Memories", link: "/en/about/photo-memory.md" },
            { text: "Contact Me", link: "/en/about/reach-me.md" },
            {
              text: "Logs",
              collapsed: true,
              items: [
                {
                  text: "Introduction",
                  link: "/en/about/recent-activity/intro.md",
                },
                {
                  text: "2025",
                  items: [
                    {
                      text: "2025-10",
                      link: "/en/about/recent-activity/2025/2025-10.md",
                    },
                  ],
                },
              ],
            },
          ],
          "/en/opensource/": [
            { text: "Open Source Home", link: "/en/opensource/intro.md" },
            {
              text: "xlings | Abstract Package Manager",
              link: "/en/opensource/xlings.md",
            },
            {
              text: "hanim | Animation Engine",
              link: "/en/opensource/hanim.md",
            },
            {
              text: "dstruct | Data Structure Library",
              link: "/en/opensource/dstruct.md",
            },
            {
              text: "khistory | Key Detection Visualization Tool",
              link: "/en/opensource/khistory.md",
            },
            {
              text: "mcpp | Interactive Modern C++ Tutorial",
              link: "/en/opensource/mcpp-standard.md",
            },
            {
              text: "d2ds | Interactive Data Structure Tutorial",
              link: "/en/opensource/d2ds.md",
            },
          ],
          "/en/community/": [
            {
              text: "[ d2learn Community ]",
              items: [
                {
                  text: "Introduction",
                  link: "/en/community/d2learn/intro.md",
                },
                {
                  text: "d2learn Open Source",
                  link: "/en/community/d2learn/d2learn-opensource.md",
                },
                {
                  text: "d2learn Forum",
                  link: "/en/community/d2learn/d2learn-forum.md",
                },
              ],
            },
            {
              text: "MOGA Make Open Source Great Again",
              link: "/en/community/moga.md",
            },
          ],
          "/en/games/": [
            { text: "DDraceNetwork", link: "/en/games/ddnet.md" },
            {
              text: "Black Myth: Wukong",
              link: "/en/games/black-myth-wukong.md",
            },
            { text: "Elden Ring", link: "/en/games/elden-ring.md" },
          ],
        },

        socialLinks: [
          { icon: "github", link: "https://github.com/Sunrisepeak" },
          { icon: "bilibili", link: "https://space.bilibili.com/65858958" },
          { icon: "youtube", link: "https://www.youtube.com/@sunrisepeak" },
          { icon: "x", link: "https://x.com/sunrisepeak_x" },
          { icon: "zhihu", link: "https://www.zhihu.com/people/SPeakShen" },
        ],
      },
    },
  },

  themeConfig: {
    // Global theme config that applies to all locales
    search: {
      provider: "local",
    },
  },
});
