import{r as n,aa as x,j as o,B as y,T as h,e as j,s as v,f as b,a2 as E,g as f,ab as L,ac as N,ad as w,ae as F,N as P,a9 as k}from"./index-BoCyXbXs.js";import{z as d,u as S,C as g,T as C,P as T,t as B,s as z,a as A,L as D}from"./PasswordField-VlKx8U5z.js";import{B as U}from"./Button-Sll35Ou-.js";import"./OutlinedInput-CP2Zxp7_.js";import"./Select-B_FF06KA.js";const W="_form_knxh3_1",$="_form__control_knxh3_5",q="_form__error_knxh3_10",M="_form__button_knxh3_14",c={form:W,form__control:$,form__error:q,form__button:M},O=d.object({email:d.string().min(1,{message:"Email is required"}),password:d.string().min(1,{message:"Password is required"})}),R={email:"",password:""},V=({onSubmit:_,serverErrors:i})=>{var l;const r=n.useMemo(()=>x.mapServerErrorsToFieldErrors(i),[i]),{handleSubmit:u,formState:{errors:e},control:m}=S({defaultValues:R,resolver:B(O),mode:"onChange",errors:r});return o.jsxs(y,{component:"form",onSubmit:u(_),className:c.form,children:[o.jsx(g,{name:"email",control:m,render:({field:a,fieldState:s})=>{var t;return o.jsx(C,{...a,label:"Email",fullWidth:!0,error:s.invalid,helperText:(t=s.error)==null?void 0:t.message,className:c.form__control})}}),o.jsx(g,{name:"password",control:m,render:({field:a,fieldState:s})=>{var t;return o.jsx(T,{field:a,hasError:s.invalid,errorMessage:(t=s.error)==null?void 0:t.message,label:"Password"})}}),o.jsx(h,{component:"p",gutterBottom:!0,className:c.form__error,children:(l=e==null?void 0:e.root)==null?void 0:l.message}),o.jsx(U,{type:"submit",fullWidth:!0,variant:"contained",className:c.form__button,children:"Login"})]})},H=n.memo(V),I="_layout_covh8_1",G="_layout_open_covh8_12",J="_layout__card_covh8_17",p={layout:I,layout_open:G,layout__card:J},K=()=>{const _=j(v),i="/registration",r=b(),u=E(),e=f(z),m=f(A),l=n.useCallback(a=>{r(L(a)).then(s=>{s.type.endsWith("fulfilled")&&(r(N()),u("/anime"))})},[r]);return n.useEffect(()=>()=>{r(w())},[r]),o.jsxs("main",{className:`${p.layout} ${_?p.layout_open:""}`,children:[o.jsxs(F,{elevation:3,className:p.layout__card,children:[o.jsx(h,{variant:"h5",component:"h5",children:"Login"}),o.jsx(H,{onSubmit:l,serverErrors:m??[]}),o.jsxs(h,{component:"p",children:["Don't have an account?",o.jsx(D,{component:P,to:i,children:"Register"})]})]}),e&&o.jsx(k,{})]})},ro=n.memo(K);export{ro as LoginPage};
