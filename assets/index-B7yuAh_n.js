var ze=Object.defineProperty;var Ye=(e,t,r)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var me=(e,t,r)=>(Ye(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function A(){}function Xe(e){return!!e&&(typeof e=="object"||typeof e=="function")&&typeof e.then=="function"}function He(e){return e()}function Pe(){return Object.create(null)}function z(e){e.forEach(He)}function Re(e){return typeof e=="function"}function Ce(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Je(e){return Object.keys(e).length===0}function Ie(e){return e??""}function c(e,t){e.appendChild(t)}function T(e,t,r){e.insertBefore(t,r||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function et(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function Le(e){return document.createElement(e)}function l(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Q(e){return document.createTextNode(e)}function ye(){return Q(" ")}function Te(e,t,r,i){return e.addEventListener(t,r,i),()=>e.removeEventListener(t,r,i)}function n(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function ee(e,t,r){e.setAttributeNS("http://www.w3.org/1999/xlink",t,r)}function tt(e){return Array.from(e.childNodes)}function nt(e,t){t=""+t,e.data!==t&&(e.data=t)}let te;function v(e){te=e}function rt(){if(!te)throw new Error("Function called outside component initialization");return te}const V=[],$e=[];let Z=[];const xe=[],it=Promise.resolve();let we=!1;function st(){we||(we=!0,it.then(_e))}function be(e){Z.push(e)}const Me=new Set;let q=0;function _e(){if(q!==0)return;const e=te;do{try{for(;q<V.length;){const t=V[q];q++,v(t),at(t.$$)}}catch(t){throw V.length=0,q=0,t}for(v(null),V.length=0,q=0;$e.length;)$e.pop()();for(let t=0;t<Z.length;t+=1){const r=Z[t];Me.has(r)||(Me.add(r),r())}Z.length=0}while(V.length);for(;xe.length;)xe.pop()();we=!1,Me.clear(),v(e)}function at(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(be)}}function ct(e){const t=[],r=[];Z.forEach(i=>e.indexOf(i)===-1?t.push(i):r.push(i)),r.forEach(i=>i()),Z=t}const pe=new Set;let D;function Be(){D={r:0,c:[],p:D}}function De(){D.r||z(D.c),D=D.p}function K(e,t){e&&e.i&&(pe.delete(e),e.i(t))}function ne(e,t,r,i){if(e&&e.o){if(pe.has(e))return;pe.add(e),D.c.push(()=>{pe.delete(e),i&&(r&&e.d(1),i())}),e.o(t)}else i&&i()}function ot(e,t){const r=t.token={};function i(s,a,h,p){if(t.token!==r)return;t.resolved=p;let u=t.ctx;h!==void 0&&(u=u.slice(),u[h]=p);const o=s&&(t.current=s)(u);let d=!1;t.block&&(t.blocks?t.blocks.forEach((g,M)=>{M!==a&&g&&(Be(),ne(g,1,1,()=>{t.blocks[M]===g&&(t.blocks[M]=null)}),De())}):t.block.d(1),o.c(),K(o,1),o.m(t.mount(),t.anchor),d=!0),t.block=o,t.blocks&&(t.blocks[a]=o),d&&_e()}if(Xe(e)){const s=rt();if(e.then(a=>{v(s),i(t.then,1,t.value,a),v(null)},a=>{if(v(s),i(t.catch,2,t.error,a),v(null),!t.hasCatch)throw a}),t.current!==t.pending)return i(t.pending,0),!0}else{if(t.current!==t.then)return i(t.then,1,t.value,e),!0;t.resolved=e}}function lt(e,t,r){const i=t.slice(),{resolved:s}=e;e.current===e.then&&(i[e.value]=s),e.current===e.catch&&(i[e.error]=s),e.block.p(i,r)}function Fe(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ht(e){e&&e.c()}function Ke(e,t,r){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,r),be(()=>{const a=e.$$.on_mount.map(He).filter(Re);e.$$.on_destroy?e.$$.on_destroy.push(...a):z(a),e.$$.on_mount=[]}),s.forEach(be)}function qe(e,t){const r=e.$$;r.fragment!==null&&(ct(r.after_update),z(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function ut(e,t){e.$$.dirty[0]===-1&&(V.push(e),st(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ve(e,t,r,i,s,a,h=null,p=[-1]){const u=te;v(e);const o=e.$$={fragment:null,ctx:[],props:a,update:A,not_equal:s,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Pe(),dirty:p,skip_bound:!1,root:t.target||u.$$.root};h&&h(o.root);let d=!1;if(o.ctx=r?r(e,t.props||{},(g,M,..._)=>{const L=_.length?_[0]:M;return o.ctx&&s(o.ctx[g],o.ctx[g]=L)&&(!o.skip_bound&&o.bound[g]&&o.bound[g](L),d&&ut(e,g)),M}):[],o.update(),d=!0,z(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const g=tt(t.target);o.fragment&&o.fragment.l(g),g.forEach(O)}else o.fragment&&o.fragment.c();t.intro&&K(e.$$.fragment),Ke(e,t.target,t.anchor),_e()}v(u)}class Qe{constructor(){me(this,"$$");me(this,"$$set")}$destroy(){qe(this,1),this.$destroy=A}$on(t,r){if(!Re(r))return A;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(r),()=>{const s=i.indexOf(r);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!Je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dt);const gt=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});function pt(e){return gt.format(e).replace(",","")}function ft(e,t){return t*e*e/.453}function mt(e){let t,r,i,s,a,h,p,u;return{c(){t=l("text"),r=l("tspan"),i=Q(e[1]),a=l("tspan"),h=Q("lbs"),n(r,"class",s=Ie(e[1].length>3?"very-small":"small")+" svelte-cj2qv4"),n(a,"class","very-small svelte-cj2qv4"),n(t,"x",p=e[0].x+"%"),n(t,"y",u=e[0].y+e[0].height+"%"),n(t,"transform","translate(0, 10)")},m(o,d){T(o,t,d),c(t,r),c(r,i),c(t,a),c(a,h)},p(o,[d]){d&2&&nt(i,o[1]),d&2&&s!==(s=Ie(o[1].length>3?"very-small":"small")+" svelte-cj2qv4")&&n(r,"class",s),d&1&&p!==(p=o[0].x+"%")&&n(t,"x",p),d&1&&u!==(u=o[0].y+o[0].height+"%")&&n(t,"y",u)},i:A,o:A,d(o){o&&O(t)}}}function yt(e,t,r){let i,{charViewModel:s}=t;return e.$$set=a=>{"charViewModel"in a&&r(0,s=a.charViewModel)},e.$$.update=()=>{e.$$.dirty&1&&r(1,i=pt(s.weight))},[s,i]}class Mt extends Qe{constructor(t){super(),Ve(this,t,yt,mt,Ce,{charViewModel:0})}}const ge="/dmwgc/assets/corner-LhPWaTs7.svg";function wt(e){const t=[],r=e.split(`
`);for(const i of r){const s=bt(i);s&&t.push(s)}return t}function bt(e){const[t,r]=e.split("	");return!t||!r?null:{character:t,amount:parseInt(r)}}const At="/dmwgc/assets/Benchidori-n4RXg8lo.jpg",Lt="/dmwgc/assets/Cithis-nKla-bzV.jpg",_t="/dmwgc/assets/Daya-dTfZdvZn.jpg",Nt="/dmwgc/assets/Elven_Queen-dZS69lkp.jpg",kt="/dmwgc/assets/Erique-llQEZPPe.jpg",Wt="/dmwgc/assets/Falin-WnOWjTZK.jpg",St="/dmwgc/assets/Flamela-ezCwjgyH.jpg",vt="/dmwgc/assets/Fleki-0Ew3H-6j.jpg",Ot="/dmwgc/assets/Hien-OpQ-miqE.jpg",Et="/dmwgc/assets/Kiki-RB-1TSuo.jpg",Pt="/dmwgc/assets/Leed-3NqcsME5.jpg",It="/dmwgc/assets/Maizuru-GYb3xqLY.jpg",Tt="/dmwgc/assets/Marcille-AtXsHK8d.jpg",$t="/dmwgc/assets/Marcilles_Mom-QWBctT1u.jpg",xt="/dmwgc/assets/Milsiril-JqyP5kps.jpg",Ft="/dmwgc/assets/Misyl-cQmdTZhY.jpg",jt="/dmwgc/assets/Monster_Falin-VZhTmQZh.jpg",Ut="/dmwgc/assets/Namari-BCNEoVMq.jpg",Gt="/dmwgc/assets/Otta-U2HjgDJ0.jpg",Ht="/dmwgc/assets/Pattadol-c-XqPgpv.jpg",Rt="/dmwgc/assets/Rin-7C9MdVv0.jpg",Ct="/dmwgc/assets/Tade-EC0lboRI.jpg",Bt="/dmwgc/assets/The_Queens_Attendants-o0jlQbRX.jpg",Dt="/dmwgc/assets/Unnamed_Canaries-SqZtT_lO.jpg",re={Falin:{heightInMeters:1.7,gender:"WOMAN",baseWeight:152,party:"LAIOS",pictureLink:Wt,species:["TALLMAN"]},Marcille:{heightInMeters:1.6,gender:"WOMAN",baseWeight:112,party:"LAIOS",pictureLink:Tt,species:["ELF","TALLMAN"]},Laios:{heightInMeters:1.85,gender:"MAN",baseWeight:196,party:"LAIOS",species:["TALLMAN"]},Chillchuck:{heightInMeters:1.1,gender:"MAN",baseWeight:48,party:"LAIOS",species:["HALFFOOT"]},Namari:{heightInMeters:1.3,gender:"WOMAN",baseWeight:127,party:"TANSUS",pictureLink:Ut,species:["DWARF"]},Kiki:{heightInMeters:1.8,gender:"WOMAN",baseWeight:150,party:"TANSUS",pictureLink:Et,species:["TALLMAN"]},Kaka:{heightInMeters:1.9,gender:"MAN",baseWeight:183,party:"TANSUS",species:["TALLMAN"]},Benichidori:{heightInMeters:1.6,gender:"WOMAN",baseWeight:112,party:"SHUROS",pictureLink:At,species:["TALLMAN"]},Maizuru:{heightInMeters:1.65,gender:"WOMAN",baseWeight:125,party:"SHUROS",pictureLink:It,species:["TALLMAN"]},Hien:{heightInMeters:1.7,gender:"WOMAN",baseWeight:155,party:"SHUROS",pictureLink:Ot,species:["TALLMAN"]},Tade:{heightInMeters:1.95,gender:"WOMAN",baseWeight:235,party:"SHUROS",pictureLink:Ct,species:["OGRE"]},Shuro:{heightInMeters:1.8,gender:"MAN",baseWeight:165,party:"SHUROS",species:["TALLMAN"]},Rin:{heightInMeters:1.65,gender:"WOMAN",baseWeight:110,party:"KABRUS",pictureLink:Rt,species:["TALLMAN"]},Daya:{heightInMeters:1.3,gender:"WOMAN",baseWeight:141,party:"KABRUS",pictureLink:_t,species:["DWARF"]},Kabru:{heightInMeters:1.7,gender:"MAN",baseWeight:134,party:"KABRUS",species:["TALLMAN"]},Kuro:{heightInMeters:1.45,gender:"MAN",baseWeight:110,party:"KABRUS",species:["KOBOLD"]},Holm:{heightInMeters:1.4,gender:"MAN",baseWeight:90,party:"KABRUS",species:["GNOME"]},Mickbell:{heightInMeters:1.05,gender:"MAN",baseWeight:44,party:"KABRUS",species:["HALFFOOT"]},Pattadol:{heightInMeters:1.7,gender:"WOMAN",baseWeight:111,party:"MITHRUNS",pictureLink:Ht,species:["ELF"]},Cithis:{heightInMeters:1.65,gender:"WOMAN",baseWeight:119,party:"MITHRUNS",pictureLink:Lt,species:["ELF"]},Fleki:{heightInMeters:1.3,gender:"WOMAN",baseWeight:66,party:"MITHRUNS",pictureLink:vt,species:["ELF"]},Otta:{heightInMeters:1.3,gender:"WOMAN",baseWeight:75,party:"MITHRUNS",pictureLink:Gt,species:["ELF"]},Mithrun:{heightInMeters:1.55,gender:"MAN",baseWeight:111,party:"MITHRUNS",species:["ELF"]},Lycion:{heightInMeters:1.7,gender:"MAN",baseWeight:154,party:"MITHRUNS",species:["ELF"]},Flamela:{heightInMeters:1.4,gender:"WOMAN",baseWeight:95,party:"FLAMELAS",pictureLink:St,species:["ELF"]},Misyl:{heightInMeters:1.45,gender:"WOMAN",baseWeight:93,party:"FLAMELAS",pictureLink:Ft,species:["ELF"]},Erique:{heightInMeters:1.5,gender:"WOMAN",baseWeight:110,party:"FLAMELAS",pictureLink:kt,species:["ELF"]},Unnamed_Elves:{heightInMeters:1.5,gender:"WOMAN",baseWeight:665,party:"FLAMELAS",numbers:7,pictureLink:Dt,species:["ELF"],displayName:"Unnamed canaries"},Queen:{heightInMeters:1.7,gender:"WOMAN",baseWeight:115,party:"ELVES",pictureLink:Nt,species:["ELF"],displayName:"Elven Queen"},Milsiril:{heightInMeters:1.5,gender:"WOMAN",baseWeight:104,party:"ELVES",pictureLink:xt,species:["ELF"]},Marcilles_Mom:{heightInMeters:1.55,gender:"WOMAN",baseWeight:110,party:"ELVES",pictureLink:$t,species:["ELF"],displayName:"Marcille's Mom"},Attendants:{heightInMeters:1.5,gender:"WOMAN",baseWeight:380,party:"ELVES",numbers:4,pictureLink:Bt,species:["ELF"],displayName:"Queen's Attendants"},Leed:{heightInMeters:1.5,gender:"WOMAN",baseWeight:203,party:"DUNGEON",pictureLink:Pt,species:["MONSTER"]},Monster_Falin:{heightInMeters:1,gender:"YES",baseWeight:6080,party:"DUNGEON",pictureLink:jt,species:["MONSTER"],displayName:"Monster Falin"},Zon:{heightInMeters:1.75,gender:"MAN",baseWeight:265,party:"DUNGEON",species:[]},Thistle:{heightInMeters:1.3,gender:"MAN",baseWeight:63,party:"DUNGEON",species:["ELF"]}};function Ae(e){return re[e]}function Kt(){return Object.keys(re)}function qt(){return Object.values(re).filter(e=>e.gender==="WOMAN").length}function Vt(e){return re[e].party}function Qt(e){return Object.values(re).filter(t=>t.party===e).length}function Zt(e){const t={},r={DUNGEON:0,ELVES:0,FLAMELAS:0,KABRUS:0,LAIOS:0,MITHRUNS:0,SHUROS:0,TANSUS:0};let i=0;for(const s of e)t[s.character]||(t[s.character]=0),t[s.character]+=s.amount,r[Vt(s.character)]+=s.amount,i+=s.amount;return Kt().map(s=>{const a=t[s]||0,h=Ae(s);let p=h.baseWeight+a+r[h.party]/Qt(h.party);return s==="Monster_Falin"&&(p+=a),h.numbers&&h.numbers>1&&(p/=h.numbers),{name:s,totalDonatedAmount:a,weight:p,immobilityThreshold:ft(h.heightInMeters,70)}})}function zt(e){const i=Math.max(...e.filter(u=>Ae(u.name).gender==="WOMAN").map(u=>u.weight)),s=3200,a=95/(5*qt()+1),h=e.sort((u,o)=>u.weight-o.weight).map((u,o)=>{const d=4*a,g=u.weight/Math.min(s,i)*75,M=83-u.immobilityThreshold/Math.min(s,i)*75,_=83-g,L=Ae(u.name);return{...u,...L,height:g,width:d,x:2.5+a+5*a*o,y:_,immobilityThresholdY:M,picHeight:d*220/100,barGradient:Yt(L.party)}}),p=h.filter(u=>u.gender==="WOMAN").map((u,o)=>({...u,x:2.5+a+5*a*o}));return{characters:h,femaleCharacters:p,viewPortHeight:100,viewPortWidth:220}}function Yt(e){return{DUNGEON:"purple",FLAMELAS:"green",TANSUS:"darkTeal",KABRUS:"blue",LAIOS:"orange",MITHRUNS:"darkGreen",SHUROS:"red",ELVES:"pink"}[e]+"Gradient"}function je(e,t,r){const i=e.slice();return i[4]=t[r],i}function Xt(e){let t;return{c(){t=Le("p"),t.textContent=`error: ${e[7]}`},m(r,i){T(r,t,i)},p:A,i:A,o:A,d(r){r&&O(t)}}}function Jt(e){let t,r,i,s,a,h,p,u,o,d,g,M,_,L,N,ie,se,k,ae,ce,W,oe,le,S,he,ue,w,fe,Ne,ke,Y,We,Se,X,J,ve,Oe,$,E,P,I,x,F,j,U,G,H,R,C,de,B=Fe(e[3].femaleCharacters),f=[];for(let m=0;m<B.length;m+=1)f[m]=Ue(je(e,B,m));const Ze=m=>ne(f[m],1,1,()=>{f[m]=null});return{c(){t=l("svg"),r=l("defs"),i=l("linearGradient"),s=l("stop"),a=l("stop"),h=l("linearGradient"),p=l("stop"),u=l("stop"),o=l("linearGradient"),d=l("stop"),g=l("stop"),M=l("linearGradient"),_=l("stop"),L=l("stop"),N=l("linearGradient"),ie=l("stop"),se=l("stop"),k=l("linearGradient"),ae=l("stop"),ce=l("stop"),W=l("linearGradient"),oe=l("stop"),le=l("stop"),S=l("linearGradient"),he=l("stop"),ue=l("stop"),w=l("text"),fe=l("tspan"),Ne=Q("*Canadian Dollars, so"),ke=ye(),Y=l("tspan"),We=Q("US Dollars go further"),Se=ye(),X=l("tspan"),J=l("a"),ve=Q("LinkTree with tip jar here"),Oe=ye();for(let m=0;m<f.length;m+=1)f[m].c();$=l("image"),E=l("image"),P=l("image"),I=l("image"),x=l("rect"),F=l("rect"),j=l("rect"),U=l("rect"),G=l("rect"),H=l("rect"),R=l("rect"),C=l("rect"),n(s,"offset","0%"),n(s,"stop-color","#8b4b22"),n(a,"offset","100%"),n(a,"stop-color","#edc051"),n(i,"id","orangeGradient"),n(i,"x1","0"),n(i,"x2","0"),n(i,"y1","1"),n(i,"y2","0"),n(p,"offset","0%"),n(p,"stop-color","#084c56"),n(u,"offset","100%"),n(u,"stop-color","#10a5ad"),n(h,"id","darkTealGradient"),n(h,"x1","0"),n(h,"x2","0"),n(h,"y1","1"),n(h,"y2","0"),n(d,"offset","0%"),n(d,"stop-color","#901e1d"),n(g,"offset","100%"),n(g,"stop-color","#da3a37"),n(o,"id","redGradient"),n(o,"x1","0"),n(o,"x2","0"),n(o,"y1","1"),n(o,"y2","0"),n(_,"offset","0%"),n(_,"stop-color","#3a447f"),n(L,"offset","100%"),n(L,"stop-color","#86a8e2"),n(M,"id","blueGradient"),n(M,"x1","0"),n(M,"x2","0"),n(M,"y1","1"),n(M,"y2","0"),n(ie,"offset","0%"),n(ie,"stop-color","#4525cb"),n(se,"offset","100%"),n(se,"stop-color","#9464b6"),n(N,"id","purpleGradient"),n(N,"x1","0"),n(N,"x2","0"),n(N,"y1","1"),n(N,"y2","0"),n(ae,"offset","0%"),n(ae,"stop-color","#0a4334"),n(ce,"offset","100%"),n(ce,"stop-color","#16a375"),n(k,"id","darkGreenGradient"),n(k,"x1","0"),n(k,"x2","0"),n(k,"y1","1"),n(k,"y2","0"),n(oe,"offset","0%"),n(oe,"stop-color","#1e5119"),n(le,"offset","100%"),n(le,"stop-color","#41ba36"),n(W,"id","greenGradient"),n(W,"x1","0"),n(W,"x2","0"),n(W,"y1","1"),n(W,"y2","0"),n(he,"offset","0%"),n(he,"stop-color","#9d397b"),n(ue,"offset","100%"),n(ue,"stop-color","#ec61d4"),n(S,"id","pinkGradient"),n(S,"x1","0"),n(S,"x2","0"),n(S,"y1","1"),n(S,"y2","0"),n(Y,"dy","4%"),n(Y,"x","24%"),n(J,"class","link-tree-link svelte-sq6vwm"),n(J,"href","https://linktr.ee/ebcart"),n(X,"dy","4%"),n(X,"x","27%"),n(w,"x","21%"),n(w,"y","18%"),n(w,"class","small svelte-sq6vwm"),n(w,"transform","rotate(-5)"),n($,"x","0%"),n($,"y","0%"),n($,"height","8%"),ee($,"xlink:href",ge),n(E,"x","0%"),n(E,"y","0%"),n(E,"height","8%"),ee(E,"xlink:href",ge),n(E,"transform","scale(-1, 1)"),n(E,"transform-origin","center"),n(P,"x","0%"),n(P,"y","0%"),n(P,"height","8%"),ee(P,"xlink:href",ge),n(P,"transform","scale(1, -1)"),n(P,"transform-origin","center"),n(I,"x","0%"),n(I,"y","0%"),n(I,"height","8%"),ee(I,"xlink:href",ge),n(I,"transform","scale(-1, -1)"),n(I,"transform-origin","center"),n(x,"x",`${8*e[3].viewPortHeight/e[3].viewPortWidth-.2}%`),n(x,"y","0"),n(x,"height","1.4%"),n(x,"width",`${100-2*8*e[3].viewPortHeight/e[3].viewPortWidth+.4}%`),n(x,"fill","#ae2f29"),n(F,"x",`${8*e[3].viewPortHeight/e[3].viewPortWidth-.2}%`),n(F,"y","1.7%"),n(F,"height","0.75%"),n(F,"width",`${100-2*8*e[3].viewPortHeight/e[3].viewPortWidth+.4}%`),n(F,"fill","#ae2f29"),n(j,"x","0%"),n(j,"y","98.6%"),n(j,"height","1.5%"),n(j,"width","100%"),n(j,"fill","#ae2f29"),n(U,"x",`${8*e[3].viewPortHeight/e[3].viewPortWidth-.2}%`),n(U,"y","97.55%"),n(U,"height","0.75%"),n(U,"width",`${100-2*8*e[3].viewPortHeight/e[3].viewPortWidth+.4}%`),n(U,"fill","#ae2f29"),n(G,"x","0%"),n(G,"y","7.8%"),n(G,"height","84.4%"),n(G,"width","0.65%"),n(G,"fill","#ae2f29"),n(H,"x","0.8%"),n(H,"y","7.8%"),n(H,"height","84.4%"),n(H,"width","0.4%"),n(H,"fill","#ae2f29"),n(R,"x","99.35%"),n(R,"y","7.8%"),n(R,"height","84.4%"),n(R,"width","0.65%"),n(R,"fill","#ae2f29"),n(C,"x","98.8%"),n(C,"y","7.8%"),n(C,"height","84.4%"),n(C,"width","0.4%"),n(C,"fill","#ae2f29"),n(t,"viewBox","0 0 "+e[3].viewPortWidth+" "+e[3].viewPortHeight),n(t,"xmlns","http://www.w3.org/2000/svg"),n(t,"class","chart svelte-sq6vwm")},m(m,b){T(m,t,b),c(t,r),c(r,i),c(i,s),c(i,a),c(r,h),c(h,p),c(h,u),c(r,o),c(o,d),c(o,g),c(r,M),c(M,_),c(M,L),c(r,N),c(N,ie),c(N,se),c(r,k),c(k,ae),c(k,ce),c(r,W),c(W,oe),c(W,le),c(r,S),c(S,he),c(S,ue),c(t,w),c(w,fe),c(fe,Ne),c(w,ke),c(w,Y),c(Y,We),c(w,Se),c(w,X),c(X,J),c(J,ve),c(w,Oe);for(let y=0;y<f.length;y+=1)f[y]&&f[y].m(t,null);c(t,$),c(t,E),c(t,P),c(t,I),c(t,x),c(t,F),c(t,j),c(t,U),c(t,G),c(t,H),c(t,R),c(t,C),de=!0},p(m,b){if(b&1){B=Fe(m[3].femaleCharacters);let y;for(y=0;y<B.length;y+=1){const Ee=je(m,B,y);f[y]?(f[y].p(Ee,b),K(f[y],1)):(f[y]=Ue(Ee),f[y].c(),K(f[y],1),f[y].m(t,$))}for(Be(),y=B.length;y<f.length;y+=1)Ze(y);De()}},i(m){if(!de){for(let b=0;b<B.length;b+=1)K(f[b]);de=!0}},o(m){f=f.filter(Boolean);for(let b=0;b<f.length;b+=1)ne(f[b]);de=!1},d(m){m&&O(t),et(f,m)}}}function Ue(e){let t,r,i,s,a,h,p;function u(){return e[1](e[4])}function o(){return e[2](e[4])}return s=new Mt({props:{charViewModel:e[4]}}),{c(){t=l("rect"),r=l("rect"),i=l("image"),ht(s.$$.fragment),n(t,"x",e[4].x+"%"),n(t,"y",e[4].immobilityThresholdY+"%"),n(t,"width",e[4].width+"%"),n(t,"height","0.8%"),n(t,"rx","0.5px"),n(t,"ry","0.5px"),n(t,"stroke","white"),n(t,"stroke-width","0.4"),n(t,"stroke-linecap","round"),n(t,"fill","black"),n(r,"x",e[4].x+"%"),n(r,"y",e[4].y+"%"),n(r,"width",e[4].width+"%"),n(r,"height",e[4].height+"%"),n(r,"rx","0.5px"),n(r,"ry","0.5px"),n(r,"stroke","white"),n(r,"stroke-width","0.4"),n(r,"stroke-linecap","round"),n(r,"fill","url(#"+e[4].barGradient+")"),ee(i,"xlink:href",e[4].pictureLink),n(i,"x",e[4].x+"%"),n(i,"y",e[4].y+e[4].height+1+"%"),n(i,"height",e[4].picHeight+"%"),n(i,"preserveAspectRatio","true")},m(d,g){T(d,t,g),T(d,r,g),T(d,i,g),Ke(s,d,g),a=!0,h||(p=[Te(t,"click",u),Te(r,"click",o)],h=!0)},p(d,g){e=d},i(d){a||(K(s.$$.fragment,d),a=!0)},o(d){ne(s.$$.fragment,d),a=!1},d(d){d&&(O(t),O(r),O(i)),qe(s,d),h=!1,z(p)}}}function en(e){let t;return{c(){t=Le("p"),t.textContent="loading data..."},m(r,i){T(r,t,i)},p:A,i:A,o:A,d(r){r&&O(t)}}}function tn(e){let t,r,i={ctx:e,current:null,token:null,hasCatch:!0,pending:en,then:Jt,catch:Xt,value:3,error:7,blocks:[,,,]};return ot(e[0](),i),{c(){t=Le("main"),i.block.c()},m(s,a){T(s,t,a),i.block.m(t,i.anchor=null),i.mount=()=>t,i.anchor=null,r=!0},p(s,[a]){e=s,lt(i,e,a)},i(s){r||(K(i.block),r=!0)},o(s){for(let a=0;a<3;a+=1){const h=i.blocks[a];ne(h)}r=!1},d(s){s&&O(t),i.block.d(),i.token=null,i=null}}}function Ge(e){console.log(`${e} is selected`)}function nn(e){async function t(){let s=await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vShRwjPHvlfF_8R6YEjJ4LvbvJ8BOCn5r3HikzbXJhrJYklPAr19Ibbpmcb09wCg9Gr5_OhfX_F-1LS/pub?gid=0&single=true&output=tsv");return zt(Zt(wt(await s.text())))}return[t,s=>Ge(s.name),s=>Ge(s.name)]}class rn extends Qe{constructor(t){super(),Ve(this,t,nn,tn,Ce,{})}}new rn({target:document.getElementById("app")});
