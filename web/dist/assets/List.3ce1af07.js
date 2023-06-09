import{b as a,c as l,e as d,f as n,aB as w,aC as P,d as B,u as D,j,x as v,p as E,t as M,y as H,A as L,h as t,n as I,aD as O}from"./index.e74a6972.js";var T=a([l("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[d("show-divider",[l("list-item",[a("&:not(:last-child)",[n("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),d("clickable",[l("list-item",`
 cursor: pointer;
 `)]),d("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),d("hoverable",[l("list-item",`
 border-radius: var(--n-border-radius);
 `,[a("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[n("divider",`
 background-color: transparent;
 `)])])]),d("bordered, hoverable",[l("list-item",`
 padding: 12px 20px;
 `),n("header, footer",`
 padding: 12px 20px;
 `)]),n("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[a("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),l("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("prefix",`
 margin-right: 20px;
 flex: 0;
 `),n("suffix",`
 margin-left: 20px;
 flex: 0;
 `),n("main",`
 flex: 1;
 `),n("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),w(l("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),P(l("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);const V=Object.assign(Object.assign({},v.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),K=I("n-list");var A=B({name:"List",props:V,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:s}=D(e),b=j("List",s,o),m=v("List","-list",T,O,e,o);E(K,{showDividerRef:M(e,"showDivider"),mergedClsPrefixRef:o});const c=H(()=>{const{common:{cubicBezierEaseInOut:p},self:{fontSize:h,textColor:u,color:g,colorModal:f,colorPopover:x,borderColor:z,borderColorModal:C,borderColorPopover:R,borderRadius:k,colorHover:y,colorHoverModal:_,colorHoverPopover:$}}=m.value;return{"--n-font-size":h,"--n-bezier":p,"--n-text-color":u,"--n-color":g,"--n-border-radius":k,"--n-border-color":z,"--n-border-color-modal":C,"--n-border-color-popover":R,"--n-color-modal":f,"--n-color-popover":x,"--n-color-hover":y,"--n-color-hover-modal":_,"--n-color-hover-popover":$}}),i=r?L("list",void 0,c,e):void 0;return{mergedClsPrefix:o,rtlEnabled:b,cssVars:r?void 0:c,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:r,onRender:s}=this;return s==null||s(),t("ul",{class:[`${r}-list`,this.rtlEnabled&&`${r}-list--rtl`,this.bordered&&`${r}-list--bordered`,this.showDivider&&`${r}-list--show-divider`,this.hoverable&&`${r}-list--hoverable`,this.clickable&&`${r}-list--clickable`,this.themeClass],style:this.cssVars},o.header?t("div",{class:`${r}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?t("div",{class:`${r}-list__footer`},o.footer()):null)}});export{A as _,K as l};
