import{_ as a,c as o,a as e,w as p,b as n,d as t,e as c,r as l,o as u}from"./app.b5295bad.js";const x='{"title":"ImagePreview \u56FE\u7247\u9884\u89C8","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"onChange \u7684\u56DE\u8C03\u53C2\u6570","slug":"onchange-\u7684\u56DE\u8C03\u53C2\u6570"},{"level":3,"title":"VisibleState \u503C\u8BF4\u660E","slug":"visiblestate-\u503C\u8BF4\u660E"},{"level":2,"title":"showImagePreview(object)","slug":"showimagepreview-object"},{"level":3,"title":"object","slug":"object"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"components/ImagePreview.md"}',i={},k=n("h1",{id:"imagepreview-\u56FE\u7247\u9884\u89C8",tabindex:"-1"},[t("ImagePreview \u56FE\u7247\u9884\u89C8 "),n("a",{class:"header-anchor",href:"#imagepreview-\u56FE\u7247\u9884\u89C8","aria-hidden":"true"},"#")],-1),r=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(`
  AkCell`),n("span",{class:"token punctuation"},","),t(`
  AkGroup`),n("span",{class:"token punctuation"},","),t(`
  AkImagePreview`),n("span",{class:"token punctuation"},","),t(`
  showImagePreview`),n("span",{class:"token punctuation"},","),t(`
  PopupOnVisibleStateChange`),n("span",{class:"token punctuation"},","),t(`
  PopupOnCancel`),n("span",{class:"token punctuation"},","),t(`
  showToast
`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@/index'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useRef"),n("span",{class:"token punctuation"},","),t(" useState "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'react'"),t(`

`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"showArgs"),t(),n("span",{class:"token punctuation"},"{"),t(`
  current`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"string"),t(`
  showClose`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"boolean"),t(`
  maskClosable`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"boolean"),t(`
  callbackEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"boolean"),t(`
  visibleEvent`),n("span",{class:"token operator"},"?"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"boolean"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" imageUrls "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
  `),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-1.jpg'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-2.jpg'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-3.jpg'"),t(`
`),n("span",{class:"token punctuation"},"]"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"ExpImagePreview"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("current"),n("span",{class:"token punctuation"},","),t(" setCurrent"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("showClose"),n("span",{class:"token punctuation"},","),t(" setShowClose"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("maskClosable"),n("span",{class:"token punctuation"},","),t(" setMaskClosable"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("visible"),n("span",{class:"token punctuation"},","),t(" setVisible"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" callbackEvent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" visibleEvent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`

  `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),t("args"),n("span",{class:"token operator"},":"),t(" showArgs "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setCurrent"),n("span",{class:"token punctuation"},"("),t("args"),n("span",{class:"token punctuation"},"."),t("current "),n("span",{class:"token operator"},"||"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token function"},"setShowClose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),t("args"),n("span",{class:"token punctuation"},"."),t("showClose"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token function"},"setMaskClosable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),t("args"),n("span",{class:"token punctuation"},"."),t("maskClosable"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`

    callbackEvent`),n("span",{class:"token punctuation"},"."),t("current "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),t("args"),n("span",{class:"token punctuation"},"."),t(`callbackEvent
    visibleEvent`),n("span",{class:"token punctuation"},"."),t("current "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),t("args"),n("span",{class:"token punctuation"},"."),t(`visibleEvent
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" onVisibleStateChange"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function-variable function"},"PopupOnVisibleStateChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" state "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("visibleEvent"),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onVisibleStateChange'"),n("span",{class:"token punctuation"},","),t(" state"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("state"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \u4E8B\u4EF6\u89E6\u53D1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("state "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'hidden'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      callbackEvent`),n("span",{class:"token punctuation"},"."),t("current "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
      visibleEvent`),n("span",{class:"token punctuation"},"."),t("current "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("url"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),t(" index"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("callbackEvent"),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'change'"),n("span",{class:"token punctuation"},","),t(" index"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5207\u6362\u5230\u7B2C "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," \u5F20"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"const"),t(" onCancel"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function-variable function"},"PopupOnCancel"),t(),n("span",{class:"token operator"},"="),t(" res "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("callbackEvent"),n("span",{class:"token punctuation"},"."),t("current"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'cancel'"),n("span",{class:"token punctuation"},","),t(" res"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"\u5173\u95ED"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"onCallApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"showImagePreview"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      urls`),n("span",{class:"token operator"},":"),t(" imageUrls"),n("span",{class:"token punctuation"},","),t(`
      showClose`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      imageHighRendering`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"success"),n("span",{class:"token operator"},":"),t(" res "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),t(" res"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u9884\u89C8\u56FE\u7247"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"isLink"),t(),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u6307\u5B9A\u521D\u59CB\u56FE\u7247"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(`
            `),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
              current`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://cdn.fox2.cn/vfox/swiper/different-2.jpg'"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u5C55\u793A\u5173\u95ED\u6309\u94AE"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" showClose"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u4E8B\u4EF6\u76D1\u542C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("change/cancel"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" showClose"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(" callbackEvent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onVisibleStateChange"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onShow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" visibleEvent"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("API"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),t(`
          `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showImagePreview"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},"isLink"),t(`
          `),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"onCallApi"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkImagePreview")]),t(`
        `),n("span",{class:"token attr-name"},"urls"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("imageUrls"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"current"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("current"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"visible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("visible"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"maskClosable"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("maskClosable"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"showClose"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("showClose"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"imageHighRendering"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"onCancel"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("onCancel"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"onVisibleStateChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("onVisibleStateChange"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"onUpdateVisible"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("v "),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"setVisible"),n("span",{class:"token punctuation"},"("),t("v"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}")]),t(`
        `),n("span",{class:"token attr-name"},"onChange"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),t("onChange"),n("span",{class:"token punctuation"},"}")]),t(`
      `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),d=c("",21);function g(h,b,m,v,f,w){const s=l("CodeDemo");return u(),o("div",null,[k,e(s,{name:"ImagePreview"},{default:p(()=>[r]),_:1}),d])}var y=a(i,[["render",g]]);export{x as __pageData,y as default};
