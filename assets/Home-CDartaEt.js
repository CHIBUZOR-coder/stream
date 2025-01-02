import{R as h,r as i,M as g,j as e,L as n,F as c,a as d,B as p,b,c as f,d as j,e as v,f as w,g as N}from"./index-DZOR72Na.js";import{S as x,A as m,a as u,F as y,N as M,b as B}from"./Star-2dVj9F10.js";const F=h.memo(()=>{const{Movies:a}=i.useContext(g),r=(l=>[...l].sort(()=>Math.random()-.5))(a);return e.jsx("div",{className:"relative w-full",children:e.jsx(x,{direction:"vertical",spaceBetween:0,slidesPerView:1,lazy:!0,preloadImages:!1,loop:!0,speed:1e3,modules:[m],autoplay:{delay:5e3,disableOnInteraction:!1},className:"w-full h-72  lg:h-72 xl:h-96 bg-dry",children:r.map(l=>e.jsxs(u,{loading:"lazy",className:"bg-center  bg-cover relative overflow-hidden rounded",children:[e.jsx("img",{src:`./images/${l.image}.jpg`,className:"w-full h-full object-cover",alt:""}),e.jsx("div",{className:"absolute w-full h-full linearbg top-0 ",children:e.jsxs("div",{className:"absolute top-[45%] md:top-[20%] left-[5%] flex flex-col gap-2",children:[e.jsx("h1",{className:"xl:text-4xl truncate names capitalize font-sans sm:text-2xl text-xl font-bold",children:l.name}),e.jsx(y,{movie:l}),e.jsxs("div",{className:" flex items-center gap-4 mt-4",children:[e.jsx(n,{className:"bg-subMain hover:text-main transi hover:bg-white text-white px-8 py-3 rounded font-medium names",to:`/stream/watch/${l.name}`,children:"watch"}),e.jsx("span",{className:"bg-white flex justify-center items-center hover:text-subMain transi text-white px-3 py-3 rounded bg-opacity-30 ",children:e.jsx(c,{})})]})]})})]},l.id))})})}),P=()=>{const a=d.filter(s=>s.popular==="true");return console.log("selected",a),e.jsxs("div",{children:[e.jsxs("div",{className:"flex w-full sm:gap-5 gap-4 items-center my-14",children:[e.jsx(p,{className:"sm-h-6  sm-w-6 h-4 w-4  text-subMain"}),e.jsx("h2",{className:"sm-text-xl text-lg font-bold",children:"Popular Movies"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4  w-full gap-8",children:a.map(s=>e.jsxs(n,{to:`/stream/movie/${s.id}`,className:"border h-64 border-border rounded bg-center bg-cover transi hover:scale-95 w-full relative",children:[e.jsx("img",{src:`./images/${s.image}.jpg`,loading:"lazy",className:"w-full h-full object-cover",alt:""}),e.jsxs("div",{className:"absolute flex  justify-between items-center left-0 bottom-0 bg-main2 w-full text-white px-4 py-3",children:[e.jsx("h3",{className:"font-semibold truncate",children:s.name}),e.jsx("button",{className:"h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white ",children:e.jsx(c,{})})]})]},`${s.id}`))})]})},S=()=>e.jsx("div",{className:"w-full my-20 py-10 md:px-[3.4rem] px-2 bg-dry",children:e.jsxs("div",{className:"md:grid md:grid-cols-2 md:gap-10  items-center",children:[e.jsxs("div",{className:"flex lg:gap-10 gap-6 flex-col    ",children:[e.jsx("h1",{className:"xl-text-3xl text-xl capitalize font-sans font-medium xl:leading-loose",children:"Download Movies & Watch Offline On Mobile"}),e.jsx("p",{className:"text-text text-sm  xl:text-base leading-6 xl:leading-8",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in laudantium culpa corporis nostrum laboriosam vitae consectetur nisi dicta totam? Lorem ipsum dolor sit amet consectetur, adipisicing elit."}),e.jsxs("div",{className:"flex gap-4 md:text-lg text-sm",children:[e.jsx("div",{className:"flex-col bg-black text-subMain px-5 py-3 rounded-md font-bold",children:"HD 4K"}),e.jsxs("div",{className:" flexRow gap-4 bg-black text-subMain px-5 py-3 rounded-md font-bold",children:[e.jsx(b,{})," 2K"]})]})]}),e.jsx("div",{className:" bg-center bg-cover rounded md:my-0 my-8 w-full h-96 ",style:{backgroundImage:"url('./images/phone2.jpg')"}})]})}),k=()=>{const[a,s]=i.useState(null),[r,l]=i.useState(null),o="hover:bg-dry transi text-sm rounded w-8 h-8 flex flex-col justify-center items-center bg-subMain text-white";return i.memo(()=>e.jsx(f,{})),e.jsxs("div",{className:"my-16",children:[e.jsxs("div",{className:"flex font-bold gap-4 my-6 items-center ",children:[e.jsx(j,{className:"text-subMain"}),e.jsx("p",{className:" font bold",children:"Top Rated"})]}),e.jsxs("div",{children:[e.jsx(x,{navigation:{nextEl:a,prevEl:r},slidesPerView:4,spaceBetween:40,autoplay:!0,speed:1e3,modules:[M,m],breakpoints:{0:{slidesPerView:1},400:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4},1280:{slidesPerView:5,spaceBetween:30}},children:d.map(t=>e.jsx(u,{children:e.jsxs("div",{className:" h-rate border border-border bg-cover bg-center",children:[e.jsx("img",{src:`./images/${t.image}.jpg`,loading:"lazy",className:"w-full h-full object-cover ",alt:""}),e.jsx("div",{className:" gap-6 hovered   absolute bg-blacktrans h-full w-full   left-0 right-0 bottom-0",children:e.jsxs("div",{className:"w-full hovers  bg-black bg-opacity-60 object-cover  flex flex-col relative justify-center gap-5 items-center h-full",children:[e.jsx("button",{className:"w-12 h-12 flex  justify-center items-center transi hover:bg-subMain rounded-full bg-white bg-opacity-30  text-white",children:e.jsx(c,{})}),e.jsx(n,{to:`/movie/${t.name}`,className:" text-center font-semibold text-xl line-clamp-2",children:t.name}),e.jsx("div",{className:"flex  gap-2 text-star ",children:e.jsx(B,{value:t.rating})})]})})]})},t.id))}),e.jsxs("div",{className:"w-full px-1 flex gap-6 pt-12  justify-center",children:[e.jsx("button",{className:o,ref:t=>l(t),children:e.jsx(v,{})}),e.jsx("button",{className:o,ref:t=>s(t),children:e.jsx(w,{})})]})]})]})},$=()=>e.jsx("div",{children:e.jsx(N,{children:e.jsxs("div",{className:"min-h-screen px-5 ",children:[e.jsx(F,{}),e.jsx(P,{}),e.jsx(S,{}),e.jsx(k,{})]})})});export{$ as default};
