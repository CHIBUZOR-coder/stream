import{R as g,r as i,M as o,j as e,L as c,F as d,a as x,B as p,b,c as f,d as j,e as v,f as w}from"./index-DMzSuiBC.js";import{S as m,A as u,a as h,F as N,N as y,b as M}from"./Star-D8jIfF_g.js";import{L as k}from"./Layout-BnFesu9l.js";import"./index-BlJZYdK_.js";const B=g.memo(()=>{const{Movies:a,AddToCart:r}=i.useContext(o),n=(l=>[...l].sort(()=>Math.random()-.5))(a);return e.jsx("div",{className:"relative w-full",children:e.jsx(m,{direction:"vertical",spaceBetween:0,slidesPerView:1,lazy:"true",loop:!0,speed:1e3,modules:[u],autoplay:{delay:5e3,disableOnInteraction:!1},className:"w-full h-72  lg:h-72 xl:h-96 bg-dry",children:n.map(l=>e.jsxs(h,{loading:"lazy",className:"bg-center  bg-cover relative overflow-hidden rounded",children:[e.jsx("img",{src:`./images/${l.image}.jpg`,className:"w-full h-full object-cover",alt:""}),e.jsx("div",{className:"absolute w-full h-full linearbg top-0 ",children:e.jsxs("div",{className:"absolute top-[45%] md:top-[20%] left-[5%] flex flex-col gap-2",children:[e.jsx("h1",{className:"xl:text-4xl truncate names capitalize font-sans sm:text-2xl text-xl font-bold",children:l.name}),e.jsx(N,{movie:l}),e.jsxs("div",{className:" flex items-center gap-4 mt-4",children:[e.jsx(c,{className:"bg-subMain hover:text-main transi hover:bg-white text-white px-8 py-3 rounded font-medium names",to:`/stream/watch/${l.name}`,children:"watch"}),e.jsx("span",{onClick:r,className:"bg-white flex justify-center cursor-pointer items-center hover:text-subMain transi text-white px-3 py-3 rounded bg-opacity-30 ",children:e.jsx(d,{})})]})]})})]},l.id))})})}),C=()=>{const{AddToCart:a}=i.useContext(o),r=x.filter(s=>s.popular==="true");return e.jsxs("div",{children:[e.jsxs("div",{className:"flex w-full sm:gap-5 gap-4 items-center my-14",children:[e.jsx(p,{className:"sm-h-6  sm-w-6 h-4 w-4  text-subMain"}),e.jsx("h2",{className:"sm-text-xl text-lg font-bold",children:"Popular Movies"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4  w-full gap-8",children:r.map(s=>e.jsxs("div",{className:"border-2 border-border rounded-md bg-center bg-cover transi hover:scale-95 w-full flex flex-col ",children:[e.jsx(c,{to:`/stream/movie/${s.id}`,className:" h-64  bg-center bg-cover ",children:e.jsx("img",{src:`./images/${s.image}.jpg`,loading:"lazy",className:"w-full h-full object-cover",alt:""})}),e.jsxs("div",{className:"flex  justify-between items-center  bg-dry w-full text-white px-4 py-3",children:[e.jsx("h3",{className:"font-semibold truncate",children:s.name}),e.jsx("button",{onClick:()=>a(s),className:"h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white ",children:e.jsx(d,{})})]})]},`${s.id}`))})]})},F=()=>e.jsx("div",{className:"w-full my-20 py-10 md:px-[3.4rem] px-2 bg-dry",children:e.jsxs("div",{className:"md:grid md:grid-cols-2 md:gap-10  items-center",children:[e.jsxs("div",{className:"flex lg:gap-10 gap-6 flex-col    ",children:[e.jsx("h1",{className:"xl-text-3xl text-xl capitalize font-sans font-medium xl:leading-loose",children:"Download Movies & Watch Offline On Mobile"}),e.jsx("p",{className:"text-text text-sm  xl:text-base leading-6 xl:leading-8",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in laudantium culpa corporis nostrum laboriosam vitae consectetur nisi dicta totam? Lorem ipsum dolor sit amet consectetur, adipisicing elit."}),e.jsxs("div",{className:"flex gap-4 md:text-lg text-sm",children:[e.jsx("div",{className:"flex-col bg-black text-subMain px-5 py-3 rounded-md font-bold",children:"HD 4K"}),e.jsxs("div",{className:" flexRow gap-4 bg-black text-subMain px-5 py-3 rounded-md font-bold",children:[e.jsx(b,{})," 2K"]})]})]}),e.jsx("div",{className:" bg-center bg-cover rounded md:my-0 my-8 w-full h-96 ",style:{backgroundImage:"url('./images/phone2.jpg')"}})]})}),P=()=>{const[a,r]=i.useState(null),[s,n]=i.useState(null),l="hover:bg-dry transi text-sm rounded w-8 h-8 flex flex-col justify-center items-center bg-subMain text-white";return i.memo(()=>e.jsx(f,{})),e.jsxs("div",{className:"my-16",children:[e.jsxs("div",{className:"flex font-bold gap-4 my-6 items-center ",children:[e.jsx(j,{className:"text-subMain"}),e.jsx("p",{className:" font bold",children:"Top Rated"})]}),e.jsxs("div",{children:[e.jsx(m,{navigation:{nextEl:a,prevEl:s},slidesPerView:4,spaceBetween:40,autoplay:!0,speed:1e3,modules:[y,u],breakpoints:{0:{slidesPerView:1},400:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4},1280:{slidesPerView:5,spaceBetween:30}},children:x.map(t=>e.jsx(h,{children:e.jsxs("div",{className:" h-rate border border-border bg-cover bg-center",children:[e.jsx("img",{src:`./images/${t.image}.jpg`,loading:"lazy",className:"w-full h-full object-cover ",alt:""}),e.jsx("div",{className:" gap-6 hovered   absolute bg-blacktrans h-full w-full   left-0 right-0 bottom-0",children:e.jsxs("div",{className:"w-full hovers  bg-black bg-opacity-60 object-cover  flex flex-col relative justify-center gap-5 items-center h-full",children:[e.jsx("button",{className:"w-12 h-12 flex  justify-center items-center transi hover:bg-subMain rounded-full bg-white bg-opacity-30  text-white",children:e.jsx(d,{})}),e.jsx(c,{to:`/movie/${t.name}`,className:" text-center font-semibold text-xl line-clamp-2",children:t.name}),e.jsx("div",{className:"flex  gap-2 text-star ",children:e.jsx(M,{value:t.rating})})]})})]})},t.id))}),e.jsxs("div",{className:"w-full px-1 flex gap-6 pt-12  justify-center",children:[e.jsx("button",{className:l,ref:t=>n(t),children:e.jsx(v,{})}),e.jsx("button",{className:l,ref:t=>r(t),children:e.jsx(w,{})})]})]})]})},$=()=>e.jsx("div",{children:e.jsx(k,{children:e.jsxs("div",{className:"min-h-screen px-5 ",children:[e.jsx(B,{}),e.jsx(C,{}),e.jsx(F,{}),e.jsx(P,{})]})})});export{$ as default};
