import{r as d,j as t,u as O}from"./index-B47X0lZ3.js";import{h as T,n as V,o as f,B as D,x as G,t as n,b as r,w as v,D as A,p as F,_ as U,d as B,q as H,A as m}from"./ButtonBase-CgXZaS8W.js";function J(o){return V("MuiButton",o)}const g=T("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),K=d.createContext({}),Q=d.createContext(void 0),X=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Y=o=>{const{color:i,disableElevation:a,fullWidth:e,size:s,variant:l,classes:c}=o,b={root:["root",l,`${l}${n(i)}`,`size${n(s)}`,`${l}Size${n(s)}`,`color${n(i)}`,a&&"disableElevation",e&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${n(s)}`],endIcon:["icon","endIcon",`iconSize${n(s)}`]},x=H(b,J,c);return r({},c,x)},q=o=>r({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=f(D,{shouldForwardProp:o=>G(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,i)=>{const{ownerState:a}=o;return[i.root,i[a.variant],i[`${a.variant}${n(a.color)}`],i[`size${n(a.size)}`],i[`${a.variant}Size${n(a.size)}`],a.color==="inherit"&&i.colorInherit,a.disableElevation&&i.disableElevation,a.fullWidth&&i.fullWidth]}})(({theme:o,ownerState:i})=>{var a,e;const s=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],l=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return r({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":r({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},i.variant==="text"&&i.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[i.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette[i.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},i.variant==="outlined"&&i.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[i.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[i.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette[i.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},i.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},i.variant==="contained"&&i.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[i.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[i.color].main}}),"&:active":r({},i.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${g.focusVisible}`]:r({},i.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${g.disabled}`]:r({color:(o.vars||o).palette.action.disabled},i.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},i.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},i.variant==="text"&&{padding:"6px 8px"},i.variant==="text"&&i.color!=="inherit"&&{color:(o.vars||o).palette[i.color].main},i.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},i.variant==="outlined"&&i.color!=="inherit"&&{color:(o.vars||o).palette[i.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[i.color].mainChannel} / 0.5)`:`1px solid ${v(o.palette[i.color].main,.5)}`},i.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(a=(e=o.palette).getContrastText)==null?void 0:a.call(e,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:s,boxShadow:(o.vars||o).shadows[2]},i.variant==="contained"&&i.color!=="inherit"&&{color:(o.vars||o).palette[i.color].contrastText,backgroundColor:(o.vars||o).palette[i.color].main},i.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},i.size==="small"&&i.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},i.size==="large"&&i.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},i.size==="small"&&i.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},i.size==="large"&&i.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},i.size==="small"&&i.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},i.size==="large"&&i.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},i.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}}),w=f("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,i)=>{const{ownerState:a}=o;return[i.startIcon,i[`iconSize${n(a.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},q(o))),oo=f("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,i)=>{const{ownerState:a}=o;return[i.endIcon,i[`iconSize${n(a.size)}`]]}})(({ownerState:o})=>r({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},q(o))),R=d.forwardRef(function(i,a){const e=d.useContext(K),s=d.useContext(Q),l=A(e,i),c=F({props:l,name:"MuiButton"}),{children:b,color:x="primary",component:C="button",className:k,disabled:z=!1,disableElevation:E=!1,disableFocusRipple:y=!1,endIcon:I,focusVisibleClassName:P,fullWidth:M=!1,size:W="medium",startIcon:h,type:$,variant:j="text"}=c,N=U(c,X),p=r({},c,{color:x,component:C,disabled:z,disableElevation:E,disableFocusRipple:y,fullWidth:M,size:W,type:$,variant:j}),u=Y(p),L=h&&t.jsx(w,{className:u.startIcon,ownerState:p,children:h}),S=I&&t.jsx(oo,{className:u.endIcon,ownerState:p,children:I}),_=s||"";return t.jsxs(Z,r({ownerState:p,className:B(e.className,u.root,k,_),component:C,disabled:z,focusRipple:!y,focusVisibleClassName:B(u.focusVisible,P),ref:a,type:$},N,{classes:u,children:[L,b,S]}))}),io="_buttons_ekwbv_1",ao={buttons:io},no=()=>{const{genreId:o}=O();return t.jsxs("div",{children:[t.jsx(m,{variant:"h5",component:"div",gutterBottom:!0,children:`Genre ${o}`}),t.jsx(m,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),t.jsx(m,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."}),t.jsxs("div",{className:ao.buttons,children:[t.jsx(R,{variant:"outlined",children:"Edit"}),t.jsx(R,{variant:"outlined",color:"error",children:"Delete"})]})]})},so=d.memo(no);export{so as GenreDetails};