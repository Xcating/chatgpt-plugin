import{p as oe,I as X,m as ie,a as re,ay as ue,j as de,k as ce,n as me,C as fe,q as _e,u as he,o as B,az as ve,aA as pe,aq as ge,ah as be,ac as ye,D as e,a2 as V,H as c,J as we,a4 as n,aB as xe,O as W,Q as y,R as j,S as a,T as h,U as p,aC as A,aD as L,aE as k,aF as w,W as s,X as E,N as q,a0 as l,aG as ke,a1 as S,a3 as U,aH as R,aI as Ie,F as x,aJ as Ce,ar as Ve,Y as M,aK as Le,_ as D,a6 as Se,aL as Te,aM as Be,a9 as Z,a8 as ee,a5 as I,ab as ae,aa as te}from"./index.f985de17.js";const Ae=""+new URL("avatar-2.0ae005f8.png",import.meta.url).href,Re=""+new URL("avatar-3.3ef9169b.png",import.meta.url).href,ne=""+new URL("avatar-4.406ee6ab.png",import.meta.url).href,Ue=""+new URL("2.eaeca4a6.png",import.meta.url).href,Me=""+new URL("1.f52f646e.png",import.meta.url).href,$e=""+new URL("2.c1055559.png",import.meta.url).href,Ne=""+new URL("3.22578f3b.png",import.meta.url).href,ze=""+new URL("5.f951b35f.jpg",import.meta.url).href,Fe=""+new URL("6.de22639c.jpg",import.meta.url).href;const Pe=oe({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:X,default:"$ratingEmpty"},fullIcon:{type:X,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},ripple:Boolean,...ie(),...re(),...ue(),...de(),...ce()},"VRating"),le=me()({name:"VRating",props:Pe(),emits:{"update:modelValue":t=>!0},setup(t,g){let{slots:r}=g;const{t:b}=fe(),{themeClasses:u}=_e(t),C=he(t,"modelValue"),v=B(()=>ve(parseFloat(C.value),0,+t.length)),o=B(()=>pe(Number(t.length),1)),Y=B(()=>o.value.flatMap(i=>t.halfIncrements?[i-.5,i]:[i])),z=ge(-1),H=B(()=>Y.value.map(i=>{var N;const f=t.hover&&z.value>-1,d=v.value>=i,_=z.value>=i,T=(f?_:d)?t.fullIcon:t.emptyIcon,O=(N=t.activeColor)!=null?N:t.color,P=d||_?O:t.color;return{isFilled:d,isHovered:_,icon:T,color:P}})),se=B(()=>[0,...Y.value].map(i=>{function f(){z.value=i}function d(){z.value=-1}function _(){t.disabled||t.readonly||(C.value=v.value===i&&t.clearable?0:i)}return{onMouseenter:t.hover?f:void 0,onMouseleave:t.hover?d:void 0,onClick:_}})),G=B(()=>{var i;return(i=t.name)!=null?i:`v-rating-${be()}`});function F(i){var K,Q;let{value:f,index:d,showStar:_=!0}=i;const{onMouseenter:$,onMouseleave:T,onClick:O}=se.value[d+1],P=`${G.value}-${String(f).replace(".","-")}`,N={color:(K=H.value[d])==null?void 0:K.color,density:t.density,disabled:t.disabled,icon:(Q=H.value[d])==null?void 0:Q.icon,ripple:t.ripple,size:t.size,variant:"plain"};return e(V,null,[e("label",{for:P,class:{"v-rating__item--half":t.halfIncrements&&f%1>0,"v-rating__item--full":t.halfIncrements&&f%1===0},onMouseenter:$,onMouseleave:T,onClick:O},[e("span",{class:"v-rating__hidden"},[b(t.itemAriaLabel,f,t.length)]),_?r.item?r.item({...H.value[d],props:N,value:f,index:d,rating:v.value}):e(c,we({"aria-label":b(t.itemAriaLabel,f,t.length)},N),null):void 0]),e("input",{class:"v-rating__hidden",name:G.value,id:P,type:"radio",value:f,checked:v.value===f,tabindex:-1,readonly:t.readonly,disabled:t.disabled},null)])}function J(i){return r["item-label"]?r["item-label"](i):i.label?e("span",null,[i.label]):e("span",null,[n("\xA0")])}return ye(()=>{var f;const i=!!((f=t.itemLabels)!=null&&f.length)||r["item-label"];return e(t.tag,{class:["v-rating",{"v-rating--hover":t.hover,"v-rating--readonly":t.readonly},u.value,t.class],style:t.style},{default:()=>[e(F,{value:0,index:-1,showStar:!1},null),o.value.map((d,_)=>{var $,T;return e("div",{class:"v-rating__wrapper"},[i&&t.itemLabelPosition==="top"?J({value:d,index:_,label:($=t.itemLabels)==null?void 0:$[_]}):void 0,e("div",{class:"v-rating__item"},[t.halfIncrements?e(V,null,[e(F,{value:d-.5,index:_*2},null),e(F,{value:d,index:_*2+1},null)]):e(F,{value:d,index:_},null)]),i&&t.itemLabelPosition==="bottom"?J({value:d,index:_,label:(T=t.itemLabels)==null?void 0:T[_]}):void 0])})]})}),{}}}),m=t=>(Te("data-v-57768842"),t=t(),Be(),t),Ee={class:"d-flex justify-space-between flex-wrap pt-8"},je={class:"me-2 mb-2"},De={class:"d-flex justify-space-between align-center mt-8"},He=m(()=>l("span",{class:"font-weight-medium"},"18 mutual friends",-1)),Oe={class:"v-avatar-group"},We={class:"d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row"},qe={class:"ma-auto pa-5"},Ye=m(()=>l("span",null,"Price :",-1)),Ge=m(()=>l("span",{class:"font-weight-bold"},"$899",-1)),Je=m(()=>l("span",{class:"ms-2"},"Add to cart",-1)),Ke={class:"d-flex flex-column-reverse flex-md-row"},Qe=m(()=>l("span",null,"5 Star | 98 reviews",-1)),Xe={class:"ma-auto pa-5"},Ze=m(()=>l("p",{class:"font-weight-medium text-base"}," $249.40 ",-1)),ea=m(()=>l("p",{class:"mb-0"}," 3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz ",-1)),aa={class:"me-auto pe-4"},ta={class:"d-flex align-center mb-6"},la=m(()=>l("span",{class:"ms-3"},"Full Access",-1)),na={class:"d-flex align-center mb-0"},sa=m(()=>l("span",{class:"ms-3"},"15 Members",-1)),oa={class:"ms-auto ps-4"},ia={class:"d-flex align-center mb-6"},ra=m(()=>l("span",{class:"ms-3"},"Access all Features",-1)),ua={class:"d-flex align-center mb-0"},da=m(()=>l("span",{class:"ms-3"},"Lifetime Free Update",-1)),ca={class:"membership-pricing d-flex flex-column align-center py-14 h-100 justify-center"},ma=m(()=>l("p",{class:"mb-5"},[l("sub",{class:"text-h5"},"$"),l("sup",{class:"text-h2 font-weight-medium"},"899"),l("sub",{class:"text-h5"},"USD")],-1)),fa=m(()=>l("p",{class:"text-sm"},[n(" 5 Tips For Offshore "),l("br"),n(" Software Development ")],-1)),_a=m(()=>l("span",{class:"text-subtitle-2"},"5 Star | 98 reviews",-1)),ha=m(()=>l("h6",{class:"text-h6"}," Support ",-1)),va=m(()=>l("p",null," According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle. ",-1)),pa={__name:"CardBasic",setup(t){const g=[q,Ae,Re,ne],r=W(!1);return(b,u)=>(y(),j(D,null,{default:a(()=>[e(h,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(p,null,{default:a(()=>[e(A,{src:L(Me),cover:""},null,8,["src"]),e(k,null,{default:a(()=>[e(w,null,{default:a(()=>[n("Influencing The Influencer")]),_:1})]),_:1}),e(s,null,{default:a(()=>[n(" Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago. ")]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(p,null,{default:a(()=>[e(A,{src:L($e)},null,8,["src"]),e(s,{class:"position-relative"},{default:a(()=>[e(E,{size:"75",class:"avatar-center",image:L(q)},null,8,["image"]),l("div",Ee,[l("div",je,[e(w,{class:"pa-0"},{default:a(()=>[n(" Robert Meyer ")]),_:1}),e(ke,{class:"text-caption pa-0"},{default:a(()=>[n(" London, UK ")]),_:1})]),e(c,null,{default:a(()=>[n("send request")]),_:1})]),l("div",De,[He,l("div",Oe,[(y(),S(V,null,U(g,C=>e(E,{key:C,image:C,size:"45"},null,8,["image"])),64))])])]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"4",sm:"6"},{default:a(()=>[e(p,null,{default:a(()=>[e(A,{src:L(Ne)},null,8,["src"]),e(k,null,{default:a(()=>[e(w,null,{default:a(()=>[n("Popular Uses Of The Internet")]),_:1})]),_:1}),e(s,null,{default:a(()=>[n(" Although cards can support multiple actions, UI controls, and an overflow menu. ")]),_:1}),e(R,null,{default:a(()=>[e(c,{onClick:u[0]||(u[0]=C=>r.value=!r.value)},{default:a(()=>[n(" Details ")]),_:1}),e(Ie),e(c,{icon:"",size:"small",onClick:u[1]||(u[1]=C=>r.value=!r.value)},{default:a(()=>[e(x,{icon:r.value?"mdi-chevron-up":"mdi-chevron-down"},null,8,["icon"])]),_:1})]),_:1}),e(Ce,null,{default:a(()=>[Ve(l("div",null,[e(M),e(s,null,{default:a(()=>[n(" I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ")]),_:1})],512),[[Le,r.value]])]),_:1})]),_:1})]),_:1}),e(h,{sm:"6",cols:"12"},{default:a(()=>[e(p,null,{default:a(()=>[l("div",We,[l("div",qe,[e(A,{width:"137",src:L(Ue)},null,8,["src"])]),e(M,{vertical:b.$vuetify.display.mdAndUp},null,8,["vertical"]),l("div",null,[e(k,null,{default:a(()=>[e(w,null,{default:a(()=>[n("Apple iPhone 11 Pro")]),_:1})]),_:1}),e(s,null,{default:a(()=>[n(" Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8\u2033 display Apple A13 Bionic ")]),_:1}),e(s,{class:"text-subtitle-1"},{default:a(()=>[Ye,n(),Ge]),_:1}),e(R,{class:"justify-space-between"},{default:a(()=>[e(c,null,{default:a(()=>[e(x,{icon:"mdi-cart-plus"}),Je]),_:1}),e(c,{color:"secondary",icon:"mdi-share-variant-outline"})]),_:1})])])]),_:1})]),_:1}),e(h,{sm:"6",cols:"12"},{default:a(()=>[e(p,null,{default:a(()=>[l("div",Ke,[l("div",null,[e(k,null,{default:a(()=>[e(w,null,{default:a(()=>[n("Stumptown Roasters")]),_:1})]),_:1}),e(s,{class:"d-flex align-center flex-wrap body-1"},{default:a(()=>[e(le,{"model-value":5,readonly:"",class:"me-3",density:"compact"}),Qe]),_:1}),e(s,null,{default:a(()=>[n(" Before there was a United States of America, there were coffee houses, because how are you supposed to build. ")]),_:1}),e(R,null,{default:a(()=>[e(c,null,{default:a(()=>[n("Location")]),_:1}),e(c,null,{default:a(()=>[n("Reviews")]),_:1})]),_:1})]),l("div",Xe,[e(A,{width:176,src:L(ze),class:"rounded"},null,8,["src"])])])]),_:1})]),_:1}),e(h,{lg:"4",sm:"6",cols:"12"},{default:a(()=>[e(p,null,{default:a(()=>[e(A,{src:L(Fe)},null,8,["src"]),e(k,null,{default:a(()=>[e(w,null,{default:a(()=>[n("Apple Watch")]),_:1})]),_:1}),e(s,null,{default:a(()=>[Ze,ea]),_:1}),e(c,{block:"",class:"rounded-t-0"},{default:a(()=>[n(" Add to cart ")]),_:1})]),_:1})]),_:1}),e(h,{md:"6",lg:"8",cols:"12"},{default:a(()=>[e(p,null,{default:a(()=>[e(D,{"no-gutters":""},{default:a(()=>[e(h,{cols:"12",sm:"8",md:"12",lg:"7",order:"2","order-lg":"1"},{default:a(()=>[e(k,null,{default:a(()=>[e(w,null,{default:a(()=>[n("Lifetime Membership")]),_:1})]),_:1}),e(s,null,{default:a(()=>[n(" Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men. ")]),_:1}),e(s,null,{default:a(()=>[e(M)]),_:1}),e(s,{class:"d-flex justify-center"},{default:a(()=>[l("div",aa,[l("p",ta,[e(x,{color:"primary",icon:"mdi-lock-open-outline"}),la]),l("p",na,[e(x,{color:"primary",icon:"mdi-account-outline"}),sa])]),b.$vuetify.display.smAndUp?(y(),j(M,{key:0,vertical:"",inset:""})):Se("",!0),l("div",oa,[l("p",ia,[e(x,{color:"primary",icon:"mdi-star-outline"}),ra]),l("p",ua,[e(x,{color:"primary",icon:"mdi-trending-up"}),da])])]),_:1})]),_:1}),e(h,{cols:"12",sm:"4",md:"12",lg:"5",order:"1","order-lg":"2",class:"member-pricing-bg text-center"},{default:a(()=>[l("div",ca,[ma,fa,e(c,{class:"mt-8"},{default:a(()=>[n(" Contact Now ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",lg:"4",md:"6"},{default:a(()=>[e(p,{title:"Influencing The Influencer"},{default:a(()=>[e(s,null,{default:a(()=>[n(" Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch. ")]),_:1}),e(s,null,{default:a(()=>[n(" If you're in the market for new desktops, notebooks, or PDAs, there are a myriad of choices. Here's a rundown of some of the best systems available. ")]),_:1}),e(R,null,{default:a(()=>[e(c,null,{default:a(()=>[n("Read More")]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",lg:"4",md:"6"},{default:a(()=>[e(p,{title:"The Best Answers"},{default:a(()=>[e(s,{class:"d-flex align-center flex-wrap"},{default:a(()=>[e(le,{"model-value":5,readonly:"",density:"compact",class:"me-3"}),_a]),_:1}),e(s,null,{default:a(()=>[n(" If you are looking for a new way to promote your business that won't cost you more money, maybe printing is one of the options you won't resist. ")]),_:1}),e(s,null,{default:a(()=>[n(" become fast, easy and simple. If you want your promotional material to be an eye-catching ")]),_:1}),e(R,null,{default:a(()=>[e(c,null,{default:a(()=>[n("Location")]),_:1}),e(c,null,{default:a(()=>[n("Reviews")]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{cols:"12",md:"6",lg:"4"},{default:a(()=>[e(p,{class:"text-center"},{default:a(()=>[e(s,{class:"d-flex flex-column justify-center align-center"},{default:a(()=>[e(E,{color:"primary",variant:"tonal",size:"50",class:"mb-4"},{default:a(()=>[e(x,{size:"2rem",icon:"mdi-help-circle-outline"})]),_:1}),ha]),_:1}),e(s,null,{default:a(()=>[va]),_:1}),e(R,{class:"justify-center"},{default:a(()=>[e(c,{variant:"elevated"},{default:a(()=>[n(" Contact Now ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ga=xe(pa,[["__scopeId","data-v-57768842"]]),ba={__name:"CardNavigation",setup(t){const g=W("ITEM ONE"),r=W("ITEM ONE"),b=["ITEM ONE","ITEM TWO","ITEM THREE"],u="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards...";return(C,v)=>(y(),j(D,null,{default:a(()=>[e(h,{md:"6",cols:"12"},{default:a(()=>[e(p,null,{default:a(()=>[e(Z,{modelValue:g.value,"onUpdate:modelValue":v[0]||(v[0]=o=>g.value=o)},{default:a(()=>[(y(),S(V,null,U(b,o=>e(ee,{key:o,value:o},{default:a(()=>[n(I(o),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(M),e(ae,{modelValue:g.value,"onUpdate:modelValue":v[1]||(v[1]=o=>g.value=o)},{default:a(()=>[(y(),S(V,null,U(b,o=>e(te,{key:o,value:o},{default:a(()=>[e(k,null,{default:a(()=>[e(w,null,{default:a(()=>[n("Navigation Card")]),_:1})]),_:1}),e(s,null,{default:a(()=>[n(I(u))]),_:1}),e(s,null,{default:a(()=>[e(c,null,{default:a(()=>[n("Learn More")]),_:1})]),_:1})]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(h,{md:"6",cols:"12"},{default:a(()=>[e(p,null,{default:a(()=>[e(Z,{modelValue:r.value,"onUpdate:modelValue":v[2]||(v[2]=o=>r.value=o),centered:""},{default:a(()=>[(y(),S(V,null,U(b,o=>e(ee,{key:o,value:o},{default:a(()=>[n(I(o),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(M),e(ae,{modelValue:r.value,"onUpdate:modelValue":v[3]||(v[3]=o=>r.value=o)},{default:a(()=>[(y(),S(V,null,U(b,o=>e(te,{key:o,value:o,class:"text-center"},{default:a(()=>[e(k,null,{default:a(()=>[e(w,null,{default:a(()=>[n("Navigation Card")]),_:1})]),_:1}),e(s,null,{default:a(()=>[n(I(u))]),_:1}),e(s,null,{default:a(()=>[e(c,null,{default:a(()=>[n("Learn More")]),_:1})]),_:1})]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},ya=""+new URL("avatar-8.942ae414.png",import.meta.url).href,wa={class:"text-no-wrap"},xa={class:"text-white ms-2"},ka={class:"text-subtitle-2 text-white me-4"},Ia={class:"text-subtitle-2 text-white"},Ca={__name:"CardSolid",setup(t){const g=[{cardBg:"#16B1FF",title:"Twitter Card",icon:"mdi-twitter",text:'"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',avatarImg:ne,avatarName:"Mary Vaughn",likes:"1.2k",share:"80"},{cardBg:"#3B5998",title:"Facebook Card",icon:"mdi-facebook",text:"You've read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients in an.",avatarImg:q,avatarName:"Eugene Clarke",likes:"3.2k",share:"49"},{cardBg:"#007BB6",title:"Linkedin Card",icon:"mdi-linkedin",text:"With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed.",avatarImg:ya,avatarName:"Anne Burke1",likes:"1.2k",share:"80"}];return(r,b)=>(y(),j(D,null,{default:a(()=>[(y(),S(V,null,U(g,u=>e(h,{key:u.icon,cols:"12",md:"6",lg:"4"},{default:a(()=>[e(p,{color:u.cardBg},{default:a(()=>[e(k,null,{prepend:a(()=>[e(x,{size:"1.9rem",color:"white",icon:u.icon},null,8,["icon"])]),default:a(()=>[e(w,{class:"text-white"},{default:a(()=>[n(I(u.title),1)]),_:2},1024)]),_:2},1024),e(s,{class:"text-white"},{default:a(()=>[n(I(u.text),1)]),_:2},1024),e(s,{class:"d-flex justify-space-between align-center flex-wrap"},{default:a(()=>[l("div",wa,[e(E,{size:"34",image:u.avatarImg},null,8,["image"]),l("span",xa,I(u.avatarName),1)]),l("div",null,[e(x,{icon:"mdi-heart",color:"white",size:"1.2rem",class:"me-2 cursor-pointer"}),l("span",ka,I(u.likes),1),e(x,{icon:"mdi-share-variant",color:"white",size:"1.2rem",class:"me-2 cursor-pointer"}),l("span",Ia,I(u.share),1)])]),_:2},1024)]),_:2},1032,["color"])]),_:2},1024)),64))]),_:1}))}},Va=l("p",{class:"text-2xl mb-6"}," Basic Cards ",-1),La=l("p",{class:"text-2xl mb-6 mt-14"}," Navigation Cards ",-1),Sa=l("p",{class:"text-2xl mt-14 mb-6"}," Solid Cards ",-1),Ba={__name:"card-basic",setup(t){return(g,r)=>(y(),S("div",null,[Va,e(ga),La,e(ba),Sa,e(Ca)]))}};export{Ba as default};
