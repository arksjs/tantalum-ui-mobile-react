import{_ as t,c as e,a as p,w as o,b as n,d as a,e as c,r as l,o as u}from"./app.c046e390.js";const x='{"title":"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"SwipeCellButtonOption \u7684\u7ED3\u6784","slug":"swipecellbuttonoption-\u7684\u7ED3\u6784"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"\u88AB\u6302\u8F7D\u5143\u7D20\uFF08children\uFF09","slug":"\u88AB\u6302\u8F7D\u5143\u7D20\uFF08children\uFF09"}],"relativePath":"components/SwipeCell.md"}',i={},k=n("h1",{id:"swipecell-\u6ED1\u52A8\u5355\u5143\u683C",tabindex:"-1"},[a("SwipeCell \u6ED1\u52A8\u5355\u5143\u683C "),n("a",{class:"header-anchor",href:"#swipecell-\u6ED1\u52A8\u5355\u5143\u683C","aria-hidden":"true"},"#")],-1),r=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  TaSwipeCell`),n("span",{class:"token punctuation"},","),a(`
  TaCell`),n("span",{class:"token punctuation"},","),a(`
  TaGroup`),n("span",{class:"token punctuation"},","),a(`
  showToast`),n("span",{class:"token punctuation"},","),a(`
  SwipeCellButtonOption`),n("span",{class:"token punctuation"},","),a(`
  SwipeCellOnButtonClick
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" buttons"),n("span",{class:"token operator"},":"),a(" SwipeCellButtonOption"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    text`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u52A0\u5165\u6536\u85CF'"),n("span",{class:"token punctuation"},","),a(`
    type`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'warning'"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    text`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5220\u9664'"),n("span",{class:"token punctuation"},","),a(`
    type`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'danger'"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpSwipeCell"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" onButtonClick"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"SwipeCellOnButtonClick"),a(),n("span",{class:"token operator"},"="),a(" e "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onButtonClick'"),n("span",{class:"token punctuation"},","),a(" e"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u70B9\u51FB\u4E86 "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("e"),n("span",{class:"token punctuation"},"."),a("item"),n("span",{class:"token punctuation"},"."),a("text"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaSwipeCell")]),a(),n("span",{class:"token attr-name"},"buttons"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("buttons"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5355\u5143\u683C"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5411\u5DE6\u5212"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaSwipeCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(" \u4E8B\u4EF6\u76D1\u542C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaSwipeCell")]),a(),n("span",{class:"token attr-name"},"buttons"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("buttons"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token attr-name"},"onButtonClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onButtonClick"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5355\u5143\u683C"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5411\u5DE6\u5212"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaSwipeCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),d=c("",17);function h(g,m,w,C,b,y){const s=l("CodeDemo");return u(),e("div",null,[k,p(s,{name:"SwipeCell"},{default:o(()=>[r]),_:1}),d])}var S=t(i,[["render",h]]);export{x as __pageData,S as default};