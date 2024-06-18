"use strict";(self["webpackChunkenglish"]=self["webpackChunkenglish"]||[]).push([[18],{2287:function(e,a,l){l.r(a),l.d(a,{default:function(){return S}});var s=l(6646),t=l(4409);function n(e){return["word","subsection_id","content","translations"].every((a=>a in e))}const r=n;function o(e){return["translation","word_id"].every((a=>a in e))}const u=o;var i=l(7071),d=l(2610),c=l(7636),v=(0,s.aZ)({__name:"FindAnswer",props:{words:{},cursor:{},mode:{}},emits:["answer"],setup(e,{expose:a,emit:l}){const n=e,o=(0,i.o)(),v=(0,s.iH)(0),w=(0,s.Fl)((()=>n.words)),m=(0,s.Fl)((()=>n.words[n.cursor])),p=(0,s.Fl)((()=>"FindWord"===n.mode?(0,t.sample)(m.value.translations).translation:m.value.word)),f=(0,s.Fl)((()=>{const e=o.getRandomWords(w.value,2,[m.value]);return"FindWord"===n.mode?(0,t.uniq)((0,t.shuffle)(e)):"FindTranslation"===n.mode?(0,t.uniq)((0,t.shuffle)((0,t.flatMap)(e,(e=>(0,t.shuffle)(e.translations).slice(0,1))))):[]}));function g(e){let a=!1;r(e)&&m.value===e&&(v.value++,a=!0),u(e)&&m.value.translations.includes(e)&&(v.value++,a=!0),l("answer",e,a)}return a({correctAnswersCount:v,answers:f,question:p}),(e,a)=>((0,s.wg)(),(0,s.j4)(d.Z,{class:"find-answer",title:p.value},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.value,(e=>((0,s.wg)(),(0,s.j4)(c.Z,{class:"find-answer__btn full-width",label:(0,s.SU)(r)(e)?e.word:e.translation,onClick:a=>g(e)},null,8,["label","onClick"])))),256))])),_:1},8,["title"]))}});const w=v;var m=w,p=l(1032),f=l(8832),g=(0,s.aZ)({__name:"TrueFalse",props:{words:{},cursor:{}},emits:["answer"],setup(e,{expose:a,emit:l}){const n=e,r=(0,i.o)(),o=(0,s.Fl)((()=>r.getTranslations(n.words))),u=(0,s.Fl)((()=>w.value[n.cursor])),v=(0,s.Fl)((()=>w.value.filter((e=>e.answer===e.isRight)).length)),w=(0,s.iH)(n.words.reduce(((e,a)=>{const l=Math.random()<=.5?.4:.6,s=Math.random()<=l,n=s?(0,t.sample)(a.translations.map((e=>e.translation))):(0,t.sample)(o.value);return e.push({word:a.word,supposedTranslation:n,isRight:s,answer:null}),e}),[]));function m(e){let a=e===u.value.isRight;u.value.answer=e,l("answer",a)}return a({mapItem:u,rightCount:v}),(e,a)=>{const l=(0,s.up)("q-btn-group");return(0,s.wg)(),(0,s.j4)(d.Z,{class:"true-false-card",title:u.value.word},{default:(0,s.w5)((()=>[(0,s.Wm)(d.Z,{class:"true-false-card__supposed-translation card_inset text-center"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,s.zw)(u.value.supposedTranslation),1)])),_:1}),(0,s.Wm)(l,{class:"btn-group full-width",push:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c.Z,{class:"full-width",label:"True",onClick:a[0]||(a[0]=e=>m(!0))}),(0,s.Wm)(c.Z,{class:"full-width",label:"False",onClick:a[1]||(a[1]=e=>m(!1))})])),_:1})])),_:1},8,["title"])}}}),h=l(7236),_=l(9984),b=l.n(_);const k=g;var F=k;b()(g,"components",{QBtnGroup:h.Z});var Z=(0,s.aZ)({__name:"WordAnswerVerifier",props:{cursor:{},history:{}},emits:["next"],setup(e,{emit:a}){const l=e,t=(0,s.Fl)((()=>l.history[l.cursor])),n=(0,s.Fl)((()=>"title"in t.value&&"items"in t.value)),o=(0,s.Fl)((()=>"title"in t.value?t.value.title:t.value.word));return(e,u)=>{const i=(0,s.up)("q-btn-group");return(0,s.wg)(),(0,s.j4)(d.Z,{title:o.value,bodyClasses:{column:!0}},{default:(0,s.w5)((()=>[n.value?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(t.value.items,(e=>((0,s.wg)(),(0,s.j4)(c.Z,{class:"full-width q-mb-md",label:(0,s.SU)(r)(e)?e.word:e.translation,color:e.clicked&&e.correct?"positive":e.clicked&&!e.correct?"negative":void 0,disable:""},null,8,["label","color"])))),256)):"supposedTranslation"in t.value?((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s.Wm)(d.Z,{class:"true-false-card__supposed-translation card_inset text-center"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,s.zw)(t.value.supposedTranslation),1)])),_:1}),(0,s.Wm)(i,{class:"btn-group full-width",push:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c.Z,{class:"full-width",label:"True",color:t.value.answer?t.value.isRight?"positive":"negative":void 0,disable:""},null,8,["color"]),(0,s.Wm)(c.Z,{class:"full-width",label:"False",color:t.value.answer?void 0:t.value.isRight?"negative":"positive",disable:""},null,8,["color"])])),_:1})],64)):((0,s.wg)(),(0,s.iD)(s.HY,{key:2},[(0,s.Uk)("Unkhown test type")],64)),(0,s.Wm)(c.Z,{class:"full-width q-mt-auto",label:e.cursor>=l.history.length-1?"Go back":"Next",onClick:u[0]||(u[0]=e=>a("next"))},null,8,["label"])])),_:1},8,["title"])}}});const y=Z;var W=y;b()(Z,"components",{QBtnGroup:h.Z});var x=l(796),H=l(9811),j=l(8339),T=(0,s.aZ)({__name:"WordTestPage",setup(e){const a=(0,j.yj)(),l=(0,i.o)(),n=(0,H.z)(),r=a.params["section"],o=a.params["subsection"],u=(0,s.iH)((0,x.Z)()),c=(0,s.iH)(0),v=(0,s.iH)(0),w=(0,s.iH)("mixed"===a.params.mode||"limited-mixed"===a.params.mode?(0,t.sample)(["find-a-word","find-a-translation","true-false"]):a.params.mode),g=(0,s.iH)([]),h=(0,s.iH)(),_=(0,s.iH)(),b=(0,s.iH)(!1),k=(0,s.Fl)((()=>l.getSubsection(+r,+o))),Z=(0,s.Fl)((()=>c.value>=T.value.length)),y=(0,s.Fl)((()=>c.value===T.value.length?100:100*c.value/T.value.length)),T=(0,s.Fl)((()=>(u.value,"limited-mixed"===a.params.mode?(0,t.shuffle)(k.value.words).slice(0,20):(0,t.shuffle)(k.value.words))));function C(e,a){var l;(null===(l=h.value)||void 0===l?void 0:l.answers)&&g.value.push({title:h.value.question,items:h.value.answers.map((l=>l.id===e.id?Object.assign(Object.assign({},l),{clicked:!0,correct:a}):l))}),S(a)}function q(e){var a;(null===(a=_.value)||void 0===a?void 0:a.mapItem)&&g.value.push(_.value.mapItem),S(e)}function S(e){e&&v.value++,c.value>T.value.length-1||(c.value++,Z.value&&n.saveWordItem(l.getSubsectionNumber(k.value)||"?",T.value.length,T.value.length-v.value,{"find-a-word":"FindWord","find-a-translation":"FindTranslation","true-false":"TrueFalse",mixed:"Mixed","limited-mixed":"Test"}[a.params.mode]))}function U(){c.value<g.value.length-1||(b.value=!1),c.value++}function Y(){c.value=0,v.value=0,u.value=(0,x.Z)(),g.value=[]}function A(){c.value=0,b.value=!0}return(0,s.YP)(c,(()=>{"mixed"!==a.params.mode&&"limited-mixed"!==a.params.mode||(w.value=(0,t.sample)(["find-a-word","find-a-translation","true-false"]))}),{immediate:!0}),(e,l)=>{const t=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(t,{class:"page page_column column justify-center",padding:""},{default:(0,s.w5)((()=>[(0,s.Wm)(p.Z,{class:"page__progress-bar container",value:y.value,showCaption:""},null,8,["value"]),b.value?((0,s.wg)(),(0,s.j4)(W,{key:0,class:"page__card container full-width",cursor:c.value,history:g.value,onNext:U},null,8,["cursor","history"])):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[Z.value?((0,s.wg)(),(0,s.j4)(f.Z,{key:1,class:"page__card container full-width",score:v.value,total:T.value.length,showGrade:"limited-mixed"===(0,s.SU)(a).params.mode,isShowErrorsBtnVisible:"",onSubmit:Y,onShowErrors:A},null,8,["score","total","showGrade"])):((0,s.wg)(),(0,s.iD)(s.HY,{key:0},["find-a-word"===w.value||"find-a-translation"===w.value?((0,s.wg)(),(0,s.j4)(m,{key:0,class:"page__card container full-width",ref_key:"findAnswerComponent",ref:h,cursor:c.value,words:T.value,mode:"find-a-word"===w.value?"FindWord":"FindTranslation",onAnswer:C},null,8,["cursor","words","mode"])):"true-false"===w.value?((0,s.wg)(),(0,s.j4)(F,{key:1,class:"page__card container full-width",ref_key:"trueFalseComponent",ref:_,words:T.value,cursor:c.value,onAnswer:q},null,8,["words","cursor"])):((0,s.wg)(),(0,s.j4)(d.Z,{key:2,class:"page__card container full-width",title:"Unknown test"}))],64))],64))])),_:1})}}}),C=l(9885);const q=T;var S=q;b()(T,"components",{QPage:C.Z})}}]);