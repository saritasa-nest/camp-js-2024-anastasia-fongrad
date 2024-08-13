"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[635],{9635:(N,f,n)=>{n.r(f),n.d(f,{RegistrationComponent:()=>$});var t=n(7788),F=n(1606),u=n(922),s=n(6482),h=n(8698),m=n(2221);let E=(()=>{class i{constructor(){this.dialogRef=(0,t.WQX)(s.CP)}static#t=this.\u0275fac=function(o){return new(o||i)};static#r=this.\u0275cmp=t.VBU({type:i,selectors:[["camp-root"]],standalone:!0,features:[t.aNF],decls:7,vars:0,consts:[["mat-dialog-title",""],["type","button","mat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(o,e){1&o&&(t.j41(0,"h2",0),t.EFF(1,"Registration successful"),t.k0s(),t.j41(2,"mat-dialog-content"),t.EFF(3," You have successfully registered in the system. Enter your details to log in.\n"),t.k0s(),t.j41(4,"mat-dialog-actions")(5,"button",1),t.EFF(6,"Ok"),t.k0s()())},dependencies:[m.Hl,m.$z,s.E7,s.tx,s.BI,s.Yi],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return i})();var g,a=n(7222),c=n(2073),p=n(4587),y=n(4232),b=n(7212),R=n(8556),C=n(9090),j=n(7236),v=n(6610);function M(i,l){return r=>{const o=r.get(i),e=r.get(l);return e?.errors&&!e?.errors.mustMatch?null:o?.value!==e?.value?(e?.setErrors({mustMatch:!0}),{mustMatch:!0}):(e?.setErrors(null),null)}}(g||(g={})).initialize=function l(r){return r.group({email:r.control("",[a.k0.required,a.k0.email]),firstName:r.control("",[a.k0.required]),lastName:r.control("",[a.k0.required]),password:r.control("",[a.k0.required]),confirmPassword:r.control("",[a.k0.required])},{validators:[(i="password",l=>{const r=l.get(i);if(!r)return null;const o=/\d/.test(r?.value),e=/[a-z]/.test(r?.value);return o&&e&&r?.value?.length>=8?(r?.setErrors(null),null):(r?.setErrors({strong:!0}),{strong:!0})}),M("password","confirmPassword")]});var i};let k=(()=>{class i{constructor(){this.registrationSuccess=new t.bkB,this.formValidationService=(0,t.WQX)(R.$),this.formBuilder=(0,t.WQX)(a.Qk),this.registrationService=(0,t.WQX)(y.L),this.destroyRef=(0,t.WQX)(t.abz),this.registrationErrorsSubject$=new C.m(1),this.registrationForm=g.initialize(this.formBuilder),this.registrationErrors$=this.registrationErrorsSubject$.asObservable()}ngOnInit(){this.initializeFormValues()}initializeFormValues(){Object.keys(this.registrationForm.controls).forEach(r=>{const o=this.registrationForm.get(r);o?.valueChanges.pipe((0,b.pQ)(this.destroyRef)).subscribe(()=>{o.setErrors(null)})})}getFieldError(r,o){return this.formValidationService.getErrorMessage(this.registrationForm,o,r)}onSubmit(){if(!this.registrationForm?.valid)return;const r=this.registrationForm.getRawValue();this.registrationService.register(r).pipe((0,j.M)(o=>{o?this.formValidationService.setFormErrors(this.registrationForm,o):this.registrationSuccess.emit(),this.registrationErrorsSubject$.next(o)})).subscribe()}static#t=this.\u0275fac=function(o){return new(o||i)};static#r=this.\u0275cmp=t.VBU({type:i,selectors:[["camp-registration-form"]],outputs:{registrationSuccess:"registrationSuccess"},standalone:!0,features:[t.aNF],decls:42,vars:20,consts:[[1,"registration__form",3,"ngSubmit","formGroup"],[1,"registration__group"],["appearance","fill"],["matInput","","id","firstName","type","text","formControlName","firstName"],["matInput","","id","lastName","type","text","formControlName","lastName"],["matInput","","id","email","type","email","formControlName","email"],["matInput","","id","password","type","password","formControlName","password"],["matInput","","id","confirmPassword","type","password","formControlName","confirmPassword"],[1,"registration__form-error"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(o,e){1&o&&(t.j41(0,"form",0),t.bIt("ngSubmit",function(){return e.onSubmit()}),t.j41(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),t.EFF(4,"First Name"),t.k0s(),t.nrm(5,"input",3),t.j41(6,"mat-error"),t.EFF(7),t.nI1(8,"async"),t.k0s()(),t.j41(9,"mat-form-field",2)(10,"mat-label"),t.EFF(11,"Last Name"),t.k0s(),t.nrm(12,"input",4),t.j41(13,"mat-error"),t.EFF(14),t.nI1(15,"async"),t.k0s()(),t.j41(16,"mat-form-field",2)(17,"mat-label"),t.EFF(18,"Email"),t.k0s(),t.nrm(19,"input",5),t.j41(20,"mat-error"),t.EFF(21),t.nI1(22,"async"),t.k0s()(),t.j41(23,"mat-form-field",2)(24,"mat-label"),t.EFF(25,"Password"),t.k0s(),t.nrm(26,"input",6),t.j41(27,"mat-error"),t.EFF(28),t.nI1(29,"async"),t.k0s()(),t.j41(30,"mat-form-field",2)(31,"mat-label"),t.EFF(32,"Repeat Password"),t.k0s(),t.nrm(33,"input",7),t.j41(34,"mat-error"),t.EFF(35),t.nI1(36,"async"),t.k0s()(),t.j41(37,"div",8),t.EFF(38),t.nI1(39,"async"),t.k0s(),t.j41(40,"button",9),t.EFF(41,"Register"),t.k0s()()()),2&o&&(t.Y8G("formGroup",e.registrationForm),t.R7$(7),t.JRh(e.getFieldError(t.bMT(8,8,e.registrationErrors$),"firstName")),t.R7$(7),t.JRh(e.getFieldError(t.bMT(15,10,e.registrationErrors$),"lastName")),t.R7$(7),t.JRh(e.getFieldError(t.bMT(22,12,e.registrationErrors$),"email")),t.R7$(7),t.JRh(e.getFieldError(t.bMT(29,14,e.registrationErrors$),"password")),t.R7$(7),t.JRh(e.getFieldError(t.bMT(36,16,e.registrationErrors$),"confirmPassword")),t.R7$(3),t.JRh(e.getFieldError(t.bMT(39,18,e.registrationErrors$),"form")),t.R7$(2),t.Y8G("disabled",!e.registrationForm.valid))},dependencies:[a.X1,a.qT,a.me,a.BC,a.cb,a.j4,a.JD,m.Hl,m.$z,c.RG,c.rl,c.nJ,c.TL,p.fS,p.fg,v.MD,v.Jj],styles:[".registration__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-8);max-width:700px}.registration__group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-2)}.form__file-input[_ngcontent-%COMP%]{width:100%;margin:0 0 var(--space-5) 0}.form__file-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.form__avatar[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 0 var(--space-5) 0;gap:var(--space-5);background-color:var(--surface-overlay);border-radius:10px;padding:var(--space-5)}.form__avatar-container[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;overflow:hidden}.form__avatar-img[_ngcontent-%COMP%]{max-width:100%;object-fit:cover}.registration__form-error[_ngcontent-%COMP%]{color:var(--error-color);font-size:var(--body-small);line-height:var(--body-small-line-height)}"],changeDetection:0})}return i})();const P=i=>[i];let $=(()=>{class i{constructor(){this.appRoutes=h.S,this.dialog=(0,t.WQX)(s.bZ),this.router=(0,t.WQX)(u.Ix)}onRegistrationSuccess(){this.dialog.open(E),this.router.navigate([h.S.Login])}static#t=this.\u0275fac=function(o){return new(o||i)};static#r=this.\u0275cmp=t.VBU({type:i,selectors:[["camp-registration"]],standalone:!0,features:[t.aNF],decls:13,vars:3,consts:[[1,"main"],[1,"main__auth","auth"],[1,"auth__container","container"],[1,"auth__content"],[1,"auth__registration-group"],[1,"auth__header"],[3,"registrationSuccess"],[1,"auth__switch"],[3,"routerLink"]],template:function(o,e){1&o&&(t.nrm(0,"camp-header"),t.j41(1,"main",0)(2,"section",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h1",5),t.EFF(7,"Registration"),t.k0s(),t.j41(8,"camp-registration-form",6),t.bIt("registrationSuccess",function(){return e.onRegistrationSuccess()}),t.k0s(),t.j41(9,"div",7),t.EFF(10," Already have an account? "),t.j41(11,"a",8),t.EFF(12,"Login"),t.k0s()()()()()()()),2&o&&(t.R7$(11),t.Y8G("routerLink",t.eq3(1,P,"/"+e.appRoutes.Login)))},dependencies:[F.l,k,u.iI,u.Wk],styles:[".auth__content[_ngcontent-%COMP%]{margin:var(--space-20) 0}.auth__header[_ngcontent-%COMP%]{font-size:var(--title);line-height:var(--title-line-height);font-weight:var(--text-semibold)}.auth__registration-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-8)}"],changeDetection:0})}return i})()}}]);