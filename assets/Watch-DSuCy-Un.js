import{q as i,r as t,M as d,j as e,L as m,F as c,x,n as u}from"./index-Cr9uAfOZ.js";import{L as b}from"./Layout-DLXsKR6b.js";import{b as f}from"./index-KBfmWF7D.js";const v=()=>{const{name:a}=i(),{Movies:r}=t.useContext(d),s=r.find(n=>n.name===a),[l,o]=t.useState(!1);return console.log(s.image),e.jsx(b,{children:e.jsxs("div",{className:"container  bg-dry md:min-h-screen p-6 mb-12",children:[e.jsxs("div",{className:"flexBtn w-full justify-between flex-wrap mb-6 gap-2 bg-main text-white p-6 rounded border border-gray-800",children:[e.jsxs(m,{to:`/stream/movie/${s.id}`,className:"btn md:text-xl w-[20%] text-sm flex gap-3 items-center font-bold text-dryGray",children:[e.jsx(f,{})," ",s.name]}),e.jsxs("div",{className:"flexBtn sm:w-auto w-[70%] gap-5",children:[e.jsx("button",{className:"btn bg-primary2 rounded px-4 py-3 text-sm hover:text-subMain transi font-bold",children:e.jsx(c,{})}),e.jsx("button",{className:"btn bg-subMain  flexRow gap-2  rounded px-8 font-medium py-3 text-sm hover:text-main transi",children:e.jsx(x,{})})]})]}),l?e.jsx("video",{controls:!0,autoPlay:!0,className:"w-full h-[200px] md:h-screen rounded object-cover ",children:e.jsx("source",{src:`../Moviess/${s.video}.mp4`,type:"video/mp4",title:s.name})}):e.jsx("div",{className:"flex justify-center items-center w-full ",children:e.jsxs("div",{className:"h-[200px] md:h-[400px] rounded overflow-hidden text-white relative w-full bg-center bg-cover",children:[e.jsx("div",{className:" bg-main2 w-full h-full flexCol absolute top-0 left-0",children:e.jsx("button",{onClick:()=>o(!0),className:"bg-white text-subMain flexCol border border-subMain rounded-full w-16 h-16 transi",children:e.jsx(u,{})})}),e.jsx("img",{src:`../images/${s.image}.jpg`,className:"w-full h-full object-cover",alt:""})]})})]})})};export{v as default};
