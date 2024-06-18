"use strict";(self["webpackChunkenglish"]=self["webpackChunkenglish"]||[]).push([[295],{7192:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var s=a(6646),n=a(8339),i=a(9302),o=a(4409),l=a(2331),r=a.n(l),u=a(7071),c=a(9811),_=a(1925),g=a(3417),k=a(2610),p=a(922),d=a(7636),v=a(2630),m=a(9060),h=a(3677),f=a(9394),b=a(7293),w=a(906);const Z=["innerHTML"];var C=(0,s.aZ)({__name:"TextModal",props:{group:{}},emits:[...w.Z.emits],setup(e){const{dialogRef:t,onDialogHide:a,onDialogOK:n}=(0,w.Z)();return(e,n)=>{const i=(0,s.up)("q-dialog");return(0,s.wg)(),(0,s.j4)(i,{ref_key:"dialogRef",ref:t,onHide:(0,s.SU)(a)},{default:(0,s.w5)((()=>[(0,s.Wm)(k.Z,{class:"text-modal-card container full-width card_content q-dialog-plugin",title:e.group.title},{default:(0,s.w5)((()=>[(0,s._)("div",{innerHTML:e.group.content},null,8,Z)])),_:1},8,["title"])])),_:1},8,["onHide"])}}}),x=a(1639),y=a(9035),H=a(9984),E=a.n(H);const F=(0,x.Z)(C,[["__scopeId","data-v-14df14b4"]]);var L=F;E()(C,"components",{QDialog:y.Z});const j=["innerHTML"],D={class:"exercise-card__tasks"};var M=(0,s.aZ)({__name:"ExercisePage",setup(e){const t=(0,u.o)(),a=(0,c.z)(),l=(0,_.O)(),w=(0,n.yj)(),Z=(0,n.tv)(),C=(0,i.Z)(),x=w.params["section"],y=w.params["subsection"],H=w.params["group"],E=w.params["exercise"],F=(0,s.iH)(!1),M=(0,s.Fl)((()=>t.getExercise(+x,+y,+H,+E))),T=(0,s.Fl)((()=>t.getGroup(+x,+y,+H))),V=(0,s.Fl)((()=>0===M.value.tasks.length||F.value)),q=(0,s.Fl)((()=>M.value.tasks.reduce(((e,t)=>((t.selecting_task||t.typing_task)&&e++,t.skip_inserting_task&&(e+=t.skip_inserting_task.options.length),t.matching_task&&(e+=t.matching_task.options.length),t.image_task&&(e+=t.image_task.options.length),t.table_task&&(e+=t.table_task.taskCount||0),e)),0))),I=(0,s.Fl)((()=>M.value.tasks.reduce(((e,t)=>(t.selecting_task&&t.selecting_task.error&&e++,t.typing_task&&t.typing_task.error&&e++,t.skip_inserting_task&&t.skip_inserting_task.errorCount&&(e+=t.skip_inserting_task.errorCount),t.matching_task&&t.matching_task.errorCount&&(e+=t.matching_task.errorCount),t.image_task&&t.image_task.errorCount&&(e+=t.image_task.errorCount),t.table_task&&t.table_task.errorCount&&(e+=t.table_task.errorCount),e)),0))),S=(0,s.Fl)((()=>q.value-I.value));function U(e){return(0,g.s)("selecting_task",e)?p.Z:(0,g.s)("typing_task",e)?v.Z:(0,g.s)("skip_inserting_task",e)?m.Z:(0,g.s)("matching_task",e)?h.Z:(0,g.s)("image_task",e)?f.Z:(0,g.s)("table_task",e)?b.Z:null}function W(){if(V.value)return void Z.push({name:"exercises",params:{section:w.params["section"],subsection:w.params["subsection"],group:w.params["group"]}});const e=(0,o.cloneDeep)(M.value);a.saveItem(e,t.getExerciseNumber(e)||"?",q.value,I.value),l.increaseExperience(e,100*S.value/q.value),F.value=!0,C.dialog({title:"Результат",html:!0,message:`Количество правильно выполненных заданий: ${S.value}<br>Количество заданий, где есть ошибка: ${I.value}<br>Всего: ${q.value}`})}function K(){C.dialog({component:L,componentProps:{group:T.value}})}return(0,s.bv)((()=>{r()({selector:"img"})})),(0,s.SK)((()=>{V.value&&M.value.tasks.forEach((e=>{(0,g.s)("selecting_task",e)&&(e.selecting_task.value=void 0),(0,g.s)("typing_task",e)&&(e.typing_task.value=void 0),(0,g.s)("skip_inserting_task",e)&&(e.skip_inserting_task.value=void 0),(0,g.s)("matching_task",e)&&(e.matching_task.keys=void 0,e.matching_task.values=void 0),(0,g.s)("image_task",e)&&e.image_task.options.forEach((e=>{e.selectedOptionId=void 0})),(0,g.s)("table_task",e)&&(e.table_task.value=void 0)}))})),(e,t)=>{const a=(0,s.up)("q-btn"),n=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(n,{class:"exercise-page page row justify-center",padding:""},{default:(0,s.w5)((()=>[(0,s.Wm)(k.Z,{class:"exercise-card container full-width"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{class:"exercise-page__book-btn",label:"View",icon:"menu_book",flat:"",noCaps:"",onClick:K}),(0,s._)("div",{innerHTML:M.value.content,style:{width:"100%"}},null,8,j),(0,s._)("div",D,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(M.value.tasks,((e,t)=>((0,s.wg)(),(0,s.j4)((0,s.LL)(U(e)),{class:"task",key:e.id,showSolution:F.value,modelValue:M.value.tasks[t],"onUpdate:modelValue":e=>M.value.tasks[t]=e},null,8,["showSolution","modelValue","onUpdate:modelValue"])))),128))]),(0,s.Wm)(d.Z,{class:"full-width exercise-page__btn",onClick:W},{default:(0,s.w5)((()=>[(0,s.Uk)((0,s.zw)(V.value?"Continue":"Accept answer"),1)])),_:1})])),_:1})])),_:1})}}}),T=a(9885),V=a(5157);const q=(0,x.Z)(M,[["__scopeId","data-v-14f872cd"]]);var I=q;E()(M,"components",{QPage:T.Z,QBtn:V.Z})}}]);