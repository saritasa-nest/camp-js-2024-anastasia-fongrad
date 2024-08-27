import{l as x,m as _,w as h,n as m,r as d,x as C,_ as v,j as t,i as y,v as D,T as f,z as A,B as P,e as $,s as E,a2 as F,ad as U,aa as k,N as L}from"./index-ORWUVLLC.js";import{z as u,u as B,H as T,C as g,T as N,P as b,t as W,L as I}from"./PasswordField-A1E3Xl-z.js";import{B as S}from"./Button-B6BVcP7f.js";import{a as O,D as z}from"./Dialog-9DKndXTp.js";import"./OutlinedInput-BWIagoh6.js";import"./Select-D8UyQO31.js";function q(o){return x("MuiDialogActions",o)}_("MuiDialogActions",["root","spacing"]);const H=["className","disableSpacing"],V=o=>{const{classes:e,disableSpacing:a}=o;return D({root:["root",!a&&"spacing"]},q,e)},Z=h("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,!a.disableSpacing&&e.spacing]}})(({ownerState:o})=>m({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Y=d.forwardRef(function(e,a){const s=C({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:l=!1}=s,c=v(s,H),n=m({},s,{disableSpacing:l}),r=V(n);return t.jsx(Z,m({className:y(r.root,i),ownerState:n,ref:a},c))});function G(o){return x("MuiDialogContent",o)}_("MuiDialogContent",["root","dividers"]);function J(o){return x("MuiDialogTitle",o)}const K=_("MuiDialogTitle",["root"]),Q=["className","dividers"],X=o=>{const{classes:e,dividers:a}=o;return D({root:["root",a&&"dividers"]},G,e)},ss=h("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>m({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${K.root} + &`]:{paddingTop:0}})),os=d.forwardRef(function(e,a){const s=C({props:e,name:"MuiDialogContent"}),{className:i,dividers:l=!1}=s,c=v(s,Q),n=m({},s,{dividers:l}),r=X(n);return t.jsx(ss,m({className:y(r.root,i),ownerState:n,ref:a},c))});function es(o){return x("MuiDialogContentText",o)}_("MuiDialogContentText",["root"]);const ts=["children","className"],as=o=>{const{classes:e}=o,s=D({root:["root"]},es,e);return m({},e,s)},rs=h(f,{shouldForwardProp:o=>A(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,e)=>e.root})({}),ns=d.forwardRef(function(e,a){const s=C({props:e,name:"MuiDialogContentText"}),{className:i}=s,l=v(s,ts),c=as(l);return t.jsx(rs,m({component:"p",variant:"body1",color:"text.secondary",ref:a,ownerState:l,className:y(c.root,i)},s,{classes:c}))}),is=["className","id"],ls=o=>{const{classes:e}=o;return D({root:["root"]},J,e)},cs=h(f,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),ds=d.forwardRef(function(e,a){const s=C({props:e,name:"MuiDialogTitle"}),{className:i,id:l}=s,c=v(s,is),n=s,r=ls(n),{titleId:w=l}=d.useContext(O);return t.jsx(cs,m({component:"h2",className:y(r.root,i),ownerState:n,ref:a,variant:"h6",id:l??w},c))}),ms="_form_knxh3_1",us="_form__control_knxh3_5",ps="_form__error_knxh3_10",gs="_form__button_knxh3_14",p={form:ms,form__control:us,form__error:ps,form__button:gs},fs=u.object({email:u.string().min(1,"Email is required").email({message:"Invalid email address"}),firstName:u.string().min(1,{message:"First name is required"}),lastName:u.string().min(1,{message:"Last name is required"}),password:u.string().min(8,{message:"Password must be at least 8 characters long"}).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,{message:"Password must contain at least one letter and one digit"}),passwordConfirm:u.string().min(8,{message:"Please re-type your password"})}).refine(o=>o.password===o.passwordConfirm,{message:"Passwords do not match",path:["passwordConfirm"]}),R={email:"",firstName:"",lastName:"",password:"",passwordConfirm:""},xs=({onSubmit:o,serverErrors:e})=>{var c;const{handleSubmit:a,formState:{errors:s},control:i,setError:l}=B({defaultValues:R,resolver:W(fs)});return d.useEffect(()=>{T.setErrors(e,l,R)},[e]),t.jsxs(P,{component:"form",onSubmit:a(o),className:p.form,children:[t.jsx(g,{name:"email",control:i,render:({field:n})=>{var r;return t.jsx(N,{...n,label:"Email",fullWidth:!0,error:s.email!=null,helperText:(r=s==null?void 0:s.email)==null?void 0:r.message,className:p.form__control})}}),t.jsx(g,{name:"firstName",control:i,render:({field:n})=>{var r;return t.jsx(N,{...n,label:"First Name",fullWidth:!0,error:s.firstName!=null,helperText:(r=s==null?void 0:s.firstName)==null?void 0:r.message,className:p.form__control})}}),t.jsx(g,{name:"lastName",control:i,render:({field:n})=>{var r;return t.jsx(N,{...n,label:"Last Name",fullWidth:!0,error:s.lastName!=null,helperText:(r=s==null?void 0:s.lastName)==null?void 0:r.message,className:p.form__control})}}),t.jsx(g,{name:"password",control:i,render:({field:n})=>{var r;return t.jsx(b,{field:n,hasError:s.password!=null,errorMessage:(r=s==null?void 0:s.password)==null?void 0:r.message,label:"Password"})}}),t.jsx(g,{name:"passwordConfirm",control:i,render:({field:n})=>{var r;return t.jsx(b,{field:n,hasError:s.passwordConfirm!=null,errorMessage:(r=s==null?void 0:s.passwordConfirm)==null?void 0:r.message,label:"Re-type Password"})}}),t.jsx(f,{component:"p",gutterBottom:!0,className:p.form__error,children:(c=s==null?void 0:s.root)==null?void 0:c.message}),t.jsx(S,{type:"submit",fullWidth:!0,variant:"contained",className:p.form__button,children:"Register"})]})},_s=d.memo(xs),hs=({isAlertOpen:o,onAlertClose:e,title:a,description:s})=>t.jsxs(z,{open:o,onClose:e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[t.jsx(ds,{id:"alert-dialog-title",children:a}),t.jsx(os,{children:t.jsx(ns,{id:"alert-dialog-description",children:s})}),t.jsx(Y,{children:t.jsx(S,{onClick:e,children:"Close"})})]}),Cs=d.memo(hs),vs="_layout_covh8_1",ys="_layout_open_covh8_12",Ds="_layout__card_covh8_17",j={layout:vs,layout_open:ys,layout__card:Ds},ws=()=>{const o=$(E),[e,a]=d.useState([]),[s,i]=d.useState(!1),l=F(),c="/login",n=d.useCallback(()=>{i(!1),l(c)},[l]),r=d.useCallback(w=>{U.register(w).then(()=>i(!0)).catch(M=>a(T.parseError(M)))},[]);return t.jsxs("main",{className:`${j.layout} ${o?j.layout_open:""}`,children:[t.jsx(Cs,{isAlertOpen:s,onAlertClose:n,title:"Registration successful",description:"Now you can log in a system"}),t.jsxs(k,{elevation:3,className:j.layout__card,children:[t.jsx(f,{variant:"h5",component:"h5",children:"Registration"}),t.jsx(_s,{onSubmit:r,serverErrors:e}),t.jsxs(f,{component:"p",children:["Already have an account?",t.jsx(I,{component:L,to:c,children:"Login"})]})]})]})},Ms=d.memo(ws);export{Ms as RegistrationPage};
