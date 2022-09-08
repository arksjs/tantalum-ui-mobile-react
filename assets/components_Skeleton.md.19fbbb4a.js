import{_ as t,c as e,a as p,w as o,b as a,d as n,e as c,r as l,o as k}from"./app.b5295bad.js";const A='{"title":"Skeleton \u9AA8\u67B6\u5C4F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":3,"title":"Import Type","slug":"import-type"},{"level":2,"title":"Skeleton Props","slug":"skeleton-props"},{"level":2,"title":"Skeleton Slots","slug":"skeleton-slots"},{"level":3,"title":"children","slug":"children"},{"level":3,"title":"\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08renderLayout\uFF09","slug":"\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08renderlayout\uFF09"},{"level":2,"title":"SkeletonAvatar Props","slug":"skeletonavatar-props"},{"level":2,"title":"SkeletonImage Props","slug":"skeletonimage-props"},{"level":2,"title":"SkeletonTitle Props","slug":"skeletontitle-props"},{"level":2,"title":"SkeletonParagraph Props","slug":"skeletonparagraph-props"},{"level":2,"title":"SkeletonButton Props","slug":"skeletonbutton-props"}],"relativePath":"components/Skeleton.md"}',u={},i=a("h1",{id:"skeleton-\u9AA8\u67B6\u5C4F",tabindex:"-1"},[n("Skeleton \u9AA8\u67B6\u5C4F "),a("a",{class:"header-anchor",href:"#skeleton-\u9AA8\u67B6\u5C4F","aria-hidden":"true"},"#")],-1),r=a("div",{class:"language-tsx"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(`
  AkSkeleton`),a("span",{class:"token punctuation"},","),n(`
  AkGroup`),a("span",{class:"token punctuation"},","),n(`
  AkIcon`),a("span",{class:"token punctuation"},","),n(`
  AkSwitch`),a("span",{class:"token punctuation"},","),n(`
  SkeletonAvatarShape`),a("span",{class:"token punctuation"},","),n(`
  SkeletonButtonShape
`),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'@/index'"),n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" useState "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'react'"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token keyword"},"function"),n(),a("span",{class:"token function"},"ExpSkeleton"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("animated"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("avatarShape"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token generic-function"},[a("span",{class:"token function"},"useState"),a("span",{class:"token generic class-name"},[a("span",{class:"token operator"},"<"),n("SkeletonAvatarShape"),a("span",{class:"token operator"},">")])]),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'circle'"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("buttonShape"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token generic-function"},[a("span",{class:"token function"},"useState"),a("span",{class:"token generic class-name"},[a("span",{class:"token operator"},"<"),n("SkeletonButtonShape"),a("span",{class:"token operator"},">")])]),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'default'"),a("span",{class:"token punctuation"},")"),n(`
  `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token punctuation"},"["),n("loading"),a("span",{class:"token punctuation"},","),n(" setLoading"),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"useState"),a("span",{class:"token punctuation"},"("),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},")"),n(`

  `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"("),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u57FA\u7840\u7528\u6CD5"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSkeleton")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"AkGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u663E\u793A\u5934\u50CF"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSkeleton")]),n(),a("span",{class:"token attr-name"},"avatar"),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"AkGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u5E26\u52A8\u753B"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSkeleton")]),n(),a("span",{class:"token attr-name"},"avatar"),n(),a("span",{class:"token attr-name"},"animated"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("animated"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token attr-name"},"avatarShape"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("avatarShape"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"AkGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u663E\u793A\u5B50\u7EC4\u4EF6"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-switch"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSwitch")]),n(),a("span",{class:"token attr-name"},"value"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("loading"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token attr-name"},"onChange"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("setLoading"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSkeleton")]),n(),a("span",{class:"token attr-name"},"avatar"),n(),a("span",{class:"token attr-name"},"loading"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token operator"},"!"),n("loading"),a("span",{class:"token punctuation"},"}")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-sub-component"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkIcon")]),n(),a("span",{class:"token attr-name"},"icon"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("HeartFilled"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("32"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h4")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("title"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},"hello World"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h4")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("p")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("paragraph"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},"\u7B80\u5355\u4E0D\u5148\u4E8E\u590D\u6742\uFF0C\u800C\u662F\u5728\u590D\u6742\u4E4B\u540E\u3002"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("p")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
            `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"AkSkeleton")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"AkGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkGroup")]),n(),a("span",{class:"token attr-name"},"title"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("\u81EA\u7531\u7EC4\u5408"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-panel"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
          `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSkeleton")]),n(`
            `),a("span",{class:"token attr-name"},"className"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("exp-skeleton-custom"),a("span",{class:"token punctuation"},'"')]),n(`
            `),a("span",{class:"token attr-name"},"buttonShape"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),n("buttonShape"),a("span",{class:"token punctuation"},"}")]),n(`
            `),a("span",{class:"token attr-name"},"renderLayout"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"("),n(`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
                `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSkeleton.Image")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
                `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSkeleton.Title")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
                `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSkeleton.Paragraph")]),n(),a("span",{class:"token attr-name"},"row"),a("span",{class:"token script language-javascript"},[a("span",{class:"token script-punctuation punctuation"},"="),a("span",{class:"token punctuation"},"{"),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},"}")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
                `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),a("span",{class:"token class-name"},"AkSkeleton.Button")]),n(),a("span",{class:"token punctuation"},"/>")]),a("span",{class:"token plain-text"},`
              `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</")]),a("span",{class:"token punctuation"},">")]),n(`
            `),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}")]),n(`
          `),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"AkSkeleton")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),a("span",{class:"token class-name"},"AkGroup")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token plain-text"},`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token punctuation"},")"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])])],-1),d=c(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AkSkeleton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;arkui-mobile-react&#39;</span>
</code></pre></div><p>\u5982\u679C\u60F3\u8981\u81EA\u5B9A\u4E49\u5E03\u5C40\uFF0C\u53EF\u4EE5\u518D\u5F15\u5165\u5B50\u7EC4\u4EF6\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  SkeletonAvatar<span class="token punctuation">,</span>
  SkeletonImage<span class="token punctuation">,</span>
  SkeletonTitle<span class="token punctuation">,</span>
  SkeletonParagraph<span class="token punctuation">,</span>
  SkeletonButton
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;arkui-mobile-react&#39;</span>
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../guide/import.html">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h3 id="import-type" tabindex="-1">Import Type <a class="header-anchor" href="#import-type" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u7684\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span>
  SkeletonAvatarShape<span class="token punctuation">,</span>
  SkeletonButtonShape
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;arkui-mobile-react&#39;</span>
</code></pre></div><h2 id="skeleton-props" tabindex="-1">Skeleton Props <a class="header-anchor" href="#skeleton-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>loading</td><td>boolean</td><td>true</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u9AA8\u67B6\u5C4F\uFF0C\u4F20 false \u65F6\u4F1A\u5C55\u793A\u5B50\u7EC4\u4EF6\u5185\u5BB9</td></tr><tr><td>avatar</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u663E\u793A\u5934\u50CF\u5360\u4F4D\u56FE</td></tr><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B</td></tr><tr><td>avatarShape</td><td>SkeletonAvatarShape</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u53EF\u9009 &#39;default&#39;, &#39;circle&#39;</td></tr><tr><td>buttonShape</td><td>SkeletonButtonShape</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u53EF\u9009 &#39;default&#39;, &#39;round&#39;</td></tr><tr><td>paragraphRow</td><td>number</td><td>3</td><td>\u5426</td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u6570</td></tr></tbody></table><h2 id="skeleton-slots" tabindex="-1">Skeleton Slots <a class="header-anchor" href="#skeleton-slots" aria-hidden="true">#</a></h2><h3 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-hidden="true">#</a></h3><div class="language-tsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AkSkeleton</span></span> <span class="token attr-name">avatar</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exp-skeleton-sub-component<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AkIcon</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HeartFilled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>32<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>paragraph<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u7B80\u5355\u4E0D\u5148\u4E8E\u590D\u6742\uFF0C\u800C\u662F\u5728\u590D\u6742\u4E4B\u540E\u3002</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AkSkeleton</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08renderlayout\uFF09" tabindex="-1">\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08renderLayout\uFF09 <a class="header-anchor" href="#\u9AA8\u67B6\u5C4F\u91CD\u65B0\u5E03\u5C40\uFF08renderlayout\uFF09" aria-hidden="true">#</a></h3><p>\u8FD8\u53EF\u4EE5\u901A\u8FC7 <code>renderLayout</code> \u91CD\u65B0\u7EC4\u5408\u9AA8\u67B6\u5C4F\uFF0C\u76EE\u524D\u63D0\u4F9B <a href="./Skeleton.html#skeletonavatar-props">SkeletonAvatar</a>\u3001<a href="./Skeleton.html#skeletonimage-props">SkeletonImage</a>\u3001<a href="./Skeleton.html#skeletontitle-props">SkeletonTitle</a>\u3001<a href="./Skeleton.html#skeletonparagraph-props">SkeletonParagraph</a>\u3001<a href="./Skeleton.html#skeletonbutton-props">SkeletonButton</a> 5 \u6B3E\u5B50\u7EC4\u4EF6\u3002</p><div class="language-tsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AkSkeleton</span></span>
  <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exp-skeleton-custom<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">buttonShape</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>buttonShape<span class="token punctuation">}</span></span>
  <span class="token attr-name">renderLayout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AkSkeleton.Image</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AkSkeleton.Title</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AkSkeleton.Paragraph</span></span> <span class="token attr-name">row</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AkSkeleton.Button</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">AkSkeleton</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="skeletonavatar-props" tabindex="-1">SkeletonAvatar Props <a class="header-anchor" href="#skeletonavatar-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>shape</td><td>SkeletonAvatarShape</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u53EF\u9009 &#39;default&#39;, &#39;circle&#39;</td></tr><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table><h2 id="skeletonimage-props" tabindex="-1">SkeletonImage Props <a class="header-anchor" href="#skeletonimage-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table><h2 id="skeletontitle-props" tabindex="-1">SkeletonTitle Props <a class="header-anchor" href="#skeletontitle-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table><h2 id="skeletonparagraph-props" tabindex="-1">SkeletonParagraph Props <a class="header-anchor" href="#skeletonparagraph-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>row</td><td>number</td><td>3</td><td>\u5426</td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u6570</td></tr><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table><h2 id="skeletonbutton-props" tabindex="-1">SkeletonButton Props <a class="header-anchor" href="#skeletonbutton-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>shape</td><td>SkeletonButtonShape</td><td>&#39;default&#39;</td><td>\u5426</td><td>\u53EF\u9009 &#39;default&#39;, &#39;round&#39;</td></tr><tr><td>animated</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B\uFF0C\u4EC5\u5728\u5355\u72EC\u4F7F\u7528\u5934\u50CF\u9AA8\u67B6\u65F6\u751F\u6548</td></tr></tbody></table>`,26);function g(h,m,v,S,x,b){const s=l("CodeDemo");return k(),e("div",null,[i,p(s,{name:"Skeleton"},{default:o(()=>[r]),_:1}),d])}var y=t(u,[["render",g]]);export{A as __pageData,y as default};
