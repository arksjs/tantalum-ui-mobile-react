import{_ as t,c as p,a as o,w as e,b as a,d as n,e as c,r as l,o as r}from"./app.c046e390.js";const f='{"title":"TabBar \u6807\u7B7E\u5217","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"TabBarOptions","slug":"tabbaroptions"},{"level":3,"title":"BadgeOption","slug":"badgeoption"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"onChange \u7684\u56DE\u8C03\u53C2\u6570","slug":"onchange-\u7684\u56DE\u8C03\u53C2\u6570"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/TabBar.md"}',u={},i=a("h1",{id:"tabbar-\u6807\u7B7E\u5217",tabindex:"-1"},[n("TabBar \u6807\u7B7E\u5217 "),a("a",{class:"header-anchor",href:"#tabbar-\u6807\u7B7E\u5217","aria-hidden":"true"},"#")],-1),k=a("div",{class:"language-tsx"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" TaTabBar"),a("span",{class:"token punctuation"},","),n(" TaFixed"),a("span",{class:"token punctuation"},","),n(" TaGroup "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'@/index'"),n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" baseList"),a("span",{class:"token punctuation"},","),n(" badgeList"),a("span",{class:"token punctuation"},","),n(" imageList "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'./data'"),n(`
`),a("span",{class:"token keyword"},"import"),n(" TaobaoSvg "),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'../../../assets/icons/taobao.svg?jsx'"),n(`
`),a("span",{class:"token keyword"},"import"),n(" QqSvg "),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'../../../assets/icons/qq.svg?jsx'"),n(`
`),a("span",{class:"token keyword"},"import"),n(" WechatSvg "),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'../../../assets/icons/wechat.svg?jsx'"),n(`
`),a("span",{class:"token keyword"},"import"),n(" WeiboSvg "),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'../../../assets/icons/weibo.svg?jsx'"),n(`

`),a("span",{class:"token keyword"},"const"),n(" customIconList "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"["),n(`
  `),a("span",{class:"token punctuation"},"{"),n(`
    value`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'wechat'"),a("span",{class:"token punctuation"},","),n(`
    label`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'\u5FAE\u4FE1'"),a("span",{class:"token punctuation"},","),n(`
    icon`),a("span",{class:"token operator"},":"),n(` WechatSvg
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(`
    value`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'qq'"),a("span",{class:"token punctuation"},","),n(`
    label`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'QQ'"),a("span",{class:"token punctuation"},","),n(`
    icon`),a("span",{class:"token operator"},":"),n(` QqSvg
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(`
    value`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'weibo'"),a("span",{class:"token punctuation"},","),n(`
    label`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'\u5FAE\u535A'"),a("span",{class:"token punctuation"},","),n(`
    icon`),a("span",{class:"token operator"},":"),n(` WeiboSvg
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(`
    value`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'taobao'"),a("span",{class:"token punctuation"},","),n(`
    label`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'\u6DD8\u5B9D'"),a("span",{class:"token punctuation"},","),n(`
    icon`),a("span",{class:"token operator"},":"),n(` TaobaoSvg
  `),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"]"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token keyword"},"function"),n(),a("span",{class:"token function"},"ExpTabBar"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"("),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u57FA\u7840\u7528\u6CD5"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaTabBar")]),n(),a("span",{class:"token attr-name"},"options"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("baseList"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u5FBD\u6807"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaTabBar")]),n(),a("span",{class:"token attr-name"},"options"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("badgeList"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u81EA\u5B9A\u4E49\u56FE\u6807"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaTabBar")]),n(),a("span",{class:"token attr-name"},"options"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("customIconList"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u81EA\u5B9A\u4E49\u989C\u8272"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaTabBar")]),n(`
          `),a("span",{class:"token attr-name"},"color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("#8B8DB8"),a("span",{class:"token punctuation"},'"')]),n(`
          `),a("span",{class:"token attr-name"},"activeColor"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("#ffffff"),a("span",{class:"token punctuation"},'"')]),n(`
          `),a("span",{class:"token attr-name"},"style"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"{"),n(" backgroundColor"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},"'#6667ab'"),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"}")]),n(`
          `),a("span",{class:"token attr-name"},"options"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("baseList"),a("span",{class:"token punctuation"},"}")]),n(`
        `),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u81EA\u5B9A\u4E49\u56FE\u7247\uFF08icon=URL\uFF09"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaTabBar")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-tabBar-custom"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"options"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("imageList"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u914D\u5408 Fixed \u5B9E\u73B0\u7F6E\u5E95"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaFixed")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"TaTabBar")]),n(),a("span",{class:"token attr-name"},"options"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("baseList"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaFixed")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"TaGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token punctuation"},")"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])])],-1),d=c("",27);function g(b,h,m,v,y,T){const s=l("CodeDemo");return r(),p("div",null,[i,o(s,{name:"TabBar"},{default:e(()=>[k]),_:1}),d])}var w=t(u,[["render",g]]);export{f as __pageData,w as default};