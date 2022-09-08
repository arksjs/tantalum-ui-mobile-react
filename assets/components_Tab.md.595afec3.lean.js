import{_ as t,c as p,a as o,w as e,b as n,d as a,e as c,r as l,o as u}from"./app.b5295bad.js";const f='{"title":"Tab \u6807\u7B7E\u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"TabOptions","slug":"taboptions"},{"level":3,"title":"BadgeOption","slug":"badgeoption"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"onChange \u7684\u56DE\u8C03\u53C2\u6570","slug":"onchange-\u7684\u56DE\u8C03\u53C2\u6570"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/Tab.md"}',r={},i=n("h1",{id:"tab-\u6807\u7B7E\u5217\u8868",tabindex:"-1"},[a("Tab \u6807\u7B7E\u5217\u8868 "),n("a",{class:"header-anchor",href:"#tab-\u6807\u7B7E\u5217\u8868","aria-hidden":"true"},"#")],-1),k=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" AkTab"),n("span",{class:"token punctuation"},","),a(" AkGroup"),n("span",{class:"token punctuation"},","),a(" TabOnChange"),n("span",{class:"token punctuation"},","),a(" showToast "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" shortTabList"),n("span",{class:"token punctuation"},","),a(" tabList"),n("span",{class:"token punctuation"},","),a(" mixTabList"),n("span",{class:"token punctuation"},","),a(" subTabList "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'./data'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpTab"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" onChange"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"TabOnChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(" index"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'change'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},","),a(" index"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5207\u6362\u5230\u7B2C"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"\u4E2A"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-tab-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkTab")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("shortTabList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6EDA\u52A8\uFF08\u9608\u503C scrollThreshold = 4\uFF09"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-tab-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkTab")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("tabList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-tab-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkTab")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("mixTabList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token attr-name"},"activeValue"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5E26\u526F\u6807\u7B7E"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-tab-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkTab")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("subTabList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("change \u4E8B\u4EF6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-tab-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkTab")]),a(),n("span",{class:"token attr-name"},"options"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("shortTabList"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onChange"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),d=c("",26);function g(b,h,m,v,y,x){const s=l("CodeDemo");return u(),p("div",null,[i,o(s,{name:"Tab"},{default:e(()=>[k]),_:1}),d])}var _=t(r,[["render",g]]);export{f as __pageData,_ as default};
