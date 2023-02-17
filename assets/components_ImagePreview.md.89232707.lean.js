import{_ as s,c as o,a as e,w as p,b as n,d as a,e as c,r as l,o as u}from"./app.c046e390.js";const x='{"title":"ImagePreview \u56FE\u7247\u9884\u89C8","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"onChange \u7684\u56DE\u8C03\u53C2\u6570","slug":"onchange-\u7684\u56DE\u8C03\u53C2\u6570"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"showImagePreview(object)","slug":"showimagepreview-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"components/ImagePreview.md"}',i={},k=n("h1",{id:"imagepreview-\u56FE\u7247\u9884\u89C8",tabindex:"-1"},[a("ImagePreview \u56FE\u7247\u9884\u89C8 "),n("a",{class:"header-anchor",href:"#imagepreview-\u56FE\u7247\u9884\u89C8","aria-hidden":"true"},"#")],-1),r=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  TaCell`),n("span",{class:"token punctuation"},","),a(`
  TaGroup`),n("span",{class:"token punctuation"},","),a(`
  TaImagePreview`),n("span",{class:"token punctuation"},","),a(`
  showImagePreview`),n("span",{class:"token punctuation"},","),a(`
  PopupOnVisibleStateChange`),n("span",{class:"token punctuation"},","),a(`
  PopupOnCancel`),n("span",{class:"token punctuation"},","),a(`
  showToast
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useRef"),n("span",{class:"token punctuation"},","),a(" useState "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'react'"),a(`

`),n("span",{class:"token keyword"},"interface"),a(),n("span",{class:"token class-name"},"showArgs"),a(),n("span",{class:"token punctuation"},"{"),a(`
  current`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),a(`
  showClose`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
  maskClosable`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
  callbackEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
  visibleEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"boolean"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"const"),a(" imageUrls "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-1.jpg'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-2.jpg'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-3.jpg'"),a(`
`),n("span",{class:"token punctuation"},"]"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpImagePreview"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("current"),n("span",{class:"token punctuation"},","),a(" setCurrent"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("showClose"),n("span",{class:"token punctuation"},","),a(" setShowClose"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("maskClosable"),n("span",{class:"token punctuation"},","),a(" setMaskClosable"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("visible"),n("span",{class:"token punctuation"},","),a(" setVisible"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" callbackEvent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" visibleEvent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),a("args"),n("span",{class:"token operator"},":"),a(" showArgs "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setCurrent"),n("span",{class:"token punctuation"},"("),a("args"),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"setShowClose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a("showClose"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"setMaskClosable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a("maskClosable"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`

    callbackEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a(`callbackEvent
    visibleEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),a("args"),n("span",{class:"token punctuation"},"."),a(`visibleEvent
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onVisibleStateChange"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"PopupOnVisibleStateChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" state "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("visibleEvent"),n("span",{class:"token punctuation"},"."),a("current"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onVisibleStateChange'"),n("span",{class:"token punctuation"},","),a(" state"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("state"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \u4E8B\u4EF6\u89E6\u53D1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("state "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      callbackEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),a(`
      visibleEvent`),n("span",{class:"token punctuation"},"."),a("current "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),a("url"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),a(" index"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("callbackEvent"),n("span",{class:"token punctuation"},"."),a("current"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'change'"),n("span",{class:"token punctuation"},","),a(" index"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5207\u6362\u5230\u7B2C "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \u5F20"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onCancel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"PopupOnCancel"),a(),n("span",{class:"token operator"},"="),a(" res "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("callbackEvent"),n("span",{class:"token punctuation"},"."),a("current"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'cancel'"),n("span",{class:"token punctuation"},","),a(" res"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5173\u95ED"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onCallApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"showImagePreview"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      urls`),n("span",{class:"token operator"},":"),a(" imageUrls"),n("span",{class:"token punctuation"},","),a(`
      showClose`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      imageHighRendering`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"success"),n("span",{class:"token operator"},":"),a(" res "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),a(" res"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u9884\u89C8\u56FE\u7247"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"isLink"),a(),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6307\u5B9A\u521D\u59CB\u56FE\u7247"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
              current`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-2.jpg'"),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C55\u793A\u5173\u95ED\u6309\u94AE"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" showClose"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4E8B\u4EF6\u76D1\u542C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("change/cancel"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" showClose"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(" callbackEvent"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onVisibleStateChange"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" visibleEvent"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("API"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaCell")]),a(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showImagePreview"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"isLink"),a(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"onCallApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"TaGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"TaImagePreview")]),a(`
        `),n("span",{class:"token attr-name"},"urls"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("imageUrls"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"value"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("current"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"visible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("visible"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"maskClosable"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("maskClosable"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"showClose"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("showClose"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"imageHighRendering"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onCancel"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onCancel"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onVisibleStateChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onVisibleStateChange"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onUpdateVisible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("v "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),a("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),a(`
        `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onChange"),n("span",{class:"token punctuation"},"}")]),a(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),d=c("",21);function g(h,b,m,v,f,w){const t=l("CodeDemo");return u(),o("div",null,[k,e(t,{name:"ImagePreview"},{default:p(()=>[r]),_:1}),d])}var y=s(i,[["render",g]]);export{x as __pageData,y as default};