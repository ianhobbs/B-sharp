const{DateTime:DateTime}=require("luxon"),fs=require("fs"),pluginNavigation=require("@11ty/eleventy-navigation"),markdownIt=require("markdown-it"),markdownitlinkatt=require("markdown-it-link-attributes"),pluginRss=require("@11ty/eleventy-plugin-rss"),pluginSyntaxHighlight=require("@11ty/eleventy-plugin-syntaxhighlight"),markdownItAnchor=require("markdown-it-anchor");module.exports=function(t){t.addWatchTarget("./src/css/styles.css"),t.addPassthroughCopy("./src/css/styles.css"),t.addPassthroughCopy("./src/browserconfig.xml"),t.addPassthroughCopy({"./node_modules/alpinejs/dist/cdn.js":"./js/alpine.js"}),t.addPassthroughCopy("./src/site.webmanifest"),t.addPassthroughCopy("./src/admin/config.yml"),t.addPassthroughCopy("./src/img"),t.addPlugin(pluginNavigation),t.addPlugin(pluginRss),t.addPlugin(pluginSyntaxHighlight),t.setDataDeepMerge(!0),t.addShortcode("respimg",((a,e,r)=>{const i=`https://res.cloudinary.com/${t.cloudinaryCloudName}/image/upload/`;return`<img class="${r||""}" loading="lazy" src="${`${i}q_auto,f_auto,w_400/${a}.${t.format}`}" srcset="${t.srcsetWidths.map((({w:e,v:r})=>`${i}dpr_auto,q_auto,w_${e}/kailoon.com/${a}.${t.format} ${r}w`)).join(", ")}" alt="${e||""}" width="400" height="300" sizes="100vw">`})),t.addShortcode("figure",((a,e,r)=>{const i=`https://res.cloudinary.com/${t.cloudinaryCloudName}/image/upload/`;return`<figure class="mb-10"><img loading="lazy" src="${`${i}q_auto,f_auto,w_400/${a}.${t.format}`}" srcset="${t.srcsetWidths.map((({w:e,v:r})=>`${i}dpr_auto,q_auto,w_${e}/kailoon.com/${a}.${t.format} ${r}w`)).join(", ")}" alt="${e||""}" width="400" height="300"><figcaption class="text-center text-sm mt-3 text-gray-600 dark:text-gray-200">${r||""}</figcaption></figure>`})),t.cloudinaryCloudName="ianhobbs-media",t.srcsetWidths=[{w:400,v:400},{w:600,v:600},{w:768,v:768},{w:820,v:820},{w:1240,v:1240}],t.format="webp",t.fallbackWidth=800;let a=markdownIt({html:!0,breaks:!0}).use(markdownitlinkatt,{pattern:/^(?!(https:\/\/kailoon\.com|#)).*$/gm,attrs:{target:"_blank",rel:"noreferrer"}}).use(markdownItAnchor,{permalink:!0,permalinkClass:"direct-link text-gray-400 dark:text-gray-600",permalinkSymbol:"#",permalinkAttrs:(t,a)=>({"aria-label":`permalink to ${t}`,title:"Anchor link for easy sharing."})});return t.setLibrary("md",a),t.addFilter("readableDate",(t=>DateTime.fromJSDate(t,{zone:"utc"}).toFormat("dd LLL yyyy"))),t.addFilter("htmlDateString",(t=>DateTime.fromJSDate(t,{zone:"utc"}).toFormat("yyyy-LL-dd"))),t.addFilter("head",((t,a)=>a<0?t.slice(a):t.slice(0,a))),t.addFilter("min",((...t)=>Math.min.apply(null,t))),t.addCollection("tagList",(function(t){let a=new Set;return t.getAll().forEach((function(t){if("tags"in t.data){let e=t.data.tags;if(e=e.filter((function(t){switch(t){case"works":case"posts":return!1}return!0})),t.data.published)for(const t of e)a.add(t)}})),[...a]})),{dir:{input:"src",output:"_site",data:"_data",includes:"_components",layouts:"_layouts"}}};