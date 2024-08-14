"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[76],{7617:(P,f,c)=>{c.d(f,{$:()=>N});var l,h,E=c(756),v=c(8823),w=c(6409),n=function(r){return r.NoPermission="You do not have permission to perform this action.",r.NoAccount="No active account found with the given credentials",r.AuthenticationError="Incorrect authentication credentials.",r.ServerError="A server error occurred.",r.InvalidToken="Token is invalid or expired",r.HeaderError="Could not satisfy the request Accept header.",r.NoBlank="This field may not be blank.",r.EmailError="Enter a valid email address.",r.PasswordLength="This password is too short. It must contain at least 8 characters.",r.PasswordCommon="This password is too common.",r.PasswordNumeric="This password is entirely numeric.",r.NotUnique="User with this Email address already exists.",r}(n||{}),t=function(r){return r.NoPermission="You do not have permission to perform this action",r.NoAccount="Incorrect email or password",r.AuthenticationError="Incorrect authentication credentials",r.ServerError="A server error occurred",r.InvalidToken="Token is invalid or expired",r.HeaderError="Could not satisfy the request Accept header",r.NoBlank="This field is required",r.EmailError="Enter a valid email address",r.PasswordLength="Password must contain at least 8 characters",r.PasswordCommon="This password is too common",r.PasswordNumeric="Password can not be entirely numeric",r.DefaultError="Unknown server error",r.NotUnique="User with this email address already exists",r}(t||{});(l||(l={})).fromDto=function m(o){return{[n.NoPermission]:t.NoPermission,[n.NoAccount]:t.NoAccount,[n.AuthenticationError]:t.AuthenticationError,[n.ServerError]:t.ServerError,[n.HeaderError]:t.HeaderError,[n.InvalidToken]:t.InvalidToken,[n.NoBlank]:t.NoBlank,[n.EmailError]:t.EmailError,[n.PasswordLength]:t.PasswordLength,[n.PasswordCommon]:t.PasswordCommon,[n.PasswordNumeric]:t.PasswordNumeric,[n.NotUnique]:t.NotUnique}[o]??t.DefaultError},(h||(h={})).fromDto=function m(o){const e=new Map;o.forEach(i=>{let s=i.attr;e.has(s)||(null===i.attr&&(s="form"),e.set(s,[])),e.get(s)?.push(l.fromDto(i.detail))});const u=[];return e.forEach((i,s)=>{u.push({controlName:s,controlErrors:i})}),u};var p=c(7788);const a="serverError";let N=(()=>{class r{constructor(){this.clientErrorMessages={required:"This field is required",email:"Incorrect email address",strong:"Password is not strong enough",mustMatch:"Passwords must match"}}getControlErrorMessage(o){for(const e in this.clientErrorMessages)if(o.hasError(e))return this.clientErrorMessages[e];return o.hasError(a)?o.getError(a):null}getFormErrorMessage(o){return o.hasError(a)?o.getError(a):null}setFormErrors(o,e){const u=e?.find(i=>"form"===i.controlName);null!=u&&(o.setErrors({[a]:u.controlErrors[0]}),o.markAsTouched(),o.markAsDirty()),Object.keys(o.controls).forEach(i=>{const s=o.get(i);if(null==s||(s.markAsTouched(),s.markAsDirty(),null!=e?.find(k=>k.controlName===i)))return;const d=s.errors;if(null!=d){if(delete d[a],0===Object.keys(d).length)return void s.setErrors(null);s.setErrors(d)}})}parseError(o){return o instanceof w.yz&&o.error?.errors?(0,E.of)(h.fromDto(o.error.errors)):(0,v.$)(()=>new Error("An unknown error occurred"))}static#r=this.\u0275fac=function(e){return new(e||r)};static#o=this.\u0275prov=p.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);