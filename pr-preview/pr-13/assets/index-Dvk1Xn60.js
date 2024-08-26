import{m as v,l as D,r as d,w as u,ae as ro,af as no,z as h,n as p,ad as A,x as y,K as io,_ as w,R as lo,j as a,i as m,v as k,ag as co,T as _,D as po,B as uo,e as mo,s as go,a2 as xo,aa as fo,N as ho}from"./index-Ct1Xj9Ik.js";import{z as x,u as bo,E as Y,C,T,P as z,t as Co,L as _o}from"./PasswordField-0CIUBoyX.js";import{B as q}from"./Button-BecChUm7.js";import"./OutlinedInput-CgIjpSJ1.js";import"./Select-DF_bdo0F.js";function vo(o){return D("MuiDialog",o)}const M=v("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),K=d.createContext({}),Do=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],yo=u(ro,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),wo=o=>{const{classes:e,scroll:t,maxWidth:s,fullWidth:i,fullScreen:l}=o,c={root:["root"],container:["container",`scroll${h(t)}`],paper:["paper",`paperScroll${h(t)}`,`paperWidth${h(String(s))}`,i&&"paperFullWidth",l&&"paperFullScreen"]};return k(c,vo,e)},ko=u(no,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),No=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${h(t.scroll)}`]]}})(({ownerState:o})=>p({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),jo=u(A,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${h(t.scroll)}`],e[`paperWidth${h(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>p({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${M.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${M.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${M.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Wo=d.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialog"}),i=io(),l={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":n,BackdropComponent:r,BackdropProps:b,children:j,className:V,disableEscapeKeyDown:B=!1,fullScreen:X=!1,fullWidth:H=!1,maxWidth:Z="sm",onBackdropClick:F,onClick:E,onClose:W,open:U,PaperComponent:G=A,PaperProps:L={},scroll:J="paper",TransitionComponent:Q=co,transitionDuration:I=l,TransitionProps:oo}=s,eo=w(s,Do),N=p({},s,{disableEscapeKeyDown:B,fullScreen:X,fullWidth:H,maxWidth:Z,scroll:J}),S=wo(N),R=d.useRef(),so=g=>{R.current=g.target===g.currentTarget},to=g=>{E&&E(g),R.current&&(R.current=null,F&&F(g),W&&W(g,"backdropClick"))},P=lo(n),ao=d.useMemo(()=>({titleId:P}),[P]);return a.jsx(ko,p({className:m(S.root,V),closeAfterTransition:!0,components:{Backdrop:yo},componentsProps:{backdrop:p({transitionDuration:I,as:r},b)},disableEscapeKeyDown:B,onClose:W,open:U,ref:t,onClick:to,ownerState:N},eo,{children:a.jsx(Q,p({appear:!0,in:U,timeout:I,role:"presentation"},oo,{children:a.jsx(No,{className:m(S.container),onMouseDown:so,ownerState:N,children:a.jsx(jo,p({as:G,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":P},L,{className:m(S.paper,L.className),ownerState:N,children:a.jsx(K.Provider,{value:ao,children:j})}))})}))}))});function So(o){return D("MuiDialogActions",o)}v("MuiDialogActions",["root","spacing"]);const Ro=["className","disableSpacing"],Po=o=>{const{classes:e,disableSpacing:t}=o;return k({root:["root",!t&&"spacing"]},So,e)},To=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>p({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Mo=d.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:l=!1}=s,c=w(s,Ro),n=p({},s,{disableSpacing:l}),r=Po(n);return a.jsx(To,p({className:m(r.root,i),ownerState:n,ref:t},c))});function $o(o){return D("MuiDialogContent",o)}v("MuiDialogContent",["root","dividers"]);function Ao(o){return D("MuiDialogTitle",o)}const Bo=v("MuiDialogTitle",["root"]),Fo=["className","dividers"],Eo=o=>{const{classes:e,dividers:t}=o;return k({root:["root",t&&"dividers"]},$o,e)},Uo=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>p({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${Bo.root} + &`]:{paddingTop:0}})),Lo=d.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialogContent"}),{className:i,dividers:l=!1}=s,c=w(s,Fo),n=p({},s,{dividers:l}),r=Eo(n);return a.jsx(Uo,p({className:m(r.root,i),ownerState:n,ref:t},c))});function Io(o){return D("MuiDialogContentText",o)}v("MuiDialogContentText",["root"]);const zo=["children","className"],Oo=o=>{const{classes:e}=o,s=k({root:["root"]},Io,e);return p({},e,s)},Yo=u(_,{shouldForwardProp:o=>po(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,e)=>e.root})({}),qo=d.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialogContentText"}),{className:i}=s,l=w(s,zo),c=Oo(l);return a.jsx(Yo,p({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:l,className:m(c.root,i)},s,{classes:c}))}),Ko=["className","id"],Vo=o=>{const{classes:e}=o;return k({root:["root"]},Ao,e)},Xo=u(_,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Ho=d.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialogTitle"}),{className:i,id:l}=s,c=w(s,Ko),n=s,r=Vo(n),{titleId:b=l}=d.useContext(K);return a.jsx(Xo,p({component:"h2",className:m(r.root,i),ownerState:n,ref:t,variant:"h6",id:l??b},c))}),Zo="_form_knxh3_1",Go="_form__control_knxh3_5",Jo="_form__error_knxh3_10",Qo="_form__button_knxh3_14",f={form:Zo,form__control:Go,form__error:Jo,form__button:Qo},oe=x.object({email:x.string().min(1,"Email is required").email({message:"Invalid email address"}),firstName:x.string().min(1,{message:"First name is required"}),lastName:x.string().min(1,{message:"Last name is required"}),password:x.string().min(8,{message:"Password must be at least 8 characters long"}).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,{message:"Password must contain at least one letter and one digit"}),passwordConfirm:x.string().min(8,{message:"Please re-type your password"})}).refine(o=>o.password===o.passwordConfirm,{message:"Passwords do not match",path:["passwordConfirm"]}),O={email:"",firstName:"",lastName:"",password:"",passwordConfirm:""},ee=({onSubmit:o,serverErrors:e})=>{var c;const{handleSubmit:t,formState:{errors:s},control:i,setError:l}=bo({defaultValues:O,resolver:Co(oe)});return d.useEffect(()=>{Y.setErrors(e,l,O)},[e]),a.jsxs(uo,{component:"form",onSubmit:t(o),className:f.form,children:[a.jsx(C,{name:"email",control:i,render:({field:n})=>{var r;return a.jsx(T,{...n,label:"Email",fullWidth:!0,error:s.email!=null,helperText:(r=s==null?void 0:s.email)==null?void 0:r.message,className:f.form__control})}}),a.jsx(C,{name:"firstName",control:i,render:({field:n})=>{var r;return a.jsx(T,{...n,label:"First Name",fullWidth:!0,error:s.firstName!=null,helperText:(r=s==null?void 0:s.firstName)==null?void 0:r.message,className:f.form__control})}}),a.jsx(C,{name:"lastName",control:i,render:({field:n})=>{var r;return a.jsx(T,{...n,label:"Last Name",fullWidth:!0,error:s.lastName!=null,helperText:(r=s==null?void 0:s.lastName)==null?void 0:r.message,className:f.form__control})}}),a.jsx(C,{name:"password",control:i,render:({field:n})=>{var r;return a.jsx(z,{field:n,hasError:s.password!=null,errorMessage:(r=s==null?void 0:s.password)==null?void 0:r.message,label:"Password"})}}),a.jsx(C,{name:"passwordConfirm",control:i,render:({field:n})=>{var r;return a.jsx(z,{field:n,hasError:s.passwordConfirm!=null,errorMessage:(r=s==null?void 0:s.passwordConfirm)==null?void 0:r.message,label:"Re-type Password"})}}),a.jsx(_,{component:"p",gutterBottom:!0,className:f.form__error,children:(c=s==null?void 0:s.root)==null?void 0:c.message}),a.jsx(q,{type:"submit",fullWidth:!0,variant:"contained",className:f.form__button,children:"Register"})]})},se=d.memo(ee),te=({isAlertOpen:o,onAlertClose:e,title:t,description:s})=>a.jsxs(Wo,{open:o,onClose:e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[a.jsx(Ho,{id:"alert-dialog-title",children:t}),a.jsx(Lo,{children:a.jsx(qo,{id:"alert-dialog-description",children:s})}),a.jsx(Mo,{children:a.jsx(q,{onClick:e,children:"Close"})})]}),ae=d.memo(te),re="_layout_covh8_1",ne="_layout_open_covh8_12",ie="_layout__card_covh8_17",$={layout:re,layout_open:ne,layout__card:ie},le=()=>{const o=mo(go),[e,t]=d.useState([]),[s,i]=d.useState(!1),l=xo(),c="/login",n=d.useCallback(()=>{i(!1),l(c)},[l]),r=d.useCallback(b=>{fo.register(b).then(()=>i(!0)).catch(j=>t(Y.parseError(j)))},[]);return a.jsxs("main",{className:`${$.layout} ${o?$.layout_open:""}`,children:[a.jsx(ae,{isAlertOpen:s,onAlertClose:n,title:"Registration successful",description:"Now you can log in a system"}),a.jsxs(A,{elevation:3,className:$.layout__card,children:[a.jsx(_,{variant:"h5",component:"h5",children:"Registration"}),a.jsx(se,{onSubmit:r,serverErrors:e}),a.jsxs(_,{component:"p",children:["Already have an account?",a.jsx(_o,{component:ho,to:c,children:"Login"})]})]})]})},ge=d.memo(le);export{ge as RegistrationPage};
