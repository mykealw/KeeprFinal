import{r as te,c as k,a as y,o as p,b as _,d as a,e as V,F as z,S as H,f as oe,g as L,u as O,M as K,h as N,w as P,i as S,j as x,v as $,k as ae,l as C,t as h,m as se,n as ne,p as ie,q as re,s as j,x as le,y as ce,z as M,A as q,B,C as de,D as ue,E as pe}from"./vendor.45489d85.js";const _e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}};_e();const i=te({user:{},account:{},profile:{},keeps:[],vaults:[],activeKeep:{},myKeeps:[],myVaults:[],vaultKeeps:[],activeVault:{}});var b=(s,e)=>{for(const[t,o]of e)s[t]=o;return s};const me={name:"App",setup(){return{appState:k(()=>i),activateKeep:k(()=>i.activeKeep.picture)}}},ve={class:"bg"},ge=a("footer",null,null,-1);function he(s,e,t,o,n,l){const d=y("Navbar"),c=y("router-view"),g=y("CreateKeepForm"),f=y("CreateVaultForm");return p(),_(z,null,[a("header",null,[V(d)]),a("main",ve,[V(c),V(g),V(f)]),ge],64)}var fe=b(me,[["render",he]]);const F=window.location.origin.includes("localhost"),W=F?"https://localhost:5001":"",ke="dev-arc8ixw5.us.auth0.com",be="b4Q9Wty6eIsyWlwRQmjMiaeAbgLKxz1Z",ye="https://MykealDev.com";function E(s,e){if(F)console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(s){case"log":case"assert":return}console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const r={log(){E("log",arguments)},error(){E("error",arguments)},warn(){E("warn",arguments)},assert(){E("assert",arguments)},trace(){E("trace",arguments)}};class m{static async confirm(e="Are you sure?",t="You won't be able to revert this!",o="warning",n="Yes, delete it!"){try{return!!(await H.fire({title:e,text:t,icon:o,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:n})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",o="top-end",n=3e3,l=!0){H.fire({title:e,icon:t,position:o,timer:n,timerProgressBar:l,toast:!0,showConfirmButton:!1})}static error(e){var t;if(e.isAxiosError){const{response:o}=e;this.toast(((t=o.data.error)==null?void 0:t.message)||o.data.message,"error")}else this.toast(e.message||e,"error")}static success(e="Success!"){this.toast(e,"success")}}const u=oe.create({baseURL:W,timeout:8e3});class we{async getAllKeeps(){const e=await u.get("api/keeps");r.log(e.data,"all keeps"),i.keeps=e.data}async getKeepById(e){const t=await u.get("api/keeps/"+e);r.log(t.data,"got that keep"),i.activeKeep=t.data}async createKeep(e){const t=await u.post("api/keeps/",e);r.log(t.data,"keep made"),i.keeps.unshift(t.data),i.activeKeep=t.data}async editKeep(e){r.log(e,"what is coming in");const t=await u.put("api/keeps/"+e.id,e);r.log(t.data,"update finished");let o=i.keeps.findIndex(l=>l.id===t.data.id);o!=-1&&i.keeps.splice(o,1,t.data);let n=i.myKeeps.findIndex(l=>l.id===t.data.id);n!=-1&&i.myKeeps.splice(n,1,t.data),i.activeKeep=t.data}async deleteKeep(e){const t=await u.delete("api/keeps/"+e);r.log(t.data,"deleted keep"),i.myKeeps.filter(o=>o.id!=e),i.keeps.filter(o=>o.id!=e)}}const I=new we;class Ke{async getProfile(e){const t=await u.get("api/profiles/"+e);r.log(t.data,"profile got"),i.profile=t.data}async getProfileKeeps(e){const t=await u.get("api/profiles/"+e+"/keeps");r.log(t.data,"profiles keeps"),i.myKeeps=t.data}async getProfileVaults(e){const t=await u.get("api/profiles/"+e+"/vaults");r.log(t.data,"profiles vaults"),i.vaults=t.data}}const Y=new Ke,xe={setup(){const s=L({}),e=O();return{edit:s,async createKeep(){try{await I.createKeep(s.value),K.getOrCreateInstance(document.getElementById("create-keep")).hide(),await Y.getProfileKeeps(e.params.id)}catch(t){r.log(t),m.toast(t.message,"error")}}}}},Ve={class:"p-4"},$e=a("button",{type:"button",class:"btn-close position-absolute right top","data-bs-dismiss":"modal",title:"close button"},null,-1),Pe=a("h3",{class:"text-center",title:"create keep"},"Create Keep",-1),Se={class:"justify-content-center"},Ce={class:"row"},Ee={class:"col-md-12 p-1"},Ie=a("label",{class:"p-1",for:"Keep Name"},"Name:",-1),Te={class:"col-md-12 p-1"},Ae=a("label",{class:"p-1",for:"Keep description"},"Description:",-1),Oe={class:"col-md-12 p-1"},je=a("label",{class:"p-1",for:"Keep  Image"}," Image URL:",-1),Me=a("button",{class:"btn btn-success",title:"submit"},"Submit",-1);function De(s,e,t,o,n,l){const d=y("Modal");return p(),N(d,{id:"create-keep"},{"modal-body":P(()=>[a("div",Ve,[$e,Pe,a("form",{onSubmit:e[3]||(e[3]=S(c=>o.createKeep(),["prevent"]))},[a("div",Se,[a("div",Ce,[a("div",Ee,[Ie,x(a("input",{required:"",class:"w-100",title:"name input","onUpdate:modelValue":e[0]||(e[0]=c=>o.edit.name=c),maxlength:"20",type:"text"},null,512),[[$,o.edit.name]])]),a("div",Te,[Ae,x(a("textarea",{required:"",title:"description input","onUpdate:modelValue":e[1]||(e[1]=c=>o.edit.description=c),class:"form-control",name:"ProjectDescription",id:"ProjectDescription",rows:"3"},null,512),[[$,o.edit.description]])]),a("div",Oe,[je,x(a("input",{class:"w-100",title:"img url input",required:"","onUpdate:modelValue":e[2]||(e[2]=c=>o.edit.img=c),type:"url"},null,512),[[$,o.edit.img]])]),Me])])],32)])]),_:1})}var Le=b(xe,[["render",De]]),Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Le});class qe{async getVaultById(e){const t=await u.get("api/vaults/"+e);r.log(t.data,"got vault"),i.activeVault=t.data}async createVault(e){const t=await u.post("api/vaults/",e);r.log(t.data,"new vault"),i.activeVault=t.data,i.vaults.unshift(t.data),i.myVaults.unshift(t.data)}async editVault(e){r.log(e,"coming in");const t=await u.put("api/vaults/"+e.id);r.log(t.data,"update");let o=i.vaults.findIndex(l=>l.id===t.data.id);o!=-1&&i.vaults.splice(o,1,t.data);let n=i.myVaults.findIndex(l=>l.id===t.data.id);o!=-1&&i.myVaults.splice(n,1,t.data),i.activeVault=t.data}async deleteVault(e){const t=await u.delete("api/vaults/"+e);r.log(t.data,"deleted vault"),i.vaults.filter(o=>o.id!=e),i.myVaults.filter(o=>o.id!=e)}}const Be=new qe,Re={setup(){const s=L({}),e=O();return{edit:s,async createVault(){try{r.log(s.value,"edit?"),await Be.createVault(s.value),K.getOrCreateInstance(document.getElementById("create-vault")).hide(),await Y.getProfileKeeps(e.params.id)}catch(t){r.log(t),m.toast(t.message,"error")}}}}},Ue={class:"p-4"},ze=a("button",{type:"button",class:"btn-close position-absolute right top","data-bs-dismiss":"modal"},null,-1),He=a("h3",{class:"text-center",title:"create vault"},"Create Vault",-1),Fe={class:"justify-content-center"},We={class:"row"},Ye={class:"col-md-12 p-1"},Ge=a("label",{class:"p-1",for:"Vault Name",title:"name input"},"Name:",-1),Qe={class:"col-md-12 p-1"},Ze=a("label",{class:"p-1",for:"Vault description",title:"description input"},"Description:",-1),Je={class:"form-check col-md-12"},Xe=a("label",{class:"form-check-label",for:"isPrivate"}," Is this Private? ",-1),et={class:"col-md-12 p-1"},tt=a("label",{class:"p-1",for:"Vault  Image",title:"url input"}," Image URL:",-1),ot=a("button",{class:"btn btn-success",title:"submit"},"Submit",-1);function at(s,e,t,o,n,l){const d=y("Modal");return p(),N(d,{id:"create-vault"},{"modal-body":P(()=>[a("div",Ue,[ze,He,a("form",{onSubmit:e[4]||(e[4]=S(c=>o.createVault(),["prevent"]))},[a("div",Fe,[a("div",We,[a("div",Ye,[Ge,x(a("input",{required:"",class:"w-100","onUpdate:modelValue":e[0]||(e[0]=c=>o.edit.name=c),maxlength:"20",type:"text"},null,512),[[$,o.edit.name]])]),a("div",Qe,[Ze,x(a("textarea",{required:"","onUpdate:modelValue":e[1]||(e[1]=c=>o.edit.description=c),class:"form-control",name:"ProjectDescription",id:"ProjectDescription",rows:"3"},null,512),[[$,o.edit.description]])]),a("div",Je,[Xe,x(a("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=c=>o.edit.isPrivate=c),id:"isPrivate",title:"is private input"},null,512),[[ae,o.edit.isPrivate]])]),a("div",et,[tt,x(a("input",{class:"w-100",required:"","onUpdate:modelValue":e[3]||(e[3]=c=>o.edit.img=c),type:"url"},null,512),[[$,o.edit.img]])]),ot])])],32)])]),_:1})}var st=b(Re,[["render",at]]),nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st});const it={props:{keep:{type:Object,required:!0}},setup(s){const e=C();return{goToProfile(){e.push({name:"Profile",params:{id:s.keep.creatorId}})},async activateKeep(){try{await I.getKeepById(s.keep.id),await K.getOrCreateInstance(document.getElementById("keep-modal")).show()}catch(t){r.log(t),m.toast(t.message,"error")}}}}},rt={class:"Keep p-2"},lt={class:"position-relative"},ct=["src","alt","title"],dt={class:"position-absolute w-100 d-flex rp1 rp2"},ut=["src","alt","title"];function pt(s,e,t,o,n,l){var d,c,g;return p(),_("div",rt,[a("div",lt,[a("img",{class:"object-fit rounded action",onClick:e[0]||(e[0]=f=>o.activateKeep()),src:t.keep.img,alt:t.keep.name,title:t.keep.name},null,8,ct),a("div",dt,[a("h4",{class:"ts text-light me-2 action",onClick:e[1]||(e[1]=S(f=>o.activateKeep(),["stop"]))},h(t.keep.name),1),a("img",{class:"circle ri1 ri2 crosshair",onClick:e[2]||(e[2]=f=>o.goToProfile()),src:(d=t.keep.creator)==null?void 0:d.picture,alt:(c=t.keep.creator)==null?void 0:c.name,title:(g=t.keep.creator)==null?void 0:g.name},null,8,ut)])])])}var _t=b(it,[["render",pt]]),mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_t});class vt{async getAllVaultsKeeps(e){const t=await u.get("api/vaults/"+e+"/keeps");r.log(t.data,"here are the keeps"),i.keeps=t.data}async createVaultKeep(e){r.log(e,"new to be made");const t=await u.post("api/vaultkeeps",e);r.log(t.data,"vaultkeep made"),i.vaultKeeps.unshift(t.data)}async deleteVaultKeep(e){const t=await u.delete("api/vaultkeeps/"+e);r.log(t.data,"deleted vaultkeep"),i.vaultKeeps.filter(o=>o.id!=e)}}const R=new vt,gt="modulepreload",G={},ht="/",T=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${ht}${o}`,o in G)return;G[o]=!0;const n=o.endsWith(".css"),l=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":gt,n||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),n)return new Promise((c,g)=>{d.addEventListener("load",c),d.addEventListener("error",g)})})).then(()=>e())};function ft(s){switch(s){case"./pages/AboutPage.vue":return T(()=>import("./AboutPage.558daca0.js"),["assets/AboutPage.558daca0.js","assets/vendor.45489d85.js"]);case"./pages/AccountPage.vue":return T(()=>import("./AccountPage.0e47c5a4.js"),["assets/AccountPage.0e47c5a4.js","assets/AccountPage.bb3323fd.css","assets/vendor.45489d85.js"]);case"./pages/HomePage.vue":return T(()=>import("./HomePage.424a24a3.js"),["assets/HomePage.424a24a3.js","assets/vendor.45489d85.js"]);case"./pages/ProfilePage.vue":return T(()=>import("./ProfilePage.fcb70a8a.js"),["assets/ProfilePage.fcb70a8a.js","assets/vendor.45489d85.js"]);case"./pages/VaultPage.vue":return T(()=>import("./VaultPage.fe1815e5.js"),["assets/VaultPage.fe1815e5.js","assets/vendor.45489d85.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function D(s){return()=>ft(`./pages/${s}.vue`)}const kt=[{path:"/",name:"Home",component:D("HomePage")},{path:"/profiles/:id",name:"Profile",component:D("ProfilePage")},{path:"/vaults/:id",name:"Vaults",component:D("VaultPage"),beforeEnter:ie},{path:"/account",name:"Account",component:D("AccountPage"),beforeEnter:re}],Q=se({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:ne(),routes:kt});const bt={props:{keep:{type:Object,required:!0}},setup(s){const e=C();O();const t=L({});return{vaultId:t,vault:k(()=>i.myVaults),keep:k(()=>i.activeKeep),account:k(()=>i.account),profile:k(()=>i.profile),user:k(()=>i.user),async addToVault(){try{let o={vaultId:t.value,keepId:i.activeKeep.id};await R.createVaultKeep(o),t.value=0,K.getOrCreateInstance(document.getElementById("keep-modal")).hide()}catch(o){r.log(o),m.toast(o.message,"error")}},async deleteKeep(o){try{await m.confirm()&&(await I.deleteKeep(o),K.getOrCreateInstance(document.getElementById("keep-modal")).hide(),m.toast("deleted"),i.keeps=i.keeps.filter(n=>n.id!==o))}catch(n){r.log(n),m.toast(n.message,"error")}},goToProfile(){var o,n;K.getOrCreateInstance(document.getElementById("keep-modal")).hide(),e.push({name:"Profile",params:{id:(n=(o=i.activeKeep)==null?void 0:o.creator)==null?void 0:n.id}})}}}},A=s=>(q("data-v-747c57da"),s=s(),B(),s),yt={class:"container-fluid position-relative"},wt=A(()=>a("button",{type:"button",class:"btn-close position-absolute close-button right top",title:"close button","data-bs-dismiss":"modal"},null,-1)),Kt={class:"row d-flex p-3"},xt={class:"col-md-6"},Vt=["src","alt","title"],$t={class:"col-md-6"},Pt={class:"row my-4"},St={class:"text-info text-center"},Ct=A(()=>a("i",{class:"mdi mdi-eye",title:"keep views"},null,-1)),Et=A(()=>a("i",{class:"mdi mdi-chevron-right-box-outline",title:"keep kepts"},null,-1)),It=A(()=>a("i",{class:"mdi mdi-share-variant",title:"keep shares"},null,-1)),Tt={class:"row my-3"},At={class:"col-md-12"},Ot=["title"],jt={class:"col-md-12"},Mt=["title"],Dt=A(()=>a("hr",{class:"my-5"},null,-1)),Lt={class:"row my-5"},Nt={key:0,class:"col-md-7"},qt=["value"],Bt={class:"col-md-1"},Rt=["src","alt"],Ut={class:"ms-2"};function zt(s,e,t,o,n,l){const d=y("Modal");return p(),N(d,{id:"keep-modal"},{"modal-body":P(()=>{var c,g,f,U;return[a("div",yt,[wt,a("div",Kt,[a("div",xt,[a("img",{class:"object-fit rounded",src:o.keep.img,alt:o.keep.name,title:o.keep.name},null,8,Vt)]),a("div",$t,[a("div",Pt,[a("h4",St,[Ct,j(" "+h((c=o.keep)==null?void 0:c.views)+" ",1),Et,j(" "+h(o.keep.kept)+" ",1),It,j(" "+h(o.keep.shares),1)])]),a("div",Tt,[a("div",At,[a("h1",{title:o.keep.name},h(o.keep.name),9,Ot)]),a("div",jt,[a("h3",{title:o.keep.description},h(o.keep.description),9,Mt),Dt])]),a("div",Lt,[o.user.isAuthenticated?(p(),_("div",Nt,[x(a("select",{name:"add to vault",id:"add to vault","onUpdate:modelValue":e[0]||(e[0]=w=>o.vaultId=w),placeholder:"add to vault",title:"add to vault"},[(p(!0),_(z,null,ce(o.vault,w=>(p(),_("option",{key:w.id,value:w.id,title:"select vault"},h(w.name),9,qt))),128))],512),[[le,o.vaultId]]),a("button",{class:"btn btn-success ms-2",onClick:e[1]||(e[1]=w=>o.addToVault()),title:"add to vault"}," add to vault ")])):M("",!0),a("div",Bt,[o.keep.creatorId==o.account.id?(p(),_("i",{key:0,class:"mdi mdi-delete mdi-36px action",title:"delete keep",onClick:e[2]||(e[2]=w=>o.deleteKeep(o.keep.id))})):M("",!0)]),a("div",{class:"col-md-4 d-flex action",onClick:e[3]||(e[3]=w=>o.goToProfile()),title:"go to profile"},[a("img",{height:"40",src:(g=o.keep.creator)==null?void 0:g.picture,alt:(f=o.keep.creator)==null?void 0:f.name},null,8,Rt),a("h5",Ut,h((U=o.keep.creator)==null?void 0:U.name),1)])])])])])]}),_:1})}var Ht=b(bt,[["render",zt],["__scopeId","data-v-747c57da"]]),Ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ht});const Wt={props:{keep:{type:Object,required:!0}},setup(s){return{async activateKeep(){try{await I.getKeepById(s.keep.id),await K.getOrCreateInstance(document.getElementById("keep-modal")).show()}catch(e){r.log(e),m.toast(e.message,"error")}}}}},Yt={class:"Keep p-2"},Gt={class:"position-relative"},Qt={class:"w-100 d-flex"},Zt=["src","alt","title"],Jt={class:"kt1 kt2 position-absolute"},Xt=["title"];function eo(s,e,t,o,n,l){return p(),_("div",Yt,[a("div",Gt,[a("div",Qt,[a("img",{class:"kp3 rounded action",onClick:e[0]||(e[0]=d=>o.activateKeep()),src:t.keep.img,alt:t.keep.name,title:t.keep.name},null,8,Zt),a("div",Jt,[a("h5",{class:"ts text-light action",onClick:e[1]||(e[1]=S(d=>o.activateKeep(),["stop"])),title:t.keep.name},h(t.keep.name),9,Xt)])])])])}var to=b(Wt,[["render",eo]]),oo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:to});const ao={props:{keep:{type:Object,required:!0}},setup(s){const e=C(),t=O();return{account:k(()=>i.account),vault:k(()=>i.activeVault),async activateKeep(){try{await I.getKeepById(s.keep.id),await K.getOrCreateInstance(document.getElementById("keep-modal")).show()}catch(o){r.log(o),m.toast(o.message,"error")}},goToProfile(){e.push({name:"Profile",params:{id:s.keep.creatorId}})},async removeFromVault(){try{await m.confirm()&&(await R.deleteVaultKeep(s.keep.vaultKeepId),await R.getAllVaultsKeeps(t.params.id))}catch(o){r.log(o),m.toast(o.message,"error")}}}}},so={class:"Keep p-2"},no={class:"position-relative"},io={class:"w-100 d-flex"},ro=["src","alt","title"],lo={class:"kt1 kt2 position-absolute d-flex"},co=["title"],uo=["src","alt","title"],po={key:0,class:"ts text-light ms-4",title:"remove from vault"};function _o(s,e,t,o,n,l){var d,c,g;return p(),_("div",so,[a("div",no,[a("div",io,[a("img",{class:"vp1 vp2 rounded crosshair",onClick:e[0]||(e[0]=f=>o.activateKeep()),src:t.keep.img,alt:t.keep.name,title:t.keep.name},null,8,ro),a("div",lo,[a("h5",{class:"ts text-light action",title:t.keep.name,onClick:e[1]||(e[1]=S(f=>o.activateKeep(),["stop"]))},h(t.keep.name),9,co),a("img",{class:"circle vi1 vi2 action ms-4",onClick:e[2]||(e[2]=f=>o.goToProfile()),src:(d=t.keep.creator)==null?void 0:d.picture,alt:(c=t.keep.creator)==null?void 0:c.name,title:(g=t.keep.creator)==null?void 0:g.name},null,8,uo),o.vault.creatorId==o.account.id?(p(),_("h5",po,[a("i",{onClick:e[3]||(e[3]=f=>o.removeFromVault()),class:"mdi mdi-delete selectable"})])):M("",!0)])])])])}var mo=b(ao,[["render",_o]]),vo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mo});class go{async getAccount(){try{const e=await u.get("/account");i.account=e.data}catch(e){r.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getAccountVaults(){try{const e=await u.get("/account/vaults");r.log(e.data,"my vaults"),i.myVaults=e.data}catch(e){r.log(e),m.toast(e.message,"error")}}async EditAccount(e){try{const t=await u.put("/account",e);r.log(t.data,"updated account&profile"),i.account=t.data}catch(t){r.log(t),m.toast(t.message,"error")}}}const Z=new go,ho={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class fo{constructor(e=!1,t=W){}on(e,t){var o;return(o=this.socket)==null||o.on(e,t.bind(this)),this}onConnected(e){r.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){r.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(ho.authenticate,e)}onError(e){r.error("[SOCKET_ERROR]",e)}enqueue(e,t){r.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){r.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class ko extends fo{constructor(){super();this.on("error",this.onError)}onError(e){m.toast(e.message,"error")}}const J=new ko,v=de({domain:ke,clientId:be,audience:ye,useRefreshTokens:!0,onRedirectCallback:s=>{Q.push(s&&s.targetUrl?s.targetUrl:window.location.pathname)}});v.on(v.AUTH_EVENTS.AUTHENTICATED,async function(){u.defaults.headers.authorization=v.bearer,u.interceptors.request.use(bo),i.user=v.user,await Z.getAccount(),J.authenticate(v.bearer),Z.getAccountVaults()});async function bo(s){if(!v.isAuthenticated)return s;const e=v.identity.exp*1e3,t=e<Date.now(),o=e<Date.now()+1e3*60*60*12;return t?await v.loginWithPopup():o&&(await v.getTokenSilently(),u.defaults.headers.authorization=v.bearer,J.authenticate(v.bearer)),s}const yo={setup(){const s=C();return{user:k(()=>i.user),account:k(()=>i.account),async login(){v.loginWithPopup()},async logout(){v.logout({returnTo:window.location.origin})},goToProfile(){s.push({name:"Profile",params:{id:i.account.id}})}}}},X=s=>(q("data-v-69313446"),s=s(),B(),s),wo={class:""},Ko={key:1,class:"dropdown my-2 my-lg-0"},xo={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Vo={key:0,class:"bg-secondary p-1 rounded"},$o=["src"],Po={class:"mx-3 text-light bt ts"},So={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},Co=X(()=>a("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),Eo=X(()=>a("i",{class:"mdi mdi-logout"},null,-1)),Io=j(" logout "),To=[Eo,Io];function Ao(s,e,t,o,n,l){const d=y("router-link");return p(),_("span",wo,[o.user.isAuthenticated?(p(),_("div",Ko,[a("div",xo,[o.account.picture?(p(),_("div",Vo,[a("img",{src:o.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,$o),a("span",Po,h(o.account.name),1)])):M("",!0)]),a("div",So,[V(d,{to:{name:"Account"}},{default:P(()=>[Co]),_:1}),a("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[1]||(e[1]=c=>o.goToProfile())}," Go to Profile "),a("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[2]||(e[2]=(...c)=>o.logout&&o.logout(...c))},To)])])):(p(),_("button",{key:0,class:"btn selectable text-light text-uppercase my-2 my-lg-0 bg-secondary bt ts",onClick:e[0]||(e[0]=(...c)=>o.login&&o.login(...c)),title:"log in"}," Login "))])}var Oo=b(yo,[["render",Ao],["__scopeId","data-v-69313446"]]),jo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oo});const Mo={},Do={class:"modal fade"},Lo={class:"modal-dialog modal-xl modal-dialog-centered"},No={class:"modal-content"},qo={class:"modal-body p-0"};function Bo(s,e){return p(),_("div",Do,[a("div",Lo,[a("div",No,[a("div",qo,[ue(s.$slots,"modal-body")])])])])}var Ro=b(Mo,[["render",Bo]]),Uo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ro}),zo="/assets/keepr.346d167a.png";const Ho={setup(){return{}}},Fo=s=>(q("data-v-4b398bbc"),s=s(),B(),s),Wo={class:"d-flex bg-primary jcsb p-3"},Yo=Fo(()=>a("div",{class:"d-flex flex-column align-items-center"},[a("label",{for:"logo",class:"visually-hidden"}," navigate home"),a("img",{alt:"GO home","aria-label":"logo, go home",src:zo,height:"45",title:"Keepr, go home!"})],-1)),Go={class:"",id:""};function Qo(s,e,t,o,n,l){const d=y("router-link"),c=y("Login");return p(),_("nav",Wo,[V(d,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:P(()=>[Yo]),_:1}),a("div",Go,[V(c)])])}var Zo=b(Ho,[["render",Qo],["__scopeId","data-v-4b398bbc"]]),Jo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zo});const Xo={props:{vault:{type:Object,required:!0}},setup(s){const e=C();return{goToVault(){e.push({name:"Vaults",params:{id:s.vault.id}})}}}},ea={class:"vault mt-2 position-relative"},ta=["src","alt","title"],oa={class:"position-absolute kt1 kt2"},aa=["title"];function sa(s,e,t,o,n,l){return p(),_("div",ea,[a("img",{class:"vp1 vp2 rounded action",onClick:e[0]||(e[0]=d=>o.goToVault()),src:t.vault.img,alt:t.vault.name,title:t.vault.name},null,8,ta),a("div",oa,[a("h3",{class:"ts text-light",title:t.vault.name},h(t.vault.name),9,aa)])])}var na=b(Xo,[["render",sa]]),ia=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:na});function ra(s){Object.entries({"./components/CreateKeepForm.vue":Ne,"./components/CreateVaultForm.vue":nt,"./components/KeepH.vue":mt,"./components/KeepModal.vue":Ft,"./components/KeepP.vue":oo,"./components/KeepV.vue":vo,"./components/Login.vue":jo,"./components/Modal.vue":Uo,"./components/Navbar.vue":Jo,"./components/Vault.vue":ia}).forEach(([t,o])=>{const n=o.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");s.component(n,o.default)})}const ee=pe(fe);ra(ee);ee.use(Q).mount("#app");export{i as A,m as P,b as _,Z as a,R as b,I as k,r as l,Y as p,Be as v};
