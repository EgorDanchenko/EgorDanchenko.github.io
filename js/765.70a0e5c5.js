"use strict";(self["webpackChunkenglish"]=self["webpackChunkenglish"]||[]).push([[765],{1338:function(e,a,n){n.r(a),n.d(a,{default:function(){return k}});var s=n(6646),t=n(8339),i=n(9302),o=n(7071),l=n(1032),c=function(e,a,n,s){function t(e){return e instanceof n?e:new n((function(a){a(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{c(s.next(e))}catch(a){i(a)}}function l(e){try{c(s["throw"](e))}catch(a){i(a)}}function c(e){e.done?n(e.value):t(e.value).then(o,l)}c((s=s.apply(e,a||[])).next())}))};const u=e=>((0,s.dD)("data-v-68990f50"),e=e(),(0,s.Cn)(),e),r={key:0,class:"splash-screen full-width"},d=u((()=>(0,s._)("div",{class:"splash-screen__title"},"GGAEK",-1))),p=u((()=>(0,s._)("div",{class:"splash-screen__copyright"},"GGAEK © 2023",-1))),g=[d,p],f={key:1,class:"loading-page__container full-width animate__fadeIn"},v=u((()=>(0,s._)("div",{class:"loading-page__title"},[(0,s.Uk)(" Professional"),(0,s._)("br"),(0,s.Uk)(" English for IT ")],-1)));var h=(0,s.aZ)({__name:"LoadingPage",setup(e){const a=(0,i.Z)(),n=(0,t.tv)(),u=(0,o.o)(),d=(0,s.iH)(0),p=(0,s.Fl)((()=>0===d.value));return(0,s.YP)(d,(()=>c(this,void 0,void 0,(function*(){if(0===d.value){const e=new Audio("/assets/audio/supercell.mp3");e.play(),setTimeout((()=>{d.value=1}),2e3)}else if(1===d.value){const e=new Audio("/assets/audio/royale.mp3");e.play(),u.fetchDatabase().then((()=>{setTimeout((()=>{d.value=2}),1e3)})).catch((()=>{a.notify({type:"negative",message:"Loading error. The storage is corrupted"})}))}else 2===d.value&&(yield n.push({name:"sections"}),u.isLoadingPagePassed=!0,u.loadingPercent=0)}))),{immediate:!0}),(e,a)=>{const n=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(n,{class:"loading-page page row"},{default:(0,s.w5)((()=>[p.value?((0,s.wg)(),(0,s.iD)("div",r,g)):((0,s.wg)(),(0,s.iD)("div",f,[v,(0,s.Wm)(l.Z,{class:"loading-page__progress-bar progress-bar_theme_supercell",value:(0,s.SU)(u).loadingPercent,showCaption:""},null,8,["value"])]))])),_:1})}}}),_=n(1639),w=n(9885),m=n(9984),y=n.n(m);const P=(0,_.Z)(h,[["__scopeId","data-v-68990f50"]]);var k=P;y()(h,"components",{QPage:w.Z})}}]);