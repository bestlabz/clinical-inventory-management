import{a as D,b as R,r as n,d as S,h as N,n as T,j as e,e as w,T as P}from"./index-DXCadrFQ.js";import{S as C}from"./AddIcon-BhEC_QvE.js";import{P as _,T as k,D as A,a as $,b as E}from"./Paginitation-CVOG5C3y.js";import{S as I}from"./Select-wHze5Tou.js";import"./index-Df58Q9ES.js";import"./index-CrCcu0zu.js";import"./Layout-OzvLW8TI.js";const L=()=>{const d=D(),p=R(),[i,x]=n.useState(),[h,b]=n.useState(!0),[u,r]=n.useState(!1),[c,m]=n.useState(!1),{userDetails:g}=S(s=>s.userinfo);return n.useEffect(()=>{(async()=>{const{success:a,receptionists:l}=await N.get(`/receptionist/clinic/${g._id}`);if(a){const o=l.map(t=>({id:t._id,receptionist_name:(t==null?void 0:t.name)||"",availability:(t==null?void 0:t.availability)!=="unavailable",receptionist_image:(t==null?void 0:t.profile)||null,status:t==null?void 0:t.block}));b(!1),p(T(o));return}})()},[c,i]),{setselectedDate:x,selectedDate:i,style:{width:"100%",padding:"0px",border:"1px solid #d3d3d3",outline:"1px solid #d3d3d3",background:"rgba(218, 227, 255, 0.31)"},Options:[{label:"Recently joined",value:"Recently_joined"},{label:"Receptionist on leave",value:"Receptionist_on_leave"}],navigateAddRecptionistPage:()=>d("/add-recptionist"),primaryLoader:h,setModel:m,model:c,handleChange:async(s,a,l)=>{const{success:o}=await N.post(`/receptionist/${s}`,{block:a,reason:l});if(o)return r(!0)},clear:u,setClear:r}},z=()=>{const{selectedDate:d,setselectedDate:p,Options:i,style:x,navigateAddRecptionistPage:h,primaryLoader:b,clear:u,handleChange:r,model:c,setModel:m,setClear:g}=L(),{receptionistTable:v}=S(o=>o.TableDatas),{PrePage:f,changePage:j,currentpage:y,nextPage:s,tableDats:a,pageCount:l}=_({datas:v});return e.jsx("div",{className:" w-full h-full px-3 pb-[1px] overflow-auto",children:b?e.jsx(w,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{style:{boxShadow:"0 5px 9px -8px rgba(0, 0, 0, .9), 0 2px 9px -3px rgba(0, 0, 0, .9)"},className:"table-box ",children:[e.jsxs("div",{className:"table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]",children:[e.jsx("div",{className:"table-box-top-left",children:e.jsx(k,{title:P.receptionist.title,subContent:`${a.length} ${P.receptionist.subText}`})}),e.jsx("div",{className:"table-box-top-right-1",children:e.jsxs("div",{className:"table-box-top-right-grid-1",children:[e.jsx("div",{className:"table-box-top-right-content-date-1",children:e.jsx(A,{date:d,handleDateSelect:p})}),e.jsx("div",{className:"table-box-top-right-content-filter-1",children:e.jsx(I,{options:i,styles:x,placeholder:"Filter"})}),e.jsx("div",{className:"table-box-top-right-content-filter-1",children:e.jsxs("button",{onClick:h,className:"table-box-top-right-content-button-1 ",children:[e.jsx(C,{})," Invite"]})})]})})]}),e.jsx("div",{className:" mt-3 pb-3 overflow-auto w-full 2xl:h-[70%] xl:h-[70%] lg:h-[73%] md:h-[63%] sm:h-[63%] xs:h-[43%] xss:h-[43%] mobile:h-[43%]",children:e.jsx($,{headers:[{title:"S.No"},{title:"Receptionist name"},{title:"Status"},{title:""}],tableBody:a,tableName:"Receptionist",model:c,setModel:m,handleChange:r,clear:u,setClear:g})}),e.jsx("div",{className:" w-full  h-[10%] flex items-end pt-4 overflow-x-auto relative ",children:e.jsx(E,{PrePage:f,currentpage:y,nextPage:s,pageCount:l.length,changePage:j})})]})})})};export{z as default};
