import{u as I,j as e,p as F,L as k,q as $,s as U,r,M as C,t as B,d as P,e as E,c as O,S as D,C as L,v as V,f as H,g as R,B as T,F as q,w as z,x as A,y as J,z as G,A as _}from"./index-B6ogmQX_.js";import{F as W,S as K,A as X,N as Y,a as Q,b as M}from"./Star-Bk4A2FB9.js";import"./index-C5kxFXxo.js";const Z=({movie:s,setShareOpen:n,url:v})=>{const d=JSON.parse(localStorage.getItem("userInfo")),m=I(),f=o=>{o.preventDefault(),d.subscription!=="SUBSCRIBED"?n(b=>!b):m(`/stream/watch/${s.name}`)};return e.jsx(e.Fragment,{children:e.jsx("div",{loading:"lazy",className:"bg-center w-full md:min-h-screen  bg-cover  overflow-hidden rounded ",style:{backgroundImage:`url('${s==null?void 0:s.image}.jpg')`},children:e.jsxs("div",{className:"bg-main3  w-full flexCol ",children:[e.jsx("p",{className:"xl:text-4xl text-white capitalize font-sans mt-12 text-2xl font-bold italic  md:text-center",children:s==null?void 0:s.name}),e.jsxs("div",{className:"w-full mx-auto px-3  xl:px-5 lg:grid grid-cols-3   flexCol gap-14  py-6 lg:py-4 xl:gap-6 ",children:[e.jsx("div",{className:"xl:col-span-1 flex justify-center lg:justify-start items-start w-full  h-full",children:e.jsx("div",{style:{backgroundImage:`url('${s==null?void 0:s.image}')`},className:" w-[80%] h-head bg-dry border border-dry rounded-lg bg-cover bg-center"})}),e.jsxs("div",{className:"col-span-2  py-2  lg:grid grid-cols-5  flex flex-col gap-8   justify-center  items-center ",children:[e.jsxs("div",{className:"col-span-4 md:col-span-5 lg:col-span-4 flex flex-col gap-4 md:gap-8 justify-center items-center   ",children:[e.jsx("div",{className:"w-full rounded border-[3px] border-main h-[250px] md:h-[340px]  ",children:e.jsx("iframe",{width:"100%",height:"100%",src:`${s==null?void 0:s.trailer}`,title:s==null?void 0:s.name,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),e.jsxs("div",{className:"flex justify-start items-center gap-2  font-medium ",children:[e.jsx("div",{className:"flexCol bg-subMain text-white text-xs p-1",children:"HD 4K"}),e.jsx(W,{movie:s&&s})]}),e.jsx("div",{className:"px-4",children:e.jsx("p",{className:"text-white text-sm",children:s==null?void 0:s.description})}),e.jsxs("div",{className:"grid sm:grid-cols-5 grid-col-2 gap-4 p-5 bg-main border border-gray-800 rounded-lg relative",children:[e.jsx("button",{className:"flexCol p-1 border-r border-border gap-2 ",children:e.jsx("span",{onClick:()=>n(o=>!o),className:"p-2 bg-border rounded-md",children:e.jsx(F,{className:"text-white"})})}),e.jsx("div",{className:"col-span-2 flexCol font-medium text-sm",children:e.jsxs("p",{children:["Languge: ",""," ",e.jsx("span",{className:"ml2 truncate",children:s==null?void 0:s.language})]})}),e.jsx("div",{className:"sm:col-span-2 col-span-3 flex justify-end font-medium text-sm",children:e.jsxs(k,{to:`${d&&d.subscription==="SUBSCRIBED"?`/stream/watch/${s.name}`:""}`,onClick:o=>f(o),className:"bg-dry hover:text-main transi hover:bg-subMain   transi border-2 border-subMain text-white px-8 py-3  font-medium names rounded-full flexRow gap-4 w-full sm:py-3 ",children:[e.jsx($,{className:"w-3 h-3"})," watch"]})})]})]}),e.jsx("div",{className:"  w-full  flex justify-end grid-cols-1  ",children:e.jsx("button",{className:" lg:w-1/2 w-full relative flexCol bg-subMain   hover:bg-transparent border-2 border-subMain transi lg:h-64 h-16 rounded font-medium",children:e.jsxs("div",{className:"flexRow gap-6 text-md  uppercase tracking-widest absolute lg:rotate-90",children:["Download ",e.jsx(U,{className:"h-6 w-6  lg:-rotate-90"})]})})})]})]})]})})})},ee=({movieId:s})=>{const[n,v]=r.useState(null),[d,m]=r.useState(null),{Casts:f}=r.useContext(C),o="hover:bg-dry transi text-sm rounded w-8 h-8 flex flex-col justify-center items-center bg-subMain text-white",b=f.filter(l=>l.movieId===parseInt(s));return e.jsxs("div",{className:"px-3 w-full",children:[e.jsxs("div",{className:"flex items-center gap-8 md:gap-4",children:[e.jsx(B,{className:"w-6 h-6 md:w-4 md:h-4 text-subMain"}),e.jsx("h2",{className:"sm:text-xl font-bold text-lg",children:"Cast"})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx(K,{navigation:{nextEl:n,prevEl:d},slidesPerView:4,spaceBetween:40,autoplay:!0,speed:1e3,modules:[X,Y],loop:!0,breakpoints:{0:{slidesPerView:1},400:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4},1280:{slidesPerView:5,spaceBetween:30}},children:b.map(l=>e.jsx(Q,{className:"w-full p-4 ",children:e.jsxs("div",{className:"flexCol gap-2  italic w-[100%] text-xs text-text rounded bg-dry border pb-2 ",children:[e.jsx("div",{className:"h-[300px] md:h-[250px] border-gray-800 w-full  bg-cover bg-center",children:e.jsx("img",{className:"h-full w-full object-cover",src:`../castImages/${l.image}.jpg`,alt:""})}),e.jsx("p",{children:l.name}),e.jsxs("p",{children:["Role : ",l.role]})]})},l.id))}),e.jsxs("div",{className:"w-full px-1 flex gap-6 pt-12 justify-center",children:[e.jsx("button",{className:o,ref:l=>m(l),children:e.jsx(P,{})}),e.jsx("button",{className:o,ref:l=>v(l),children:e.jsx(E,{})})]})]})]})},se=({movie:s})=>{const{HandleGetMovies:n,FetchedMovies:v,setRatings:d}=r.useContext(C),[m,f]=r.useState(null),[o,b]=r.useState(""),[l,j]=r.useState([]),i=JSON.parse(localStorage.getItem("userInfo")),S=async a=>{a.preventDefault();const h=s&&s.id;console.log("movieId",h);const u=m&&Number(m);console.log("userRating",u);const c=o&&o;console.log("userReview",c);const y=i&&i.id;console.log("userId",y);const t=await fetch("http://localhost:5000/reviews",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:y,movieId:h,userRating:u,userReview:c})}),x=await t.json();t.ok||console.log(x),console.log(x),n()};r.useEffect(()=>{console.log(s),s&&j(s.movieReviews)},[s]),r.useEffect(()=>{console.log("StarUse",l)},[l]);const w=[{tittle:"0 - poor",value:0},{tittle:"1 - fair",value:1},{tittle:"2 - Good",value:2},{tittle:"3 - Verty - Good",value:3},{tittle:" 4 - Excellent",value:4},{tittle:"5 - Masterpiece",value:5}];return e.jsxs("div",{className:"my-12",children:[e.jsxs("div",{className:"flex items-center gap-8 md:gap-4",children:[e.jsx(O,{className:"w-6 h-6 md:w-4 md:h-4 text-subMain"}),e.jsx("h2",{className:"sm:text-xl font-bold text-lg",children:"Reviews"})]}),e.jsxs("div",{className:"mt-10 flexCol xl:grid  grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-4 sm:p-20 rounded",children:[e.jsxs("div",{className:"xl:col-span-2 w-full flex flex-col gap-8 write",children:[e.jsxs("p",{className:"text-xl text-text font-semibold",children:["Review ",s==null?void 0:s.name]}),e.jsx("p",{className:"text-sm leading-7 font-medium text-border",children:"Write a review for this movie. It will be Posted on this page. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat perspiciatis quisquam enim quibusdam ipsa sed, consequatur minima natus sapiente."}),e.jsxs("form",{className:"text-sm w-full",children:[e.jsxs("div",{className:"",children:[e.jsx("label",{className:"text-border font-semibold",children:"Select Rating"}),e.jsxs("div",{className:"relative ",children:[e.jsx(D,{data:w,setter:f,For:"movie"}),e.jsx("div",{className:"absolute top-[47%] cursor-pointer right-4 flex items-center  transform pointer-events-auto",children:e.jsx(L,{className:"text-white h-4 w-4 "})})]}),e.jsx("div",{className:"flex my-2  gap-2 text-star ",children:e.jsx(M,{value:m})})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"text-border font-semibold",children:"Message"}),e.jsx("textarea",{onChange:a=>b(a.target.value),className:"w-full h-40 mt-2 p-6 bg-main border border-border rounded",placeholder:"Make it short and honest....",name:"",id:""}),e.jsx("button",{onClick:a=>S(a),className:"bg-subMain text-white hover:bg-red-800 transi py-3 px-4 w-full flexCol rounded",children:"Submit"})]})]})]}),e.jsxs("div",{className:"col-span-3 flex flex-col gap-6",children:[e.jsx("p",{className:"text-xl text-text font-semibold",children:"Reviews (56)"}),e.jsx("div",{className:"w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-[550px] overflow-y-scroll ",children:l&&l.map((a,h)=>{var u,c;return e.jsxs("div",{className:"md:grid   flex flex-col w-full grid-cols-12 gap-5  bg-dry p-4 border border-x-gray-800  rounded-lg",children:[e.jsx("div",{className:"col-span-2 ",children:e.jsx("img",{className:"w-full  object-cover",src:`${(u=a==null?void 0:a.user)==null?void 0:u.image}`,alt:""})}),e.jsxs("div",{className:"col-span-7 flex flex-col gap-2",children:[e.jsx("p",{children:(c=a==null?void 0:a.user)==null?void 0:c.name}),e.jsx("p",{className:"text-xs leading-6 font-medium text-text",children:a==null?void 0:a.userReview})]}),e.jsx("div",{className:"col-span-3 flexRow  border-l border-border text-xs gap-1 text-star",children:e.jsxs("div",{className:"flex my-2  gap-2 text-star ",children:[console.log("use:",a==null?void 0:a.userRating),e.jsx(M,{value:a==null?void 0:a.userRating})]})})]},h)})})]})]})]})},re=()=>{const{id:s}=V(),n=JSON.parse(localStorage.getItem("userInfo")),{Casts:v,FetchedMovies:d,Alert:m,Result:f,setResult:o,setOrderId:b}=r.useContext(C),[l,j]=r.useState(!1),[i,S]=r.useState([]),[w,a]=r.useState([]),h=I(),u=async(t,x)=>{if(t.preventDefault(),n)if(n.subscription==="SUBSCRIBED"){console.log("User is already subscribed!"),o(m(!0,"You are lready subscribed!")),h("/stream/");return}else console.log("Please Sunscribe to enjoy our services");else{console.log("Not a user!"),h("/stream/login");return}const N=72443;try{const p=await fetch("http://localhost:5000/initiate_payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:x,plan_id:N})}),g=await p.json();p.ok||console.log("false",g),console.log("trueSub:",g),localStorage.setItem("orderId",g.orderId),window.location=g.payment_link}catch(p){console.log(p)}};r.useEffect(()=>{if(d){const t=d.find(x=>x.id===parseInt(s));if(t&&(S(t),d)){const x=d.filter(N=>{var p,g;return((p=N==null?void 0:N.category)==null?void 0:p.tittle)===((g=t==null?void 0:t.category)==null?void 0:g.tittle)});a(x)}}},[d]);let c;r.useEffect(()=>{c=`${window.location.protocol}//${window.location.host}/stream/movie/${i&&(i==null?void 0:i.id)}`},[i,w]);const y=[{path:`https://wa.me/?text=${encodeURIComponent(c)}`,icon:e.jsx(z,{className:"h-7 w-7"})},{path:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(c)}`,icon:e.jsx(A,{className:"h-7 w-7"})},{path:`https://twitter.com/intent/tweet?url=${encodeURIComponent(c)}`,icon:e.jsx(J,{className:"h-7 w-7"})},{path:`https://www.instagram.com/?url=${encodeURIComponent(c)}`,icon:e.jsx(G,{className:"h-7 w-7"})},{path:`https://www.tiktok.com/share?url=${encodeURIComponent(c)}`,icon:e.jsx(_,{className:"h-7 w-7"})}];return e.jsx("div",{children:e.jsxs(H,{children:[!n||!n.role?e.jsxs("div",{className:` ${l?"":"hidden"}  absolute  top-0 left-0 z-50   w-full h-full bg-main2 flex justify-center items-center `,children:[e.jsx("span",{onClick:()=>j(t=>!t),className:"rounded-full fixed top-[25%]  md:right-[25%] lg:right-[20%] right-[8%] border-2 h-14 w-14 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 flex justify-center items-center",children:e.jsx(R,{className:"h-12 w-12"})}),e.jsxs("div",{className:"  fixed top-[40%] flexCol gap-6  py-5 subscribe  px-4 bg-main rounded-md  justify-center  border border-border ",children:[e.jsx("div",{className:"w-1/2 flex justify-center item-center gap-2",children:e.jsx("h1",{className:"text-2xl font-bold",children:"🤖Opps!"})}),e.jsxs("p",{className:"font-semibold text-text subscribe",children:["Only a valid and subscribed user can stream live. Signup or login if you are already a user.",e.jsx("span",{className:"font-semibold text-text text-center",children:"Please subscribe to enjoy our services."})]}),e.jsx("button",{onClick:t=>u(t,n&&n.email),className:"bg-subMain2 text-white rounded-md border-2 border-subMain transi mt-3 hover:bg-main p-2 animate-bounce hover:animate-none ",children:n?"Subscribe":"Login"})]})]}):e.jsxs("div",{className:` ${l?"":"hidden"}  absolute  top-0 left-0 z-50   w-full h-full bg-main2 flex justify-center items-center `,children:[e.jsx("span",{onClick:()=>j(t=>!t),className:"rounded-full fixed top-[30%]  md:right-[25%] lg:right-[20%] right-[8%] border-2 h-14 w-14 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 flex justify-center items-center",children:e.jsx(R,{className:"h-12 w-12"})}),e.jsx("div",{className:"  fixed top-[40%]  py-10  px-4 bg-main rounded-md grid md:grid-cols-5 grid-cols-3 justify-center gap-8 md:gap-10 lg:gap-20 border border-border ",children:y.map((t,x)=>e.jsx("a",{href:t.path,className:"bg-border  p-2 rounded-md transi flex justify-center items-center hover:bg-white hover:text-border",children:t.icon},x))})]}),e.jsx(Z,{movie:i,setShareOpen:j,url:c}),e.jsxs("div",{className:"container mx-auto px-2 my-6 min-h-screen  ",children:[e.jsx(ee,{movieId:i==null?void 0:i.id}),e.jsx(se,{movie:i&&i}),e.jsxs("div",{className:"my-16",children:[e.jsxs("div",{className:"flex items-center gap-8 md:gap-4",children:[e.jsx(T,{className:"w-6 h-6 md:w-4 md:h-4 text-subMain"}),e.jsx("h2",{className:"sm:text-xl font-bold text-lg",children:"Related Movies"})]}),e.jsx("div",{className:"grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 gap-6",children:w&&w.map((t,x)=>e.jsx(k,{to:`/stream/movie/${t.id}`,className:"border h-64 border-border rounded bg-center bg-cover transi hover:scale-95 w-full relative",style:{backgroundImage:`url('${t.image}')`},children:e.jsxs("div",{className:"absolute flex  justify-between items-center left-0 bottom-0 bg-main2 w-full text-white px-4 py-3",children:[e.jsx("h3",{className:"font-semibold truncate",children:t==null?void 0:t.name}),e.jsx("button",{className:"h-8 w-8 text-sm flexCol transi hover:bg-transparent border-subMain bg-subMain2 border-2 rounded-md text-white ",children:e.jsx(q,{})})]})},`${t.id}`))})]})]})]})})};export{re as default};
