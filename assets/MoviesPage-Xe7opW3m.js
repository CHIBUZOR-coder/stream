import{G as M,r as n,M as y,j as e,i as k,C,h as S,L as w,a as D}from"./index-8Ppx2GoH.js";import{M as b}from"./MovieData-XVqbZoOW.js";function L(c){return M({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m7 10 5 5 5-5z"},child:[]}]})(c)}const $=({Movies:c})=>{const{setSelectedItems:u,selectedItems:l,RatesData:f,TimesData:p,YearData:x,HandleGetSelected:g,userChoice:h}=n.useContext(y),[d,t]=n.useState(null),[r,i]=n.useState(!1),o=[{id:1,items:C},{id:2,items:x},{id:3,items:p},{id:4,items:f}];n.useEffect(()=>{console.log("flter",h)},[h]);const v=s=>{d===s?(t(null),i(!1)):(t(s),i(!0))},N=(s,m)=>{u(a=>({...a,[s]:m})),g(s,m)};return e.jsx("div",{className:"my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6",children:o.map(s=>{var m;return e.jsxs("div",{onClick:()=>v(s.id),children:[e.jsxs("div",{className:"relative w-full flex items-center cursor-pointer border-gray-800 text-white px-4 py-2 text-left bg-main rounded-lg focus:outline-none focus:ring-1 focus:border-dry",children:[e.jsx("span",{className:"block font-semibold",children:l[s.id]?(m=s.items.find(a=>a.id===l[s.id]))==null?void 0:m.tittle:s.items[0].name}),e.jsx("span",{className:"absolute right-2 flex items-center",children:e.jsx(L,{className:"h-5 w-5","aria-hidden":"true"})})]}),e.jsx("div",{className:`${d===s.id?`${r?"block":"hidden"}`:"hidden"} relative`,children:e.jsx("div",{className:"absolute z-10 mt-1 w-full bg-drkb2 flex flex-col gap-2 pl-4 border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm-text-sm",children:s.items.map((a,j)=>e.jsxs("div",{onClick:()=>{j!==0&&N(s.id,a.id)},className:`relative w-full flex justify-start items-center gap-2 hover:bg-white hover:text-dry transi py-1 cursor-pointer ${l[s.id]===a.id?"font-bold":""}`,children:[e.jsx("span",{children:l[s.id]===a.id&&j!==0&&e.jsx(k,{className:"h-4 w-4"})}),e.jsx("span",{className:"truncate font-semibold",children:a.tittle})]},a.id))})})]},s.id)})})},F=()=>{const{userChoice:c}=n.useContext(y),u=10,[l,f]=n.useState(u),[p,x]=n.useState(!1),g=()=>{x(!0),f(l+u),setTimeout(()=>{x(!1)},800)},d=!c||Object.keys(c).length===0?b:b.filter(t=>{let r=!0;for(const[i,o]of Object.entries(c))(i==="1"&&t.category!==o||i==="2"&&t.approxiY!==o||i==="3"&&t.approxiT!==o||i==="4"&&t.approxiR!==o)&&(r=!1);return r});return e.jsx(S,{children:e.jsxs("div",{className:"px-2 my-6",children:[e.jsx($,{Movies:b}),e.jsxs("p",{className:"text-lg font-medium my-6",children:["Total items found",e.jsxs("span",{className:"font-bold text-subMain rounded-lg",children:[" ",d.length]})]}),e.jsx("div",{className:"grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 gap-6",children:d.slice(0,l).map((t,r)=>e.jsx(w,{to:`/movies/${t.name}`,className:"border h-64 border-border rounded bg-center bg-cover transi hover:scale-95 w-full relative",style:{backgroundImage:`url('./images/${t.image}.jpg')`},children:e.jsxs("div",{className:"absolute flex  justify-between items-center left-0 bottom-0 bg-main2 w-full text-white px-4 py-3",children:[e.jsx("h3",{className:"font-semibold truncate",children:t.name}),e.jsx("button",{className:"h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white ",children:e.jsx(D,{})})]})},`${t.id}`))}),e.jsx("div",{className:" my-10 md:my-16 flex justify-center items-center w-full",children:e.jsx("span",{onClick:g,className:" border-2 flex justify-center items-center gap-2 rounded-md cursor-pointer border-subMain py-3 px-8",children:"LoadMore"})})]})})};export{F as default};
