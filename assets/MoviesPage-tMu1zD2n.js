import{R as $,r,M as v,j as e,l as w,m as D,g as E,L as T,F}from"./index-xqLIUCAm.js";const H=$.memo(({Movies:h})=>{const{setSelectedItems:m,selectedItems:x,RatesData:i,TimesData:p,YearData:l,HandleGetSelected:b,categoryData:o,userChoice:n}=r.useContext(v),[u,t]=r.useState(null),[c,d]=r.useState(!1),[f,j]=r.useState(null),[N,C]=r.useState([]);r.useEffect(()=>{o?(console.log("data:",o),j(o[0].name),C(o)):j(e.jsx("p",{children:"No data list "})),console.log("categoryData",o)},[o]);const M=[{id:1,items:N},{id:2,items:l},{id:3,items:p},{id:4,items:i}];r.useEffect(()=>{console.log("flter",n)},[n]);const S=s=>{u===s?(t(null),d(!1)):(t(s),d(!0))},k=(s,g)=>{console.log(g),m(a=>({...a,[s]:g})),b(s,g)};return e.jsx("div",{className:"my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6",children:M.map(s=>{var g;return e.jsxs("div",{onClick:()=>S(s.id),children:[console.log("menu",s),e.jsxs("div",{className:"relative w-full flex items-center cursor-pointer border-gray-800 text-white px-4 py-2 text-left bg-main rounded-lg focus:outline-none focus:ring-1 focus:border-dry",children:[e.jsx("span",{className:"block font-semibold text-[0.7rem] filterr md:text-[1rem] ",children:x[s.id]?(g=s.items.find(a=>a.id===x[s.id]))==null?void 0:g.tittle:e.jsx(e.Fragment,{children:s.id===1?e.jsx("p",{children:"Sort By Category"}):s.id===2?e.jsx("p",{children:"Sort By Year"}):s.id===3?e.jsx("p",{children:"Sort By Hours"}):s.id===4?e.jsx("p",{children:"Sort By Rates"}):""})}),e.jsx("span",{className:"absolute right-2 flex items-center",children:e.jsx(w,{className:"h-5 w-5","aria-hidden":"true"})})]}),e.jsx("div",{className:`${u===s.id?`${c?"block":"hidden"}`:"hidden"} relative`,children:e.jsx("div",{className:"absolute z-10 mt-1 w-full bg-drkb2 flex flex-col gap-2 pl-4 border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm-text-sm",children:s.items.map((a,y)=>e.jsxs("div",{onClick:()=>{k(s.id,a.id),console.log(a.id)},className:`${a.id===0?"hidden":""}   relative w-full flex justify-start items-center gap-2 hover:bg-white hover:text-dry transi py-1 cursor-pointer ${x[s.id]===a.id?"font-bold":""}`,children:[e.jsx("span",{children:x[s.id]===a.id&&y!==0&&e.jsx(D,{className:"h-4 w-4"})}),e.jsx("span",{className:"truncate font-semibold ",children:a.tittle})]},y))})})]},s.id)})})}),A=()=>{const{userChoice:h,Movies:m,AddToCart:x}=r.useContext(v),i=10,p=39,[l,b]=r.useState(0),o=()=>!h||Object.keys(h).length===0?m:m.filter(t=>{let c=!0;for(const[d,f]of Object.entries(h))(d==="1"&&t.category!==f||d==="2"&&t.approxiY!==f||d==="3"&&t.approxiT!==f||d==="4"&&t.approxiR!==f)&&(c=!1);return c}),n=o(),u=t=>{t==="next"?l+i<n.length&&(b(l+i),window.scrollTo({top:0,behavior:"smooth"})):t==="prev"?l-i>=0&&(b(l-i),window.scrollTo({top:0,behavior:"smooth"})):console.log("error")};return r.useEffect(()=>{console.log("page",l)},[l]),r.useEffect(()=>{console.log("filtered",n.length)},[o]),r.useEffect(()=>{console.log("max",i)},[i]),e.jsx(E,{children:e.jsxs("div",{className:"px-2 my-6",children:[e.jsx(H,{Movies:m}),e.jsxs("p",{className:"text-lg font-medium my-6",children:["Total items found",e.jsxs("span",{className:"font-bold text-subMain rounded-lg",children:[" ",n.length]})]}),e.jsx("div",{id:"#top",className:"grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 gap-6",children:n.slice(l,l+i).map((t,c)=>e.jsxs("div",{className:"border-2 border-border rounded bg-center bg-cover relative transi hover:scale-95 w-full flex flex-col ",children:[e.jsx(T,{to:`/stream/movie/${t.id}`,className:" h-64  bg-center bg-cover ",children:e.jsx("img",{src:`./images/${t.image}.jpg`,loading:"lazy",className:"w-full h-full object-cover",alt:""})}),e.jsxs("div",{className:"flex absolute bottom-0  justify-between items-center  bg-trans2 w-full text-white px-4 py-3",children:[e.jsx("h3",{className:"font-semibold truncate",children:t.name}),e.jsx("button",{onClick:()=>x(t,t.price),className:"h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white ",children:e.jsx(F,{})})]})]},`${t.id}`))}),e.jsxs("div",{className:" my-10 md:my-16 flex justify-center gap-5 items-center w-full",children:[e.jsx("span",{onClick:t=>u("prev"),className:` ${l>0?"bg-subMain":""} border-2 flex justify-center items-center gap-2 rounded-md cursor-pointer border-subMain py-3 px-8`,children:"prev"}),e.jsx("span",{onClick:t=>u("next"),className:` ${l<p?"bg-subMain":""} border-2 flex justify-center items-center gap-2 rounded-md cursor-pointer border-subMain py-3 px-8`,children:"next"})]})]})})};export{A as default};
