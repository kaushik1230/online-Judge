"use strict";(self.webpackChunkoj_client=self.webpackChunkoj_client||[]).push([[415],{1415:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var i=s(72791),r=s(59434),n=s(36151),o=s(68870),a=s(49877),l=s(35527),d=s(3710),c=s(71917),m=s(90917),g=s(1235),p=s(54261),u=s(91608),x=s(88446),h=s(7091),f=s(80184);const j=(e,t)=>{const s=(0,r.v9)((e=>e.auth));(0,i.useEffect)((()=>{if(!s.isAdmin)return;const i=(0,u.ZP)(x.p,{query:{id:(0,p.Z)()}});return i.on("logger-new-log",(t=>{e((e=>[...e,{msg:t,id:(0,p.Z)()}]))})),i.on("logger-new-error",(e=>{t((t=>[...t,{msg:e,id:(0,p.Z)()}]))})),()=>i.close()}),[s.username,s.isAdmin,e,t])},y=(e,t,s,r,n)=>{(0,i.useEffect)((()=>{e(!0),t(void 0),fetch(`${x.p}/api/experimental/logs?pageNo=${n}`,{headers:{"Content-Type":"application/json"},method:"GET",credentials:"include"}).then((async e=>{if(e.ok)return e.json();const t=await e.json();return await Promise.reject(t)})).then((e=>{r(e.stdoutTxt.trim().split("\n").map((e=>({msg:e,id:(0,p.Z)()})))),s(e.stderrTxt.trim().split("\n").map((e=>({msg:e,id:(0,p.Z)()}))))})).catch(t).finally((()=>e(!1)))}),[e,t,s,r,n])},Z=e=>{(0,i.useEffect)((()=>{const e=setTimeout((()=>{const e=document.getElementById("out-pre");e&&[...e.childNodes].every((e=>"ok"!==e.getAttribute("tokenized")&&(e.innerHTML=v(e.innerHTML),e.setAttribute("tokenized","ok"),!0)))}),10);return()=>clearTimeout(e)}),e)},k=[["GET","get","g"],["POST","post","g"],["PUT","put","g"],["DELETE","delete","g"],["Unlinked","unlinked","g"],["PORT","port","g"],["Database","database","g"],["Production","production","g"],["Note:","note","g"],["Add Note","addnote","g"],["Edit Note","editnote","g"],["Delete Note","deletenote","g"],["Containers","containers","g"],["Deleted","deleted","g"],["Error","error","g"],["failed","failed","g"],["LOG","log","g"]],v=e=>{k.forEach((t=>e=e.replace(new RegExp(t[0],t[2]),`<span class='token token-${t[1]}'>${t[0]}</span>`)));const t=e.match("[0-9]+/[0-9]+/[0-9]+, [0-9]+:[0-9]+:[0-9]+ [a-zA-Z][a-zA-Z]");return t&&(e=e.replace(t[0],`<span class='token-time'>${t[0]}</span>`)),e},T=e=>{let{setIsOut:t,isOut:s,endRef:r,setPageNo:p,pageNo:u}=e;return(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(n.Z,{variant:"contained",color:"success",onClick:()=>t((e=>!e)),sx:{position:"fixed",top:"5em",right:"1em",textTransform:"capitalize",opacity:"0.9"},startIcon:(0,f.jsx)(d.Z,{}),children:s?"show stderr":"show stdout"}),(0,f.jsxs)(o.Z,{sx:{position:"fixed",display:"flex",top:"8em",right:"1em",opacity:"0.9"},children:[(0,f.jsx)(a.Z,{onClick:()=>p((e=>1===e?1:e-1)),size:"small",color:"primary","aria-label":"add",children:(0,f.jsx)(c.Z,{})}),(0,f.jsx)(l.Z,{elevation:3,sx:{width:"35px",height:"35px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2em",margin:"0 0.2em"},children:u}),(0,f.jsx)(a.Z,{onClick:()=>p((e=>e+1)),size:"small",color:"primary","aria-label":"add",children:(0,f.jsx)(m.Z,{})})]}),(0,f.jsx)(a.Z,{onClick:()=>{r.current&&r.current.scrollIntoView()},style:{position:"fixed",bottom:"4.5em",right:"1em",opacity:"0.9"},size:"small",color:"primary","aria-label":"add",children:(0,f.jsx)(g.Z,{})})]})},E=()=>{const[e,t]=(0,i.useState)(!0),[s,r]=(0,i.useState)(void 0),[n,o]=(0,i.useState)({}),[a,l]=(0,i.useState)({}),[d,c]=(0,i.useState)(!0),m=(0,i.useRef)(null),[g,p]=(0,i.useState)(1);return y(t,r,l,o,g),j(o,l),Z([d,a,n]),(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(T,{endRef:m,isOut:d,pageNo:g,setIsOut:c,setPageNo:p}),e&&(0,f.jsx)(h.Z,{}),!e&&s&&(0,f.jsxs)("div",{className:"errorTemplate",style:{width:"70vw"},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Msg : "}),s.msg]}),s&&(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Error : "}),JSON.stringify(s.error)]})]}),!e&&!s&&(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)("pre",{id:"out-pre",style:{display:"flex",flexDirection:"column",alignItems:"flex-start",margin:"6rem 1rem",fontSize:"0.6rem"},children:d?[...n].reverse().map((e=>(0,f.jsx)("div",{children:e.msg},e.id))):a.map((e=>(0,f.jsx)("div",{children:e.msg},e.id)))}),(0,f.jsx)("div",{ref:m,"aria-hidden":!0})]})]})}}}]);
//# sourceMappingURL=415.09cb1faf.chunk.js.map