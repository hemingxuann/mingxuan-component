"use strict";(self["webpackChunkmingxuan_component"]=self["webpackChunkmingxuan_component"]||[]).push([[17],{7017:function(n,t,a){a.r(t),a.d(t,{default:function(){return b}});var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"pc-box"},[a("PcMenuBar"),a("router-view",{staticClass:"router-view"})],1)},e=[],c=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"pc-menu-bar",class:{"shrink-active":n.contractionVariable}},[a("div",{staticClass:"shrink-click",class:{"shrink-click-shrink":n.contractionVariable},on:{click:n.shrinkClick}},[a("i",{staticClass:"iconfont icon-back"})]),a("div",{staticClass:"pc-menu-item-box",class:{shrink:n.contractionVariable}},n._l(n.menuList,(function(t,i){return a("div",{key:i,staticClass:"pc-menu-item",class:{active:t.path==n.$route.path},on:{click:function(a){return n.onRouterPush(t)}}},[n._v(" "+n._s(t.name)+" ")])})),0)])},r=[],s={name:"pcmenubar",data(){return{menuList:[{name:"pinkman(unity自制游戏)",path:"/pinkman-game"},{name:"bilibili头部深景效果",path:"/bilibili-header"},{name:"404夜空",path:"/not-found-purple"},{name:"404雪天",path:"/not-found-snowy"},{name:"404沙漠",path:"/not-found-desert"}],contractionVariable:!1}},methods:{onRouterPush(n){this.$route.path!=n.path&&this.$router.replace(n.path)},shrinkClick(){this.contractionVariable=!this.contractionVariable}}},o=s,u=a(1001),l=(0,u.Z)(o,c,r,!1,null,"1944c101",null),h=l.exports,p={name:"pc-box",data(){return{}},components:{PcMenuBar:h}},m=p,k=(0,u.Z)(m,i,e,!1,null,"1681b72d",null),b=k.exports}}]);
//# sourceMappingURL=17.da0b9921.js.map