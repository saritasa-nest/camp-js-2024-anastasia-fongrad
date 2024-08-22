import{c as C,g as z,a as O,s as R,_ as u,r,u as T,b as k,j as e,d as P,T as G,e as _,f as B,L as A,h as N,N as U,i as h,I as x,k as E,l as D,m as M,n as q,o as H,p as g,q as W,O as J}from"./index-DZCmtDdp.js";import{u as K,F as Q,B as y,a as V,I as X,O as Y,d as Z,b as F}from"./Search-BBqDPH_z.js";const ee=C(t=>t.genres.genres,t=>t),te=C(t=>t.genres.isLoading,t=>t);function se(t){return O("MuiInputAdornment",t)}const v=z("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var I;const ne=["children","className","component","disablePointerEvents","disableTypography","position","variant"],oe=(t,s)=>{const{ownerState:n}=t;return[s.root,s[`position${_(n.position)}`],n.disablePointerEvents===!0&&s.disablePointerEvents,s[n.variant]]},ae=t=>{const{classes:s,disablePointerEvents:n,hiddenLabel:o,position:i,size:a,variant:c}=t,m={root:["root",n&&"disablePointerEvents",i&&`position${_(i)}`,c,o&&"hiddenLabel",a&&`size${_(a)}`]};return B(m,se,s)},ie=R("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:oe})(({theme:t,ownerState:s})=>u({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},s.variant==="filled"&&{[`&.${v.positionStart}&:not(.${v.hiddenLabel})`]:{marginTop:16}},s.position==="start"&&{marginRight:8},s.position==="end"&&{marginLeft:8},s.disablePointerEvents===!0&&{pointerEvents:"none"})),re=r.forwardRef(function(s,n){const o=T({props:s,name:"MuiInputAdornment"}),{children:i,className:a,component:c="div",disablePointerEvents:m=!1,disableTypography:S=!1,position:b,variant:j}=o,$=k(o,ne),l=K()||{};let p=j;j&&l.variant,l&&!p&&(p=l.variant);const f=u({},o,{hiddenLabel:l.hiddenLabel,size:l.size,disablePointerEvents:m,position:b,variant:p}),w=ae(f);return e.jsx(Q.Provider,{value:null,children:e.jsx(ie,u({as:c,ownerState:f,className:P(w.root,a),ref:n},$,{children:typeof i=="string"&&!S?e.jsx(G,{color:"text.secondary",children:i}):e.jsxs(r.Fragment,{children:[b==="start"?I||(I=e.jsx("span",{className:"notranslate",children:"​"})):null,i]})}))})}),le=({selected:t,genre:s,onClick:n})=>{const o=`${s.id}`;return e.jsx(A,{disablePadding:!0,children:e.jsx(N,{component:U,to:o,onClick:n,selected:t,children:e.jsx(h,{primary:s.name,secondary:`Id - ${s.id}`})})})},de=r.memo(le),ce="_filters_h2wth_1",me="_filters__form_h2wth_7",pe={filters:ce,filters__form:me,"filters__input-base":"_filters__input-base_h2wth_14","filters__icon-button":"_filters__icon-button_h2wth_19"},ue=()=>e.jsxs(y,{className:pe.filters,children:[e.jsx(G,{variant:"h5",component:"h5",gutterBottom:!0,children:"Filters"}),e.jsxs(V,{variant:"outlined",children:[e.jsx(X,{htmlFor:"outlined-adornment-search",children:"Search"}),e.jsx(Y,{id:"outlined-adornment-search",endAdornment:e.jsx(re,{position:"end",children:e.jsx(x,{"aria-label":"search",edge:"end",children:e.jsx(Z,{})})}),label:"Search"})]})]}),_e=r.memo(ue),L={"genre-list":"_genre-list_19jpa_1","genre-list__items":"_genre-list__items_19jpa_10"},he=({genres:t})=>{const{genreId:s}=E(),[n,o]=r.useState(s?Number(s):void 0),i=r.useCallback(a=>{o(a)},[]);return e.jsxs(y,{className:L["genre-list"],children:[e.jsx(_e,{}),e.jsxs(D,{className:L["genre-list__items"],children:[e.jsx(A,{disablePadding:!0,children:e.jsxs(N,{children:[e.jsx(x,{edge:"start",color:"inherit","aria-label":"add",children:e.jsx(F,{})}),e.jsx(h,{primary:"Add Genre"})]})}),t.map(a=>e.jsx(de,{genre:a,onClick:()=>i(a.id),selected:a.id===n},a.id))]})]})},xe=r.memo(he),ye="_layout_54mps_1",be="_layout_open_54mps_13",je="_layout__sidebar_54mps_18",fe="_layout__empty_54mps_23",ge="_layout__button_54mps_31",d={layout:ye,layout_open:be,layout__sidebar:je,layout__empty:fe,layout__button:ge},ve=()=>{const t=M(q),s=H(),n=g(ee),o=g(te),{genreId:i}=E();return r.useEffect(()=>{s(W())},[s]),o?e.jsx("div",{children:"Loading"}):e.jsxs("main",{className:P(d.layout,t&&d.layout_open),children:[e.jsx(y,{className:d.layout__sidebar,children:e.jsx(xe,{genres:n})}),i?e.jsx(J,{}):e.jsx("div",{className:d.layout__empty,children:e.jsxs("div",{className:d.layout__button,children:[e.jsx(x,{edge:"start",color:"inherit","aria-label":"add",children:e.jsx(F,{})}),e.jsx(h,{primary:"Add Genre"})]})})]})},Ce=r.memo(ve);export{Ce as GenrePage};
