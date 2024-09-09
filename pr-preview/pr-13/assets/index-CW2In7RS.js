import{m as v,l as D,r as p,w as u,ae as ro,af as no,z as h,n as d,ad as F,x as y,K as io,_ as w,R as lo,j as a,i as m,v as k,ag as co,T as _,D as po,aa as uo,B as mo,g as M,s as go,a2 as xo,f as fo,ah as ho,N as bo,a9 as Co}from"./index-45c5IFrh.js";import{z as x,u as _o,C,T as $,P as Y,t as vo,s as Do,a as yo,L as wo}from"./PasswordField-CqwLP_wz.js";import{B as H}from"./Button-DKvPvy6H.js";import"./OutlinedInput-CH_Q9NZY.js";import"./Select-DM-nBow6.js";function ko(o){return D("MuiDialog",o)}const A=v("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),K=p.createContext({}),jo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],No=u(ro,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),Wo=o=>{const{classes:e,scroll:t,maxWidth:s,fullWidth:i,fullScreen:l}=o,c={root:["root"],container:["container",`scroll${h(t)}`],paper:["paper",`paperScroll${h(t)}`,`paperWidth${h(String(s))}`,i&&"paperFullWidth",l&&"paperFullScreen"]};return k(c,ko,e)},Ro=u(no,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),Po=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${h(t.scroll)}`]]}})(({ownerState:o})=>d({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),So=u(F,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${h(t.scroll)}`],e[`paperWidth${h(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>d({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${A.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${A.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${A.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),To=p.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialog"}),i=io(),l={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":n,BackdropComponent:r,BackdropProps:b,children:N,className:W,disableEscapeKeyDown:E=!1,fullScreen:V=!1,fullWidth:X=!1,maxWidth:Z="sm",onBackdropClick:L,onClick:U,onClose:R,open:I,PaperComponent:G=F,PaperProps:z={},scroll:J="paper",TransitionComponent:Q=co,transitionDuration:O=l,TransitionProps:oo}=s,eo=w(s,jo),j=d({},s,{disableEscapeKeyDown:E,fullScreen:V,fullWidth:X,maxWidth:Z,scroll:J}),P=Wo(j),S=p.useRef(),so=g=>{S.current=g.target===g.currentTarget},to=g=>{U&&U(g),S.current&&(S.current=null,L&&L(g),R&&R(g,"backdropClick"))},T=lo(n),ao=p.useMemo(()=>({titleId:T}),[T]);return a.jsx(Ro,d({className:m(P.root,W),closeAfterTransition:!0,components:{Backdrop:No},componentsProps:{backdrop:d({transitionDuration:O,as:r},b)},disableEscapeKeyDown:E,onClose:R,open:I,ref:t,onClick:to,ownerState:j},eo,{children:a.jsx(Q,d({appear:!0,in:I,timeout:O,role:"presentation"},oo,{children:a.jsx(Po,{className:m(P.container),onMouseDown:so,ownerState:j,children:a.jsx(So,d({as:G,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":T},z,{className:m(P.paper,z.className),ownerState:j,children:a.jsx(K.Provider,{value:ao,children:N})}))})}))}))});function Mo(o){return D("MuiDialogActions",o)}v("MuiDialogActions",["root","spacing"]);const $o=["className","disableSpacing"],Ao=o=>{const{classes:e,disableSpacing:t}=o;return k({root:["root",!t&&"spacing"]},Mo,e)},Bo=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>d({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Fo=p.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:l=!1}=s,c=w(s,$o),n=d({},s,{disableSpacing:l}),r=Ao(n);return a.jsx(Bo,d({className:m(r.root,i),ownerState:n,ref:t},c))});function Eo(o){return D("MuiDialogContent",o)}v("MuiDialogContent",["root","dividers"]);function Lo(o){return D("MuiDialogTitle",o)}const Uo=v("MuiDialogTitle",["root"]),Io=["className","dividers"],zo=o=>{const{classes:e,dividers:t}=o;return k({root:["root",t&&"dividers"]},Eo,e)},Oo=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>d({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${Uo.root} + &`]:{paddingTop:0}})),Yo=p.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialogContent"}),{className:i,dividers:l=!1}=s,c=w(s,Io),n=d({},s,{dividers:l}),r=zo(n);return a.jsx(Oo,d({className:m(r.root,i),ownerState:n,ref:t},c))});function qo(o){return D("MuiDialogContentText",o)}v("MuiDialogContentText",["root"]);const Ho=["children","className"],Ko=o=>{const{classes:e}=o,s=k({root:["root"]},qo,e);return d({},e,s)},Vo=u(_,{shouldForwardProp:o=>po(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,e)=>e.root})({}),Xo=p.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialogContentText"}),{className:i}=s,l=w(s,Ho),c=Ko(l);return a.jsx(Vo,d({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:l,className:m(c.root,i)},s,{classes:c}))}),Zo=["className","id"],Go=o=>{const{classes:e}=o;return k({root:["root"]},Lo,e)},Jo=u(_,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Qo=p.forwardRef(function(e,t){const s=y({props:e,name:"MuiDialogTitle"}),{className:i,id:l}=s,c=w(s,Zo),n=s,r=Go(n),{titleId:b=l}=p.useContext(K);return a.jsx(Jo,d({component:"h2",className:m(r.root,i),ownerState:n,ref:t,variant:"h6",id:l??b},c))}),oe="_form_knxh3_1",ee="_form__control_knxh3_5",se="_form__error_knxh3_10",te="_form__button_knxh3_14",f={form:oe,form__control:ee,form__error:se,form__button:te},ae=x.object({email:x.string().min(1,"Email is required").email({message:"Invalid email address"}),firstName:x.string().min(1,{message:"First name is required"}),lastName:x.string().min(1,{message:"Last name is required"}),password:x.string().min(8,{message:"Password must be at least 8 characters long"}).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,{message:"Password must contain at least one letter and one digit"}),passwordConfirm:x.string().min(8,{message:"Please re-type your password"})}).refine(o=>o.password===o.passwordConfirm,{message:"Passwords do not match",path:["passwordConfirm"]}),q={email:"",firstName:"",lastName:"",password:"",passwordConfirm:""},re=({onSubmit:o,serverErrors:e})=>{var c;const{handleSubmit:t,formState:{errors:s},control:i,setError:l}=_o({defaultValues:q,resolver:vo(ae)});return p.useEffect(()=>{uo.setErrors(e,l,q)},[e]),a.jsxs(mo,{component:"form",onSubmit:t(o),className:f.form,children:[a.jsx(C,{name:"email",control:i,render:({field:n})=>{var r;return a.jsx($,{...n,label:"Email",fullWidth:!0,error:s.email!=null,helperText:(r=s==null?void 0:s.email)==null?void 0:r.message,className:f.form__control})}}),a.jsx(C,{name:"firstName",control:i,render:({field:n})=>{var r;return a.jsx($,{...n,label:"First Name",fullWidth:!0,error:s.firstName!=null,helperText:(r=s==null?void 0:s.firstName)==null?void 0:r.message,className:f.form__control})}}),a.jsx(C,{name:"lastName",control:i,render:({field:n})=>{var r;return a.jsx($,{...n,label:"Last Name",fullWidth:!0,error:s.lastName!=null,helperText:(r=s==null?void 0:s.lastName)==null?void 0:r.message,className:f.form__control})}}),a.jsx(C,{name:"password",control:i,render:({field:n})=>{var r;return a.jsx(Y,{field:n,hasError:s.password!=null,errorMessage:(r=s==null?void 0:s.password)==null?void 0:r.message,label:"Password"})}}),a.jsx(C,{name:"passwordConfirm",control:i,render:({field:n})=>{var r;return a.jsx(Y,{field:n,hasError:s.passwordConfirm!=null,errorMessage:(r=s==null?void 0:s.passwordConfirm)==null?void 0:r.message,label:"Re-type Password"})}}),a.jsx(_,{component:"p",gutterBottom:!0,className:f.form__error,children:(c=s==null?void 0:s.root)==null?void 0:c.message}),a.jsx(H,{type:"submit",fullWidth:!0,variant:"contained",className:f.form__button,children:"Register"})]})},ne=p.memo(re),ie=({isAlertOpen:o,onAlertClose:e,title:t,description:s})=>a.jsxs(To,{open:o,onClose:e,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[a.jsx(Qo,{id:"alert-dialog-title",children:t}),a.jsx(Yo,{children:a.jsx(Xo,{id:"alert-dialog-description",children:s})}),a.jsx(Fo,{children:a.jsx(H,{onClick:e,children:"Close"})})]}),le=p.memo(ie),ce="_layout_covh8_1",de="_layout_open_covh8_12",pe="_layout__card_covh8_17",B={layout:ce,layout_open:de,layout__card:pe},ue=()=>{const o=M(go),[e,t]=p.useState(!1),s=xo(),i="/login",l=fo(),c=M(Do),n=M(yo),r=p.useCallback(()=>{t(!1),s(i)},[s]),b=p.useCallback(N=>{l(ho(N)).then(W=>{W.type.endsWith("fulfilled")&&t(!0)})},[l]);return a.jsxs("main",{className:`${B.layout} ${o?B.layout_open:""}`,children:[a.jsx(le,{isAlertOpen:e,onAlertClose:r,title:"Registration successful",description:"Now you can log in a system"}),a.jsxs(F,{elevation:3,className:B.layout__card,children:[a.jsx(_,{variant:"h5",component:"h5",children:"Registration"}),a.jsx(ne,{onSubmit:b,serverErrors:n??[]}),a.jsxs(_,{component:"p",children:["Already have an account?",a.jsx(wo,{component:bo,to:i,children:"Login"})]})]}),c&&a.jsx(Co,{})]})},be=p.memo(ue);export{be as RegistrationPage};
