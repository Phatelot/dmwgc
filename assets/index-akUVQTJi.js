var Pt=Object.defineProperty;var xt=(e,n,r)=>n in e?Pt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Se=(e,n,r)=>(xt(e,typeof n!="symbol"?n+"":n,r),r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();function L(){}function It(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function wt(e){return e()}function ht(){return Object.create(null)}function ue(e){e.forEach(wt)}function bt(e){return typeof e=="function"}function At(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function Tt(e){return Object.keys(e).length===0}function dt(e){return e??""}function a(e,n){e.appendChild(n)}function F(e,n,r){e.insertBefore(n,r||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function Rt(e,n){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(n)}function Fe(e){return document.createElement(e)}function l(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function _(){return b(" ")}function ut(e,n,r,i){return e.addEventListener(n,r,i),()=>e.removeEventListener(n,r,i)}function t(e,n,r){r==null?e.removeAttribute(n):e.getAttribute(n)!==r&&e.setAttribute(n,r)}function R(e,n,r){e.setAttributeNS("http://www.w3.org/1999/xlink",n,r)}function Ft(e){return Array.from(e.childNodes)}function Ht(e,n){n=""+n,e.data!==n&&(e.data=n)}let fe;function S(e){fe=e}function $t(){if(!fe)throw new Error("Function called outside component initialization");return fe}const he=[],pt=[];let de=[];const gt=[],Ut=Promise.resolve();let Ie=!1;function Gt(){Ie||(Ie=!0,Ut.then(He))}function Te(e){de.push(e)}const Pe=new Set;let oe=0;function He(){if(oe!==0)return;const e=fe;do{try{for(;oe<he.length;){const n=he[oe];oe++,S(n),jt(n.$$)}}catch(n){throw he.length=0,oe=0,n}for(S(null),he.length=0,oe=0;pt.length;)pt.pop()();for(let n=0;n<de.length;n+=1){const r=de[n];Pe.has(r)||(Pe.add(r),r())}de.length=0}while(he.length);for(;gt.length;)gt.pop()();Ie=!1,Pe.clear(),S(e)}function jt(e){if(e.fragment!==null){e.update(),ue(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(Te)}}function Ct(e){const n=[],r=[];de.forEach(i=>e.indexOf(i)===-1?n.push(i):r.push(i)),r.forEach(i=>i()),de=n}const Ee=new Set;let Y;function _t(){Y={r:0,c:[],p:Y}}function Lt(){Y.r||ue(Y.c),Y=Y.p}function ee(e,n){e&&e.i&&(Ee.delete(e),e.i(n))}function me(e,n,r,i){if(e&&e.o){if(Ee.has(e))return;Ee.add(e),Y.c.push(()=>{Ee.delete(e),i&&(r&&e.d(1),i())}),e.o(n)}else i&&i()}function Dt(e,n){const r=n.token={};function i(s,c,h,f){if(n.token!==r)return;n.resolved=f;let d=n.ctx;h!==void 0&&(d=d.slice(),d[h]=f);const o=s&&(n.current=s)(d);let u=!1;n.block&&(n.blocks?n.blocks.forEach((g,w)=>{w!==c&&g&&(_t(),me(g,1,1,()=>{n.blocks[w]===g&&(n.blocks[w]=null)}),Lt())}):n.block.d(1),o.c(),ee(o,1),o.m(n.mount(),n.anchor),u=!0),n.block=o,n.blocks&&(n.blocks[c]=o),u&&He()}if(It(e)){const s=$t();if(e.then(c=>{S(s),i(n.then,1,n.value,c),S(null)},c=>{if(S(s),i(n.catch,2,n.error,c),S(null),!n.hasCatch)throw c}),n.current!==n.pending)return i(n.pending,0),!0}else{if(n.current!==n.then)return i(n.then,1,n.value,e),!0;n.resolved=e}}function Bt(e,n,r){const i=n.slice(),{resolved:s}=e;e.current===e.then&&(i[e.value]=s),e.current===e.catch&&(i[e.error]=s),e.block.p(i,r)}function ft(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Kt(e){e&&e.c()}function Nt(e,n,r){const{fragment:i,after_update:s}=e.$$;i&&i.m(n,r),Te(()=>{const c=e.$$.on_mount.map(wt).filter(bt);e.$$.on_destroy?e.$$.on_destroy.push(...c):ue(c),e.$$.on_mount=[]}),s.forEach(Te)}function kt(e,n){const r=e.$$;r.fragment!==null&&(Ct(r.after_update),ue(r.on_destroy),r.fragment&&r.fragment.d(n),r.on_destroy=r.fragment=null,r.ctx=[])}function Vt(e,n){e.$$.dirty[0]===-1&&(he.push(e),Gt(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function Wt(e,n,r,i,s,c,h=null,f=[-1]){const d=fe;S(e);const o=e.$$={fragment:null,ctx:[],props:c,update:L,not_equal:s,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:ht(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};h&&h(o.root);let u=!1;if(o.ctx=r?r(e,n.props||{},(g,w,...k)=>{const N=k.length?k[0]:w;return o.ctx&&s(o.ctx[g],o.ctx[g]=N)&&(!o.skip_bound&&o.bound[g]&&o.bound[g](N),u&&Vt(e,g)),w}):[],o.update(),u=!0,ue(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){const g=Ft(n.target);o.fragment&&o.fragment.l(g),g.forEach(P)}else o.fragment&&o.fragment.c();n.intro&&ee(e.$$.fragment),Nt(e,n.target,n.anchor),He()}S(d)}class Ot{constructor(){Se(this,"$$");Se(this,"$$set")}$destroy(){kt(this,1),this.$destroy=L}$on(n,r){if(!bt(r))return L;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(r),()=>{const s=i.indexOf(r);s!==-1&&i.splice(s,1)}}$set(n){this.$$set&&!Tt(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const Zt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Zt);const qt=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});function vt(e){return qt.format(e).replace(",","")}function Qt(e,n){return n*e*e/.453}function Jt(e){let n,r,i,s,c,h,f,d;return{c(){n=l("text"),r=l("tspan"),i=b(e[1]),c=l("tspan"),h=b("lbs"),t(r,"class",s=dt(e[1].length>3?"very-small":"small")+" svelte-19fepds"),t(c,"class","very-small svelte-19fepds"),t(n,"x",f=e[0].x+"%"),t(n,"y",d=e[0].y+e[0].height+"%"),t(n,"transform","translate(0, 10)")},m(o,u){F(o,n,u),a(n,r),a(r,i),a(n,c),a(c,h)},p(o,[u]){u&2&&Ht(i,o[1]),u&2&&s!==(s=dt(o[1].length>3?"very-small":"small")+" svelte-19fepds")&&t(r,"class",s),u&1&&f!==(f=o[0].x+"%")&&t(n,"x",f),u&1&&d!==(d=o[0].y+o[0].height+"%")&&t(n,"y",d)},i:L,o:L,d(o){o&&P(n)}}}function Xt(e,n,r){let i,{charViewModel:s}=n;return e.$$set=c=>{"charViewModel"in c&&r(0,s=c.charViewModel)},e.$$.update=()=>{e.$$.dirty&1&&r(1,i=vt(s.weight))},[s,i]}class zt extends Ot{constructor(n){super(),Wt(this,n,Xt,Jt,At,{charViewModel:0})}}const ve="/dmwgc/assets/corner-LhPWaTs7.svg",Yt="/dmwgc/assets/Water_Can_Big_PNG-SFfGN0F_.png",en="/dmwgc/assets/title-vpBJ14wl.jpg";function tn(e){const n=[],r=e.split(`
`);for(const i of r){const s=nn(i);s&&n.push(s)}return n}function nn(e){const[n,r]=e.split("	");return!n||!r?null:{character:n,amount:parseInt(r)}}const rn="/dmwgc/assets/Benchidori-n4RXg8lo.jpg",sn="/dmwgc/assets/Chillchucks_Wife-Z0DXycrM.jpg",an="/dmwgc/assets/Cithis-DHrl0prL.jpg",ln="/dmwgc/assets/Daya-dTfZdvZn.jpg",cn="/dmwgc/assets/Dungeon_Dwellers-6lRSkuWX.jpg",on="/dmwgc/assets/Elven_Queen-dZS69lkp.jpg",hn="/dmwgc/assets/Erique-llQEZPPe.jpg",dn="/dmwgc/assets/Falin-WnOWjTZK.jpg",un="/dmwgc/assets/Flamela-ezCwjgyH.jpg",pn="/dmwgc/assets/Fleki-0Ew3H-6j.jpg",gn="/dmwgc/assets/Golden_Kingdom-sS00cCnW.jpg",fn="/dmwgc/assets/Hien-OpQ-miqE.jpg",mn="/dmwgc/assets/Kiki-RB-1TSuo.jpg",yn="/dmwgc/assets/Leed-3NqcsME5.jpg",Mn="/dmwgc/assets/Maizuru-GYb3xqLY.jpg",wn="/dmwgc/assets/Marcille-AtXsHK8d.jpg",bn="/dmwgc/assets/Marcilles_Mom-c38OE0X9.jpg",An="/dmwgc/assets/Milsiril-JqyP5kps.jpg",_n="/dmwgc/assets/Misyl-cQmdTZhY.jpg",Ln="/dmwgc/assets/Monster_Falin-VZhTmQZh.jpg",Nn="/dmwgc/assets/Namari-BCNEoVMq.jpg",kn="/dmwgc/assets/Otta-U2HjgDJ0.jpg",Wn="/dmwgc/assets/Pattadol-c-XqPgpv.jpg",On="/dmwgc/assets/Rin-RfwZ7A3C.jpg",vn="/dmwgc/assets/Tade-EC0lboRI.jpg",En="/dmwgc/assets/The_Queens_Attendants-zkqeGrsV.jpg",Sn="/dmwgc/assets/Unnamed_Adventurers-t7AZv4OH.jpg",Pn="/dmwgc/assets/Unnamed_Canaries-6yv67kB8.jpg",ye={Falin:{heightInMeters:1.7,gender:"WOMAN",baseWeight:152,party:"LAIOS",pictureLink:dn,species:["TALLMAN"]},Marcille:{heightInMeters:1.6,gender:"WOMAN",baseWeight:112,party:"LAIOS",pictureLink:wn,species:["ELF","TALLMAN"]},Laios:{heightInMeters:1.85,gender:"MAN",baseWeight:196,party:"LAIOS",species:["TALLMAN"]},Chillchuck:{heightInMeters:1.1,gender:"MAN",baseWeight:48,party:"LAIOS",species:["HALFFOOT"]},Namari:{heightInMeters:1.3,gender:"WOMAN",baseWeight:127,party:"ADVENTURERS",pictureLink:Nn,species:["DWARF"]},Kiki:{heightInMeters:1.8,gender:"WOMAN",baseWeight:150,party:"ADVENTURERS",pictureLink:mn,species:["TALLMAN"]},Kaka:{heightInMeters:1.9,gender:"MAN",baseWeight:183,party:"ADVENTURERS",species:["TALLMAN"]},Benichidori:{heightInMeters:1.6,gender:"WOMAN",baseWeight:112,party:"SHUROS",pictureLink:rn,species:["TALLMAN"]},Maizuru:{heightInMeters:1.65,gender:"WOMAN",baseWeight:125,party:"SHUROS",pictureLink:Mn,species:["TALLMAN"]},Hien:{heightInMeters:1.7,gender:"WOMAN",baseWeight:155,party:"SHUROS",pictureLink:fn,species:["TALLMAN"]},Tade:{heightInMeters:1.95,gender:"WOMAN",baseWeight:235,party:"SHUROS",pictureLink:vn,species:["OGRE"]},Shuro:{heightInMeters:1.8,gender:"MAN",baseWeight:165,party:"SHUROS",species:["TALLMAN"]},Rin:{heightInMeters:1.65,gender:"WOMAN",baseWeight:110,party:"KABRUS",pictureLink:On,species:["TALLMAN"]},Daya:{heightInMeters:1.3,gender:"WOMAN",baseWeight:141,party:"KABRUS",pictureLink:ln,species:["DWARF"]},Kabru:{heightInMeters:1.7,gender:"MAN",baseWeight:134,party:"KABRUS",species:["TALLMAN"]},Kuro:{heightInMeters:1.45,gender:"MAN",baseWeight:110,party:"KABRUS",species:["KOBOLD"]},Holm:{heightInMeters:1.4,gender:"MAN",baseWeight:90,party:"KABRUS",species:["GNOME"]},Mickbell:{heightInMeters:1.05,gender:"MAN",baseWeight:44,party:"KABRUS",species:["HALFFOOT"]},Pattadol:{heightInMeters:1.7,gender:"WOMAN",baseWeight:111,party:"MITHRUNS",pictureLink:Wn,species:["ELF"]},Cithis:{heightInMeters:1.65,gender:"WOMAN",baseWeight:119,party:"MITHRUNS",pictureLink:an,species:["ELF"]},Fleki:{heightInMeters:1.3,gender:"WOMAN",baseWeight:66,party:"MITHRUNS",pictureLink:pn,species:["ELF"]},Otta:{heightInMeters:1.3,gender:"WOMAN",baseWeight:75,party:"MITHRUNS",pictureLink:kn,species:["ELF"]},Mithrun:{heightInMeters:1.55,gender:"MAN",baseWeight:111,party:"MITHRUNS",species:["ELF"]},Lycion:{heightInMeters:1.7,gender:"MAN",baseWeight:154,party:"MITHRUNS",species:["ELF"]},Flamela:{heightInMeters:1.4,gender:"WOMAN",baseWeight:95,party:"FLAMELAS",pictureLink:un,species:["ELF"]},Misyl:{heightInMeters:1.45,gender:"WOMAN",baseWeight:93,party:"FLAMELAS",pictureLink:_n,species:["ELF"]},Erique:{heightInMeters:1.5,gender:"WOMAN",baseWeight:110,party:"FLAMELAS",pictureLink:hn,species:["ELF"]},Unnamed_Elves:{heightInMeters:1.5,gender:"WOMAN",baseWeight:665,party:"FLAMELAS",numbers:7,pictureLink:Pn,species:["ELF"],displayName:"Unnamed canaries"},Queen:{heightInMeters:1.7,gender:"WOMAN",baseWeight:115,party:"OTHERS",pictureLink:on,species:["ELF"],displayName:"Elven Queen"},Milsiril:{heightInMeters:1.5,gender:"WOMAN",baseWeight:104,party:"OTHERS",pictureLink:An,species:["ELF"]},Marcilles_Mom:{heightInMeters:1.55,gender:"WOMAN",baseWeight:110,party:"OTHERS",pictureLink:bn,species:["ELF"],displayName:"Marcille's Mom"},Attendants:{heightInMeters:1.5,gender:"WOMAN",baseWeight:380,party:"OTHERS",numbers:4,pictureLink:En,species:["ELF"],displayName:"Queen's Attendants"},Leed:{heightInMeters:1.5,gender:"WOMAN",baseWeight:203,party:"DUNGEON",pictureLink:yn,species:["MONSTER"]},Monster_Falin:{heightInMeters:1,gender:"YES",baseWeight:6080,party:"DUNGEON",pictureLink:Ln,species:["MONSTER"],displayName:"Monster Falin"},Zon:{heightInMeters:1.75,gender:"MAN",baseWeight:265,party:"DUNGEON",species:["MONSTER"]},Thistle:{heightInMeters:1.3,gender:"MAN",baseWeight:63,party:"DUNGEON",species:["ELF"]},Chillchuck_wife:{heightInMeters:1,baseWeight:42,displayName:"Chillchuck's wife",gender:"WOMAN",party:"OTHERS",pictureLink:sn,species:["HALFFOOT"]},Dungeon_dwellers:{heightInMeters:1.55,baseWeight:555,numbers:5,gender:"WOMAN",party:"OTHERS",pictureLink:cn,species:["TALLMAN"]},Golden_kingdom:{heightInMeters:1.5,baseWeight:475,numbers:5,gender:"WOMAN",party:"DUNGEON",pictureLink:gn,species:["TALLMAN"]},Unnamed_adventurers:{heightInMeters:1.65,baseWeight:650,numbers:5,gender:"WOMAN",party:"ADVENTURERS",pictureLink:Sn,species:["TALLMAN"]}};function Re(e){return ye[e]}function xn(){return Object.keys(ye)}function In(){return Object.values(ye).filter(e=>e.gender==="WOMAN").length}function Tn(e){return ye[e].party}function Rn(e){return Object.values(ye).filter(n=>n.party===e).length}function Fn(e){const n={},r={DUNGEON:0,OTHERS:0,FLAMELAS:0,KABRUS:0,LAIOS:0,MITHRUNS:0,SHUROS:0,ADVENTURERS:0};let i=0;for(const s of e)n[s.character]||(n[s.character]=0),n[s.character]+=s.amount,r[Tn(s.character)]+=s.amount,i+=s.amount;return xn().map(s=>{const c=n[s]||0,h=Re(s);let f=h.baseWeight+c+r[h.party]/Rn(h.party);return s==="Monster_Falin"&&(f+=i),h.numbers&&h.numbers>1&&(f/=h.numbers),{name:s,totalDonatedAmount:c,weight:f,immobilityThreshold:Qt(h.heightInMeters,70)}})}function xe(e){return e.characters.find(n=>n.name==="Monster_Falin")}function Hn(e){const i=Math.max(...e.filter(d=>Re(d.name).gender==="WOMAN").map(d=>d.weight)),s=3200,c=95/(5*In()+1),h=e.sort((d,o)=>d.weight-o.weight).map((d,o)=>{const u=4*c,g=d.weight/Math.min(s,i)*75,w=83-d.immobilityThreshold/Math.min(s,i)*75,k=83-g,N=Re(d.name);return{...d,...N,height:g,width:u,x:2.5+c+5*c*o,y:k,immobilityThresholdY:w,picHeight:u*220/100,barGradient:$n(N.party)}}),f=h.filter(d=>d.gender==="WOMAN").map((d,o)=>({...d,x:2.5+c+5*c*o}));return{characters:h,femaleCharacters:f,viewPortHeight:100,viewPortWidth:220}}function $n(e){return{DUNGEON:"purple",FLAMELAS:"green",ADVENTURERS:"darkTeal",KABRUS:"blue",LAIOS:"orange",MITHRUNS:"darkGreen",SHUROS:"red",OTHERS:"pink"}[e]+"Gradient"}function mt(e,n,r){const i=e.slice();return i[4]=n[r],i}function Un(e){let n;return{c(){n=Fe("p"),n.textContent=`error: ${e[7]}`},m(r,i){F(r,n,i)},p:L,i:L,o:L,d(r){r&&P(n)}}}function Gn(e){let n,r,i,s,c,h,f,d,o,u,g,w,k,N,W,Me,we,O,be,Ae,v,_e,Le,E,Ne,ke,p,We,$e,Ue,te,Ge,je,H,Ce,De,$,Be,Ke,ne,Ve,Ze,re,qe,Qe,U,Je,Xe,ie,ze,Ye,G,et,tt,se,nt,rt,ae,pe,it,st,le,ce,j,C,ge,Et=vt(xe(e[3]).weight)+"",at,lt,ct,D,x,I,T,B,K,V,Z,q,Q,J,X,Oe,z=ft(e[3].femaleCharacters),m=[];for(let y=0;y<z.length;y+=1)m[y]=yt(mt(e,z,y));const St=y=>me(m[y],1,1,()=>{m[y]=null});return{c(){n=l("svg"),r=l("defs"),i=l("linearGradient"),s=l("stop"),c=l("stop"),h=l("linearGradient"),f=l("stop"),d=l("stop"),o=l("linearGradient"),u=l("stop"),g=l("stop"),w=l("linearGradient"),k=l("stop"),N=l("stop"),W=l("linearGradient"),Me=l("stop"),we=l("stop"),O=l("linearGradient"),be=l("stop"),Ae=l("stop"),v=l("linearGradient"),_e=l("stop"),Le=l("stop"),E=l("linearGradient"),Ne=l("stop"),ke=l("stop"),p=l("text"),We=l("tspan"),$e=b("Every 1$* contributed to the collage adds"),Ue=_(),te=l("tspan"),Ge=b("three pounds to the characters!"),je=_(),H=l("tspan"),Ce=b("*Canadian Dollars, so  US Dollars go further"),De=_(),$=l("tspan"),Be=b("*"),Ke=_(),ne=l("tspan"),Ve=b("1lb goes to the character you choose by commenting"),Ze=_(),re=l("tspan"),qe=b("JUST their name with your contribution"),Qe=_(),U=l("tspan"),Je=b("*"),Xe=_(),ie=l("tspan"),ze=b("1lb is split between them and their group"),Ye=_(),G=l("tspan"),et=b("*"),tt=_(),se=l("tspan"),nt=b("1lb goes to monster Falin"),rt=_(),ae=l("tspan"),pe=l("a"),it=b("Click here to fatten your favorite"),st=_(),le=l("image"),ce=l("image"),j=l("image"),C=l("text"),ge=l("tspan"),at=b(Et),lt=b("lbs"),ct=_();for(let y=0;y<m.length;y+=1)m[y].c();D=l("image"),x=l("image"),I=l("image"),T=l("image"),B=l("rect"),K=l("rect"),V=l("rect"),Z=l("rect"),q=l("rect"),Q=l("rect"),J=l("rect"),X=l("rect"),t(s,"offset","0%"),t(s,"stop-color","#8b4b22"),t(c,"offset","100%"),t(c,"stop-color","#edc051"),t(i,"id","orangeGradient"),t(i,"x1","0"),t(i,"x2","0"),t(i,"y1","1"),t(i,"y2","0"),t(f,"offset","0%"),t(f,"stop-color","#084c56"),t(d,"offset","100%"),t(d,"stop-color","#10a5ad"),t(h,"id","darkTealGradient"),t(h,"x1","0"),t(h,"x2","0"),t(h,"y1","1"),t(h,"y2","0"),t(u,"offset","0%"),t(u,"stop-color","#901e1d"),t(g,"offset","100%"),t(g,"stop-color","#da3a37"),t(o,"id","redGradient"),t(o,"x1","0"),t(o,"x2","0"),t(o,"y1","1"),t(o,"y2","0"),t(k,"offset","0%"),t(k,"stop-color","#3a447f"),t(N,"offset","100%"),t(N,"stop-color","#86a8e2"),t(w,"id","blueGradient"),t(w,"x1","0"),t(w,"x2","0"),t(w,"y1","1"),t(w,"y2","0"),t(Me,"offset","0%"),t(Me,"stop-color","#4525cb"),t(we,"offset","100%"),t(we,"stop-color","#9464b6"),t(W,"id","purpleGradient"),t(W,"x1","0"),t(W,"x2","0"),t(W,"y1","1"),t(W,"y2","0"),t(be,"offset","0%"),t(be,"stop-color","#0a4334"),t(Ae,"offset","100%"),t(Ae,"stop-color","#16a375"),t(O,"id","darkGreenGradient"),t(O,"x1","0"),t(O,"x2","0"),t(O,"y1","1"),t(O,"y2","0"),t(_e,"offset","0%"),t(_e,"stop-color","#1e5119"),t(Le,"offset","100%"),t(Le,"stop-color","#41ba36"),t(v,"id","greenGradient"),t(v,"x1","0"),t(v,"x2","0"),t(v,"y1","1"),t(v,"y2","0"),t(Ne,"offset","0%"),t(Ne,"stop-color","#9d397b"),t(ke,"offset","100%"),t(ke,"stop-color","#ec61d4"),t(E,"id","pinkGradient"),t(E,"x1","0"),t(E,"x2","0"),t(E,"y1","1"),t(E,"y2","0"),t(We,"text-anchor","middle"),t(te,"dy","3%"),t(te,"x","15%"),t(te,"text-anchor","middle"),t(H,"dy","2%"),t(H,"x","15%"),t(H,"text-anchor","middle"),t(H,"class","very-small svelte-fiff2p"),t($,"dy","4%"),t($,"x","15%"),t($,"text-anchor","middle"),t($,"class","not-so-small svelte-fiff2p"),t(ne,"dy","1%"),t(ne,"x","15%"),t(ne,"text-anchor","middle"),t(re,"dy","3%"),t(re,"x","15%"),t(re,"text-anchor","middle"),t(U,"dy","4%"),t(U,"x","15%"),t(U,"text-anchor","middle"),t(U,"class","not-so-small svelte-fiff2p"),t(ie,"dy","1%"),t(ie,"x","15%"),t(ie,"text-anchor","middle"),t(G,"dy","4%"),t(G,"x","15%"),t(G,"text-anchor","middle"),t(G,"class","not-so-small svelte-fiff2p"),t(se,"dy","1%"),t(se,"x","15%"),t(se,"text-anchor","middle"),t(pe,"class","link-tree-link svelte-fiff2p"),t(pe,"href","https://linktr.ee/ebcart"),t(ae,"dy","3%"),t(ae,"x","15%"),t(ae,"text-anchor","middle"),t(p,"x","15%"),t(p,"y","25%"),t(p,"class","small svelte-fiff2p"),t(le,"x","25%"),t(le,"y","3%"),t(le,"width","50%"),R(le,"xlink:href",en),t(ce,"x","16%"),t(ce,"y","9%"),t(ce,"height","12%"),R(ce,"xlink:href",Yt),R(j,"xlink:href",xe(e[3]).pictureLink),t(j,"x","4%"),t(j,"y",5/e[3].viewPortHeight*e[3].viewPortWidth+"%"),t(j,"height",xe(e[3]).picHeight*1.4+"%"),t(j,"preserveAspectRatio","true"),t(ge,"class","small svelte-fiff2p"),t(C,"x","4.8%"),t(C,"y",5/e[3].viewPortHeight*e[3].viewPortWidth+"%"),t(C,"transform","translate(10, 4)"),t(D,"x","0%"),t(D,"y","0%"),t(D,"height","8%"),R(D,"xlink:href",ve),t(x,"x","0%"),t(x,"y","0%"),t(x,"height","8%"),R(x,"xlink:href",ve),t(x,"transform","scale(-1, 1)"),t(x,"transform-origin","center"),t(I,"x","0%"),t(I,"y","0%"),t(I,"height","8%"),R(I,"xlink:href",ve),t(I,"transform","scale(1, -1)"),t(I,"transform-origin","center"),t(T,"x","0%"),t(T,"y","0%"),t(T,"height","8%"),R(T,"xlink:href",ve),t(T,"transform","scale(-1, -1)"),t(T,"transform-origin","center"),t(B,"x",`${8*e[3].viewPortHeight/e[3].viewPortWidth-.2}%`),t(B,"y","0"),t(B,"height","1.4%"),t(B,"width",`${100-2*8*e[3].viewPortHeight/e[3].viewPortWidth+.4}%`),t(B,"fill","#ae2f29"),t(K,"x",`${8*e[3].viewPortHeight/e[3].viewPortWidth-.2}%`),t(K,"y","1.7%"),t(K,"height","0.75%"),t(K,"width",`${100-2*8*e[3].viewPortHeight/e[3].viewPortWidth+.4}%`),t(K,"fill","#ae2f29"),t(V,"x","0%"),t(V,"y","98.6%"),t(V,"height","1.5%"),t(V,"width","100%"),t(V,"fill","#ae2f29"),t(Z,"x",`${8*e[3].viewPortHeight/e[3].viewPortWidth-.2}%`),t(Z,"y","97.55%"),t(Z,"height","0.75%"),t(Z,"width",`${100-2*8*e[3].viewPortHeight/e[3].viewPortWidth+.4}%`),t(Z,"fill","#ae2f29"),t(q,"x","0%"),t(q,"y","7.8%"),t(q,"height","84.4%"),t(q,"width","0.65%"),t(q,"fill","#ae2f29"),t(Q,"x","0.8%"),t(Q,"y","7.8%"),t(Q,"height","84.4%"),t(Q,"width","0.4%"),t(Q,"fill","#ae2f29"),t(J,"x","99.35%"),t(J,"y","7.8%"),t(J,"height","84.4%"),t(J,"width","0.65%"),t(J,"fill","#ae2f29"),t(X,"x","98.8%"),t(X,"y","7.8%"),t(X,"height","84.4%"),t(X,"width","0.4%"),t(X,"fill","#ae2f29"),t(n,"viewBox","0 0 "+e[3].viewPortWidth+" "+e[3].viewPortHeight),t(n,"xmlns","http://www.w3.org/2000/svg"),t(n,"class","chart svelte-fiff2p")},m(y,A){F(y,n,A),a(n,r),a(r,i),a(i,s),a(i,c),a(r,h),a(h,f),a(h,d),a(r,o),a(o,u),a(o,g),a(r,w),a(w,k),a(w,N),a(r,W),a(W,Me),a(W,we),a(r,O),a(O,be),a(O,Ae),a(r,v),a(v,_e),a(v,Le),a(r,E),a(E,Ne),a(E,ke),a(n,p),a(p,We),a(We,$e),a(p,Ue),a(p,te),a(te,Ge),a(p,je),a(p,H),a(H,Ce),a(p,De),a(p,$),a($,Be),a(p,Ke),a(p,ne),a(ne,Ve),a(p,Ze),a(p,re),a(re,qe),a(p,Qe),a(p,U),a(U,Je),a(p,Xe),a(p,ie),a(ie,ze),a(p,Ye),a(p,G),a(G,et),a(p,tt),a(p,se),a(se,nt),a(p,rt),a(p,ae),a(ae,pe),a(pe,it),a(p,st),a(n,le),a(n,ce),a(n,j),a(n,C),a(C,ge),a(ge,at),a(ge,lt),a(C,ct);for(let M=0;M<m.length;M+=1)m[M]&&m[M].m(n,null);a(n,D),a(n,x),a(n,I),a(n,T),a(n,B),a(n,K),a(n,V),a(n,Z),a(n,q),a(n,Q),a(n,J),a(n,X),Oe=!0},p(y,A){if(A&1){z=ft(y[3].femaleCharacters);let M;for(M=0;M<z.length;M+=1){const ot=mt(y,z,M);m[M]?(m[M].p(ot,A),ee(m[M],1)):(m[M]=yt(ot),m[M].c(),ee(m[M],1),m[M].m(n,D))}for(_t(),M=z.length;M<m.length;M+=1)St(M);Lt()}},i(y){if(!Oe){for(let A=0;A<z.length;A+=1)ee(m[A]);Oe=!0}},o(y){m=m.filter(Boolean);for(let A=0;A<m.length;A+=1)me(m[A]);Oe=!1},d(y){y&&P(n),Rt(m,y)}}}function yt(e){let n,r,i,s,c,h,f;function d(){return e[1](e[4])}function o(){return e[2](e[4])}return s=new zt({props:{charViewModel:e[4]}}),{c(){n=l("rect"),r=l("rect"),i=l("image"),Kt(s.$$.fragment),t(n,"x",e[4].x+"%"),t(n,"y",e[4].immobilityThresholdY+"%"),t(n,"width",e[4].width+"%"),t(n,"height","0.8%"),t(n,"rx","0.5px"),t(n,"ry","0.5px"),t(n,"stroke","white"),t(n,"stroke-width","0.4"),t(n,"stroke-linecap","round"),t(n,"fill","black"),t(r,"x",e[4].x+"%"),t(r,"y",e[4].y+"%"),t(r,"width",e[4].width+"%"),t(r,"height",e[4].height+"%"),t(r,"rx","0.5px"),t(r,"ry","0.5px"),t(r,"stroke","white"),t(r,"stroke-width","0.4"),t(r,"stroke-linecap","round"),t(r,"fill","url(#"+e[4].barGradient+")"),R(i,"xlink:href",e[4].pictureLink),t(i,"x",e[4].x+"%"),t(i,"y",e[4].y+e[4].height+1+"%"),t(i,"height",e[4].picHeight+"%"),t(i,"preserveAspectRatio","true")},m(u,g){F(u,n,g),F(u,r,g),F(u,i,g),Nt(s,u,g),c=!0,h||(f=[ut(n,"click",d),ut(r,"click",o)],h=!0)},p(u,g){e=u},i(u){c||(ee(s.$$.fragment,u),c=!0)},o(u){me(s.$$.fragment,u),c=!1},d(u){u&&(P(n),P(r),P(i)),kt(s,u),h=!1,ue(f)}}}function jn(e){let n;return{c(){n=Fe("p"),n.textContent="loading data..."},m(r,i){F(r,n,i)},p:L,i:L,o:L,d(r){r&&P(n)}}}function Cn(e){let n,r,i={ctx:e,current:null,token:null,hasCatch:!0,pending:jn,then:Gn,catch:Un,value:3,error:7,blocks:[,,,]};return Dt(e[0](),i),{c(){n=Fe("main"),i.block.c()},m(s,c){F(s,n,c),i.block.m(n,i.anchor=null),i.mount=()=>n,i.anchor=null,r=!0},p(s,[c]){e=s,Bt(i,e,c)},i(s){r||(ee(i.block),r=!0)},o(s){for(let c=0;c<3;c+=1){const h=i.blocks[c];me(h)}r=!1},d(s){s&&P(n),i.block.d(),i.token=null,i=null}}}function Mt(e){console.log(`${e} is selected`)}function Dn(e){async function n(){let s=await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vShRwjPHvlfF_8R6YEjJ4LvbvJ8BOCn5r3HikzbXJhrJYklPAr19Ibbpmcb09wCg9Gr5_OhfX_F-1LS/pub?gid=0&single=true&output=tsv");return Hn(Fn(tn(await s.text())))}return[n,s=>Mt(s.name),s=>Mt(s.name)]}class Bn extends Ot{constructor(n){super(),Wt(this,n,Dn,Cn,At,{})}}new Bn({target:document.getElementById("app")});
