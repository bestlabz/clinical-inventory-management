import{a as j,r as d,d as f,h as m,j as e,l as b,T as a}from"./index-DXCadrFQ.js";import{P as g,O as N,S as v}from"./OTPResponsive1-G-al5HR8.js";import{R as _}from"./ResponsiveSuccessmodal-B_6b-9MN.js";import"./Layout-OzvLW8TI.js";const S=()=>{const l=j(),[t,r]=d.useState(1),[s,i]=d.useState(""),[u,c]=d.useState(!1),[n,p]=d.useState(""),{userDetails:h}=f(o=>o.userinfo);return d.useEffect(()=>{t===3&&(c(!0),setTimeout(()=>{c(!1),p(""),i(""),r(1)},3e3))},[t]),{goBack:()=>{l(-1)},step:t,next:async()=>{if(t===1){const{success:o}=await m.post("/sendotp/doctor",{mobile_number:n,clinicId:h._id});if(o)return r(x=>x+1)}if(t===2){const{success:o}=await m.post("/verifyotp/doctor",{mobile_number:n,otp:s});if(o)return r(x=>x+1)}},pre:()=>{t!==1&&r(o=>o-1)},setOTP:i,otp:s,modalPopup:u,setValue:p,value:n}},F=()=>{const{goBack:l,next:t,pre:r,step:s,otp:i,setOTP:u,modalPopup:c,setValue:n,value:p}=S();return e.jsxs("div",{style:{boxShadow:"0 5px 9px -8px rgba(0, 0, 0, .9), 0 2px 9px -3px rgba(0, 0, 0, .9)"},className:"add-doctor-container",children:[e.jsxs("div",{className:"add-doctor-top",children:[e.jsx(b,{size:20,onClick:()=>s===1?l():r(),className:" cursor-pointer"}),e.jsx("p",{className:"add-doctor-top-title",children:a.add_doctor.navigate_content})]}),e.jsxs("div",{className:"add-doctor-content",children:[s===1&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"add-doctor-content-header",children:a.add_doctor.step1.title}),e.jsx(g,{setValue:n,value:p}),e.jsx("button",{onClick:t,className:"add-doctor-content-phonenumber",children:a.add_doctor.step1.button})]}),s===2&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"add-doctor-content-header",children:a.add_doctor.step2.title}),e.jsx("p",{className:" text-gray-500",children:a.add_doctor.step2.subtext}),e.jsx(N,{otp:i,setOTP:u}),e.jsxs("p",{className:" flex items-center gap-3 cursor-pointer",children:[" ",e.jsx(v,{})," ",a.add_doctor.step2.resend_text]}),e.jsx("button",{onClick:t,className:"add-doctor-content-phonenumber",children:a.add_doctor.step2.button})]}),s===3&&e.jsx(e.Fragment,{children:c&&e.jsx(e.Fragment,{children:e.jsx(_,{modalPopup:c})})})]})]})};export{F as default};