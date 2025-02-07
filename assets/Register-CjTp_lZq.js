import{r as s,M as F,N as D,j as e,g as M,O as V,Q as r,U as A,T as k,L as T}from"./index-BFQgPk2Y.js";const $=()=>{const{setInputVal:t,handleFileUploaded:C}=s.useContext(F),[p,x]=s.useState(""),[g,f]=s.useState(""),[h,b]=s.useState(""),[i,j]=s.useState([]),[L,w]=s.useState(null),[v,N]=s.useState(""),[y,S]=s.useState(""),[d,l]=s.useState(),[E,I]=s.useState(""),R=D(),{issLoading:P,setIsLoading:o,Alert:c}=s.useContext(F),U=async m=>{m.preventDefault(),o(!0),I("Creating User...");const a=new FormData;a.append("name",v),a.append("email",p),a.append("phone",y),a.append("password",g),a.append("confirmpassword",h),a.append("image",i);try{const n=await fetch("http://localhost:5000/api/register",{method:"POST",body:a}),u=await n.json();if(!n.ok){console.error("Server error:",u.message),l(c(!1,u.message)),o(!1);return}l(c(!0,u.message)),o(!1),setTimeout(()=>{R("/stream/login")},3e3),N(""),x(""),S(""),f(""),b(""),w(null),j([])}catch(n){console.error("Error during registration:",n),l(c(!1,"An unexpected error occurred. Please try again.")),o(!1)}finally{setTimeout(()=>{l(null)},2e3)}};return e.jsx(M,{children:e.jsxs("div",{className:"mx-auto relative  my-4 flexCol",children:[e.jsx("div",{className:` ${d?"Animate":"hidden"} fixed Alert  left-0 w-full z-40 flex justify-center items-center `,children:e.jsx("div",{className:" bg-text text-dry w-1/2 rounded-md border-[3px] border-subMain flex justify-center items-center p-4",children:d&&e.jsx("p",{children:d})})}),e.jsx("div",{className:`${P?"":"hidden"} absolute top-0 left-0 w-full h-full flex justify-center  bg-modal z-40`,children:P&&e.jsxs("div",{className:" fixed top-[200px] h-24 w-1/2 rounded-md border-border text-white  flex flex-col justify-center items-center ",children:[e.jsx(V,{className:"h-10 w-10 animate-spin"}),e.jsx("p",{className:"font-semibold w-full text-center",children:E}),e.jsx("p",{className:"font-semibold",children:"this will take about two minutes"})]})}),e.jsxs("div",{className:"p-4  md:w-[70%] lg:w-[40%] bg-dry  rounded-lg flexCol justify-center items-center border-2 border-border  ",children:[e.jsx("div",{className:"rounded-full login_logo",children:e.jsx("img",{src:"https://res.cloudinary.com/dtjgj2odu/image/upload/v1734517937/StreamLogo_ao5f75.png",alt:"logo",className:" w-32 h-32 object-contain"})}),e.jsxs("form",{className:"flex flexCol gap-5 w-full",children:[e.jsx(r,{label:"Full Name",placeholder:"John Doe",type:"text",setter:N,mainVal:v,labelFor:"name",setInputVal:t,indicator:"Full Name",bg:!0}),e.jsx(r,{label:"Email",placeholder:"Streamview@gmail.com",type:"email",setter:x,setInputVal:t,mainVal:p,bg:!0,labelFor:"email",indicator:"Email"}),e.jsx(r,{label:"Phone",placeholder:"Optional",type:"text",setter:S,setInputVal:t,mainVal:y,bg:!0,labelFor:"phone",indicator:"Phone"}),e.jsx(r,{label:"Password",placeholder:"********",type:"password",setter:f,setInputVal:t,mainVal:g,bg:!0,labelFor:"password",indicator:"Password"}),e.jsx(r,{label:"Confirm Password",placeholder:"********",type:"password",setter:b,setInputVal:t,mainVal:h,bg:!0,labelFor:"confirmpassword",indicator:"Confirm Password"}),e.jsx("div",{className:"",children:e.jsx(A,{onFileUploaded:C,prviewSetter:w,MainImageSetter:j,For:"image"})}),e.jsx("div",{className:" w-full  relative col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-default ",children:e.jsx("div",{className:"flex gap-4 flex-wrap",children:i.path?e.jsx("div",{className:"w-32 h-32 p-2 bg-main border border-border rounded flex items-center justify-center",children:e.jsx("img",{src:L,alt:`Uploaded Preview ${i}`,className:"object-cover w-full h-full rounded"})}):e.jsx("p",{className:"text-sm text-gray-500 p-4 rounded-md border border-border bg-main",children:"No images added"})})}),e.jsxs("button",{onClick:m=>U(m),className:"bg-subMain transi hover:bg-main flexRow gap-4 text-white p-4 rounded-lg w-full ",children:[e.jsx(k,{})," Signup"]}),e.jsxs("p",{className:"text-center text-border",children:["Already have an account?",e.jsxs(T,{to:"/stream/login",className:"text-dryGray transi hover:text-subMain font-semibold",children:[" ","Login"]})]})]})]})]})})};export{$ as default};
