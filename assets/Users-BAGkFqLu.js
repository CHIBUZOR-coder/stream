import{j as e,E as i,I as n,r as c,M as x}from"./index-CJOEd3em.js";const h=({data:d,headList:l,For:a})=>{const o="text-xs text-left text-main font-semibold px-6 py-2 uppercase ",t="text-sm text-left leading-6 whitespace-nowrap px-5 py-3";return e.jsx("div",{className:"overflow-x-scroll overflow-hidden relative w-full",children:e.jsxs("table",{className:"table-auto w-full text-white border  border-border divide-y divide-border",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-dryGray",children:l.map((s,r)=>e.jsx("th",{scope:"col",className:`${o}`,children:s.title},r))})}),e.jsx("tbody",{className:" bg-main divide-y divide-gray-800",children:a==="category"?e.jsx(e.Fragment,{children:d.map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:`${t}`,children:e.jsx("p",{children:s.id})}),e.jsx("td",{className:`${t}`,children:e.jsx("p",{children:s.date})}),e.jsx("td",{className:`${t}`,children:e.jsx("p",{children:s.tittle})}),e.jsxs("td",{className:`${t} float-left flexRow gap-5`,children:[e.jsxs("button",{className:"bg-dry border border-border flexRow transi edit  hover:bg-green-500 hover:text-white gap-2 text-border px-2 py-1 rounded",children:["Edit"," ",e.jsx(i,{className:"text-green-500 editchild  transi "})]}),e.jsx("button",{className:"bg-subMain text-white rounded flexCol w-6 h-6 hover:bg-main transi border border-subMain delete  ",children:e.jsx(n,{className:"deletechild transi"})})]})]},r))}):e.jsx(e.Fragment,{children:d.map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:`${t}`,children:e.jsx("div",{className:"w-12 bg-dry borer border-border rounded h-12 overflow-hidden ",children:e.jsx("img",{src:`./castImages/${s.image}.jpg`,alt:s.image,className:"w-full h-full object-cover rounded-md"})})}),e.jsx("td",{className:`${t}`,children:e.jsx("p",{children:s.id})}),e.jsx("td",{className:`${t}`,children:e.jsx("p",{children:s.date})}),e.jsx("td",{className:`${t}`,children:e.jsx("p",{children:s.name})}),e.jsx("td",{className:`${t}`,children:e.jsx("p",{children:s.email})}),e.jsxs("td",{className:`${t} float-left flexRow gap-5`,children:[e.jsxs("button",{className:"bg-dry border border-border flexRow transi edit  hover:bg-green-500 hover:text-white gap-2 text-border px-2 py-1 rounded",children:["Edit"," ",e.jsx(i,{className:"text-green-500 editchild  transi "})]}),e.jsx("button",{className:"bg-subMain text-white rounded flexCol w-6 h-6 hover:bg-main transi border border-subMain delete  ",children:e.jsx(n,{className:"deletechild transi"})})]})]},r))})})]})})},b=()=>{const{Users:d,CategoryData:l}=c.useContext(x);console.log("cdata",l);const a=[{id:1,title:"Image"},{id:2,title:"Id"},{id:3,title:"Date"},{id:4,title:"Full Name"},{id:5,title:"Email"},{id:6,title:"Actions"}];return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("h2",{className:"md:text-xl text-lg text-white  font-bold",children:"Users"}),e.jsx(h,{data:d,headList:a,For:"user"})]})},m=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));export{h as T,b as U,m as a};
