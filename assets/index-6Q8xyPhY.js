var St=Object.defineProperty;var Pt=(e,i,n)=>i in e?St(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n;var Ee=(e,i,n)=>(Pt(e,typeof i!="symbol"?i+"":i,n),n);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function L(){}function xt(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function bt(e){return e()}function ht(){return Object.create(null)}function ue(e){e.forEach(bt)}function wt(e){return typeof e=="function"}function At(e,i){return e!=e?i==i:e!==i||e&&typeof e=="object"||typeof e=="function"}function Bt(e){return Object.keys(e).length===0}function dt(e){return e??""}function l(e,i){e.appendChild(i)}function R(e,i,n){e.insertBefore(i,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function Tt(e,i){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(i)}function Re(e){return document.createElement(e)}function a(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function _(){return w(" ")}function ut(e,i,n,r){return e.addEventListener(i,n,r),()=>e.removeEventListener(i,n,r)}function t(e,i,n){n==null?e.removeAttribute(i):e.getAttribute(i)!==n&&e.setAttribute(i,n)}function T(e,i,n){e.setAttributeNS("http://www.w3.org/1999/xlink",i,n)}function Rt(e){return Array.from(e.childNodes)}function Ft(e,i){i=""+i,e.data!==i&&(e.data=i)}let fe;function E(e){fe=e}function Ht(){if(!fe)throw new Error("Function called outside component initialization");return fe}const he=[],pt=[];let de=[];const gt=[],$t=Promise.resolve();let xe=!1;function Ut(){xe||(xe=!0,$t.then(Fe))}function Be(e){de.push(e)}const Se=new Set;let ce=0;function Fe(){if(ce!==0)return;const e=fe;do{try{for(;ce<he.length;){const i=he[ce];ce++,E(i),Gt(i.$$)}}catch(i){throw he.length=0,ce=0,i}for(E(null),he.length=0,ce=0;pt.length;)pt.pop()();for(let i=0;i<de.length;i+=1){const n=de[i];Se.has(n)||(Se.add(n),n())}de.length=0}while(he.length);for(;gt.length;)gt.pop()();xe=!1,Se.clear(),E(e)}function Gt(e){if(e.fragment!==null){e.update(),ue(e.before_update);const i=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,i),e.after_update.forEach(Be)}}function jt(e){const i=[],n=[];de.forEach(r=>e.indexOf(r)===-1?i.push(r):n.push(r)),n.forEach(r=>r()),de=i}const ve=new Set;let Y;function _t(){Y={r:0,c:[],p:Y}}function Lt(){Y.r||ue(Y.c),Y=Y.p}function ee(e,i){e&&e.i&&(ve.delete(e),e.i(i))}function me(e,i,n,r){if(e&&e.o){if(ve.has(e))return;ve.add(e),Y.c.push(()=>{ve.delete(e),r&&(n&&e.d(1),r())}),e.o(i)}else r&&r()}function Ct(e,i){const n=i.token={};function r(s,o,h,f){if(i.token!==n)return;i.resolved=f;let d=i.ctx;h!==void 0&&(d=d.slice(),d[h]=f);const c=s&&(i.current=s)(d);let u=!1;i.block&&(i.blocks?i.blocks.forEach((g,b)=>{b!==o&&g&&(_t(),me(g,1,1,()=>{i.blocks[b]===g&&(i.blocks[b]=null)}),Lt())}):i.block.d(1),c.c(),ee(c,1),c.m(i.mount(),i.anchor),u=!0),i.block=c,i.blocks&&(i.blocks[o]=c),u&&Fe()}if(xt(e)){const s=Ht();if(e.then(o=>{E(s),r(i.then,1,i.value,o),E(null)},o=>{if(E(s),r(i.catch,2,i.error,o),E(null),!i.hasCatch)throw o}),i.current!==i.pending)return r(i.pending,0),!0}else{if(i.current!==i.then)return r(i.then,1,i.value,e),!0;i.resolved=e}}function Dt(e,i,n){const r=i.slice(),{resolved:s}=e;e.current===e.then&&(r[e.value]=s),e.current===e.catch&&(r[e.error]=s),e.block.p(r,n)}function ft(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Kt(e){e&&e.c()}function Nt(e,i,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(i,n),Be(()=>{const o=e.$$.on_mount.map(bt).filter(wt);e.$$.on_destroy?e.$$.on_destroy.push(...o):ue(o),e.$$.on_mount=[]}),s.forEach(Be)}function kt(e,i){const n=e.$$;n.fragment!==null&&(jt(n.after_update),ue(n.on_destroy),n.fragment&&n.fragment.d(i),n.on_destroy=n.fragment=null,n.ctx=[])}function Vt(e,i){e.$$.dirty[0]===-1&&(he.push(e),Ut(),e.$$.dirty.fill(0)),e.$$.dirty[i/31|0]|=1<<i%31}function It(e,i,n,r,s,o,h=null,f=[-1]){const d=fe;E(e);const c=e.$$={fragment:null,ctx:[],props:o,update:L,not_equal:s,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:ht(),dirty:f,skip_bound:!1,root:i.target||d.$$.root};h&&h(c.root);let u=!1;if(c.ctx=n?n(e,i.props||{},(g,b,...k)=>{const N=k.length?k[0]:b;return c.ctx&&s(c.ctx[g],c.ctx[g]=N)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](N),u&&Vt(e,g)),b}):[],c.update(),u=!0,ue(c.before_update),c.fragment=r?r(c.ctx):!1,i.target){if(i.hydrate){const g=Rt(i.target);c.fragment&&c.fragment.l(g),g.forEach(S)}else c.fragment&&c.fragment.c();i.intro&&ee(e.$$.fragment),Nt(e,i.target,i.anchor),Fe()}E(d)}class Wt{constructor(){Ee(this,"$$");Ee(this,"$$set")}$destroy(){kt(this,1),this.$destroy=L}$on(i,n){if(!wt(n))return L;const r=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(i){this.$$set&&!Bt(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}const Zt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Zt);const qt=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});function Ot(e){return qt.format(e).replace(",","")}function Qt(e,i){return i*e*e/.453}function Jt(e){let i,n,r,s,o,h,f,d;return{c(){i=a("text"),n=a("tspan"),r=w(e[1]),o=a("tspan"),h=w("lbs"),t(n,"class",s=dt(e[1].length>3?"very-small":"small")+" svelte-19fepds"),t(o,"class","very-small svelte-19fepds"),t(i,"x",f=e[0].x+"%"),t(i,"y",d=e[0].y+e[0].height+"%"),t(i,"transform","translate(0, 10)")},m(c,u){R(c,i,u),l(i,n),l(n,r),l(i,o),l(o,h)},p(c,[u]){u&2&&Ft(r,c[1]),u&2&&s!==(s=dt(c[1].length>3?"very-small":"small")+" svelte-19fepds")&&t(n,"class",s),u&1&&f!==(f=c[0].x+"%")&&t(i,"x",f),u&1&&d!==(d=c[0].y+c[0].height+"%")&&t(i,"y",d)},i:L,o:L,d(c){c&&S(i)}}}function Xt(e,i,n){let r,{charViewModel:s}=i;return e.$$set=o=>{"charViewModel"in o&&n(0,s=o.charViewModel)},e.$$.update=()=>{e.$$.dirty&1&&n(1,r=Ot(s.weight))},[s,r]}class zt extends Wt{constructor(i){super(),It(this,i,Xt,Jt,At,{charViewModel:0})}}const Oe="/dmwgc/assets/corner-LhPWaTs7.svg",Yt="/dmwgc/assets/Water_Can_Big_PNG-SFfGN0F_.png",ei="/dmwgc/assets/title-vpBJ14wl.jpg";function ti(e){const i=[],n=e.split(`
`);for(const r of n){const s=ii(r);s&&i.push(s)}return i}function ii(e){const[i,n]=e.split("	");return!i||!n?null:{character:i,amount:parseInt(n)}}const ni="/dmwgc/assets/Benchidori-n4RXg8lo.jpg",ri="/dmwgc/assets/Chillchucks_Wife-Z0DXycrM.jpg",si="/dmwgc/assets/Cithis-DHrl0prL.jpg",li="/dmwgc/assets/Daya-dTfZdvZn.jpg",ai="/dmwgc/assets/Dungeon_Dwellers-6lRSkuWX.jpg",oi="/dmwgc/assets/Elven_Queen-dZS69lkp.jpg",ci="/dmwgc/assets/Erique-llQEZPPe.jpg",hi="/dmwgc/assets/Falin-WnOWjTZK.jpg",di="/dmwgc/assets/Flamela-ezCwjgyH.jpg",ui="/dmwgc/assets/Fleki-0Ew3H-6j.jpg",pi="/dmwgc/assets/Golden_Kingdom-sS00cCnW.jpg",gi="/dmwgc/assets/Hien-OpQ-miqE.jpg",fi="/dmwgc/assets/Kiki-RB-1TSuo.jpg",mi="/dmwgc/assets/Leed-3NqcsME5.jpg",yi="/dmwgc/assets/Maizuru-GYb3xqLY.jpg",Mi="/dmwgc/assets/Marcille-AtXsHK8d.jpg",bi="/dmwgc/assets/Marcilles_Mom-c38OE0X9.jpg",wi="/dmwgc/assets/Milsiril-JqyP5kps.jpg",Ai="/dmwgc/assets/Misyl-cQmdTZhY.jpg",_i="/dmwgc/assets/Monster_Falin-VZhTmQZh.jpg",Li="/dmwgc/assets/Namari-BCNEoVMq.jpg",Ni="/dmwgc/assets/Otta-U2HjgDJ0.jpg",ki="/dmwgc/assets/Pattadol-c-XqPgpv.jpg",Ii="/dmwgc/assets/Rin-RfwZ7A3C.jpg",Wi="/dmwgc/assets/Tade-EC0lboRI.jpg",Oi="/dmwgc/assets/The_Queens_Attendants-zkqeGrsV.jpg",vi="/dmwgc/assets/Unnamed_Adventurers-t7AZv4OH.jpg",Ei="/dmwgc/assets/Unnamed_Canaries-6yv67kB8.jpg",ye={Falin:{heightInMeters:1.7,gender:"WOMAN",baseWeight:152,party:"LAIOS",pictureLink:hi,species:["TALLMAN"],immobilityBMI:130},Marcille:{heightInMeters:1.6,gender:"WOMAN",baseWeight:112,party:"LAIOS",pictureLink:Mi,species:["ELF","TALLMAN"],immobilityBMI:120},Laios:{heightInMeters:1.85,gender:"MAN",baseWeight:196,party:"LAIOS",species:["TALLMAN"],immobilityBMI:200},Chillchuck:{heightInMeters:1.1,gender:"MAN",baseWeight:48,party:"LAIOS",species:["HALFFOOT"],immobilityBMI:110},Namari:{heightInMeters:1.3,gender:"WOMAN",baseWeight:127,party:"ADVENTURERS",pictureLink:Li,species:["DWARF"],immobilityBMI:210},Kiki:{heightInMeters:1.8,gender:"WOMAN",baseWeight:150,party:"ADVENTURERS",pictureLink:fi,species:["TALLMAN"],immobilityBMI:200},Kaka:{heightInMeters:1.9,gender:"MAN",baseWeight:183,party:"ADVENTURERS",species:["TALLMAN"],immobilityBMI:210},Benichidori:{heightInMeters:1.6,gender:"WOMAN",baseWeight:112,party:"SHUROS",pictureLink:ni,species:["TALLMAN"],immobilityBMI:140},Maizuru:{heightInMeters:1.65,gender:"WOMAN",baseWeight:125,party:"SHUROS",pictureLink:yi,species:["TALLMAN"],immobilityBMI:120},Hien:{heightInMeters:1.7,gender:"WOMAN",baseWeight:155,party:"SHUROS",pictureLink:gi,species:["TALLMAN"],immobilityBMI:180},Tade:{heightInMeters:1.95,gender:"WOMAN",baseWeight:235,party:"SHUROS",pictureLink:Wi,species:["OGRE"],immobilityBMI:210},Shuro:{heightInMeters:1.8,gender:"MAN",baseWeight:165,party:"SHUROS",species:["TALLMAN"],immobilityBMI:210},Rin:{heightInMeters:1.65,gender:"WOMAN",baseWeight:110,party:"KABRUS",pictureLink:Ii,species:["TALLMAN"],immobilityBMI:120},Daya:{heightInMeters:1.3,gender:"WOMAN",baseWeight:141,party:"KABRUS",pictureLink:li,species:["DWARF"],immobilityBMI:190},Kabru:{heightInMeters:1.7,gender:"MAN",baseWeight:134,party:"KABRUS",species:["TALLMAN"],immobilityBMI:190},Kuro:{heightInMeters:1.45,gender:"MAN",baseWeight:110,party:"KABRUS",species:["KOBOLD"],immobilityBMI:120},Holm:{heightInMeters:1.4,gender:"MAN",baseWeight:90,party:"KABRUS",species:["GNOME"],immobilityBMI:120},Mickbell:{heightInMeters:1.05,gender:"MAN",baseWeight:44,party:"KABRUS",species:["HALFFOOT"],immobilityBMI:110},Pattadol:{heightInMeters:1.7,gender:"WOMAN",baseWeight:111,party:"MITHRUNS",pictureLink:ki,species:["ELF"],immobilityBMI:120},Cithis:{heightInMeters:1.65,gender:"WOMAN",baseWeight:119,party:"MITHRUNS",pictureLink:si,species:["ELF"],immobilityBMI:120},Fleki:{heightInMeters:1.3,gender:"WOMAN",baseWeight:66,party:"MITHRUNS",pictureLink:ui,species:["ELF"],immobilityBMI:110},Otta:{heightInMeters:1.3,gender:"WOMAN",baseWeight:75,party:"MITHRUNS",pictureLink:Ni,species:["ELF"],immobilityBMI:110},Mithrun:{heightInMeters:1.55,gender:"MAN",baseWeight:111,party:"MITHRUNS",species:["ELF"],immobilityBMI:120},Lycion:{heightInMeters:1.7,gender:"MAN",baseWeight:154,party:"MITHRUNS",species:["ELF"],immobilityBMI:140},Flamela:{heightInMeters:1.4,gender:"WOMAN",baseWeight:95,party:"FLAMELAS",pictureLink:di,species:["ELF"],immobilityBMI:120},Misyl:{heightInMeters:1.45,gender:"WOMAN",baseWeight:93,party:"FLAMELAS",pictureLink:Ai,species:["ELF"],immobilityBMI:130},Erique:{heightInMeters:1.5,gender:"WOMAN",baseWeight:110,party:"FLAMELAS",pictureLink:ci,species:["ELF"],immobilityBMI:120},Unnamed_Elves:{heightInMeters:1.5,gender:"WOMAN",baseWeight:665,party:"FLAMELAS",numbers:7,pictureLink:Ei,species:["ELF"],displayName:"Unnamed canaries",immobilityBMI:120},Queen:{heightInMeters:1.7,gender:"WOMAN",baseWeight:115,party:"OTHERS",pictureLink:oi,species:["ELF"],displayName:"Elven Queen",immobilityBMI:140},Milsiril:{heightInMeters:1.5,gender:"WOMAN",baseWeight:104,party:"OTHERS",pictureLink:wi,species:["ELF"],immobilityBMI:140},Marcilles_Mom:{heightInMeters:1.55,gender:"WOMAN",baseWeight:110,party:"OTHERS",pictureLink:bi,species:["ELF"],displayName:"Marcille's Mom",immobilityBMI:120},Attendants:{heightInMeters:1.5,gender:"WOMAN",baseWeight:380,party:"OTHERS",numbers:4,pictureLink:Oi,species:["ELF"],displayName:"Queen's Attendants",immobilityBMI:130},Leed:{heightInMeters:1.5,gender:"WOMAN",baseWeight:203,party:"DUNGEON",pictureLink:mi,species:["MONSTER"],immobilityBMI:215},Monster_Falin:{heightInMeters:1,gender:"YES",baseWeight:6080,party:"DUNGEON",pictureLink:_i,species:["MONSTER"],displayName:"Monster Falin",immobilityBMI:220},Zon:{heightInMeters:1.75,gender:"MAN",baseWeight:265,party:"DUNGEON",species:["MONSTER"],immobilityBMI:225},Thistle:{heightInMeters:1.3,gender:"MAN",baseWeight:63,party:"DUNGEON",species:["ELF"],immobilityBMI:110},Chillchuck_wife:{heightInMeters:1,baseWeight:42,displayName:"Chillchuck's wife",gender:"WOMAN",party:"OTHERS",pictureLink:ri,species:["HALFFOOT"],immobilityBMI:100},Dungeon_dwellers:{heightInMeters:1.55,baseWeight:555,numbers:5,gender:"WOMAN",party:"OTHERS",pictureLink:ai,species:["TALLMAN"],immobilityBMI:130},Golden_kingdom:{heightInMeters:1.5,baseWeight:475,numbers:5,gender:"WOMAN",party:"DUNGEON",pictureLink:pi,species:["TALLMAN"],immobilityBMI:120},Unnamed_adventurers:{heightInMeters:1.65,baseWeight:650,numbers:5,gender:"WOMAN",party:"ADVENTURERS",pictureLink:vi,species:["TALLMAN"],immobilityBMI:150}};function Te(e){return ye[e]}function Si(){return Object.keys(ye)}function Pi(){return Object.values(ye).filter(e=>e.gender==="WOMAN").length}function xi(e){return ye[e].party}function Bi(e){return Object.values(ye).filter(i=>i.party===e).length}function Ti(e){const i={},n={DUNGEON:0,OTHERS:0,FLAMELAS:0,KABRUS:0,LAIOS:0,MITHRUNS:0,SHUROS:0,ADVENTURERS:0};let r=0;for(const s of e)i[s.character]||(i[s.character]=0),i[s.character]+=s.amount,n[xi(s.character)]+=s.amount,r+=s.amount;return Si().map(s=>{const o=i[s]||0,h=Te(s);let f=h.baseWeight+o+n[h.party]/Bi(h.party);return s==="Monster_Falin"&&(f+=r),h.numbers&&h.numbers>1&&(f/=h.numbers),{name:s,totalDonatedAmount:o,weight:f,immobilityThreshold:Qt(h.heightInMeters,h.immobilityBMI)}})}function Pe(e){return e.characters.find(i=>i.name==="Monster_Falin")}function Ri(e){const r=Math.max(...e.filter(d=>Te(d.name).gender==="WOMAN").map(d=>d.weight)),s=3200,o=95/(5*Pi()+1),h=e.sort((d,c)=>d.weight-c.weight).map((d,c)=>{const u=4*o,g=d.weight/Math.min(s,r)*75,b=83-d.immobilityThreshold/Math.min(s,r)*75,k=83-g,N=Te(d.name);return{...d,...N,height:g,width:u,x:2.5+o+5*o*c,y:k,immobilityThresholdY:b,picHeight:u*220/100,barGradient:Fi(N.party)}}),f=h.filter(d=>d.gender==="WOMAN").map((d,c)=>({...d,x:2.5+o+5*o*c}));return{characters:h,femaleCharacters:f,viewPortHeight:100,viewPortWidth:220}}function Fi(e){return{DUNGEON:"purple",FLAMELAS:"green",ADVENTURERS:"darkTeal",KABRUS:"blue",LAIOS:"orange",MITHRUNS:"darkGreen",SHUROS:"red",OTHERS:"pink"}[e]+"Gradient"}function mt(e,i,n){const r=e.slice();return r[4]=i[n],r}function Hi(e){let i;return{c(){i=Re("p"),i.textContent=`error: ${e[7]}`},m(n,r){R(n,i,r)},p:L,i:L,o:L,d(n){n&&S(i)}}}function $i(e){let i,n,r,s,o,h,f,d,c,u,g,b,k,N,I,Me,be,W,we,Ae,O,_e,Le,v,Ne,ke,p,Ie,He,$e,te,Ue,Ge,F,je,Ce,H,De,Ke,ie,Ve,Ze,ne,qe,Qe,$,Je,Xe,re,ze,Ye,U,et,tt,se,it,nt,le,pe,rt,st,ae,oe,G,j,ge,vt=Ot(Pe(e[3]).weight)+"",lt,at,ot,C,P,x,B,D,K,V,Z,q,Q,J,X,We,z=ft(e[3].femaleCharacters),m=[];for(let y=0;y<z.length;y+=1)m[y]=yt(mt(e,z,y));const Et=y=>me(m[y],1,1,()=>{m[y]=null});return{c(){i=a("svg"),n=a("defs"),r=a("linearGradient"),s=a("stop"),o=a("stop"),h=a("linearGradient"),f=a("stop"),d=a("stop"),c=a("linearGradient"),u=a("stop"),g=a("stop"),b=a("linearGradient"),k=a("stop"),N=a("stop"),I=a("linearGradient"),Me=a("stop"),be=a("stop"),W=a("linearGradient"),we=a("stop"),Ae=a("stop"),O=a("linearGradient"),_e=a("stop"),Le=a("stop"),v=a("linearGradient"),Ne=a("stop"),ke=a("stop"),p=a("text"),Ie=a("tspan"),He=w("Every 1$* contributed to the collage adds"),$e=_(),te=a("tspan"),Ue=w("three pounds to the characters!"),Ge=_(),F=a("tspan"),je=w("*Canadian Dollars, so  US Dollars go further"),Ce=_(),H=a("tspan"),De=w("*"),Ke=_(),ie=a("tspan"),Ve=w("1lb goes to the character you choose by commenting"),Ze=_(),ne=a("tspan"),qe=w("JUST their name with your contribution"),Qe=_(),$=a("tspan"),Je=w("*"),Xe=_(),re=a("tspan"),ze=w("1lb is split between them and their group"),Ye=_(),U=a("tspan"),et=w("*"),tt=_(),se=a("tspan"),it=w("1lb goes to monster Falin"),nt=_(),le=a("tspan"),pe=a("a"),rt=w("Click here to fatten your favorite"),st=_(),ae=a("image"),oe=a("image"),G=a("image"),j=a("text"),ge=a("tspan"),lt=w(vt),at=w("lbs"),ot=_();for(let y=0;y<m.length;y+=1)m[y].c();C=a("image"),P=a("image"),x=a("image"),B=a("image"),D=a("rect"),K=a("rect"),V=a("rect"),Z=a("rect"),q=a("rect"),Q=a("rect"),J=a("rect"),X=a("rect"),t(s,"offset","0%"),t(s,"stop-color","#8b4b22"),t(o,"offset","100%"),t(o,"stop-color","#edc051"),t(r,"id","orangeGradient"),t(r,"x1","0"),t(r,"x2","0"),t(r,"y1","1"),t(r,"y2","0"),t(f,"offset","0%"),t(f,"stop-color","#084c56"),t(d,"offset","100%"),t(d,"stop-color","#10a5ad"),t(h,"id","darkTealGradient"),t(h,"x1","0"),t(h,"x2","0"),t(h,"y1","1"),t(h,"y2","0"),t(u,"offset","0%"),t(u,"stop-color","#901e1d"),t(g,"offset","100%"),t(g,"stop-color","#da3a37"),t(c,"id","redGradient"),t(c,"x1","0"),t(c,"x2","0"),t(c,"y1","1"),t(c,"y2","0"),t(k,"offset","0%"),t(k,"stop-color","#3a447f"),t(N,"offset","100%"),t(N,"stop-color","#86a8e2"),t(b,"id","blueGradient"),t(b,"x1","0"),t(b,"x2","0"),t(b,"y1","1"),t(b,"y2","0"),t(Me,"offset","0%"),t(Me,"stop-color","#4525cb"),t(be,"offset","100%"),t(be,"stop-color","#9464b6"),t(I,"id","purpleGradient"),t(I,"x1","0"),t(I,"x2","0"),t(I,"y1","1"),t(I,"y2","0"),t(we,"offset","0%"),t(we,"stop-color","#0a4334"),t(Ae,"offset","100%"),t(Ae,"stop-color","#16a375"),t(W,"id","darkGreenGradient"),t(W,"x1","0"),t(W,"x2","0"),t(W,"y1","1"),t(W,"y2","0"),t(_e,"offset","0%"),t(_e,"stop-color","#1e5119"),t(Le,"offset","100%"),t(Le,"stop-color","#41ba36"),t(O,"id","greenGradient"),t(O,"x1","0"),t(O,"x2","0"),t(O,"y1","1"),t(O,"y2","0"),t(Ne,"offset","0%"),t(Ne,"stop-color","#9d397b"),t(ke,"offset","100%"),t(ke,"stop-color","#ec61d4"),t(v,"id","pinkGradient"),t(v,"x1","0"),t(v,"x2","0"),t(v,"y1","1"),t(v,"y2","0"),t(Ie,"text-anchor","middle"),t(te,"dy","3%"),t(te,"x","15%"),t(te,"text-anchor","middle"),t(F,"dy","2%"),t(F,"x","15%"),t(F,"text-anchor","middle"),t(F,"class","very-small svelte-fiff2p"),t(H,"dy","4%"),t(H,"x","15%"),t(H,"text-anchor","middle"),t(H,"class","not-so-small svelte-fiff2p"),t(ie,"dy","1%"),t(ie,"x","15%"),t(ie,"text-anchor","middle"),t(ne,"dy","3%"),t(ne,"x","15%"),t(ne,"text-anchor","middle"),t($,"dy","4%"),t($,"x","15%"),t($,"text-anchor","middle"),t($,"class","not-so-small svelte-fiff2p"),t(re,"dy","1%"),t(re,"x","15%"),t(re,"text-anchor","middle"),t(U,"dy","4%"),t(U,"x","15%"),t(U,"text-anchor","middle"),t(U,"class","not-so-small svelte-fiff2p"),t(se,"dy","1%"),t(se,"x","15%"),t(se,"text-anchor","middle"),t(pe,"class","link-tree-link svelte-fiff2p"),t(pe,"href","https://linktr.ee/ebcart"),t(le,"dy","3%"),t(le,"x","15%"),t(le,"text-anchor","middle"),t(p,"x","15%"),t(p,"y","25%"),t(p,"class","small svelte-fiff2p"),t(ae,"x","25%"),t(ae,"y","3%"),t(ae,"width","50%"),T(ae,"xlink:href",ei),t(oe,"x","16%"),t(oe,"y","9%"),t(oe,"height","12%"),T(oe,"xlink:href",Yt),T(G,"xlink:href",Pe(e[3]).pictureLink),t(G,"x","4%"),t(G,"y",5/e[3].viewPortHeight*e[3].viewPortWidth+"%"),t(G,"height",Pe(e[3]).picHeight*1.4+"%"),t(G,"preserveAspectRatio","true"),t(ge,"class","small svelte-fiff2p"),t(j,"x","4.8%"),t(j,"y",5/e[3].viewPortHeight*e[3].viewPortWidth+"%"),t(j,"transform","translate(10, 4)"),t(C,"x","0%"),t(C,"y","0%"),t(C,"height","8%"),T(C,"xlink:href",Oe),t(P,"x","0%"),t(P,"y","0%"),t(P,"height","8%"),T(P,"xlink:href",Oe),t(P,"transform","scale(-1, 1)"),t(P,"transform-origin","center"),t(x,"x","0%"),t(x,"y","0%"),t(x,"height","8%"),T(x,"xlink:href",Oe),t(x,"transform","scale(1, -1)"),t(x,"transform-origin","center"),t(B,"x","0%"),t(B,"y","0%"),t(B,"height","8%"),T(B,"xlink:href",Oe),t(B,"transform","scale(-1, -1)"),t(B,"transform-origin","center"),t(D,"x",`${8*e[3].viewPortHeight/e[3].viewPortWidth-.2}%`),t(D,"y","0"),t(D,"height","1.4%"),t(D,"width",`${100-2*8*e[3].viewPortHeight/e[3].viewPortWidth+.4}%`),t(D,"fill","#ae2f29"),t(K,"x",`${8*e[3].viewPortHeight/e[3].viewPortWidth-.2}%`),t(K,"y","1.7%"),t(K,"height","0.75%"),t(K,"width",`${100-2*8*e[3].viewPortHeight/e[3].viewPortWidth+.4}%`),t(K,"fill","#ae2f29"),t(V,"x","0%"),t(V,"y","98.6%"),t(V,"height","1.5%"),t(V,"width","100%"),t(V,"fill","#ae2f29"),t(Z,"x",`${8*e[3].viewPortHeight/e[3].viewPortWidth-.2}%`),t(Z,"y","97.55%"),t(Z,"height","0.75%"),t(Z,"width",`${100-2*8*e[3].viewPortHeight/e[3].viewPortWidth+.4}%`),t(Z,"fill","#ae2f29"),t(q,"x","0%"),t(q,"y","7.8%"),t(q,"height","84.4%"),t(q,"width","0.65%"),t(q,"fill","#ae2f29"),t(Q,"x","0.8%"),t(Q,"y","7.8%"),t(Q,"height","84.4%"),t(Q,"width","0.4%"),t(Q,"fill","#ae2f29"),t(J,"x","99.35%"),t(J,"y","7.8%"),t(J,"height","84.4%"),t(J,"width","0.65%"),t(J,"fill","#ae2f29"),t(X,"x","98.8%"),t(X,"y","7.8%"),t(X,"height","84.4%"),t(X,"width","0.4%"),t(X,"fill","#ae2f29"),t(i,"viewBox","0 0 "+e[3].viewPortWidth+" "+e[3].viewPortHeight),t(i,"xmlns","http://www.w3.org/2000/svg"),t(i,"class","chart svelte-fiff2p")},m(y,A){R(y,i,A),l(i,n),l(n,r),l(r,s),l(r,o),l(n,h),l(h,f),l(h,d),l(n,c),l(c,u),l(c,g),l(n,b),l(b,k),l(b,N),l(n,I),l(I,Me),l(I,be),l(n,W),l(W,we),l(W,Ae),l(n,O),l(O,_e),l(O,Le),l(n,v),l(v,Ne),l(v,ke),l(i,p),l(p,Ie),l(Ie,He),l(p,$e),l(p,te),l(te,Ue),l(p,Ge),l(p,F),l(F,je),l(p,Ce),l(p,H),l(H,De),l(p,Ke),l(p,ie),l(ie,Ve),l(p,Ze),l(p,ne),l(ne,qe),l(p,Qe),l(p,$),l($,Je),l(p,Xe),l(p,re),l(re,ze),l(p,Ye),l(p,U),l(U,et),l(p,tt),l(p,se),l(se,it),l(p,nt),l(p,le),l(le,pe),l(pe,rt),l(p,st),l(i,ae),l(i,oe),l(i,G),l(i,j),l(j,ge),l(ge,lt),l(ge,at),l(j,ot);for(let M=0;M<m.length;M+=1)m[M]&&m[M].m(i,null);l(i,C),l(i,P),l(i,x),l(i,B),l(i,D),l(i,K),l(i,V),l(i,Z),l(i,q),l(i,Q),l(i,J),l(i,X),We=!0},p(y,A){if(A&1){z=ft(y[3].femaleCharacters);let M;for(M=0;M<z.length;M+=1){const ct=mt(y,z,M);m[M]?(m[M].p(ct,A),ee(m[M],1)):(m[M]=yt(ct),m[M].c(),ee(m[M],1),m[M].m(i,C))}for(_t(),M=z.length;M<m.length;M+=1)Et(M);Lt()}},i(y){if(!We){for(let A=0;A<z.length;A+=1)ee(m[A]);We=!0}},o(y){m=m.filter(Boolean);for(let A=0;A<m.length;A+=1)me(m[A]);We=!1},d(y){y&&S(i),Tt(m,y)}}}function yt(e){let i,n,r,s,o,h,f;function d(){return e[1](e[4])}function c(){return e[2](e[4])}return s=new zt({props:{charViewModel:e[4]}}),{c(){i=a("rect"),n=a("rect"),r=a("image"),Kt(s.$$.fragment),t(i,"x",e[4].x+"%"),t(i,"y",e[4].immobilityThresholdY+"%"),t(i,"width",e[4].width+"%"),t(i,"height","0.8%"),t(i,"rx","0.5px"),t(i,"ry","0.5px"),t(i,"stroke","white"),t(i,"stroke-width","0.4"),t(i,"stroke-linecap","round"),t(i,"fill","black"),t(n,"x",e[4].x+"%"),t(n,"y",e[4].y+"%"),t(n,"width",e[4].width+"%"),t(n,"height",e[4].height+"%"),t(n,"rx","0.5px"),t(n,"ry","0.5px"),t(n,"stroke","white"),t(n,"stroke-width","0.4"),t(n,"stroke-linecap","round"),t(n,"fill","url(#"+e[4].barGradient+")"),T(r,"xlink:href",e[4].pictureLink),t(r,"x",e[4].x+"%"),t(r,"y",e[4].y+e[4].height+1+"%"),t(r,"height",e[4].picHeight+"%"),t(r,"preserveAspectRatio","true")},m(u,g){R(u,i,g),R(u,n,g),R(u,r,g),Nt(s,u,g),o=!0,h||(f=[ut(i,"click",d),ut(n,"click",c)],h=!0)},p(u,g){e=u},i(u){o||(ee(s.$$.fragment,u),o=!0)},o(u){me(s.$$.fragment,u),o=!1},d(u){u&&(S(i),S(n),S(r)),kt(s,u),h=!1,ue(f)}}}function Ui(e){let i;return{c(){i=Re("p"),i.textContent="loading data..."},m(n,r){R(n,i,r)},p:L,i:L,o:L,d(n){n&&S(i)}}}function Gi(e){let i,n,r={ctx:e,current:null,token:null,hasCatch:!0,pending:Ui,then:$i,catch:Hi,value:3,error:7,blocks:[,,,]};return Ct(e[0](),r),{c(){i=Re("main"),r.block.c()},m(s,o){R(s,i,o),r.block.m(i,r.anchor=null),r.mount=()=>i,r.anchor=null,n=!0},p(s,[o]){e=s,Dt(r,e,o)},i(s){n||(ee(r.block),n=!0)},o(s){for(let o=0;o<3;o+=1){const h=r.blocks[o];me(h)}n=!1},d(s){s&&S(i),r.block.d(),r.token=null,r=null}}}function Mt(e){console.log(`${e} is selected`)}function ji(e){async function i(){let s=await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vShRwjPHvlfF_8R6YEjJ4LvbvJ8BOCn5r3HikzbXJhrJYklPAr19Ibbpmcb09wCg9Gr5_OhfX_F-1LS/pub?gid=0&single=true&output=tsv");return Ri(Ti(ti(await s.text())))}return[i,s=>Mt(s.name),s=>Mt(s.name)]}class Ci extends Wt{constructor(i){super(),It(this,i,ji,Gi,At,{})}}new Ci({target:document.getElementById("app")});
