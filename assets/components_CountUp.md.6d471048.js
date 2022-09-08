import{_ as t,c as e,a as o,w as p,b as n,d as a,e as c,r as l,o as u}from"./app.b5295bad.js";const U='{"title":"CountUp \u6570\u5B57\u52A8\u753B","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"CountUpSpeed","slug":"countupspeed"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/CountUp.md"}',k={},i=n("h1",{id:"countup-\u6570\u5B57\u52A8\u753B",tabindex:"-1"},[a("CountUp \u6570\u5B57\u52A8\u753B "),n("a",{class:"header-anchor",href:"#countup-\u6570\u5B57\u52A8\u753B","aria-hidden":"true"},"#")],-1),r=n("p",null,"\u6CE8\uFF1A",-1),d=n("ul",null,[n("li",null,"\u672C\u7EC4\u4EF6\u6CA1\u6709\u6307\u5B9A\u6837\u5F0F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u53EF\u5BF9\u6587\u5B57\u6837\u5F0F\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002")],-1),m=n("div",{class:"language-tsx"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  AkCountUp`),n("span",{class:"token punctuation"},","),a(`
  AkCell`),n("span",{class:"token punctuation"},","),a(`
  AkGroup`),n("span",{class:"token punctuation"},","),a(`
  AkButton`),n("span",{class:"token punctuation"},","),a(`
  showToast`),n("span",{class:"token punctuation"},","),a(`
  CountUpOnAnimated`),n("span",{class:"token punctuation"},","),a(`
  CountUpOnCancel`),n("span",{class:"token punctuation"},","),a(`
  CountUpRef
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@/index'"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" useCallback"),n("span",{class:"token punctuation"},","),a(" useRef"),n("span",{class:"token punctuation"},","),a(" useState "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'react'"),a(`

`),n("span",{class:"token keyword"},"const"),a(" initialNumber "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"1000"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token builtin"},"number"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"5000"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"ExpCountUp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" countUpRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useRef"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),a("CountUpRef"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("number2"),n("span",{class:"token punctuation"},","),a(" setNumber2"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"["),a("isCancel"),n("span",{class:"token punctuation"},","),a(" setIsCancel"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onAnimated"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"CountUpOnAnimated"),a(),n("span",{class:"token operator"},"="),a(" e "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'animated'"),n("span",{class:"token punctuation"},","),a(" e"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u52A8\u753B\u7ED3\u675F'"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onAnimated2"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"CountUpOnAnimated"),a(),n("span",{class:"token operator"},"="),a(" e "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'animated'"),n("span",{class:"token punctuation"},","),a(" e"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" onCancel"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function-variable function"},"CountUpOnCancel"),a(),n("span",{class:"token operator"},"="),a(" e "),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'cancel'"),n("span",{class:"token punctuation"},","),a(" e"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" cancel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"useCallback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("isCancel"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      countUpRef`),n("span",{class:"token punctuation"},"."),a("current"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"cancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5DF2\u53D6\u6D88'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"setNumber2"),n("span",{class:"token punctuation"},"("),a("number2 "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"500"),a(),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token number"},"0"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token function"},"setIsCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("isCancel"),n("span",{class:"token punctuation"},")"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),a("isCancel"),n("span",{class:"token punctuation"},","),a(" number2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

  `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"("),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u57FA\u7840\u7528\u6CD5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u9ED8\u8BA4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCountUp")]),a(),n("span",{class:"token attr-name"},"number"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5343\u5206\u4F4D thousands"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCountUp")]),a(),n("span",{class:"token attr-name"},"initialNumber"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("initialNumber"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token attr-name"},"number"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token attr-name"},"thousands"),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u6570\u4F4D decimalDigits=2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCountUp")]),a(`
            `),n("span",{class:"token attr-name"},"initialNumber"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("initialNumber"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"number"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"decimalDigits"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u901F\u5EA6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("speed=slow"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCountUp")]),a(`
            `),n("span",{class:"token attr-name"},"initialNumber"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("initialNumber"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"number"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"decimalDigits"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token attr-name"},"speed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slow"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("speed=normal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCountUp")]),a(`
            `),n("span",{class:"token attr-name"},"initialNumber"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("initialNumber"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"number"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"decimalDigits"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token attr-name"},"speed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("normal"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("speed=fast"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCountUp")]),a(`
            `),n("span",{class:"token attr-name"},"initialNumber"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("initialNumber"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"number"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"decimalDigits"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token attr-name"},"speed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fast"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("speed=10000\uFF08\u56FA\u5B9A10\u79D2\u52A8\u753B\uFF09"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCountUp")]),a(`
            `),n("span",{class:"token attr-name"},"initialNumber"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("initialNumber"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"number"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token attr-name"},"decimalDigits"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token attr-name"},"speed"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"10000"),n("span",{class:"token punctuation"},"}")]),a(`
          `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkGroup")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4E8B\u4EF6\u76D1\u542C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("animated"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCountUp")]),a(),n("span",{class:"token attr-name"},"number"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("500"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"onAnimated"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onAnimated"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCell")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cancel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-countUp-box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"className"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("exp-countUp-r"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkCountUp")]),a(`
              `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("countUpRef"),n("span",{class:"token punctuation"},"}")]),a(`
              `),n("span",{class:"token attr-name"},"initialNumber"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"number"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("number2"),n("span",{class:"token punctuation"},"}")]),a(`
              `),n("span",{class:"token attr-name"},"thousands"),a(`
              `),n("span",{class:"token attr-name"},"onAnimated"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onAnimated2"),n("span",{class:"token punctuation"},"}")]),a(`
              `),n("span",{class:"token attr-name"},"onCancel"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("onCancel"),n("span",{class:"token punctuation"},"}")]),a(`
            `),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AkButton")]),a(),n("span",{class:"token attr-name"},"onClick"),n("span",{class:"token script language-javascript"},[n("span",{class:"token script-punctuation punctuation"},"="),n("span",{class:"token punctuation"},"{"),a("cancel"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
            `),n("span",{class:"token punctuation"},"{"),a("isCancel "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token string"},"'\u5F00\u59CB'"),a(),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u53D6\u6D88'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token plain-text"},`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkButton")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkCell")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),n("span",{class:"token class-name"},"AkGroup")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token plain-text"},`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),g=c(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AkCountUp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;arkui-mobile-react&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h3 id="import-type" tabindex="-1">Import Type <a class="header-anchor" href="#import-type" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span>
  CountUpSpeed<span class="token punctuation">,</span>
  CountUpOnCancel<span class="token punctuation">,</span>
  CountUpOnAnimated<span class="token punctuation">,</span>
  CountUpRef
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;arkui-mobile-react&#39;</span>
</code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>number</td><td>number</td><td>0</td><td>\u5426</td><td>\u76EE\u6807\u503C\uFF0C\u53D8\u5316\u5230\u8BE5\u6570\u503C</td></tr><tr><td>initialNumber</td><td>number</td><td>0</td><td>\u5426</td><td>\u521D\u59CB\u503C\uFF0C\u9996\u6B21\u52A8\u753B\u4F1A\u57FA\u4E8E <code>number</code> \u548C\u8BE5\u503C\u7684\u5DEE\u503C\u6765\u505A\u53D8\u5316</td></tr><tr><td>speed</td><td>CountUpSpeed</td><td>&#39;normal&#39;</td><td>\u5426</td><td>\u53EF\u9009 &#39;normal&#39;, &#39;fast&#39;, &#39;slow&#39;\uFF0C\u6216\u8005\u56FA\u5B9A\u6570\u5B57\u7684\u65F6\u95F4</td></tr><tr><td>thousands</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u4EE5\u5343\u5206\u53F7\u7684\u5F62\u5F0F\u663E\u793A\uFF0C\u5982\uFF1A&#39;1,234.56&#39;</td></tr><tr><td>decimalDigits</td><td>number</td><td>0</td><td>\u5426</td><td>\u4FDD\u7559 <code>decimalDigits</code> \u5C0F\u6570\u4F4D\u6570</td></tr></tbody></table><h3 id="countupspeed" tabindex="-1">CountUpSpeed <a class="header-anchor" href="#countupspeed" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">CountUpSpeed</span> <span class="token operator">=</span> <span class="token string">&#39;normal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;fast&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;slow&#39;</span> <span class="token operator">|</span> <span class="token builtin">number</span>
</code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th><th>TypeScript \u51FD\u6570</th></tr></thead><tbody><tr><td>onAnimated</td><td>\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1\uFF0C\u4E3B\u52A8\u53D6\u6D88\u4E5F\u4F1A\u89E6\u53D1</td><td>payload: { number: number } number \u4E3A\u5F53\u524D\u6570\u503C</td><td>CountUpOnAnimated</td></tr><tr><td>onCancel</td><td>\u53D6\u6D88\u6210\u529F\u65F6\u89E6\u53D1</td><td>payload: { number: number } number \u4E3A\u5F53\u524D\u6570\u503C</td><td>CountUpOnCancel</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>onCancel</td><td>\u53D6\u6D88\u53D8\u5316</td><td></td></tr></tbody></table>`,14);function b(h,C,v,f,x,A){const s=l("CodeDemo");return u(),e("div",null,[i,r,d,o(s,{name:"CountUp"},{default:p(()=>[m]),_:1}),g])}var _=t(k,[["render",b]]);export{U as __pageData,_ as default};
