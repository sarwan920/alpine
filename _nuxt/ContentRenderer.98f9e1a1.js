import c from"./ContentRendererMarkdown.e4d92614.js";import{a as l,Y as s,a6 as m,a7 as d}from"./entry.e8d5295d.js";const x=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,a,r;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(a=t==null?void 0:t.value)==null?void 0:a._path}.${(r=t==null?void 0:t.value)==null?void 0:r._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var u,i,o,f;const n=m(),{value:e,excerpt:a,tag:r}=t;return!((i=(u=e==null?void 0:e.body)==null?void 0:u.children)!=null&&i.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:a,tag:r,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:a,tag:r,...this.$attrs}):(e==null?void 0:e._type)==="markdown"&&((f=(o=e==null?void 0:e.body)==null?void 0:o.children)!=null&&f.length)?d(c,{value:e,excerpt:a,tag:r,...this.$attrs}):d("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:a,tag:r},null,2))}});export{x as default};
