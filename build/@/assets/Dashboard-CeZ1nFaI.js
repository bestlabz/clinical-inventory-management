import{r as h,b as _,h as C,i as E,d as S,j as t,e as k,T as a}from"./index-DXCadrFQ.js";import{C as m}from"./Card--MWi0TZm.js";import{P as $,T as A,D as I,a as L,b as O}from"./Paginitation-CVOG5C3y.js";import{S as F}from"./Select-wHze5Tou.js";import"./index-Df58Q9ES.js";import"./index-CrCcu0zu.js";import"./Layout-OzvLW8TI.js";const q=()=>{const[r,i]=h.useState(new Date),[d,n]=h.useState(!0),c=_();return h.useEffect(()=>{(async()=>{const{success:x,patients:p}=await C.get("/patients");if(x){const l=p.map(e=>{var o,s,f,j,v,y,D,T,P,N,w;return{name:(e==null?void 0:e.name)||"",doctor_image:((f=(s=(o=e==null?void 0:e.appointment_history)==null?void 0:o[0])==null?void 0:s.doctor)==null?void 0:f.profile)||null,doctor_name:((y=(v=(j=e==null?void 0:e.appointment_history)==null?void 0:j[0])==null?void 0:v.doctor)==null?void 0:y.name)||"",specialist:((P=(T=(D=e==null?void 0:e.appointment_history)==null?void 0:D[0])==null?void 0:T.doctor)==null?void 0:P.specilaist)||"",appointment_time:((w=(N=e==null?void 0:e.appointment_history)==null?void 0:N[0])==null?void 0:w.time)||""}});n(!1),c(E(l));return}})()},[]),{setselectedDate:i,selectedDate:r,style:{width:"100%",padding:"0px",border:"1px solid #d3d3d3",outline:"1px solid #d3d3d3",background:"rgba(218, 227, 255, 0.31)"},Options:[{label:"Today",value:"today"},{label:"This Year",value:"this_year"},{label:"This Month",value:"this_month"},{label:"This Week",value:"this_week"}],primaryLoader:d}},Y=()=>{const{selectedDate:r,setselectedDate:i,Options:d,style:n,primaryLoader:c}=q(),{patientsTable:b}=S(s=>s.TableDatas),{PrePage:g,changePage:u,currentpage:x,nextPage:p,tableDats:l,pageCount:e}=$({datas:b}),{sidebarStatus:o}=S(s=>s.sidebarInfo);return t.jsx("div",{className:" w-full h-full px-3 pb-[1px] overflow-auto",children:c?t.jsx(k,{}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:`grid  gap-4 min-h-[100px] ${o?"2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1":"2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1"} `,children:[t.jsx(m,{title:a.dashboard.card.text1,count:"104",bg:"#0073EE",textColor:"#fff"}),t.jsx(m,{title:a.dashboard.card.text2,count:"24",textColor:"#000"}),t.jsx(m,{title:a.dashboard.card.text3,count:"24",textColor:"#000"})]}),t.jsxs("div",{style:{boxShadow:"0 5px 9px -8px rgba(0, 0, 0, .9), 0 2px 9px -3px rgba(0, 0, 0, .9)"},className:"table-box ",children:[t.jsxs("div",{className:"table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[30%] xss:h-[30%] mobile:h-[30%]",children:[t.jsx("div",{className:"table-box-top-left",children:t.jsx(A,{title:a.dashboard.title,subContent:`${l.length} ${a.dashboard.subText}`})}),t.jsx("div",{className:"table-box-top-right",children:t.jsxs("div",{className:"table-box-top-right-grid",children:[t.jsx("div",{className:"table-box-top-right-content-date",children:t.jsx(I,{date:r,handleDateSelect:i})}),t.jsx("div",{className:"table-box-top-right-content-filter",children:t.jsx(F,{options:d,styles:n,placeholder:"Filter"})})]})})]}),t.jsx("div",{className:" mt-3 pb-3 overflow-auto w-full  2xl:h-[70%] xl:h-[70%] lg:h-[73%] md:h-[63%] sm:h-[63%] xs:h-[53%] xss:h-[53%] mobile:h-[53%]",children:t.jsx(L,{headers:[{title:"S.No"},{title:"Patient name"},{title:"Doctor name"},{title:"Specialist"},{title:"Appointment time"},{title:"View"}],tableBody:l,tableName:"Patients"})}),t.jsx("div",{className:" w-full h-[10%] flex items-end pt-4  overflow-x-auto relative",children:t.jsx(O,{PrePage:g,currentpage:x,nextPage:p,pageCount:e.length,changePage:u})})]})]})})};export{Y as default};
