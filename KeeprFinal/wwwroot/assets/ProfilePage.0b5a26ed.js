import{u as M,G as P,c as n,M as v,a as m,o as a,b as l,d as t,t as i,z as g,F as c,y as _,s as k,e as p}from"./vendor.45489d85.js";import{_ as w,p as u,l as h,P as f,A as d}from"./index.8e753b70.js";const x={setup(){const r=M();return P(async()=>{try{await u.getProfile(r.params.id),await u.getProfileKeeps(r.params.id),await u.getProfileVaults(r.params.id)}catch(o){h.log(o),f.toast(o.message,"error")}}),{keeps:n(()=>d.myKeeps),vaults:n(()=>d.vaults),profile:n(()=>d.profile),account:n(()=>d.account),async makeKeepModal(){try{v.getOrCreateInstance(document.getElementById("create-keep")).show()}catch(o){h.log(o),f.toast(o.message,"error")}},async makeVaultModal(){try{v.getOrCreateInstance(document.getElementById("create-vault")).show()}catch(o){h.log(o),f.toast(o.message,"error")}}}}},C={class:"profile container-fluid flex-grow-1"},B={class:"row mt-2"},I={class:"col-md-3"},N=["for","title"],b=["src","alt","title"],E={class:"col-md-9"},S=["title"],j=["title"],A=["title"],F={class:"row mt-2"},O={class:"col-md-12"},z={title:"vaults"},D=k(" Vaults"),G={class:"mt-5"},L={class:"col-md-12"},R={title:"Keeps"},T=k(" Keeps"),q={class:"masonry-container1 masonry-container2"};function H(r,o,J,e,Q,U){const y=m("Vault"),K=m("KeepP"),V=m("KeepModal");return a(),l(c,null,[t("div",C,[t("div",B,[t("div",I,[t("label",{for:e.profile.name,class:"visually-hidden",title:e.profile.name},i(e.profile.name),9,N),t("img",{class:"pp1 pp2 rounded",src:e.profile.picture,alt:e.profile.name,title:e.profile.name},null,8,b)]),t("div",E,[t("h1",{title:e.profile.name},i(e.profile.name),9,S),t("h3",{title:e.vaults.length},"Vaults: "+i(e.vaults.length),9,j),t("h3",{title:e.keeps.length},"Keeps: "+i(e.keeps.length),9,A)])]),t("div",F,[t("div",O,[t("h2",z,[D,e.profile.id==e.account.id?(a(),l("i",{key:0,class:"mdi mdi-plus action",onClick:o[0]||(o[0]=s=>e.makeVaultModal())})):g("",!0)])]),(a(!0),l(c,null,_(e.vaults,s=>(a(),l("div",{key:s.id,class:"col-md-3"},[p(y,{vault:s},null,8,["vault"])]))),128))]),t("div",G,[t("div",L,[t("h2",R,[T,e.profile.id==e.account.id?(a(),l("i",{key:0,class:"mdi mdi-plus action",onClick:o[1]||(o[1]=s=>e.makeKeepModal())})):g("",!0)])]),t("div",q,[(a(!0),l(c,null,_(e.keeps,s=>(a(),l("div",{class:"",key:s.id},[p(K,{keep:s},null,8,["keep"])]))),128))])])]),(a(!0),l(c,null,_(e.keeps,s=>(a(),l("div",{key:s.id},[p(V,{keep:s},null,8,["keep"])]))),128))],64)}var Y=w(x,[["render",H]]);export{Y as default};
