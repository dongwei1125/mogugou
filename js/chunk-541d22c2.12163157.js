(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-541d22c2"],{1148:function(t,e,a){"use strict";var n=a("a691"),s=a("1d80");t.exports="".repeat||function(t){var e=String(s(this)),a="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(a+=e);return a}},"140a":function(t,e,a){"use strict";a("326b")},"2bfc":function(t,e,a){},"326b":function(t,e,a){},"32e5":function(t,e,a){"use strict";a("33e5")},"33e5":function(t,e,a){},"34f1":function(t,e,a){"use strict";a("3ca3")},"3ca3":function(t,e,a){},"3da3":function(t,e,a){},"408a":function(t,e,a){var n=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"56e8":function(t,e,a){"use strict";a("b939")},"6c26":function(t,e,a){"use strict";a("3da3")},8248:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-detail"},[a("navbar",{attrs:{data:t.navbars},on:{"on-back":t.onBack,change:t.onChange},model:{value:t.currentBar,callback:function(e){t.currentBar=e},expression:"currentBar"}}),a("better-scroll",{ref:"scroll",staticClass:"scroll",class:{pagi:1===t.swipers.length},attrs:{scroll:!0,"pull-down":!1,"pull-up":!1,"probe-type":3},on:{onLoad:t.onLoad,onScroll:t.scroll}},[a("swiper",{ref:"swiper",attrs:{options:t.swiperOptions}},t._l(t.swipers,(function(t,e){return a("swiper-slide",{key:e},[a("div",[a("img",{attrs:{src:t,alt:""}})])])})),1),a("goods-info",{attrs:{data:t.goodsInfo}}),a("store-info",{attrs:{data:t.storeInfo}}),a("cloth-list",{ref:"colth",attrs:{data:t.clothList}}),a("params-info",{ref:"params",attrs:{data:t.paramsInfo}}),a("comment-list",{ref:"comment",attrs:{data:t.commentList}}),a("recommend-list",{attrs:{data:t.recommendList}})],1),a("submit-bar",{on:{"on-add":t.onAdd}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}],staticClass:"iconfont icon-top",on:{click:t.scrollToTop}})],1)},s=[],i=(a("7db0"),a("4160"),a("159b"),a("d54c")),r=a("902e"),o=a("e175"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-navbar",[a("span",{staticClass:"iconfont icon-back",attrs:{slot:"left"},on:{click:function(e){return t.$emit("on-back")}},slot:"left"}),a("ul",{attrs:{slot:"default"},slot:"default"},t._l(t.data,(function(e){return a("li",{key:e.value,class:{active:e.value===t.value},on:{click:function(a){return t.liClick(e.value)}}},[t._v(" "+t._s(e.label)+" ")])})),0)])},l=[],u=a("ceb8"),f={name:"Navbar",components:{MNavbar:u["a"]},model:{value:"value",event:"change"},props:{data:{type:Array,default:function(){return[]}},value:{type:String,default:""}},methods:{liClick:function(t){this.value!==t&&this.$emit("change",t)}}},d=f,p=(a("6c26"),a("2877")),v=Object(p["a"])(d,c,l,!1,null,"303c90ea",null),m=v.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods-info"},[a("p",{staticClass:"title"},[t._v(t._s(t.data.title))]),a("p",[a("span",{staticClass:"range"},[t._v(t._s(t.data.range))]),a("span",{staticClass:"price"},[t._v(t._s(t.data.oldPrice))])]),a("ul",{staticClass:"columns"},t._l(t.data.columns,(function(e,n){return a("li",{key:n},[t._v(t._s(e))])})),0),a("ul",{staticClass:"services"},t._l(t.data.services,(function(e,n){return a("li",{key:n},[a("span",[a("img",{attrs:{src:e.image,alt:""}}),a("span",[t._v(t._s(e.name))])])])})),0)])},b=[],h={name:"GoodsInfo",props:{data:{type:Object,default:function(){return{}}}}},g=h,C=(a("140a"),Object(p["a"])(g,_,b,!1,null,"49c0b66c",null)),w=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"store-info"},[a("div",{staticClass:"header"},[a("img",{attrs:{src:t.data.image,alt:""}}),a("span",[t._v(t._s(t.data.name))])]),a("div",{staticClass:"info"},[a("ul",[a("li",[a("p",[t._v(t._s(t._f("formatSale")(t.data.cells)))]),a("p",[t._v("总销量")])]),a("li",[a("p",[t._v(t._s(t.data.goods))]),a("p",[t._v("全部宝贝")])])]),a("table",t._l(t.data.score,(function(e,n){return a("tr",{key:n},[a("td",{staticStyle:{color:"#333"}},[t._v(t._s(e.name))]),a("td",{style:{color:e.score>=5?"#f13e3a":"#5ea732"}},[t._v(" "+t._s(e.score)+" ")]),a("td",[a("span",{style:{backgroundColor:e.score>=5?"#f13e3a":"#5ea732",color:"#fff",borderRadius:"2px"}},[t._v(t._s(e.score>=5?"高":"低"))])])])})),0)]),a("div",{staticClass:"btn"},[t._v("进店逛逛")])])},$=[],k=(a("b680"),{name:"StoreInfo",filters:{formatSale:function(t){return t>9999?(t/1e4).toFixed(1)+"万":t}},props:{data:{type:Object,default:function(){return{}}}}}),x=k,L=(a("56e8"),Object(p["a"])(x,y,$,!1,null,"5a6e5dca",null)),O=L.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cloth-list"},[a("div",{staticClass:"desc"},[a("div",{staticClass:"line l-line"}),a("p",[t._v(t._s(t.data.desc))]),a("div",{staticClass:"line r-line"})]),a("div",{staticClass:"detail"},t._l(t.data.detail,(function(e,n){return a("div",{key:n,staticClass:"detail-item"},[a("p",[t._v(t._s(e.name))]),t._l(e.list,(function(e,n){return a("ul",{key:n},[a("li",[a("img",{attrs:{src:e,alt:""},on:{load:t.onLoad}})])])}))],2)})),0)])},S=[],E={name:"ClothList",props:{data:{type:Object,default:function(){return{}}}},methods:{onLoad:function(){this.$bus.$emit("detailLoad")}}},T=E,j=(a("e057"),Object(p["a"])(T,I,S,!1,null,"781912c6",null)),N=j.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"params-info"},[t._l(t.data.tables,(function(e,n){return a("table",{key:n},t._l(e,(function(e,n){return a("tr",{key:n},t._l(e,(function(e,n){return a("td",{key:n},[t._v(t._s(e))])})),0)})),0)})),a("table",t._l(t.data.info,(function(e,n){return a("tr",{key:n},[a("td",{attrs:{width:"25%"}},[t._v(t._s(e.key))]),a("td",{staticStyle:{color:"#e84868"}},[t._v(t._s(e.value))])])})),0)],2)},D=[],F={name:"ParamsInfo",props:{data:{type:Object,default:function(){return{}}}}},A=F,P=(a("34f1"),Object(p["a"])(A,B,D,!1,null,"795ec353",null)),R=P.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data.length?a("div",{staticClass:"comment-list"},[t._m(0),a("ul",t._l(t.data,(function(e,n){return a("li",{key:n},[a("div",[a("img",{attrs:{src:e.user.avatar,alt:""}}),a("span",[t._v(t._s(e.user.uname))])]),a("p",{staticClass:"content"},[t._v(t._s(e.content))]),a("p",{staticClass:"info"},[a("span",[t._v(t._s(t._f("formatTime")(e.created)))]),a("span",[t._v(t._s(e.style))])]),a("span",{staticClass:"explain"},[t._v(" "+t._s(e.explain)+" ")])])})),0)]):t._e()},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("span",{staticClass:"title"},[t._v("用户评价")]),a("div",{staticClass:"more"},[a("span",[t._v("更多")]),a("span",{staticClass:"iconfont icon-rarrow"})])])}],H=(a("99af"),{name:"CommentList",filters:{formatTime:function(t){var e=new Date(1e3*t),a=e.getFullYear(),n=e.getMonth()+1,s=e.getDate(),i=e.getHours(),r=e.getMinutes(),o=e.getSeconds();function c(t){return"".concat(t<10?"0".concat(t):t)}return"".concat(c(a),"-").concat(c(n),"-").concat(c(s)," ").concat(c(i),":").concat(c(r),":").concat(c(o))}},props:{data:{type:Array,default:function(){return[]}}}}),J=H,W=(a("32e5"),Object(p["a"])(J,M,G,!1,null,"23ee4542",null)),Y=W.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommend-list"},[a("ul",t._l(t.data,(function(e,n){return a("li",{key:e.id+n},[a("img",{attrs:{src:e.image,alt:""}}),a("div",[a("p",{staticClass:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"info"},[a("p",[a("span",[t._v(t._s(e.range))]),a("span",[t._v(t._s(e.oldPrice))])]),a("div",[a("span",{staticClass:"iconfont icon-cfav"}),a("span",[t._v(t._s(e.cfav))])])])])])})),0)])},z=[],K={name:"RecommendList",props:{data:{type:Array,default:function(){return[]}}}},Q=K,U=(a("9bcf"),Object(p["a"])(Q,q,z,!1,null,"8d30f3e6",null)),V=U.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submit-bar"},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"add",on:{click:function(e){return t.$emit("on-add")}}},[t._v("添加")]),a("div",{staticClass:"buy"},[t._v("购买")])])},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"serve"},[a("span",{staticClass:"iconfont icon-serv"}),a("p",[t._v("客服")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"serve"},[a("span",{staticClass:"iconfont icon-store"}),a("p",[t._v("店铺")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"serve"},[a("span",{staticClass:"iconfont icon-fav"}),a("p",[t._v("收藏")])])}],tt={name:"SubmitBar"},et=tt,at=(a("bbb7"),Object(p["a"])(et,X,Z,!1,null,"580fd7e0",null)),nt=at.exports,st=a("3191"),it=a("ed08"),rt={name:"Detail",components:{Navbar:m,BetterScroll:i["a"],Swiper:r["a"],SwiperSlide:o["a"],GoodsInfo:w,StoreInfo:O,ClothList:N,ParamsInfo:R,CommentList:Y,RecommendList:V,SubmitBar:nt},data:function(){return{navbars:[{label:"商品",value:"0",refName:"swiper"},{label:"图片",value:"1",refName:"colth"},{label:"参数",value:"2",refName:"params"},{label:"评论",value:"3",refName:"comment"}],currentBar:"0",swipers:[],goodsInfo:{},storeInfo:{},clothList:{},paramsInfo:{},commentList:[],recommendList:[],showTop:!1,fresh:null,swiperOptions:{pagination:{el:".swiper-pagination",type:"bullets"},loop:!0,autoplay:{disableOnInteraction:!1,delay:4e3}}}},created:function(){this.getDetail(this.$route.params.id)},mounted:function(){var t=this;this.$bus.$on("detailLoad",(function(){t.refresh&&t.refresh()}))},beforeDestroy:function(){this.$bus.$off("detailLoad")},methods:{getDetail:function(t){var e=this;Object(st["b"])(t).then((function(t){var a=t.content,n=a.id,s=a.swiper,i=a.title,r=a.range,o=a.oldPrice,c=a.columns,l=a.services,u=a.image,f=a.price,d=a.shop,p=a.desc,v=a.detail,m=a.tables,_=a.info,b=a.rate,h=a.recommend;e.swipers=s,e.goodsInfo={id:n,title:i,range:r,oldPrice:o,columns:c,services:l,image:u,price:f,desc:p},e.storeInfo=d,e.clothList={desc:p,detail:v},e.paramsInfo={tables:m,info:_},e.commentList=b,e.recommendList=h,1===e.swipers.length&&Object.assign(e.swiperOptions,{loop:!1,pagination:void 0,autoplay:void 0})})).catch((function(t){console.log(t)}))},onBack:function(){this.$router.go(-1)},onChange:function(t){var e=this,a=this.navbars.find((function(e){return e.value==t})),n=a&&a.refName;this.$nextTick((function(){e.$refs.scroll&&e.$refs.scroll.scrollTo(0,e.$refs[n]&&-e.$refs[n].$el.offsetTop||0)}))},onLoad:function(){this.refresh=Object(it["a"])(this.$refs.scroll.refresh,20)},scroll:function(t){var e=this,a=t.y;this.showTop=-a>document.body.clientHeight,this.$nextTick((function(){e.navbars.forEach((function(t){e.$refs[t.refName]&&-a>=e.$refs[t.refName].$el.offsetTop&&(e.currentBar=t.value)}))}))},scrollToTop:function(){this.$refs.scroll.scrollTo(0,0)},onAdd:function(){var t=this.goodsInfo,e=t.id,a=t.price,n=t.desc,s=t.image,i=t.title;this.$store.commit("ADD_GOODS",{id:e,price:a,image:s,desc:n,title:i}),this.$message("添加购物车成功!")}}},ot=rt,ct=(a("84bf"),Object(p["a"])(ot,n,s,!1,null,"eb3f64fc",null));e["default"]=ct.exports},"84bf":function(t,e,a){"use strict";a("b284")},"9bcf":function(t,e,a){"use strict";a("fee5")},b284:function(t,e,a){},b680:function(t,e,a){"use strict";var n=a("23e7"),s=a("a691"),i=a("408a"),r=a("1148"),o=a("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},f=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));n({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,a,n,o,c=i(this),d=s(t),p=[0,0,0,0,0,0],v="",m="0",_=function(t,e){var a=-1,n=e;while(++a<6)n+=t*p[a],p[a]=n%1e7,n=l(n/1e7)},b=function(t){var e=6,a=0;while(--e>=0)a+=p[e],p[e]=l(a/t),a=a%t*1e7},h=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var a=String(p[t]);e=""===e?a:e+r.call("0",7-a.length)+a}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,a=e<0?c*u(2,-e,1):c/u(2,e,1),a*=4503599627370496,e=52-e,e>0){_(0,a),n=d;while(n>=7)_(1e7,0),n-=7;_(u(10,n,1),0),n=e-1;while(n>=23)b(1<<23),n-=23;b(1<<n),_(1,1),b(2),m=h()}else _(0,a),_(1<<-e,0),m=h()+r.call("0",d);return d>0?(o=m.length,m=v+(o<=d?"0."+r.call("0",d-o)+m:m.slice(0,o-d)+"."+m.slice(o-d))):m=v+m,m}})},b939:function(t,e,a){},bbb7:function(t,e,a){"use strict";a("2bfc")},beac:function(t,e,a){},e057:function(t,e,a){"use strict";a("beac")},fee5:function(t,e,a){}}]);