"use strict";(self["webpackChunkmingxuan_component"]=self["webpackChunkmingxuan_component"]||[]).push([[459],{459:function(s,t,e){e.r(t),e.d(t,{default:function(){return b}});var i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"box"},[e("bilibiliHeader")],1)},a=[],n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{ref:"banner",staticClass:"banner"},[e("div",{staticClass:"layer"},[e("img",{ref:"back",staticClass:"back",class:s.transition?"transitiontrue":"transitionfalse",attrs:{src:"https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/bilibili-header-1.png"}})]),e("div",{staticClass:"layer"},[3===s.persont22?e("img",{ref:"person22",staticClass:"person22",class:s.transition?"transitiontrue":"transitionfalse",attrs:{src:"https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/bilibili-header-2.png"}}):2===s.persont22?e("img",{ref:"person22",staticClass:"person22",class:s.transition?"transitiontrue":"transitionfalse",attrs:{src:"https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/bilibili-header-3.png"}}):e("img",{ref:"person22",staticClass:"person22",class:s.transition?"transitiontrue":"transitionfalse",attrs:{src:"https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/bilibili-header-4.png"}})]),e("div",{staticClass:"layer"},[e("img",{ref:"hill",staticClass:"hill",class:s.transition?"transitiontrue":"transitionfalse",attrs:{src:"https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/bilibili-header-5.png"}})]),e("div",{staticClass:"layer"},[e("img",{ref:"leaves",staticClass:"leaves",class:s.transition?"transitiontrue":"transitionfalse",attrs:{src:"https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/bilibili-header-6.png"}})]),e("div",{staticClass:"layer"},[e("img",{ref:"person33",staticClass:"person33",class:s.transition?"transitiontrue":"transitionfalse",attrs:{src:"https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/bilibili-header-7.png"}})]),e("div",{staticClass:"layer"},[e("img",{ref:"left",staticClass:"left",class:s.transition?"transitiontrue":"transitionfalse",attrs:{src:"https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/bilibili-header-8.png"}})])])},r=[],l={name:"Header",data(){return{initsX:"",transition:!1,persont22:3}},mounted(){this.$refs.banner.addEventListener("mousemove",this.onMousemove),this.$refs.banner.addEventListener("mouseenter",this.onMouseover),this.$refs.banner.addEventListener("mouseleave",this.onMouseleave),this.toAnimation()},methods:{toAnimation(){setInterval((()=>{setTimeout((()=>{this.persont22=2}),0),setTimeout((()=>{this.persont22=0}),100),setTimeout((()=>{this.persont22=2}),400),setTimeout((()=>{this.persont22=3}),500)}),5e3)},onMouseover(s){this.initsX=s.pageX,this.transition=!1},onMouseleave(){this.transition=!0,this.$refs.back.style.filter="blur(4px)",this.$refs.back.style.transform="translate(0px, 0px)",this.$refs.person22.style.filter="blur(0)",this.$refs.person22.style.transform="translate(0px, 0px)",this.$refs.hill.style.filter="blur(1px)",this.$refs.hill.style.transform="translate(-58px, 0px)",this.$refs.leaves.style.filter="blur(4px)",this.$refs.leaves.style.transform="translate(0px, 5px)",this.$refs.person33.style.filter="blur(5px)",this.$refs.person33.style.transform="translate(0px, -2px)",this.$refs.left.style.filter="blur(6px)",this.$refs.left.style.transform="translate(0px, 0px)"},onMousemove(s){const t=s.pageX-this.initsX;this.$refs.back.style.filter="blur("+Math.abs(4+(s.pageX-this.initsX)/450)+"px)",this.$refs.person22.style.filter="blur("+Math.abs((s.pageX-this.initsX)/222)+"px)",this.$refs.person22.style.transform="translate("+(s.pageX-this.initsX)/192+"px, 0px)",this.$refs.hill.style.filter=t<0?"blur("+Math.abs(1+(s.pageX-this.initsX)/300)+"px)":t>=0&&t<100?"blur("+Math.abs(1-(s.pageX-this.initsX)/100)+"px)":"blur("+Math.abs(1+(s.pageX-this.initsX)/606)+"px)",this.$refs.hill.style.transform="translate("+((s.pageX-this.initsX)/80-58)+"px, 0px)",this.$refs.leaves.style.filter=t<0?"blur("+Math.abs(4+(s.pageX-this.initsX)/240)+"px)":t>=0&&t<500?"blur("+Math.abs(4-(s.pageX-this.initsX)/125)+"px)":"blur("+Math.abs((s.pageX-this.initsX)/384)+"px)",this.$refs.leaves.style.transform="translate("+(s.pageX-this.initsX)/47+"px, 5px)",this.$refs.person33.style.filter=t<0?"blur("+Math.abs(5+-t/240)+"px)":t>=0&&t<1e3?"blur("+Math.abs(5-(s.pageX-this.initsX)/200)+"px)":t>=1e3&&t<1780?"blur("+Math.abs(0)+"px)":"blur("+Math.abs((s.pageX-this.initsX-1780)/28)+"px)",this.$refs.person33.style.transform="translate("+t/21.3+"px, -2px)",this.$refs.left.style.filter="blur("+Math.abs(6-(s.pageX-this.initsX)/320)+"px)",this.$refs.left.style.transform="translate("+t/18+"px, 0px)"}}},o=l,p=e(1001),h=(0,p.Z)(o,n,r,!1,null,"7d7296f5",null),c=h.exports,u={name:"treet",components:{bilibiliHeader:c},mounted(){console.log(this.$route)}},f=u,m=(0,p.Z)(f,i,a,!1,null,"41f8dcb3",null),b=m.exports}}]);
//# sourceMappingURL=459.866c6b0c.js.map