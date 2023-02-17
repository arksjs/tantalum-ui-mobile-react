import{_ as t,c as o,a as e,w as p,b as n,d as a,e as c,r as l,o as u}from"./app.c046e390.js";const y='{"title":"Drawer \u62BD\u5C49","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"children","slug":"children"}],"relativePath":"components/Drawer.md"}',k={},i=n("h1",{id:"drawer-\u62BD\u5C49",tabindex:"-1"},[a("Drawer \u62BD\u5C49 "),n("a",{class:"header-anchor",href:"#drawer-\u62BD\u5C49","aria-hidden":"true"},"#")],-1),r=n("p",null,"\u7528\u4E8E\u5728\u5C4F\u5E55\u8FB9\u7F18\u663E\u793A\u5E94\u7528\u5BFC\u822A\u7B49\u5185\u5BB9\u7684\u9762\u677F\u3002",-1),d=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  TaDrawer`),n("span",{class:"token punctuation"},","),a(`
  TaCell`),n("span",{class:"token punctuation"},","),a(`
  TaGroup`),n("span",{class:"token punctuation"},","),a(`
  PlacementType`),n("span",{class:"token punctuation"},","),a(`
  showToast`),n("span",{class:"token punctuation"},","),a(`
  PopupOnVisibleStateChange`),n("span",{class:"token punctuation"},","),a(`
  PopupOnCancel
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useRef"),n("span",{class:"token punctuation"},","),a(" useState "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'react'"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"showArgs"),a(),n("span",{class:"token punctuation"},"{"),a(`
  title`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),a(`
  placement`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(` PlacementType
  showClose`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
  visibleEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
  cancelEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpDrawer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("visible"),n("span",{class:"token punctuation"},","),a(" setVisible"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("title"),n("span",{class:"token punctuation"},","),a(" setTitle"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("placement"),n("span",{class:"token punctuation"},","),a(" setPlacement"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useState"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),a("PlacementType"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("showClose"),n("span",{class:"token punctuation"},","),a(" setShowClose"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" visibleEvent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" cancelEvent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),a("args"),n("span",{class:"token operator"},":"),a(" showArgs"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setTitle"),n("span",{class:"token punctuation"},"("),a("args"),n("span",{class:"token punctuation"},"."),a("title "),n("span",{class:"token operator"},"??"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"setPlacement"),n("span",{class:"token punctuation"},"("),a("args"),n("span",{class:"token punctuation"},"."),a("placement"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"setShowClose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a("showClose"),n("span",{class:"token punctuation"},")"),a(`

    visibleEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a(`visibleEvent
    cancelEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a(`cancelEvent

    `),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onVisibleStateChange"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"PopupOnVisibleStateChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" state "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("visibleEvent"),n("span",{class:"token punctuation"},"."),a("current"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onVisibleStateChange'"),n("span",{class:"token punctuation"},","),a(" state"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("state"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \u4E8B\u4EF6\u89E6\u53D1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("state "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      visibleEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),a(`
      cancelEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onCancel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"PopupOnCancel"),a(),n("span",{class:"token operator"},"="),a(" res "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("cancelEvent"),n("span",{class:"token punctuation"},"."),a("current"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'cancel'"),n("span",{class:"token punctuation"},","),a(" res"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u53D6\u6D88'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u9876\u90E8\u5F39\u51FA"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u9876\u90E8\u5F39\u51FA'"),n("span",{class:"token punctuation"},","),a(" placement"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'top'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5E95\u90E8\u5F39\u51FA"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E95\u90E8\u5F39\u51FA'"),n("span",{class:"token punctuation"},","),a(" placement"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5DE6\u4FA7\u5F39\u51FA"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5DE6\u4FA7\u5F39\u51FA'"),n("span",{class:"token punctuation"},","),a(" placement"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'left'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u53F3\u4FA7\u5F39\u51FA"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u53F3\u4FA7\u5F39\u51FA'"),n("span",{class:"token punctuation"},","),a(" placement"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'right'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u65E0\u6807\u9898"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5E95\u90E8\u5F39\u51FA"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" placement"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u53F3\u4FA7\u5F39\u51FA"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" placement"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'right'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C55\u793A\u5173\u95ED\u6309\u94AE"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6709\u6807\u9898-\u5E95\u90E8"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6807\u9898'"),n("span",{class:"token punctuation"},","),a(" placement"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),a(" showClose"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6709\u6807\u9898-\u53F3\u4FA7"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6807\u9898'"),n("span",{class:"token punctuation"},","),a(" placement"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),a(" showClose"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u65E0\u6807\u9898"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" placement"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),a(" showClose"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4E8B\u4EF6\u76D1\u542C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onVisibleStateChange"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
              title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6807\u9898'"),n("span",{class:"token punctuation"},","),a(`
              placement`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),a(`
              showClose`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
              visibleEvent`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cancel"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
              title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6807\u9898'"),n("span",{class:"token punctuation"},","),a(`
              placement`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),a(`
              showClose`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
              cancelEvent`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaDrawer")]),a(`
        `),n("span",{class:"token attr-name"},"visible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("visible"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("title"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"placement"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("placement"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"showClose"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("showClose"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onUpdateVisible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("v "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),a("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onVisibleStateChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onVisibleStateChange"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onCancel"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onCancel"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),g=c("",15);function m(h,b,v,f,C,w){const s=l("CodeDemo");return u(),o("div",null,[i,r,e(s,{name:"Drawer"},{default:p(()=>[d]),_:1}),g])}var x=t(k,[["render",m]]);export{y as __pageData,x as default};