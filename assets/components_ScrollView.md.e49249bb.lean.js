import{_ as t,c as o,a as p,w as e,b as n,d as a,e as c,r as l,o as u}from"./app.b5295bad.js";const V='{"title":"ScrollView \u6EDA\u52A8\u533A","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"children","slug":"children"},{"level":3,"title":"\u4E0B\u62C9\u6307\u793A\u5668\uFF08renderIndicator\uFF09","slug":"\u4E0B\u62C9\u6307\u793A\u5668\uFF08renderindicator\uFF09"}],"relativePath":"components/ScrollView.md"}',k={},i=n("h1",{id:"scrollview-\u6EDA\u52A8\u533A",tabindex:"-1"},[a("ScrollView \u6EDA\u52A8\u533A "),n("a",{class:"header-anchor",href:"#scrollview-\u6EDA\u52A8\u533A","aria-hidden":"true"},"#")],-1),r=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  AkScrollView`),n("span",{class:"token punctuation"},","),a(`
  AkGroup`),n("span",{class:"token punctuation"},","),a(`
  ScrollViewOnRefreshing`),n("span",{class:"token punctuation"},","),a(`
  ScrollViewOnScrollToLower`),n("span",{class:"token punctuation"},","),a(`
  ScrollViewOnScrollToUpper`),n("span",{class:"token punctuation"},","),a(`
  showToast
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpScrollView"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" onRefreshing"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"ScrollViewOnRefreshing"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("res"),n("span",{class:"token punctuation"},","),a(" done"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onScrollUpper"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"ScrollViewOnScrollToUpper"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" direction "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u6EDA\u52A8\u5230 "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("direction"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onScrollLower"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"ScrollViewOnScrollToLower"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" direction "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u6EDA\u52A8\u5230 "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("direction"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5782\u76F4\u6EDA\u52A8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkScrollView")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-box"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"scrollY"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-h-400"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u5782\u76F4\u6EDA\u52A8\u6761"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},'scrollY="true"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkScrollView")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6C34\u5E73\u6EDA\u52A8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkScrollView")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-box"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"scrollX"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-w-750"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},'\u6C34\u5E73\u6EDA\u52A8\u6761 scrollX="true"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkScrollView")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4E8B\u4EF6\u76D1\u542C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkScrollView")]),a(`
          `),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-box"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"scrollX"),a(`
          `),n("span",{class:"token attr-name"},"scrollY"),a(`
          `),n("span",{class:"token attr-name"},"onScrollToUpper"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onScrollUpper"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"onScrollToLower"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onScrollLower"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-wh"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u5782\u76F4\u6C34\u5E73\u6EDA\u52A8\u6761"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},'scrollY="true"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},'scrollX="true"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u76D1\u542C\u5230\u9876/\u5E95/\u6700\u5DE6/\u6700\u53F3\u7684\u4E8B\u4EF6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkScrollView")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4E0B\u62C9\u5237\u65B0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkScrollView")]),a(`
          `),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-box"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"enablePullDirections"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'down'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'up'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"scrollY"),a(`
          `),n("span",{class:"token attr-name"},"onRefreshing"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onRefreshing"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-h-400"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u5F00\u542F4\u4E2A\u65B9\u5411\u7684\u62C9\u52A8\u5237\u65B0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},'scrollY="true"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`enablePullDirections="['down', 'right', 'up', 'left']"`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u7531\u4E8E\u6709 scrollY\uFF0C\u4E0A\u62C9\u5237\u65B0\u8981\u5148\u6EDA\u5230\u6700\u5E95\u90E8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkScrollView")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4E0B\u62C9\u5237\u65B0\uFF08\u81EA\u5B9A\u4E49\u6307\u793A\u5668\uFF09"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkScrollView")]),a(`
          `),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-box"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"enablePullDirections"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("down"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"scrollY"),a(`
          `),n("span",{class:"token attr-name"},"onRefreshing"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onRefreshing"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token attr-name"},"renderIndicator"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("slotProps "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
              \u65B9\u5411\uFF1A`),n("span",{class:"token punctuation"},"{"),a("slotProps"),n("span",{class:"token punctuation"},"."),a("pullDirection"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"}," \u72B6\u6001\uFF1A"),n("span",{class:"token punctuation"},"{"),a("slotProps"),n("span",{class:"token punctuation"},"."),a("pullRefreshState"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-scrollView-h-400"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},"\u81EA\u5B9A\u4E0B\u62C9\u4E49\u6307\u793A\u5668"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},'scrollY="true"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},'enablePullDirections="down"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkScrollView")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),d=c("",17);function g(h,m,x,w,S,v){const s=l("CodeDemo");return u(),o("div",null,[i,p(s,{name:"ScrollView"},{default:e(()=>[r]),_:1}),d])}var b=t(k,[["render",g]]);export{V as __pageData,b as default};
