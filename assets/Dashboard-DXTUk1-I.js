import{r as l,M as g,j as e,T as I,H as j,L as B,y as q,G as P,P as L,z as Z}from"./index-BUubdq5t.js";import{I as m}from"./Input-BIASA0bj.js";import{U as w}from"./Uploader-KtuS0N1F.js";import{C as J,L as _}from"./Layout-kxsvp5lV.js";import{T as K,U as Q}from"./Users-BSBE4nTW.js";import{S as W}from"./SelectRating-0cYIrrQB.js";import"./index-CZWDMsYe.js";const X=()=>{const{HandleActiveChange:s,isActive:i,slideLinks:t,User:d}=l.useContext(g),c=t.filter(a=>a.user==="All");return e.jsx("div",{className:"sidebar  mx-auto  bg",children:e.jsx("div",{className:"relative  ",children:e.jsx("div",{className:"flexCol justify-start  w-full items-start md:py-6 py-12 sticky top-0 bg-dry border border-gray-800 rounded-md px-4 ",children:d.role==="Admin"?e.jsx(e.Fragment,{children:t.map((a,o)=>e.jsxs("div",{onClick:x=>s(a.name,x),className:` ${i===a.name?"bg-dryGray text-subMain hover:text-subMain hover:bg-dryGray":"text-white"}  flex justify-start items-center w-full p-3 gap-4  hover:bg-main rounded-md  transi cursor-pointer`,children:[a.icon,e.jsx("p",{children:a.name})]},o))}):e.jsx(e.Fragment,{children:c.map((a,o)=>e.jsxs("div",{onClick:x=>s(a.name,x),className:` ${i===a.name?"bg-dryGray text-subMain hover:text-subMain hover:bg-dryGray":"text-white"}  flex justify-start items-center w-full p-3 gap-4  hover:bg-main rounded-md  transi cursor-pointer`,children:[a.icon,e.jsx("p",{children:a.name})]},o))})})})})},ee=()=>{const{setInputVal:s,handleFileUploaded:i}=l.useContext(g),[t,d]=l.useState([]),[c,a]=l.useState(""),[o,x]=l.useState(""),[b,u]=l.useState("");return e.jsx("div",{className:" w-full rounded-md ",children:e.jsxs("div",{className:" p-4 flex flex-col gap-6 text-white bg-dry border border-gray-800 rounded-md",children:[e.jsx("p",{className:"text-xl font-bold",children:"Profile"}),e.jsx(w,{onFileUploaded:i,prviewSetter:d,MainImageSetter:a,For:"image"}),e.jsx("div",{className:" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center ",children:e.jsx("div",{className:"flex gap-4 flex-wrap",children:c.length>0?c.map((p,N)=>e.jsx("div",{className:"w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center",children:e.jsx("img",{src:t,alt:`Uploaded Preview ${t}`,className:"object-cover w-full h-full rounded"})},N)):e.jsx("p",{className:"text-sm text-gray-500 p-4 rounded-md border border-border bg-main",children:"No images selected"})})}),e.jsx(m,{label:"Full Name",placeholder:"John Doe",type:"text",setter:x,setInputVal:s,mainVal:o}),e.jsx(m,{label:"Email",placeholder:"Streamview@gmail.com",type:"email",setter:u,setInputVal:s,mainVal:b}),e.jsxs("div",{className:"flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center",children:[e.jsx("button",{className:"bg-subMain font-medium transi hover:bg-main  gap-4 text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto ",children:"Delete Account"}),e.jsx("button",{className:"bg-main font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto ",children:"Update Profile"})]})]})})},se=()=>{const{setInputVal:s}=l.useContext(g),[i,t]=l.useState(""),[d,c]=l.useState(""),[a,o]=l.useState("");return e.jsxs("div",{className:" p-4 flex flex-col gap-6 text-white bg-dry ",children:[e.jsx("p",{className:"text-xl font-bold",children:"Change Password"}),e.jsx(m,{label:"Previous Password",placeholder:"******",type:"password",setInputVal:s,setter:t,mainVal:i}),e.jsx(m,{label:"New Password",placeholder:"******",type:"password",setInputVal:s,setter:c,mainVal:d}),e.jsx(m,{label:"Confirm Password",placeholder:"******",type:"password",setInputVal:s,setter:o,mainVal:a}),e.jsx("div",{className:"flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-start items-center",children:e.jsx("button",{className:"bg-main font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded-lg w-full sm:w-auto ",children:"Change Password"})})]})},le=()=>{const{Movies:s,User:i}=l.useContext(g),t=s.slice(0,10);return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex justify-between items-center p-0 md:p-4 ",children:[e.jsx("h2",{className:"md:text-xl text-lg text-white  font-bold",children:"Favourite Movies"}),e.jsx("button",{className:"bg-dry font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded ",children:"Delete All"})]}),e.jsx(I,{data:t,User:i})]})},te=()=>{const{Movies:s,User:i}=l.useContext(g),t=s.slice(0,10);return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex justify-between items-center p-0 md:p-4 ",children:[e.jsx("h2",{className:"md:text-xl text-lg text-white  font-bold",children:"Movie Lists"}),e.jsx("button",{className:"bg-dry font-medium transi hover:bg-subMain  gap-4 text-white border border-subMain py-3 px-6 rounded ",children:"Delete All"})]}),e.jsx(I,{data:t,User:i})]})},ae=()=>{const{setModalDisplay:s,currentModal:i,setCurrentModal:t,CategoryData:d}=l.useContext(g),c=d.filter(o=>o.display==="show"),a=[{id:1,title:"Id"},{id:2,title:"Date"},{id:3,title:"Tittle"},{id:3,title:"Actions"}];return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex justify-between items-center p-0 md:p-4 ",children:[e.jsx("h2",{className:"md:text-xl text-lg text-white  font-bold",children:"Categories"}),e.jsxs("button",{onClick:()=>{s(o=>!o),t("Add"),console.log(i)},className:"bg-main font-medium flexRow transi hover:bg-main  gap-4 text-text hover:text-green-500 border border-subMain hover:border-green-500 py-2 px-4 rounded ",children:[e.jsx(j,{})," Create"]})]}),e.jsx(K,{data:c,headList:a,For:"category"})]})},re=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flexCol w-full h-[100vh] text-white bg-main bg-center",children:[e.jsx("img",{className:"w-full h-full object-cover",src:"https://res.cloudinary.com/dtjgj2odu/image/upload/v1735808522/errorPage3_mc0z9z.jpg",alt:"Not Found"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col gap-8 bg-transb items-center justify-center md:py-20 py-10",children:[e.jsxs("div",{className:"w-full flexCol gap-3",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"🤖Opps!"}),e.jsx("h1",{className:"text-4xl font-bold",children:"Not a User"})]}),e.jsx("p",{className:" px-44 text-center text-lg text-text italic",children:"You have to be a user to gain acces to your own dashboard at this address or page. Navigate to the Signup page below and signup to gain acces to your Dashboard"}),e.jsxs(B,{to:"/stream/register",className:"bg-subMain text-white flexRow gap-3 font-medium py-2 px-4 rounded-md hover:bg-dry transi hover:text-gray-500",children:[e.jsx(q,{})," Signup"]})]})]})});function ie(s){return P({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z",fill:"currentColor"},child:[]}]})(s)}function de(s){return P({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"},child:[]}]})(s)}const oe=()=>{const{CategoryData:s,handleFileUploaded:i,handleFileUploadedVideo:t,setInputVal:d}=l.useContext(g);let c="video";const[a,o]=l.useState(""),[x,b]=l.useState([]);l.useState([]);const[u,p]=l.useState([]),[N,F]=l.useState([]),A=s.filter(r=>r.display==="show"),[f,D]=l.useState([]),[y,C]=l.useState(""),[M,U]=l.useState(""),[h,R]=l.useState(""),[V,T]=l.useState(""),[E,$]=l.useState(""),[k,z]=l.useState(""),[O,G]=l.useState(""),H=(r,n,S)=>{if(!r||!n||!S){console.error("All fields (name, role, imageurl) are required.");return}if(typeof r!="string"||typeof n!="string"){console.error("All fields must be strings.");return}if(f.some(v=>v.name===r&&v.role===n)){console.warn("This cast already exists.");return}const Y={name:r,role:n,imageurl:S};D(v=>[...v,Y]),C(""),U(""),o([])};return l.useEffect(()=>{console.log("imagUrl",a)},[a]),l.useEffect(()=>{console.log("MovieimagUrl",h)},[h]),l.useEffect(()=>{console.log("Casts",f)},[f]),e.jsxs("div",{className:"flex flex-col gap-28",children:[e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx("h2",{className:"text-2xl font-bold ",children:"Add Movie"}),e.jsxs("form",{className:"flex flex-col gap-6 text-left",action:"",children:[e.jsxs("div",{className:"w-full grid md:grid-cols-2 gap-6",children:[e.jsx(m,{label:"Movie Title",placeholder:"Avengers",type:"text",bg:!0,setter:T,setInputVal:d,mainVal:V}),e.jsx(m,{label:"Hours",placeholder:"2hr 20min",type:"text",bg:!0,setter:$,setInputVal:d,mainVal:E})]}),e.jsxs("div",{className:"w-full grid md:grid-cols-2 gap-6",children:[e.jsx(m,{label:"Language Used",placeholder:"English",type:"text",bg:!0,setter:z,setInputVal:d,mainVal:k}),e.jsx(m,{label:"Year Released",placeholder:"2022",type:"number",bg:!0,setter:G,setInputVal:d,mainVal:O})]}),e.jsxs("div",{className:"w-full grid md:grid-cols-2 gap-6 ",children:[e.jsxs("div",{className:"flex flex-col gap-2 w-full col-span-2 md:col-span-1 ",children:[e.jsx("p",{className:"text-border font-semibold text-sm ",children:"Movie Image"}),e.jsx(w,{onFileUploaded:i,prviewSetter:p,MainImageSetter:R,For:"image"}),e.jsx("div",{className:" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-default ",children:e.jsx("div",{className:"flex gap-4 flex-wrap",children:h.length>0?h.map((r,n)=>e.jsx("div",{className:"w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center",children:e.jsx("img",{src:u,alt:`Uploaded Preview ${n+1}`,className:"object-cover w-full h-full rounded"})},n)):e.jsx("p",{className:"text-sm text-gray-500 p-4 rounded-md border border-border bg-main",children:"No images selected"})})})]}),e.jsxs("div",{className:"flex flex-col  gap-2 w-full col-span-2 md:col-span-1 ",children:[e.jsx("p",{className:"text-border font-semibold text-sm ",children:"Movie Video"}),h.length>0?e.jsx(w,{onFileUploaded:t,prviewSetter:b,For:c}):e.jsx("div",{className:"w-full col-span-2 md:col-span-1 flex flex-col justify-center items-center bg-main border-border border-2 h-[178.5px] border-dashed rounded-md",children:e.jsxs("div",{className:" animate-pulse",children:[e.jsx("p",{className:"w-full p-8  text-lg text-text  text-center",children:"This Feild will only be active after adding Movie Image"}),e.jsx("span",{className:" flex justify-center items-center  rounded-full ",children:e.jsx(de,{className:"w-10 h-10"})})]})}),e.jsx("div",{className:" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-default ",children:e.jsx("div",{className:"flex gap-4 flex-wrap",children:x.length>0?h.map((r,n)=>e.jsx("div",{className:"w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center",children:e.jsx("img",{src:u,alt:`Uploaded Preview ${n+1}`,className:"object-cover w-full h-full rounded"})},n)):e.jsx("p",{className:"text-sm text-gray-500 p-4 rounded-md border border-border bg-main",children:"No video selected"})})})]})]}),e.jsx("div",{children:e.jsxs("div",{className:"w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start ",children:[e.jsxs("div",{className:"w-full col-span-2 md:col-span-1",children:[e.jsx("label",{className:"text-border font-semibold",children:"Movie Description"}),e.jsx("textarea",{className:"w-full h-44 mt-2 p-6 bg-main border border-border rounded",placeholder:"Make it short and honest....",name:"",id:""})]}),e.jsxs("div",{className:"w-full relative text-sm mt-6",children:[e.jsx(W,{data:A}),e.jsx("div",{className:"absolute top-[47%] cursor-pointer right-4 flex items-center  transform pointer-events-auto",children:e.jsx(J,{className:"text-white h-4 w-4 "})})]})]})}),e.jsxs("button",{onClick:r=>{r.preventDefault()},className:"md:w-1/2 w-full  font-semibold flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main",children:[e.jsx(j,{className:"pikin h-7 w-7"})," Add"]})]})]}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx("h2",{className:"text-2xl font-bold ",children:"Add Casts"}),e.jsxs("form",{className:"flex flex-col gap-8 text-left",action:"",children:[e.jsxs("div",{className:"w-full grid md:grid-cols-2 gap-6",children:[e.jsx(m,{label:"Full Name",placeholder:"Name",type:"text",bg:!0,setter:C,setInputVal:d,mainVal:y}),e.jsx(m,{label:"Role",placeholder:"Movie role",type:"text",bg:!0,setter:U,setInputVal:d,mainVal:M})]}),e.jsx("div",{className:"w-full grid md:grid-cols-1 gap-6 ",children:e.jsxs("div",{className:"flex flex-col gap-2 w-full col-span-2 md:col-span-1 ",children:[e.jsx("p",{className:"text-border font-semibold text-sm ",children:"Movie Images"}),e.jsx(w,{onFileUploaded:i,For:"image",prviewSetter:F,MainImageSetter:o})]})}),e.jsxs("div",{className:" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-start cursor-default ",children:[e.jsx("div",{className:"flex gap-4 flex-wrap",children:a.length>0?a.map((r,n)=>e.jsx("div",{className:"w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center",children:e.jsx("img",{src:N,alt:`Uploaded Preview ${n+1}`,className:"object-cover w-full h-full rounded"})},n)):e.jsx("p",{className:"text-sm text-gray-500 p-4 rounded-md border border-border bg-main",children:"No images selected"})}),e.jsx("div",{className:"bg-main w-full border-2 border-border col-span-2 border-dashed rounded-md p-2 ",children:f.length>0?e.jsx("div",{className:` ${f.length>0?"grid   grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 items-center p-2":" flex justify-start items-center"} w-full `,children:f.map((r,n)=>e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:" p-2 bg-main border border-border rounded ",children:e.jsx("img",{src:r.imageurl.length>0?URL.createObjectURL(r.imageurl[0]):"",alt:`${r.name}'s Image`,className:"w-32 h-32 object-cover rounded"})}),e.jsx("p",{children:r.name})]},n))}):e.jsx("div",{className:"w-full flex justify-center items-center  ",children:e.jsx("p",{className:"text-text w-full text-center",children:"No cast added"})})})]}),e.jsxs("div",{className:"w-full flex justify-center gap-6",children:[e.jsxs("button",{onClick:r=>{r.preventDefault()},className:"md:w-1/2 w-full  font-semibold flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main",children:[e.jsx(j,{className:"pikin h-7 w-7"})," Add"]}),e.jsxs("span",{onClick:r=>{r.preventDefault(),H(y,M,a)},className:"md:w-1/2 w-full  font-semibold flexRow py-3  rounded border-2 gap-2 Ogaa cursor-pointer transi  border-subMain bg-main text-white hover:bg-subMain",children:[e.jsx(j,{className:"pikin h-7 w-7"})," Add Cast"]})]})]})]})]})},fe=()=>{const{isActive:s,display:i,setDisplay:t,User:d,currentModal:c,setCurrentModal:a,ModalDisplay:o,setModalDisplay:x,UpdatedTite:b}=l.useContext(g);return l.useEffect(()=>{t(s==="Update Profile"?e.jsx(ee,{}):s==="Favourite Movies"?e.jsx(le,{}):s==="Change Password"?e.jsx(se,{}):s==="Notifications"?e.jsx("div",{children:" Notifications"}):s==="Users"?e.jsx(Q,{}):s==="Categories"?e.jsx(ae,{}):s==="Add Movie"?e.jsx(oe,{}):s==="Movies List"?e.jsx(te,{}):s==="Dashboard"?e.jsx(L,{}):e.jsx(L,{}))},[s]),e.jsx(_,{children:d?e.jsxs("div",{className:"flex lg:flex-row flex-col min-h-screen bg-main cursor-pointer relative py-3 px-5 gap-10 md:gap-8 lg:px-10 ",children:[e.jsxs("div",{className:`absolute top-0 left-0 w-full ${o?"":"hidden"}  z-20 h-full bg-modal flex flex-col justify-start items-center gap-5  p-4 `,children:[e.jsx("div",{className:"flex justify-end items-center w-full md:w-1/2 ",children:e.jsx("span",{onClick:()=>x(u=>!u),className:"rounded-full border-2 border-subMain hover:text-subMain text-white transi hover:border-white hover:rotate-180 ",children:e.jsx(Z,{className:"h-12 w-12"})})}),e.jsxs("div",{className:" w-full md:w-1/2  rounded-lg border border-border flexCol  gap-10 p-6 bg-dry",children:[c==="Add"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-2xl font-bold ",children:"Create Category"}),e.jsxs("form",{className:"flex flex-col gap-6 text-left",action:"",children:[e.jsx(m,{label:"Category Name",placeholder:"Add category name",type:"text"}),e.jsxs("button",{onClick:u=>{u.preventDefault(),a("Add"),x(p=>!p)},className:"w-full font-semibold  flexRow py-3 rounded border-2 gap-3 Oga cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main",children:[e.jsx(j,{className:"pikin h-7 w-7"})," Add"]})]})]}):"",c==="Edit"?e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-2xl font-bold ",children:"Update Category"}),e.jsxs("form",{className:"flex flex-col gap-6 text-left",action:"",children:[e.jsx(m,{label:"Category Name",placeholder:`${b}`,type:"text"}),e.jsxs("button",{onClick:u=>{u.preventDefault(),a("Add"),x(p=>!p),console.log(c)},className:"w-full font-semibold transi Oga  flexRow py-3 rounded border-2 gap-3 cursor-pointer transi border-subMain bg-subMain text-white hover:bg-main",children:[e.jsx(ie,{className:"pikin"})," Update"]})]})]}):""]})]}),e.jsx("div",{className:" w-full lg:w-[25%] relative rounded-md ",children:e.jsx(X,{})}),e.jsx("div",{className:" w-full lg:w-[75%] bg-dry  rounded-md border border-gray-800 rightbar p-4",children:i})]}):e.jsx(re,{})})};export{fe as default};
