import{m as X,l as Y,r as c,w as d,ag as z,ah as H,C as l,n as r,aa as B,x as V,K as q,_ as G,R as J,j as t,i as f,v as O,ai as Q}from"./index-D_C3w5oe.js";function Z(e){return Y("MuiDialog",e)}const k=X("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),aa=c.createContext({}),ea=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],oa=d(z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,a)=>a.backdrop})({zIndex:-1}),ra=e=>{const{classes:a,scroll:o,maxWidth:s,fullWidth:n,fullScreen:u}=e,x={root:["root"],container:["container",`scroll${l(o)}`],paper:["paper",`paperScroll${l(o)}`,`paperWidth${l(String(s))}`,n&&"paperFullWidth",u&&"paperFullScreen"]};return O(x,Z,a)},ia=d(H,{name:"MuiDialog",slot:"Root",overridesResolver:(e,a)=>a.root})({"@media print":{position:"absolute !important"}}),la=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.container,a[`scroll${l(o.scroll)}`]]}})(({ownerState:e})=>r({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),sa=d(B,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.paper,a[`scrollPaper${l(o.scroll)}`],a[`paperWidth${l(String(o.maxWidth))}`],o.fullWidth&&a.paperFullWidth,o.fullScreen&&a.paperFullScreen]}})(({theme:e,ownerState:a})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},a.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},a.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},a.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&a.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[a.maxWidth]}${e.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[a.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),na=c.forwardRef(function(a,o){const s=V({props:a,name:"MuiDialog"}),n=q(),u={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":x,"aria-labelledby":M,BackdropComponent:S,BackdropProps:$,children:R,className:j,disableEscapeKeyDown:W=!1,fullScreen:w=!1,fullWidth:F=!1,maxWidth:T="sm",onBackdropClick:C,onClick:D,onClose:h,open:v,PaperComponent:N=B,PaperProps:y={},scroll:A="paper",TransitionComponent:E=Q,transitionDuration:P=u,TransitionProps:I}=s,L=G(s,ea),p=r({},s,{disableEscapeKeyDown:W,fullScreen:w,fullWidth:F,maxWidth:T,scroll:A}),m=ra(p),b=c.useRef(),U=i=>{b.current=i.target===i.currentTarget},_=i=>{D&&D(i),b.current&&(b.current=null,C&&C(i),h&&h(i,"backdropClick"))},g=J(M),K=c.useMemo(()=>({titleId:g}),[g]);return t.jsx(ia,r({className:f(m.root,j),closeAfterTransition:!0,components:{Backdrop:oa},componentsProps:{backdrop:r({transitionDuration:P,as:S},$)},disableEscapeKeyDown:W,onClose:h,open:v,ref:o,onClick:_,ownerState:p},L,{children:t.jsx(E,r({appear:!0,in:v,timeout:P,role:"presentation"},I,{children:t.jsx(la,{className:f(m.container),onMouseDown:U,ownerState:p,children:t.jsx(sa,r({as:N,elevation:24,role:"dialog","aria-describedby":x,"aria-labelledby":g},y,{className:f(m.paper,y.className),ownerState:p,children:t.jsx(aa.Provider,{value:K,children:R})}))})}))}))});export{na as D,aa as a};